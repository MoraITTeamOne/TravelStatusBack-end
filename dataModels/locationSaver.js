/**
 * Created by Chanaka Fernando on 3/19/2017.
 */
var utills   = require('../utills');
var mongoose =require('mongoose');
var Schema   =mongoose.Schema;


var route1 = new Schema({
    userName   :{type:String,require:true},
    busId      :{type:String,require:true},
    time       :String,
    longitude  :Number,
    latitude   :Number,
    route      :{type:String,require:true}

});
exports.LocRoute1 = mongoose.model('loc1roots',route1);


var route2 = new Schema({
    userName   :{type:String,require:true},
    busId      :{type:String,require:true},
    time       :String,
    longitude  :Number,
    latitude   :Number,
    route      :{type:String,require:true}

});
exports.LocRoute2 = mongoose.model('loc2roots',route2);




var route3 = new Schema({
    userName   :{type:String,require:true},
    busId      :{type:String,require:true},
    time       :String,
    longitude  :Number,
    latitude   :Number,
    route      :{type:String,require:true}

});
exports.LocRoute3 = mongoose.model('loc3roots',route3);


var route6 = new Schema({
    userName   :{type:String,require:true},
    busId      :{type:String,require:true},
    time       :String,
    longitude  :Number,
    latitude   :Number,
    route      :{type:String,require:true}

});
exports.LocRoute6 = mongoose.model('loc6roots',route6);


var route8 = new Schema({
    userName   :{type:String,require:true},
    busId      :{type:String,require:true},
    time       :String,
    longitude  :Number,
    latitude   :Number,
    route      :{type:String,require:true}

});
exports.LocRoute8 = mongoose.model('loc8roots',route8);


//=======================================================

var Troute1 = new Schema({
    userName   :{type:String,require:true},
    trainId      :{type:String,require:true},
    time       :String,
    longitude  :Number,
    latitude   :Number,
    route      :{type:String,require:true}

});
exports.LocTRoute1 = mongoose.model('loc1Troots',Troute1);


var Troute2 = new Schema({
    userName   :{type:String,require:true},
    trainId      :{type:String,require:true},
    time       :String,
    longitude  :Number,
    latitude   :Number,
    route      :{type:String,require:true}

});
exports.LocTRoute2 = mongoose.model('loc2Troots',Troute2);

var Troute4 = new Schema({
    userName   :{type:String,require:true},
    trainId      :{type:String,require:true},
    time       :String,
    longitude  :Number,
    latitude   :Number,
    route      :{type:String,require:true}

});
exports.LocTRoute4 = mongoose.model('loc4Troots',Troute4);