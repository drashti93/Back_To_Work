var express = require('express');
var router = express.Router();
var Jobs = require('../models/jobs');
var Tutorials = require('../models/tutorials.js');
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extended: false});
const client = require('twilio')(
  "ACbfbf42625e183b95d318502234e3ff48",
  "498be32896004a6f2ed754fa5fd6f7e9"
);

router.get('/greeting', (req, res) => {
  console.log("Sending....")
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

router.post('/messages', (req, res) => {
  console.log("Post Sending....")
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: "+14703394042",
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

router.get('/getjobs', urlencodedParser, function(req, res){
    console.log("Inside backend get jobs")
var type = req.query.type;
console.log(type)
  Jobs.find({jtype: type}, function(err, jobs){
      if(err){
        res.status(400);
      }
      else {
        console.log(jobs)
        res.status(200).json({joblist: jobs})
      }
  })
})

router.get('/getTutorials', urlencodedParser, function(req, res){
    console.log("Inside backend get jobs")
    var type = req.query.type;
    console.log(type)
  Tutorials.find({jtype: type}, function(err, tutorials){
      if(err){
        res.status(400);
      }
      else {
        console.log(tutorials)
        res.status(200).json({tutorial_list: tutorials})
      }
  })
})

router.post('/submitJob', urlencodedParser, function(req, res){
    var category = req.body.category;
    var title = req.body.title;
    var desc = req.body.desc;
    var url = req.body.url;
    var new_job = new Jobs({
        jtype: category,
        title: title,
        description: desc,
        url: url
    })
  new_job.save().then((job) => {
    res.status(200).json({});
  }), (err) => {
    res.status(400).json({});
  }
})

router.post('/submitTutorial', urlencodedParser, function(req, res){
    var category = req.body.category;
    var title = req.body.title;
    var url = req.body.url;
    var new_tutorial = new Tutorials({
        jtype: category,
        title: title,
        url: url
    })
  new_tutorial.save().then((job) => {
    res.status(200).json({});
  }), (err) => {
    res.status(400).json({});
  }
})

module.exports = router;