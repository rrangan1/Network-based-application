
class userProfile {

    constructor(userId, userItems) {
        this._userId = userId;
        this._userItems = userItems;

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

    getItems() {
        return this._userItems;

    };

    addItem(userItem) {
        this._userItems.push(userItem);
    };


    getInstance(userID) {
        if (this._userId == userID) {
            var user_Profile = new userProfile(userID, this._userItems);
            return user_Profile;
        }
    }

    updateItem(userItem) {
        for (var i = 0; i < this._userItems.length; i++) {
            if (userItem._itemCode == this._userItems[i]._itemCode) {
                this._userItems[i] = userItem;

            }
        }
        return this._userItems;

    }
    removeItem(userItem) {

        for (var i = 0; i < this._userItems.length; i++) {
            if (userItem._itemCode == this._userItems[i]._itemCode) {
                this._userItems.splice(i, 1);

            }
        }
        return this._userItems;
    }

    emptyProfile()
    {
       return this._userItems=[];
    }
}
module.exports = userProfile;