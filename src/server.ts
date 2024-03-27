import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import {
	reqWithCustomMessage,
} from './middleware/requestInfoMiddleware.js';
import morgan from 'morgan';
import {
	requestRouteInfoMiddleware,
	requestInfoMiddleware,
} from './middleware/requestInfoMiddleware.js';
import { selectWordsByCategory }  from './utilities/selectWordsByCategory.js';
import {type Categories} from './data/wordListCategory.js';

//For env File
dotenv.config();

const app: Application = express();


// middleware
app.use(express.json());
// app.use(requestInfoMiddleware);
// app.use(requestRouteInfoMiddleware);
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

const port = process.env.PORT || 3300;

app.get('/api', (req: reqWithCustomMessage, res: Response) => {
	res.json({ message: 'This is from /api route' });
	console.log(req);
});

app.get('/test', (req: reqWithCustomMessage, res: Response) => {
	res.json({ message: 'This is from /test route' });
	console.log(req);
});

// app.post('/test', (req: Request, res: Response) => {
// 	res.json({ message: 'This is from get /test route' });
// 	console.log(`this is req ${req}`);
// 	console.log(`this is req.body ${req.body}`);
// 	console.log(`this is req.params ${req.params}`);
// });

app.post('/test', (req: reqWithCustomMessage, res: Response) => {
	res.json({ message: 'This is from post /test route' }); // Corrected message to post
	console.log(`this is req.body: ${JSON.stringify(req.body, null, 2)}`);
	console.log(`this is req.params: ${JSON.stringify(req.params, null, 2)}`);
	console.log(`this is req.query: ${JSON.stringify(req.query, null, 2)}`);
	console.log(`this is req.header: ${JSON.stringify(req.header, null, 2)}`);
	console.log(`this is req.body: ${JSON.stringify(req.body, null, 2)}`);
});

app.post('/test/:intent', (req: reqWithCustomMessage, res: Response) => {
	// res.json({ message: `${req.customMessage}` }); // Corrected message
	const { intent } = req.params;
	// res.json({ message: `This is from post /test route with intent: ${intent}` });
	// res.json({ message: `${req.customMessage} with intent: ${intent}` });
	const words = selectWordsByCategory( intent as Categories );
	res.json({ message: `This is from post /test route with intent: ${intent}`, words });
	console.log(`Received intent: ${intent}`);
});
app.post('/test/nature', (req: reqWithCustomMessage, res: Response) => {
	// res.json({ message: `${req.customMessage}` }); // Corrected message
	const { intent } = req.params;
	res.json({ message: `This is from post /test route with intent: ${intent}` });
	console.log(`Received intent: ${intent}`);
});

app.get('/api/test', (req: reqWithCustomMessage, res: Response) => {
	res.json({ message: 'This is from /api/test route' });

	console.log(req);
});

// app.get('/categories', (req: Request, res: Response) => {
// 	res.json({ message: 'This is from /categories route' });
// 	console.log(req);
// });

app.get('*', (req: Request, res: Response) => {
	res.json({ message: 'This is from * route' });
	console.log(req);
});

app.listen(port, () => {
	console.log(`Server is Fire at http://localhost:${port}`);
});
