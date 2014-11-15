/**
 * Created by peterwilliamjohnson on 11/13/14.
 */
angular.module('nuggz').factory('FirebaseService', function($firebase) {
//
    var firebaseUser = new Firebase("http://nuggz.firebaseio.com/users");
    var userSync = $firebase(firebaseUser).$asArray();
    // firebase.com/' + userService.getUserId() + '/wishlists';
    var firebaseWishlists = new Firebase("https://nuggz.firebaseio.com/users/user:0001/wishlists");
    var WishlistsSync = $firebase(firebaseWishlists).$asObject();
//
    var firebaseObj = {};
    firebaseObj.getWishLists = function(){
        return WishlistsSync;
    };
    firebaseObj.createList = function(listName){
        firebaseWishlists.child(listName).set(listName);
    };
//
//
    //Set Methods
    firebaseObj.addItemToWishList = function(wishlistId, product) {
        wishListsSync = new Firebase("https://nuggz.firebaseio.com/users/user:0001/wishlists/" + wishlistId);
        var Wishlist = $firebase(wishListsSync).$asArray();
        Wishlist.$add(product);
    };

    return firebaseObj;
//
});