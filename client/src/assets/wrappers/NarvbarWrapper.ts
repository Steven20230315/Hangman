import styled from 'styled-components';

const NavbarWrapper = styled.div`
  min-height: 35px;
	max-height: 35px;
	background-color: black;
	color: white;
	display: flex;
	justify-content: space-around;
	align-items: center;

	.links {
		display: flex;
		gap: 2rem;
		font-size: 1.5rem;
		> a {
			/* text-decoration: none; */
			color: white;
		}
	}
	.user_icon {
		max-width: 490px;
		text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
	}
`;

export default NavbarWrapper;
