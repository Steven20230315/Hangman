import Wrapper from '../components/styles/categories.styled';
import { Form, useActionData } from 'react-router-dom';
import ActionButton from '../components/ActionButton';

const categories = [
	'animal',
	'body',
	'fruit',
	'science',
	'emotion',
	'nature',
	'color',
	'travel',
	'random',
];

export default function Categories () {
	const actionData = useActionData();
	
	console.log('This is from Categories page');
	console.log(actionData);
	return (
		<Wrapper>
			<Form method='post'>
				<input type='text' name='title' defaultValue='This is title' />
				<input
					type='text'
					name='description'
					defaultValue='This is description'
				/>
				{/* {categories.map( category )=>	<ActionButton value={category}/>} */}
				{categories.map((category) => (
					<ActionButton key={category} value={category} />
				))}
			</Form>
		</Wrapper>
	);
}
