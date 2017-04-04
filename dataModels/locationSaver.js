/**
 * Created by Chanaka Fernando on 3/19/2017.
 */
var utills   = require('../utills');
var mongoose =require('mongoose');
var Schema   =mongoose.Schema;


var Troute1 = new Schema({
    userName   :{type:String,require:true},
    trainId      :{type:String,require:true},
    time       :String,
    longitude  :Number,
    latitude   :Number,
    route      :{type:String,require:true}

});
exports.TRoute1 = mongoose.model('t-route1',Troute1);


var Troute2 = new Schema({
    userName   :{type:String,require:true},
    trainId      :{type:String,require:true},
    time       :String,
    longitude  :Number,
    latitude   :Number,
    route      :{type:String,require:true}

});
exports.TRoute2 = mongoose.model('t-route2',Troute2);

var Troute4 = new Schema({
    userName   :{type:String,require:true},
    trainId      :{type:String,require:true},
    time       :String,
    longitude  :Number,
    latitude   :Number,
    route      :{type:String,require:true}

});
exports.TRoute4 = mongoose.model('t-route4',Troute4);