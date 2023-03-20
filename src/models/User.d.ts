interface User {
	id: string;
	name: string;
	role: 'Manager' | 'Lead' | 'Admin';
	email: string;
	token: string;
}
