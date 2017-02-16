// Your server code here...
import express from 'express';

const PORT = 3001;

const app = express();

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const contacts = [
  {
    _id: 1,
    name: 'Dale Cooper',
    occupation: 'FBI Agent',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg'
  },
  {
    _id: 2,
    name: 'Spike Spiegel',
    occupation: 'Bounty Hunter',
    avatar: 'http://vignette4.wikia.nocookie.net/deadliestfiction/images/d/de/Spike_Spiegel_by_aleztron.jpg/revision/latest?cb=20130920231337'
  },
  {
    _id: 3,
    name: 'Wirt',
    occupation: 'adventurer',
    avatar: 'http://66.media.tumblr.com/5ea59634756e3d7c162da2ef80655a39/tumblr_nvasf1WvQ61ufbniio1_400.jpg'
  },
  {
    _id: 4,
    name: 'Michael Myers',
    occupation: 'Loving little brother',
    avatar: 'http://vignette2.wikia.nocookie.net/villains/images/e/e3/MMH.jpg/revision/latest?cb=20150810215746'
  },
  {
    _id: 5,
    name: 'Dana Scully',
    occupation: 'FBI Agent',
    avatar: 'https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg'
  },
  {
    name: 'Beyonce',
    occupation: 'Singer',
    avatar: 'http://media1.policymic.com/site/article-items/27957/2_gif.gif',
    _id: 6
  },
  {
    name: 'Henry Cavill',
    occupation: 'Actor',
    avatar: 'https://s-media-cache-ak0.pinimg.com/originals/c1/2c/e6/c12ce6d7e4b9987024996bc5c8dbc82c.jpg',
    _id: 7
  },
  {
    name: 'Katya Zamolodchikova',
    occupation: 'Drag Queen',
    avatar: 'https://static1.squarespace.com/static/547384c2e4b080be34ce3327/t/547d264ce4b07da997f79d14/1417487950751/Katya_2014_SMJ_08.jpg?format=2500w',
    _id: 8
  },
  {
    name: 'Carrie Fisher',
    occupation: 'Bad ass and Space Twin 1',
    avatar: 'https://si.wsj.net/public/resources/images/BN-LN957_STARWA_12S_20151203125155.jpg',
    _id: 9
  },
  {
    name: 'Mark Hamel',
    occupation: 'Actor and Space Twin 2',
    avatar: 'https://www.sideshowtoy.com/wp-content/uploads/2015/09/MarkHamillGuardiansPremiere_article_story_large.jpg',
    _id: 10
  }
];

app.get('/contacts', (request, response) => {
  return response.json(contacts);
});

// app.get('/*', (request, response) => {});

app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
