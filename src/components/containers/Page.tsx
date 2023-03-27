import { FC, PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';

type Props = {
	title: string;
};

const Page: FC<PropsWithChildren<Props>> = ({ title = '', children }) => {
	return (
		<>
			<Helmet>
				<title>{`${title} | WIPIP`}</title>
			</Helmet>
			{children}
		</>
	);
};

export default Page;
