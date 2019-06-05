
class user {
    
    constructor(userId, firstName, lastName, emailAddress, addressLine1, addressLine2, city, state,zipCode,country) {
        this._userId = userId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._emailAddress = emailAddress;        
        this._addressLine1 = addressLine1;
        this._addressLine2 = addressLine2;
        this._city = city;
        this._state = state;
        this._zipCode = zipCode;
        this._country = country;
    }
    
    
    
    /**
     *
     * Getter and Setters
     */
    
    get userId() {
        return this._userId;
    }
    
    set userId(value) {
        this._userId = value;
    }
    
    get firstName() {
        return this._firstName;
    }
    
    set firstName(value) {
        this._firstName = value;
    }
    
    get lastName() {
        return this._lastName;
    }
    
    set lastName(value) {
        this._lastName = value;
    }
    
    get emailAddress() {
        return this._emailAddress;
    }
    
    set emailAddress(value) {
        this._emailAddress = value;
    }
    
    get addressLine1() {
        return this._addressLine1;
    }
    
    set addressLine1(value) {
        this._addressLine1 = value;
    }
      
    get addressLine2() {
        return this._addressLine2;
    }
    
    set addressLine2(value) {
        this._addressLine2 = value;
    }
    
    get city() {
        return this._city;
    }
    
    set city(value) {
        this._city = value;
    }
    
    get state() {
        return this._state;
    }
    
    set state(value) {
        this._state = value;
    }
    get zipCode() {
        return this._zipCode;
    }
    
    set zipCode(value) {
        this._zipCode = value;
    }
    
    get country() {
        return this._country;
    }
    
    set country(value) {
        this._country = value;
    }
    
    
}
module.exports = user;