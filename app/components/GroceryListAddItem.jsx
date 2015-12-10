var React = require('react');
var action = require('./../actions/GroceryItemActionCreator.jsx')
var GroceryItemStore= require

module.exports=React.createClass({
    getInitialState:function(){
        return{input:""};
    },
    handleInputName:function(e){
        this.setState({input : e.target.value})
    },
    addItem:function(e){
        e.preventDefault();
      //console.log('Adding Item',this.state.input);
        action.add({
            name:this.state.input
        });
        this.setState({
            input:''
        })
    },
    render:function(){
        return(
        <div className="grocery-addItem">
            <form onSubmit={this.addItem}>
                <input type="text" value={this.state.input} onChange={this.handleInputName}/>
                <button>Add Item</button>
            </form>
        </div>
    )
        }
});