import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface ProjectsState {
	projects: Project[] | null;
}

const initialState: ProjectsState = {
	projects: null,
};

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload,
			};
		},
	},
});

export const {} = projectsSlice.actions;

export default projectsSlice.reducer;
