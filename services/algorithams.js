/**
 * Created by Chanaka Fernando on 3/15/2017.
 * @email nuwan.c.fernando@gmail.com
 */
var utills = require('../../../utills');
var path = require('path');
var collectionModels = require('../../../dataModels/collectionModels');
var config = require('../../../app-config.json');
var request = require('request');
var geocoding = new require('reverse-geocoding');
var geocoder = require('geocoder');




/**
 * all the get request to backend from the user, is handled here
 * @param app
 */
module.exports.gettt = function (app) {
    var train = {
        trainName: "Ruhunu Kumari",
        startLocation: "Maradana",
        destination: "Matara",
        ySLoc: "1215",
        yDestination: "1410",
        type: "Express",
        seats: 4,
        facilities: 1,
        crowd: 2,
        longi: "",
        lati: ""
    };

    app.post('/get/result', function (req, res) {
        console.log(req.url);
        res.send(train);
    });

}