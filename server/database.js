var mongoose = require('mongoose');
var GroceryItem=require('./models/GroceryItem.js');
mongoose.connect('mongodb://localhost/grocery',function(){
    console.log('connected');
    mongoose.connection.db.dropDatabase();
    var items = [{
        name: "Ice Cream",
        id:1
    }, {
        name: "Waffles",
        id:1
    }, {
        name: "Candy",
        purchased: true,
        id:1
    }, {
        name: "Sharks",
        id:1
    }];
    items.forEach(function(item){
        new GroceryItem(item).save();
    });
});