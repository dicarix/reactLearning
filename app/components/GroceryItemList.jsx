var React = require('react');
var Groceryitem= require('./GroceryItem.jsx');
var GroceryListAddItem=require('./GroceryListAddItem.jsx');

module.exports=React.createClass({
    render:function(){
        return (
            <div>
                <h1>Grosery Listify</h1>
                <div>
                    {
                        this.props.items.map(function(item,index) {
                            return(
                                <Groceryitem item={item} key={"item"+index}/>
                                )
                            })
                        }
                </div>
                <GroceryListAddItem/>
            </div>
        )
    }
})