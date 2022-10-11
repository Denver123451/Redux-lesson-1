import { CREATE_PROJECT, EDIT_PROJECT, REMOVE_PROJECT } from './types';

const projects = (
  store = localStorage.projects ? JSON.parse(localStorage.projects) : [],
  action
) => {
  if (action.type === CREATE_PROJECT) {
    const updatedProjects = [...store, action.project];

    localStorage.projects = JSON.stringify(updatedProjects);

    return updatedProjects;
  }

  if (action.type === REMOVE_PROJECT) {
    const { id } = action;
    const updatedProjects = store.filter((project) => project.id !== id);

    localStorage.projects = JSON.stringify(updatedProjects);

    return updatedProjects;
  }

  if (action.type === EDIT_PROJECT) {
    const { id, description, name } = action.project;
    const index = store.findIndex((project) => project.id === id);
    const updatedProjects = [
      ...store.slice(0, index),
      { id, description, name },
      ...store.slice(index + 1),
    ];
    localStorage.projects = JSON.stringify(updatedProjects);
    return updatedProjects;
  }

  return store;
};

export default projects;
