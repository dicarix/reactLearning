var React = require('react');
var ReactDOM = require('react-dom');
console.log('hello from jsx!');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var groceryItemsStore=require('./stores/GroceryItemStore.jsx');

var initial = groceryItemsStore.getItems();

function render(){
    ReactDOM.render(<GroceryItemList items={initial}/>, app);
}
groceryItemsStore.onChange(function(items){
   initial=items;
    render();
});
render();


