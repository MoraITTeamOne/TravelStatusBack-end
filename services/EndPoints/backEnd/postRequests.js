/**
 * Created by Chanaka Fernando on 1/16/2017.
 */
var utills = require('../../../utills');
var collectionModels = require('../../../dataModels/collectionModels');


module.exports.postMethods = function (app) {
    utills.logger(__dirname + "\\getRequest.js", 200);





    /**
     *this method will save the Advertiestment details came from admin, into database
     */
    app.post('/post/Adverteistment', function (req, res) {
        utills.logger('sucessfully accessed ' + req.url, 200);
        utills.DBConnection();
        var date = new Date().toLocaleString();
        var newAdverteistment = collectionModels.Adverteistments ({
            comName: req.body.comName,
            eMail: req.body.eMail,
            telNo: req.body.telNumber,
            addedDate: date,
            exDate : req.body.exDate,
            img :req.body.img,
            text:req.body.text,
            valid :false

        });
        newAdverteistment.save(function (err) {
            if (err) {
                utills.logger("Document is not saved", 500, err);
            } else {
                utills.logger('Document is saved successfully', 200);
            }
        });

    });




    /**
     *this method will save the user's comment came from admin, into database
     */
    app.post('/post/comment', function (req, res) {
        utills.logger('sucessfully accessed ' + req.url, 200);
        utills.DBConnection();
        var newComment = collectionModels.Users ({
            userName   :req.body.userName,
            texts      :req.body.message,
            imag       :req.body.photo,
            date       :req.body.currentDate,
            longitude  :req.body.longitude,
            latitude   :req.body.latitude,
            type       :req.body.type,
            transportId:req.body.transportId,
            route      :req.body.routeNumber

        });
        newComment.save(function (err) {
            if (err) {
                utills.logger("Document is not saved", 500, err);
            } else {
                utills.logger('Document is saved successfully', 200);
            }
        });

    });



    /**
     *this method will save the user details came from admin, into database
     */
    app.post('/post/comment', function (req, res) {
        utills.logger('sucessfully accessed ' + req.url, 200);
        utills.DBConnection();
        var newComment = collectionModels.Users ({
            userName   :req.body.userName,
            texts      :req.body.message,
            imag       :req.body.photo,
            date       :req.body.currentDate,
            longitude  :req.body.longitude,
            latitude   :req.body.latitude,
            type       :req.body.type,
            transportId:req.body.transportId,
            route      :req.body.routeNumber

        });
        newComment.save(function (err) {
            if (err) {
                utills.logger("Document is not saved", 500, err);
            } else {
                utills.logger('Document is saved successfully', 200);
            }
        });

    });

};

