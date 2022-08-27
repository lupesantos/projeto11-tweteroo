import express from 'express';
import cors from 'cors';

const server = express();

const tweets = [];

const usuarios = [];

server.use(express.json());
server.use(cors());

server.post('/sign-up', (req, res) => {
	usuarios.push(req.body);
	res.send('ok');
});

server.get('/tweets', (req, res) => {
	let tweetsGet = [];

	if (tweets.length > 10) {
		tweetsGet = tweets.slice(tweets.length - 10);
	} else {
		tweetsGet = tweets.slice(0);
	}

	tweetsGet.map((value) => {
		const usuarioFiltrado = usuarios.find(
			(item) => item.username === value.username
		);
		value.avatar = usuarioFiltrado.avatar;
	});
	res.send(tweetsGet);
});

server.post('/tweets', (req, res) => {
	const novoTweet = req.body;

	tweets.push(novoTweet);
	//res.send(novoTweet);
	res.send('Ok');
});

server.listen(5000);
