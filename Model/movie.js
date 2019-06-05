
class movie {
    
    constructor(movieCode, movieName, catalogCategory, genre, description, rating, imageURL) {
        this._movieCode = movieCode;
        this._movieName = movieName;
        this._catalogCategory = catalogCategory;
        this._genre = genre;        
        this._description = description;
        this._rating = rating;
        this._imageURL = imageURL;
    }
    
    
    /**
     *
     * Getter and Setters
     */
    
    get movieCode() {
        return this._movieCode;
    }
    
    set movieCode(value) {
        this._movieCode = value;
    }
    
    get movieName() {
        return this._movieName;
    }
    
    set movieName(value) {
        this._movieName = value;
    }
    
    get catalogCategory() {
        return this._catalogCategory;
    }
    
    set catalogCategory(value) {
        this._catalogCategory = value;
    }
    
    get genre() {
        return this._genre;
    }
    
    set genre(value) {
        this._genre = value;
    }
    
    get description() {
        return this._description;
    }
    
    set description(value) {
        this._description = value;
    }
    
    get rating() {
        return this._rating;
    }
    
    set rating(value) {
        this._rating = value;
    }
    
    get imageURL() {
        return this._imageURL;
    }
    
    set imageURL(value) {
        this._imageURL = value;
    }
    
    
}
module.exports = movie;