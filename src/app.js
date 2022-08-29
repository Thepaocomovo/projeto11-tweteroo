import express from "express";

const server = express();
server.use(express.json());

const tweets = [
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
    {
		username: "joao",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
];
let user;

server.post('/sign-up', (req, res) => {
    if(req.body !== undefined){
        if(req.body.username !== undefined && req.body.avatar !== undefined) {
            user = req.body
            return res.send("ok");
        }
    }
    
    res.send("not ok");
  });





server.get('/tweets', (req, res) => {
    res.send(tweets);
  });





console.log("it's")

server.listen(5000, ()=>{console.log("listen on 5000")}); 
