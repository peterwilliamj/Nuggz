/**
 * Created by peterwilliamjohnson on 11/11/14.
 */

angular.module("nuggz").controller("homeCtrl", function($scope, FirebaseService){
$scope.lists = FirebaseService.getWishLists();

    $scope.saveProduct = function(){
        //select wishlist
       FirebaseService.addItemToWishList('christmas2014', this.product);
    };
    $scope.createNewList = function(listName){
//        console.log("Whatever");
//        $scope.lists.push(listName);
        FirebaseService.createList(listName);
    };
});