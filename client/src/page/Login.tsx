import FormWrapper from '../components/styles/form';

export default function Login() {
	return (
		<FormWrapper>
			<form action=''>
				<h1>Login</h1>
				<input type='text' placeholder='Username' />

				<input type='password' placeholder='Password' />
				{/* <input type='password' placeholder='Confirm Password' /> */}
				<button disabled>Login</button>

				<p>
					Not registered yet? <span> Create an account</span>
				</p>
			</form>
		</FormWrapper>
	);
}
