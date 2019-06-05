var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var itemDb = require('../utility/ItemDB');
var userItem = require('./../model/userItem');
var UserDB = require('../utility/UserDB');
var _userProfile = require('./../model/userProfile');
var userProfile;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/signin', function (req, res) {
    console.log("inside signin");
    if (req.session.theUser == undefined) {
        var users = UserDB.getUsers();
        var user = users[0];
        req.session.theUser = user;
        var item = itemDb.getmovie(2);
        var user_item = new userItem(item._movieCode, 4, true);
        var item2 = itemDb.getmovie(4);
        var user_item2 = new userItem(item2.movieCode, 2, false);

        userProfile = new _userProfile(user.userId, [user_item, user_item2])
        req.session.userProfile = userProfile;
        global.isSignIn = true;

    }

    res.redirect('myitems');


});
router.get('/myitems', function (req, res) {
    if (req.session.theUser === undefined) {
        res.redirect('/');
    } else {
        var item = itemDb.getmovies();
        user_Profile = userProfile.getInstance(req.session.theUser._userId);

        res.render('myitems', { theUser: req.session.theUser, userProfile: user_Profile, item: item });
    }
});



router.post('/:action', urlencodedParser, function (req, res) {

    var action = req.params.action;
    console.log(action);
    console.log(req.body);
    if (req.session.theUser === undefined || req.body.movieList === undefined || req.body.movieCode === undefined) {
        console.log("inside first if");
        res.redirect('/');
    }
    else {
        if (action == 'save') {
            console.log("inside action");
            var itemPresent = false;
            item = itemDb.getmovies();
            //console.log(req.session.userProfile);
            for (var i = 0; i < req.session.userProfile._userItems.length; i++) {
                if (req.body.movieCode == req.session.userProfile._userItems[i]._itemCode) {
                    console.log("item already in list");
                    itemPresent = true;
                    // console.log(itemPresent);

                    break;
                }
                console.log(itemPresent);
            }
            if (!itemPresent) {
                var userItemObj = new userItem(req.body.movieCode, 0, false);
                userProfile.addItem(userItemObj);
                req.session.userProfile = userProfile;
                console.log("SAVEItem UserProfile : ", userProfile);
            }
            res.render('myitems', { userProfile: req.session.userProfile, item: item });
        } else if (action == 'updateProfile') {
            var itemUpdate = false
            console.log("updateProfile");
            item = itemDb.getmovies();
            for (var i = 0; i < req.session.userProfile._userItems.length; i++) {

                if (req.body.movieCode == req.session.userProfile._userItems[i]._itemCode) {
                    itemUpdate = true;
                    req.session.theItem = req.session.userProfile._userItems[i];
                    break;
                }
            }
            console.log(itemUpdate);
            if (!itemUpdate) {
                res.redirect('myitems');
            }
            else{     
            res.render('feedback', { theItem: req.session.theItem, item: item });
            }
        } else if (action == 'updateRating') {
            console.log("inside updateRating");
            if (req.body.rating == undefined || (req.body.rating != '1 Star' && req.body.rating != '2 Star' && req.body.rating != '3 Star' && req.body.rating != '4 Star' && req.body.rating != '5 Star' && req.body.rating != '0 Star'))
            {
                res.redirect("myitems");
            
            } 
            else {
            
                item = itemDb.getmovies();               
                for (var i = 0; i < req.session.userProfile._userItems.length; i++) {
                  
                    if (req.body.movieCode == req.session.userProfile._userItems[i]._itemCode  && req.body.rating == '0 Star' ) 
                      { 
                      var userItemObj = new userItem(req.session.userProfile._userItems[i]._itemCode, 0, req.session.userProfile._userItems[i]._seenIt);
                      userProfile.updateItem(userItemObj)  ;
                      req.session.userProfile = userProfile;
                    }
                    else if(req.body.movieCode == req.session.userProfile._userItems[i]._itemCode ){
                        var userItemObj = new userItem(req.session.userProfile._userItems[i]._itemCode,req.body.rating.charAt(0), req.session.userProfile._userItems[i]._seenIt);
                        userProfile.updateItem(userItemObj);
                        req.session.userProfile = userProfile;  
                       
                    }
                }
            }
                res.render('myitems', { userProfile: req.session.userProfile });


            
        }
        else if (action == 'updateFlag') {
            console.log("inside UpdateFlag");
            console.log(req.body);
            console.log(req.session.userProfile);
            if (req.body.seenIt == undefined || (req.body.seenIt != 'true' && req.body.seenIt != 'false')) {
                res.redirect("myitems");
            }
            else {
                item = itemDb.getmovies();
                for (var i = 0; i < req.session.userProfile._userItems.length; i++) {
                    console.log("inside updateFlag");
                    if (req.body.movieCode == req.session.userProfile._userItems[i]._itemCode) {
                        // console.log("ssad",req.session.userProfile);
                        if (req.body.seenIt == "false") {
                            req.session.userProfile._userItems[i]._seenIt = false;
                        }
                        else if (req.body.seenIt == "true") {
                            req.session.userProfile._userItems[i]._seenIt = true;
                        }
                        console.log("ssad", req.session.userProfile);

                    }
                }
                res.render('myitems', { userProfile: req.session.userProfile });

            }
        } else if (action == 'deleteItem') {
            console.log("inside delete");
            console.log(req.body);
            console.log(req.session.userProfile);
            item = itemDb.getmovies();
            for (var i = 0; i < req.session.userProfile._userItems.length; i++) {
                console.log("inside delete1");
                if (req.body.movieCode == req.session.userProfile._userItems[i]._itemCode) {
                    var userItemObj = new userItem(req.session.userProfile._userItems[i]._itemCode,req.session.userProfile._userItems[i]._rating , req.session.userProfile._userItems[i]._seenIt);
                    userProfile.removeItem(userItemObj)  ;
                    req.session.userProfile = userProfile;
                  // req.session.userProfile._userItems.splice(i,1)
                    console.log("ssad", req.session.userProfile);


                }
            }
                res.render('myitems', { userProfile: req.session.userProfile });
        }

        }
    });



router.get('/signout', function (req, res) {
    console.log("inside signout");
    user_Profile.emptyProfile();
    req.session.theUser=undefined;
    req.session.userProfile = user_Profile;
    req.session.destroy();
    res.redirect('/');

});
var userItem = require('./../model/userItem');
module.exports = router;