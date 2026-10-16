require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;

const githubData = {
  "login": "priyanshu-v3",
  "id": 206573334,
  "node_id": "U_kgDODFAPFg",
  "avatar_url": "https://avatars.githubusercontent.com/u/206573334?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/priyanshu-v3",
  "html_url": "https://github.com/priyanshu-v3",
  "followers_url": "https://api.github.com/users/priyanshu-v3/followers",
  "following_url": "https://api.github.com/users/priyanshu-v3/following{/other_user}",
  "gists_url": "https://api.github.com/users/priyanshu-v3/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/priyanshu-v3/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/priyanshu-v3/subscriptions",
  "organizations_url": "https://api.github.com/users/priyanshu-v3/orgs",
  "repos_url": "https://api.github.com/users/priyanshu-v3/repos",
  "events_url": "https://api.github.com/users/priyanshu-v3/events{/privacy}",
  "received_events_url": "https://api.github.com/users/priyanshu-v3/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Priyanshu Verma",
  "company": null,
  "blog": "",
  "location": "Lucknow",
  "email": null,
  "hireable": null,
  "bio": "STUDENT",
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-04-07T14:44:09Z",
  "updated_at": "2026-09-19T18:27:58Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter',(req,res) => {
    res.send('priyanshuzdotin')
})

app.get('/login',(req,res) => {
    res.send('<h1>Hello Please LogIn<h1>')
})

app.get('/githubdata',(req,res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});