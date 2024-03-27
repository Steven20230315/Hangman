import axios from 'axios';

import { type ActionFunction, type Params } from 'react-router-dom';
type WordListAction = {
	params: Params<string>;
	request: Request;
};

export const requestWordListAction: ActionFunction = async ({
	params,
	request,
}: WordListAction) => {
	console.log('----------------------------------------');
	const hasParams = Object.keys(params).length > 0;
	console.log(`This action has params: ${hasParams} `);
	console.log(params);
	console.log('----------------------------------------');
	const hasRequest = !!request;
	console.log(`This action has request: ${hasRequest} `);
	console.log(request);
	console.log('----------------------------------------');
	const formData = await request.formData();
	const hasFormData = !!formData;
	console.log(`This request has formData: ${hasFormData} `);
	console.log('----------------------------------------');

	const intent = formData.get('intent');
	const hasIntent = !!intent;
	console.log(`This request has intent: ${hasIntent} `);
	console.log(intent);
	console.log('----------------------------------------');
	try {
		const response = await axios.post(`/test/${intent}`, formData);
		console.log('This is response');
		console.log(response);
		console.log(response.data.message);
		console.log(response.data.words);
		return response.data.words;
	} catch (error: unknown) {
		if (axios.isAxiosError(error) && error.response) {
			console.log(error.response.data);
			console.log(error.response.status);
			console.log(error.response.headers);
		} else {
			console.log(error.message);
		}
		return error;
	} finally {
		console.log("Don't know ");
	}
};

// export const requestWordListAction: ActionFunction = async ({
// 	params,
// 	request,
// }: WordListAction) => {
// 	console.log('This is params');
// 	console.log(params);
// 	console.log('This is request');
// 	console.log(request);
// 	// formData() return a promise that resolves with a `FormData` object.
// 	const formData = await request.formData();
// 	// convert formData from `FormData` object to `Object`
// 	const data = Object.fromEntries(formData);
// 	//Do not use template literals to represent an object. The default return value is [object Object].
// 	// You can use JSON.stringify to convert it to a string.
// 	console.log(data);
// 	// There are two ways to get the value of a form field:
// 	// The first way is to use the formData.get() method, which returns a string or null.
// 	// 1.
// 	// const intent1 =formData.get('intent');
// 	// 2.
// 	const intent = data.intent;
// 	console.log(intent);
// 	console.log(params);
// 	// Here, the first approach is more efficient. Because all we want from this request is the intent value.

// 	try {
// 		// from server side, the request url is /test/{intent}. On the client side, the request url is http://localhost:5173/categories/{intent}
// 		const response = await axios.post('/test/nature', data);
// 		console.log(response.data);
// 		return response;
// 	} catch (error) {
// 		console.error(error);
// 		return error;
// 	}

// 	return null;
// };
