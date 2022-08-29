import express from "express";
import cors from "cors";


const server = express();
server.use(express.json());
server.use(cors());

const tweets = [];
let users=[];

function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return true;
  }

server.post('/sign-up', (req, res) => {
    if(req.body.username !== undefined && req.body.avatar !== undefined) {

        if(isValidHttpUrl(req.body.avatar)){
            users.push(req.body);
            return res.send("ok");
        }
        res.status(400).send("Insira uma url valida");
    }
    res.status(400).send("Envie todos os campos necessários");
  });


server.post('/tweets', (req, res) => {
    if(req.body.username !== undefined && req.body.tweet !== undefined) {
        const currentUser = users.find((value)=> value.username  === req.body.username)
        tweets.push({
            username: req.body.username,
            avatar: currentUser.avatar,
            tweet: req.body.tweet
        })
        return res.send("ok");
    }

    res.status(400).send("Envie todos os campos necessários");
});

server.get('/tweets', (req, res) => {
    const sendTweets = []
    for(let i = tweets.length-1; i > tweets.length-11; i--){
        if(tweets[i]){
            sendTweets.push(tweets[i])
        }
    }
    res.send(sendTweets);
});





server.listen(5000, ()=>{console.log("listen on 5000")}); 
