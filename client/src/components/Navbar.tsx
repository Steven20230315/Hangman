import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/NarvbarWrapper';

export default function Navbar() {
	return (
		<Wrapper>
			<div className='links'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/login'>Login</NavLink>
				<NavLink to='/register'>Register</NavLink>
				<NavLink to='/hangman'>Play</NavLink>
				<NavLink to='/categories'>Categories</NavLink>
			</div>
			<div className='user_icon'>
				This is user icon show user is logged in and provide logout option
			</div>
		</Wrapper>
	);
}
