/**
 * Created by Chanaka Fernando on 3/11/2017.
 */


var utills = require('../../../utills');
var path = require('path');
var request = require('request');
var collectionModels = require('../../../dataModels/collectionModels');
var config = require('../../../app-config.json');


/**
 * all the post requesst relevent to the BUSscheduleAPI, from the user, is handled here
 * @param app
 */
module.exports.postMethods = function (app) {
    utills.logger(__dirname + "\\postRequest.js", 200);

    /**
     * Send New Bus data to the BusAPI
     */
    app.post('/post/bus', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        console.log(req.body +" to be sent to the API");
        request({
            url:config.BUS_SERVICE+'/post/bus',
            qs: {from:'Travel Status Back-End', time: +new Date()},
            method: 'POST',
            json: req.body
        }, function(err, response, body){
            if(err) {
                utills.logger("error occured ",500,err);
                utills.sendResponce(200,res,err);
            } else {
                utills.logger('success POST service call to BUSAPI',200,err);
                utills.sendResponce(200,res,err,response);
            }
        });
    });




    /**
     * send a  driver data to BUSApi
     */
    app.post('/post/bus/driver', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        console.log(req.body +" to be sent to the API");
        request({
            url:config.BUS_SERVICE+'/post/driver',
            qs: {from:'Travel Status Back-End', time: +new Date()},
            method: 'POST',
            json: req.body
        }, function(err, response, body){
            if(err) {
                utills.logger("error occured ",500,err);
                utills.sendResponce(200,res,err);
            } else {
                utills.logger('success POST service call to BUSAPI',200,err);
                utills.sendResponce(200,res,err,response);
            }
        });
    });




    /**
     * send a specific conductor data by given conductor NTC
     */
    app.post('/post/bus/conductor', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        console.log(req.body +" to be sent to the API");
        request({
            url:config.BUS_SERVICE+'/post/conductor',
            qs: {from:'Travel Status Back-End', time: +new Date()},
            method: 'POST',
            json: req.body
        }, function(err, response, body){
            if(err) {
                utills.logger("error occured ",500,err);
                utills.sendResponce(200,res,err);
            } else {
                utills.logger('success POST service call to BUSAPI',200,err);
                utills.sendResponce(200,res,err,response);
            }
        });


    });


    /**
     * send a specific schedule data
     */
    app.post('/post/bus/schedule', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        console.log(req.body +" to be sent to the API");
        request({
            url:config.BUS_SERVICE+'/post/schedule',
            qs: {from:'Travel Status Back-End', time: +new Date()},
            method: 'POST',
            json: req.body
        }, function(err, response, body){
            if(err) {
                utills.logger("error occured ",500,err);
                utills.sendResponce(200,res,err);
            } else {
                utills.logger('success POST service call to BUSAPI',200,err);
                utills.sendResponce(200,res,err,response);
            }
        });


    });



    /**
     * send a specific route data
     */
    app.post('/post/route', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        console.log(req.body +" to be sent to the API");
        request({
            url:config.BUS_SERVICE+'/post/route',
            qs: {from:'Travel Status Back-End', time: +new Date()},
            method: 'POST',
            json: req.body
        }, function(err, response, body){
            if(err) {
                utills.logger("error occured ",500,err);
                utills.sendResponce(200,res,err);
            } else {
                utills.logger('success POST service call to BUSAPI',200,err);
                utills.sendResponce(200,res,err,response);
            }
        });


    });

};