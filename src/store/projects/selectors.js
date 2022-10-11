import store from '../index';

export const projectsSelector = (store) => store.projects;

export const projectCountSelector = (store) => store.projects.length;
