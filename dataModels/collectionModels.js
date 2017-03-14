/**
 * Created by Chanaka Fernando on 2/23/2017.
 * @email nuwan.c.fernando@gmail.com
 */

var utills   = require('../utills');
var mongoose =require('mongoose');
var Schema   =mongoose.Schema;


//=====================================================

var administrator = new Schema({
    adminId        :{type:String,require:true,unique:true},
    name           :{
        fName:{type:String,require:true},
        lName:{type:String,require:true}
    },
    eMail          :{type:String,unique:true},
    userName       :{type:String,require:true,unique:true},
    adminPass      :{type:String,require:true},
    telNo          :{type:String,require:true},
    adminType      :{type:String,require:true},
    proPic         :String,
    regDate        :Date
});
var Administrators = mongoose.model('Administrators',administrator);
exports.Administrator = Administrators;


//=====================================================


var sponsor = new Schema({
    comName    :{type:String,require:true,unique:true},
    postalCode :{type:String,require:true},
    email      :{type:String,unique:true},
    mobileNo   :{type:String,require:true},
    faxNum     :{type:String,require:true},
    fixdLine   :{type:String,require:true},
    address    :{type:String,require:true},
    proPic     :String,
    regDate    :Date,
    points     :Number

});
var Sponsors = mongoose.model('Sponsors',sponsor);
exports.Sponsors = Sponsors;


//=====================================================


var adverteistment = new Schema({
    addName   :{type:String,require:true,unique:true},
    comName   :{type:String,require:true},
    addedDate :{type:Date,require:true},
    dueDate   :{type:Date,require:true},
    exDate    :{type:Date,require:true},
    image     :{type:String,require:true},
    valid     :Boolean // set default value false

});
var Adverteistments = mongoose.model('Adverteistments',adverteistment);
exports.Adverteistments = Adverteistments;


//=====================================================

var user = new Schema({
    name        :{
        fName:{type:String,require:true},
        lName:{type:String,require:true}
    },
    email       :{type:String,unique:true},
    telNo       :Number,
    rank        :Number,
    rewardsPoint :Number,
    userName    :{type:String,require:true,unique:true},
    password    :{type:String,require:true},
    proPic      :String,
    regDate     :Date
});
var Users = mongoose.model('Users',user);
exports.Users = Users;


//=====================================================

var comment = new Schema({
    userName   :{type:String,require:true},
    texts      :String,
    imag       :String,
    date       :Date,
    longitude  :Number,
    latitude   :Number,
    type       :{type:String,require:true},
    transportId:{type:String,require:true},
    route      :{type:String,require:true}

});
var Comments = mongoose.model('Comments',comment);
exports.Comments = Comments;


//====================================================


var gameProfile = new Schema({
    userName :{type:String,require:true,unique:true},
    password :String,

    points   :Number,
    maxScore :Number,
    level    :Number
});
exports.GameProfiles = mongoose.model('GameProfiles',gameProfile);





