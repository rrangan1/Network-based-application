var express = require('express');
var router = express.Router();
var itemDb = require('../utility/ItemDB');
var UserDB = require('../utility/UserDB');

/* GET home page. */

router.get('/', function(req, res) {   
    
      res.render('index');
});

router.get('/categories', function(req, res) {
    var categories = getCategories();
    var itemData = itemDb.getmovies();
    //console.log(itemData +"bhkk");
    var data= {
        title:'Categories',
        path: req.url,
        categories: categories,
        items: itemData
    }
    //console.log(path);
   // console.log("request:",req);   
    res.render('categories',{data: data});
});

router.get('/index', function(req, res) {
  
    res.render('index');
});

router.get('/about', function(req, res) {
  
    res.render('about');
});
router.get('/contact', function(req, res) {
  
    res.render('contact');
});
router.get('/feedback', function(req, res) {
  
    res.render('feedback');
});

router.get('/categories/item/:movieCode', function(req, res) {
    var movieCode = req.params.movieCode;
    //console.log("Item Code:"+movieCode);   
    var item = itemDb.getmovie(movieCode);    
    if(item)
    {     
    //console.log(item);
    var data= {
        title:'Item',
        path: req.url,
        item: item
    }
  //  console.log(data);
    res.render('item', { data: data});
    }
    else 
    {
        res.redirect('/categories');
    }
});
router.get('/categories/item/', function(req, res) {
    res.redirect('/categories');
});




var categories = [];
let getCategories = function() {
    // get the category of each item
    var data = itemDb.getmovies();
    //console.log("data",data);
    data.forEach(function (Movie) {
        if(!categories.includes(Movie.catalogCategory)){
            categories.push(Movie.catalogCategory);
           // console.log(categories);
          //  categories.push(Movie.catalogCategory);
        }
        
    });
    return categories;
};
module.exports = router;