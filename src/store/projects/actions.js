import { CREATE_PROJECT, EDIT_PROJECT, REMOVE_PROJECT } from './types';

export const createProject = ({ project }) => {
  return {
    type: CREATE_PROJECT,
    project,
  };
};

export const removeProject = ({ id }) => {
  return {
    type: REMOVE_PROJECT,
    id,
  };
};

export const editProject = ({ project }) => {
  return {
    type: EDIT_PROJECT,
    project,
  };
};
