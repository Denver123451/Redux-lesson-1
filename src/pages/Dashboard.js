import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  Box,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  Card,
  CardHeader,
  CardActions,
} from '@mui/material';
import { Formik, Form } from 'formik';
import Input from '../components/input';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProject,
  editProject,
  removeProject,
} from '../store/projects/actions';
import { nanoid } from 'nanoid';
import { projectsSelector } from '../store/projects/selectors';
import { Delete, Edit } from '@mui/icons-material';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState({
    name: '',
    description: '',
    id: null,
    mode: 'create',
  });
  const dispatch = useDispatch();
  const projects = useSelector(projectsSelector);

  function handleClose() {
    setIsOpen(false);

    setItem({
      name: '',
      description: '',
      id: null,
      mode: 'create',
    });
  }

  return (
    <div className="">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '15px',
        }}
      >
        <Typography variant="h3" component="h1">
          My ToDo
        </Typography>

        <Button variant="contained" onClick={() => setIsOpen(true)}>
          Create project
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          backgroundColor: '#caf0f8',
          padding: '10px',
        }}
      >
        {projects.map(({ id, name, description }) => {
          return (
            <Box key={id} width={250}>
              <Card>
                <CardHeader title={name} subheader={description} />
                <CardActions>
                  <Edit
                    onClick={() => {
                      setIsOpen(true);
                      setItem({
                        name,
                        description,
                        id,
                        mode: 'edit',
                      });
                    }}
                  />
                  <Delete
                    onClick={() => {
                      dispatch(removeProject({ id }));
                    }}
                  />
                </CardActions>
              </Card>
            </Box>
          );
        })}
      </Box>

      <Dialog fullWidth open={isOpen} onClose={handleClose}>
        <DialogTitle>Create project</DialogTitle>
        <DialogContent>
          <Formik
            validationSchema={yup.object().shape({
              name: yup.string().label('Name').min(4).max(20).required(),
              description: yup
                .string()
                .label('Description')
                .min(10)
                .max(50)
                .required(),
            })}
            enableReinitialize
            initialValues={{ name: item.name, description: item.description }}
            onSubmit={({ name, description }, { resetForm }) => {
              if (item.mode === 'create') {
                dispatch(
                  createProject({
                    project: {
                      name,
                      description,
                      id: nanoid(),
                    },
                  })
                );
              } else {
                dispatch(
                  editProject({
                    project: {
                      name,
                      description,
                      id: item.id,
                    },
                  })
                );
              }

              setItem({
                name: '',
                description: '',
                id: null,
                mode: 'create',
              });
              resetForm();
              handleClose();
            }}
          >
            <Form>
              <Box sx={{ paddingTop: '15px' }}>
                <Stack direction="column" spacing={2}>
                  <FormControl fullWidth>
                    <Input name="name" label="Name" />
                  </FormControl>

                  <FormControl fullWidth>
                    <Input name="description" label="Description" />
                  </FormControl>
                  <Button type="submit" variant="contained">
                    {item.mode === 'create' ? 'Create' : 'Edit'}
                  </Button>
                </Stack>
              </Box>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
