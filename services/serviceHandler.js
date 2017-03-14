/**
 * Created by Chanaka Fernando on 2/21/2017.
 * @email nuwan.c.fernando@gmail.com
 */

var utills = require('../utills');

var backEndGetRequests  = require('./EndPoints/backEnd/getRequests');
var backEndPostRequests = require('./EndPoints/backEnd/postRequests');
var backEndUpdateRequests = require('./EndPoints/backEnd/updateRequests');

var busAPIGetRequest = require('./EndPoints/forBusAPI/getRequest');
var busAPIPostRequest = require('./EndPoints/forBusAPI/postRequest');


var authanication = require('./EndPoints/authanication');



module.exports.services = function(app){
    utills.logger('Ready to exicute backend services',200);


    //EndPoints
    backEndGetRequests.getMethods(app);
    backEndPostRequests.postMethods(app);


    //forBusAPI
    busAPIGetRequest.getMethods(app);
    busAPIPostRequest.postMethods(app);


    authanication.Authnication(app);




};