var movie = require('../model/movie');
module.exports.getmovies = function () {
    
    let movies = [];
    for (let i = 0; i < data.length; i++) {
        let Movie = new movie(data[i].movieCode,
            data[i].movieName,
            data[i].catalogCategory,
            data[i].genre,
            data[i].description,
            data[i].rating,
            data[i].imgUrl = getImageURL(data[i].movieCode)
               );
        
        movies.push(Movie);
        
    } // end of for
    return movies;
    
    // return data;
};
function getImageURL(movieCode)
{
    return '/images/'+movieCode+'.jpg';
};
/**
 *
 * @param movieCode
 * @returns {*}
 */
module.exports.getmovie = function (movieCode) {
    // console.info("from DB, Movie code :" + movieCode)
    for (var i = 0; i < data.length; i++) {
        // var movieCode = data.movieCode;
        // console.log("Data" + JSON.stringify(data[i].imgUrl));
        if (parseInt(data[i].movieCode) == movieCode) {
            // console.log("Inside if");
            let Movie = new movie(data[i].movieCode,
                data[i].movieName,
                data[i].catalogCategory,
                data[i].genre,
                data[i].description,
                data[i].rating,
                data[i].imgUrl = getImageURL(data[i].movieCode)
                )
            
            // console.log("movie"+JSON.stringify(Movie));
            
            return Movie;
        }
        // console.log("Data"+i);
        
    }
};
// Hard coded data
var data = [
    {
        movieCode: 1,
        movieName: "Lucifier",
        catalogCategory: "TV Series",
        genre: "Comedy",       
        description: "Lucifer is an American urban fantasy police procedural comedy-drama television series developed by Tom Kapinos that premiered on Fox on January 25, 2016.",
        rating: 3,
       // imgUrl:"/images/lucifer-poster-fox.jpg",
        
    },
    {
        movieCode: 2,
        movieName: "Friends",
        catalogCategory: "TV Series",
        genre: "Sitcom",
        description: "Friends is an American television sitcom, created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons.",
        rating: 4,
       // imgUrl :"/images/item1.jpg"
    },
    
    
    {
        movieCode: 3,
        movieName: "13 Reasons Why",
        catalogCategory: "TV Series",
        genre: "Teen Drama",
        description: "Reasons Why is an American teen drama web television series developed for Netflix by Brian ... 13 Reasons Why.",
        rating: 3,
       // imgUrl:"/images/13_reasons.jpg",
    },
    
    
    {
        movieCode: 4,
        movieName: "Ant-Man and the Wasp",
        catalogCategory: "Films",
        genre: "Fantasy/Science Fiction",
        description: "Ant-Man and the Wasp is a 2018 American superhero film based on the Marvel Comics characters Scott Lang / Ant-Man and Hope van Dyne / Wasp.",
        rating: 2,
      //  imgUrl:"/images/ant-man-and-the-wasp.png",
    },
    
    {
        movieCode: 5,
        movieName: "Deadly switch",
        catalogCategory: "Films",
        genre: "Thriller",
        description: "When a foreign exchange student becomes the target of a dangerous stalker, she accepts the invitation to move in with her roommate's family in their idyllic town.",
        rating: 4,
       // imgUrl: "/images/deadly_switch.jpg",
    },
    
    {
        movieCode: 6,
        movieName: "The monster",
        catalogCategory: "Films",
        genre: "Horror",
        description: "A divorced mother and her headstrong daughter must make an emergency late-night road trip to see the girl's father",
        rating: 3,
       // imgUrl:"/images/monster.jpg"
    }
];
var category = ["TV Series", "Films "];
