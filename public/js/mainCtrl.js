/**
 * Created by peterwilliamjohnson on 11/4/14.
 */

angular.module("nuggz").controller("MainController", function($scope) {
    $scope.products = [
        {
            name: "King Llama in Space Sweater",
            description: "It's the sickest llama sweater that I could find in two minutes of searching.",
            price: 59.00,
            image: "http://cdn.shopify.com/s/files/1/0199/9492/products/kingLlama_mockup_1024x1024.png?v=1367707940",
            website: "http://belovedshirts.com/products/king-llama-sweatshirt"
        },
        {
            name: "Airboard Classic 130-X Silver",
            description: "Literally the fastest sled on the planet. Built to shred the sickter-gnar...",
            price: 510.00,
            image: "http://shop.fun-care.ch/files/artikelbilder/bild/816.png",
            website: "http://www.amazon.co.uk/airboard-classic-130-X-silver/dp/B00H2PN2J2"
        },
        {
            name: "Black Diamond Patrol Glove",
            description: "Black Diamond took the classic design of the workhorse leather glove, added its own touch, and came out with the Patrol Glove. This is a die-hard, full-bore winter glove for ski patrollers, lift workers, and the most hardy of winter athletes. On the outside, it's tough as nails thanks to abrasion-resistant nylon and and goat leather, and on the inside, it's a veritable bunker against the elements thanks to a waterproof breathable insert and plenty of toasty insulation.",
            price: 109.95,
            image: "http://www.backcountry.com/images/items/large/BLD/BLD3346/NA.jpg",
            website: "http://www.backcountry.com/black-diamond-patrol-glove?skid=BLD3346-NA-S"
        },
        {
            name: "Shark Raw Motorcycle Helmet",
            description: "This new Shark Raw Helmet bridges the gap between the traditional full faced helmet, and the half shell open face helmet. Call it a 3/4 helmet, or a hybrid motorcycle helmet, the Shark Raw has got style. Geared toward the urban cafe racer crowd, the Shark Raw combines style and up-leveled protection.",
            price: 247.64,
            image: "http://ecx.images-amazon.com/images/I/41z08t1HJSL._AA160_.jpg",
            website: "http://badasshelmetstore.com/shark-raw-helmet-review/"
        }
    ];
});