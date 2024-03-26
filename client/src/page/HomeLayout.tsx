import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import GlobalStyles from '../components/styles/GlobalStyles.ts';
export default function HomeLayout() {
	return (
		<>
			<GlobalStyles />
			<Navbar />
			<Outlet />
		</>
	);
}
