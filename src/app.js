import express from "express";

const server = express();
server.use(express.json());

const tweets = [];
let user;

server.post('/sign-up', (req, res) => {
    if(req.body.username !== undefined && req.body.avatar !== undefined) {
        user = req.body
        return res.send("ok");
    }
    res.send("not ok");
  });


server.post('/tweets', (req, res) => {
if(req.body.username !== undefined && req.body.tweet !== undefined) {
    tweets.push({
        username: req.body.username,
        avatar: user.avatar,
        tweet: req.body.tweet
    })
    return res.send("ok");
}

res.send("not ok");
});

server.get('/tweets', (req, res) => {
    const sendTweets = []
    for(let i = tweets.length-1; i > tweets.length-11; i--){
        if(tweets[i]){
            sendTweets.push(tweets[i])
        }
    }
    sendTweets.reverse()
    res.send(sendTweets);
  });





server.listen(5000, ()=>{console.log("listen on 5000")}); 
