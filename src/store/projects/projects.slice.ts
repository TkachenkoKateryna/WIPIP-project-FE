import { createSlice } from '@reduxjs/toolkit';
import {
	pendingAction,
	rejectedAction,
	successAction,
} from '../../helpers/reducerFunctions';
import { fetchAllProjects } from './projects.actions';

export type ProjectsState = {
	data: Project[];
	loading: boolean;
	loaded: boolean;
	error: any;
};

const initialState: ProjectsState = {
	data: [],
	loading: false,
	loaded: false,
	error: null,
};

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllProjects.pending, pendingAction);
		builder.addCase(fetchAllProjects.fulfilled, successAction);
		builder.addCase(fetchAllProjects.rejected, rejectedAction);
	},
});

export default projectsSlice.reducer;
