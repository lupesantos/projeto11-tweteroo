import express from 'express';

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	console.log('deu bom');
	res.send('deu bom 2');
});

server.listen(5000);
