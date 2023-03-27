import {
	Paper,
	styled,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { useEffect } from 'react';

import Page from '../../components/containers/Page';
import Loader from '../../components/shared/Loader';
import { Status, StatusesConfig } from '../../constants/Statuses';
import { fetchAllProjects } from '../../store/projects/projects.actions';
import { getAllProjects } from '../../store/projects/projects.selectors';
import { useDispatch, useSelector } from '../../store/store';

const Projects = () => {
	const dispatch = useDispatch();
	const { data, loading, loaded } = useSelector(getAllProjects);

	useEffect(() => {
		dispatch(fetchAllProjects());
	}, []);

	return (
		<Page title={'Projects'}>
			{loading ? (
				<Loader />
			) : (
				loaded && (
					<Root>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>Project</TableCell>
										<TableCell>Description</TableCell>
										<TableCell>Status</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data.map((project) => (
										<TableRow
											key={project.id}
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
											<TableCell component='th' scope='row'>
												{project.title}
											</TableCell>
											<TableCell>{project.description}</TableCell>
											<TableCell>
												{StatusesConfig[project.status as Status].label}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Root>
				)
			)}
		</Page>
	);
};

export default Projects;

const Root = styled('div')(({ theme }) => ({
	margin: theme.spacing(2, 4, 2, 4),
}));
