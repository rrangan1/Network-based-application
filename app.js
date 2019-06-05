
const express = require('express');
var router = express.Router();
const path = require('path');
const session = require('express-session');

var catalogController = require('./controller/catalogController');
var ProfileController = require('./controller/ProfileController');
var app = express();
global.action=["save","updateProfile","updateRating","updateFlag","signout"];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/images')));

app.use(session({secret: "user",
resave:false,
saveUninitialized: true
}));

app.use(function(req, res, next){
    if(req.session.theUser === undefined){
        global.isSignIn = false;
    }else{
        global.isSignIn = true;
        global.theUser = req.session.theUser;
       
    }
    next();
})


router.get('/about', function(req, res) {
 
    res.render('about');
});
router.get('/contact', function(req, res) {
  
    res.render('contact');
});


app.use('/', catalogController);
app.use('/userprofile', ProfileController);

app.get('/*', function(req,res){
    res.render('error');
});

app.listen(8080);
module.exports = app;
module.exports = router;