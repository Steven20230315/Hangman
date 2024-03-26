import FormWrapper from '../components/styles/form';

export default function Register() {
	return (
		<FormWrapper>
			<form action=''>
				<h1>Register</h1>
				<input type='text' placeholder='Username' />

				<input type='password' placeholder='Password' />
				<input type='password' placeholder='Confirm Password' />
				<button disabled>Register</button>
			</form>
		</FormWrapper>
	);
}
