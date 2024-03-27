import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import GlobalStyles from '../components/styles/GlobalStyles.ts';
export default function Landing() {
	return (
		<>
			<GlobalStyles />
			<Navbar />
			<div className='main'>
				<Outlet />
			</div>
		</>
	);
}
