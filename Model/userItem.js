
class userItem {
    
    constructor(itemCode, rating, seenIt) {
        this._itemCode = itemCode;
        this._rating = rating;
        this._seenIt = seenIt;
    }
    
    
    /**
     *
     * Getter and Setters
     */
    
    get itemCode() {
        return this._item;
    }
    
    set itemCode(value) {
        this._item = value;
    }
    
  
    get rating() {
        return this._rating;
    }
    
    set rating(value) {
        this._rating = value;
    }
    
    get seenIt() {
        return this._seenIt;
    }
    
    set seenIt(value) {
        this._seenIt = value;
    }
    
    
}
module.exports = userItem;