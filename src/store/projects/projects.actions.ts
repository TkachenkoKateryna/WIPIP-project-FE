import { createAsyncThunk } from '@reduxjs/toolkit';

import agent from '../../api/agent';

export const fetchAllProjects = createAsyncThunk<Project[]>(
	'projects/fetch',
	async () => {
		return await agent.Projects.fetchAll();
	}
);
