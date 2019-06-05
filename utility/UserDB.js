var user = require('../model/user');
var userProfile =require('../model/userProfile');

module.exports.getUsers = function () {

    var users = [];
    for (let i = 0; i < data.length; i++) {
        var User = new user(data[i].userId,
            data[i].firstName,
            data[i].lastName,
            data[i].emailAddress,
            data[i].addressLine1,
            data[i].addressLine2,
            data[i].city,
            data[i].state,
            data[i].zipCode,
            data[i].country
        );

        users.push(User);

    } // end of for
    return users;

    // return data;
};
module.exports.getUserProfiles = function () {
    var userProfiles =[];
    for (let i = 0; i < userProfileData.length; i++) {
      {
           var UserProfile =new userProfile(userProfileData[i].userId, userProfileData[i].userItems);
           userProfiles.push(UserProfile);
       }
       
    } 
    return userProfiles;
};
module.exports.getUserProfile = function (userId) {
    for (let i = 0; i < userProfileData.length; i++) {
       if(userProfileData[i].userId==userId)
       {
           var UserProfile =new userProfile(userProfileData[i].userId, userProfileData[i].userItems);
           return UserProfile;
       }
       
    } 
};
/**
 *
 * @param userId
 * @returns {*}
 */
module.exports.getUser = function (userId) {
    // console.info("from DB, User code :" + userId)
    for (var i = 0; i < data.length; i++) {
        // var userId = data.userId;
        // console.log("Data" + JSON.stringify(data[i].imgUrl));
        if (parseInt(data[i].userId) == userId) {
            // console.log("Inside if");
            let user = new user(data[i].userId,
                data[i].firstName,
                data[i].lastName,
                data[i].emailAddress,
                data[i].addressLine1,
                data[i].addressLine2,
                data[i].city,
                data[i].state,
                data[i].zipCode,
                data[i].country
            )

            // console.log("user" + JSON.stringify(user));

            return user;
        }
        // console.log("Data"+i);

    }
};
//Hard coded data
var data = [
    {
        userId: 1,
        firstName: "john",
        lastName: "williams",
        emailAddress: "johnwill@gmail.com",
        addressLine1: "University Terrace Drive",
        addressLine2: "Apt# A",
        city: "Charlotte",
        state: "NC",
        zipCode: "28262",
        country: "United States"

    }

];

var userProfileData =[
    {
        userId :1,
        userItems :[{
            _itemCode : 2,
            _rating : 4,
            _seenIt : true
        },
        {
            _itemCode : 4,
            _rating : 2,
            _seenIt : false
        }
    ]
}

   
];

