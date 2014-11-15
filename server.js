/**
 * Created by peterwilliamjohnson on 11/4/14.
 */
var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://nuggz.firebaseio.com/");
dataRef.set("I'm writing data", function(error) {
    if (error) {
        alert("Data could not be saved." + error);
    } else {
        alert("Data saved successfully.");
    }
});