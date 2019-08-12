var express = require('express');
var router = express.Router();
var Jobs = require('../models/jobs');
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extended: false});


router.get('/getjobs', urlencodedParser, function(req, res){
    var type = req.body.type;
  Jobs.find({type: type}, function(err, jobs){
      if(err){
        res.status(400);
      }
      else {
        res.status(200).json({joblist: jobs})
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

module.exports = router;