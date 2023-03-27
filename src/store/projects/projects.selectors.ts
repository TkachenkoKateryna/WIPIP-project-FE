import { RootState } from '../store';

export const getAllProjects = (state: RootState) => state.projectsReducer;
export const getProjectsLoading = (state: RootState) =>
	state.projectsReducer.loading;
export const getProjectsLoaded = (state: RootState) =>
	state.projectsReducer.loaded;
