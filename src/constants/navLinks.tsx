import { ReactNode } from 'react';

import { UserRole } from './UserRole';
import Path from '../router/paths';
import { Equalizer, ElectricBolt, Group } from '@mui/icons-material';

export type NavLink = {
	to: string;
	title: string;
	icon: ReactNode;
	policy?: UserRole;
};

export const navLinks: NavLink[] = [
	{
		to: Path.projects,
		title: 'Projects',
		icon: <Equalizer />,
	},
	{
		to: Path.employees,
		title: 'Employees',
		icon: <ElectricBolt />,
	},
	{
		to: Path.stakeholders,
		title: 'Stakeholders',
		icon: <Group />,
	},
];
