module.exports = function (app) {
    var GroceryItem = require('./../models/GroceryItem.js');

    app.route('/api/items')
        .get(function (req, res) {
            GroceryItem.find(function(error,doc){
                res.send(doc);
            });

        })
        .post(function (req, res) {
            var item = req.body;
            var groceryItem=new GroceryItem(item);
            groceryItem.save(function(err,data){
                console.log(err)
                res.status(200).send();
            });
            //items.push(item);
        });
    app.route('/api/items/:id')
        .delete(function(req,res){
            GroceryItem.findOne({
                _id:req.params.id
            }).remove(function(x){
                console.log('removed',x);
            });
        })
        .patch(function(req,res){
            GroceryItem.findOne({
                _id:req.body.id
            },function(error,doc){
                for(var key in req.body){
                    doc[key]=req.body[key];
                }
                doc.save();
                res.status(200).send
            })
        })
};

