export enum Status {
	Draft,
	Approved,
	Pending,
	Rejected,
}

export const StatusesConfig: {
	[key in Status]: {
		label: string;
	};
} = {
	[Status.Draft]: {
		label: 'Draft',
	},
	[Status.Approved]: {
		label: 'Approved',
	},
	[Status.Pending]: {
		label: 'Pending',
	},
	[Status.Rejected]: {
		label: 'Rejected',
	},
};
