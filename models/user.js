
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var utility = require('utility');

var UserSchema = new Schema({
    name: { type: String},
    loginname: { type: String},
    pass: { type: String},
    email: { type: String},    
    
    is_block: { type: Boolean, default: false}, 
    
    score: { type: Number, default: 0},
    is_star: { type: Boolean},

});

UserSchema.virtual('isAdvanced').get(function(){
    return this.score > 700 || this.is_star;
});

UserSchema.index({loginname: 1}, {unique: true});
UserSchema.index({email: 1}, {unique: true});
UserSchema.index({score: -1});

mongoose.model('User', UserSchema);