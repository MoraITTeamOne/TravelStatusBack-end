/**
 * Created by Chanaka Fernando on 3/19/2017.
 */

var utills = require('../../../utills');
var collectionModels = require('../../../dataModels/collectionModels');
var locServer = require('../../../dataModels/locationSaver');
var config = require('../../../app-config.json');


module.exports.locationManager = function (app) {
    utills.logger(__dirname + "\\getRequest.js", 200);


    var time = new Date().toLocaleTimeString();


    app.post('/post/loc', function (req, res) {
        utlls.logger("Accesed to data base " + req.url, 200);
        var type = req.body.type;


        //if the type is 'train'
        if (type === 'train') {
            var trainId =req.body.transId;
            var RouteNo;
            request(config.TRAIN_SERVICE + '/get/train/' + trainId, function (err, response, body) {
                if (!err && response.statusCode == 200) {
                    var obj = JSON.parse(body);
                    obj = obj.content;
                    RouteNo = obj.RouteNo;
                    utills.logger("Succesfully retreved Train route number" + RouteNo, 200);

                    if(RouteNo ==='NO001'){
                        utills.logger('sucessfully accessed ' + req.url +'to Train Route 1', 200);
                        utills.DBConnection();
                        var newLoc = locServer.LocTRoute1 ({
                            userName   :req.body.userName,
                            trainId    :trainId,
                            time       :time,
                            longitude  :req.body.longitude,
                            latitude   :req.body.latitude,
                            route      :"NO001"

                        });
                        newLoc.save(function (err) {
                            if (err) {
                                utills.logger("Document is not saved", 500, err);
                                res.status(200).send({Message:'error',status:500});
                            } else {
                                utills.logger('Document of '+ req.body.userName+'is saved successfully', 200);
                                res.status(200).send({Message:'success',status:200});
                            }
                        });



                    }else if(RouteNo === 'NO002'){
                        utills.logger('sucessfully accessed ' + req.url +'to Train Route 2', 200);
                        utills.DBConnection();
                        var newLoc = locServer.LocTRoute2 ({
                            userName   :req.body.userName,
                            trainId    :trainId,
                            time       :time,
                            longitude  :req.body.longitude,
                            latitude   :req.body.latitude,
                            route      :"NO002"

                        });
                        newLoc.save(function (err) {
                            if (err) {
                                utills.logger("Document is not saved", 500, err);
                                res.status(200).send({Message:'error',status:500});
                            } else {
                                utills.logger('Document of '+ req.body.userName+'is saved successfully', 200);
                                res.status(200).send({Message:'success',status:200});
                            }
                        });


                    }else if(RouteNo ==='NO004'){
                        utills.logger('sucessfully accessed ' + req.url +'to Train Route 4', 200);
                        utills.DBConnection();
                        var newLoc = locServer.LocTRoute4 ({
                            userName   :req.body.userName,
                            trainId    :trainId,
                            time       :time,
                            longitude  :req.body.longitude,
                            latitude   :req.body.latitude,
                            route      :"NO004"

                        });
                        newLoc.save(function (err) {
                            if (err) {
                                utills.logger("Document is not saved", 500, err);
                                res.status(200).send({Message:'error',status:500});
                            } else {
                                utills.logger('Document of '+ req.body.userName+'is saved successfully', 200);
                                res.status(200).send({Message:'success',status:200});
                            }
                        });
                    }//eof if else block

                }
            });


        } else {   //if the type is 'bus'
            var busId = req.body.transId;
            var busRoute;
            request(config.BUS_SERVICE + '/get/bus/' + busId, function (err, response, body) {
                if (!err && response.statusCode == 200) {
                    var obj = JSON.parse(body);
                    obj = obj.content;
                    this.busRoute = obj.RouteNo;
                    utills.logger("Succesfully retreved route number" + route, 200);
                    //*********************************
                    if (busRoute == '1') {  //kandy

                        utills.logger('sucessfully accessed ' + req.url +'to Route 1', 200);
                        utills.DBConnection();
                        var newLoc = locServer.LocRoute1 ({
                            userName   :req.body.userName,
                            busId      :busId,
                            time       :time,
                            longitude  :req.body.longitude,
                            latitude   :req.body.latitude,
                            route      :"1"

                        });
                        newLoc.save(function (err) {
                            if (err) {
                                utills.logger("Document is not saved", 500, err);
                                res.status(200).send({Message:'error',status:200});
                            } else {
                                utills.logger('Document of '+ req.body.userName+'is saved successfully', 200);
                                res.status(200).send({Message:'success',status:200});
                            }
                        });



                    } else if (busRoute == '2') {// galle

                        utills.logger('sucessfully accessed ' + req.url +'to Route 2', 200);
                        utills.DBConnection();
                        var newLoc = locServer.LocRoute2 ({
                            userName   :req.body.userName,
                            busId      :busId,
                            time       :time,
                            longitude  :req.body.longitude,
                            latitude   :req.body.latitude,
                            route      :"2"

                        });
                        newLoc.save(function (err) {
                            if (err) {
                                utills.logger("Document is not saved", 500, err);
                                res.status(200).send({Message:'error',status:500});
                            } else {
                                utills.logger('Document of '+ req.body.userName+'is saved successfully', 200);
                                res.status(200).send({Message:'success',status:200});
                            }
                        });

                    } else if (busRoute == '6') {//kurunegala

                        utills.logger('sucessfully accessed ' + req.url +'to Route 6', 200);
                        utills.DBConnection();
                        var newLoc = locServer.LocRoute6 ({
                            userName   :req.body.userName,
                            busId      :busId,
                            time       :time,
                            longitude  :req.body.longitude,
                            latitude   :req.body.latitude,
                            route      :"6"

                        });
                        newLoc.save(function (err) {
                            if (err) {
                                utills.logger("Document is not saved", 500, err);
                                res.status(200).send({Message:'error',status:500});
                            } else {
                                utills.logger('Document of '+ req.body.userName+'is saved successfully', 200);
                                res.status(200).send({Message:'success',status:200});
                            }
                        });

                    } else if (busRoute == '8') {//matale
                        utills.logger('sucessfully accessed ' + req.url +'to Route 8', 200);
                        utills.DBConnection();
                        var newLoc = locServer.LocRoute8 ({
                            userName   :req.body.userName,
                            busId      :busId,
                            time       :time,
                            longitude  :req.body.longitude,
                            latitude   :req.body.latitude,
                            route      :"8"

                        });
                        newLoc.save(function (err) {
                            if (err) {
                                utills.logger("Document is not saved", 500, err);
                                res.status(200).send({Message:'error',status:200});
                            } else {
                                utills.logger('Document of '+ req.body.userName+'is saved successfully', 200);
                                res.status(200).send({Message:'success',status:200});
                            }
                        });

                    } else if (busRoute == '3') {//mathara
                        utills.logger('sucessfully accessed ' + req.url +'to Route 3', 200);
                        utills.DBConnection();
                        var newLoc = locServer.LocRoute3 ({
                            userName   :req.body.userName,
                            busId      :busId,
                            time       :time,
                            longitude  :req.body.longitude,
                            latitude   :req.body.latitude,
                            route      :"3"

                        });
                        newLoc.save(function (err) {
                            if (err) {
                                utills.logger("Document is not saved", 500, err);
                                res.status(200).send({Message:'error',status:200});
                            } else {
                                utills.logger('Document of '+ req.body.userName+'is saved successfully', 200);
                                res.status(200).send({Message:'success',status:200});
                            }
                        });

                    } else {

                    }
                    //**************************************************

                }
            });

        }

    });

};