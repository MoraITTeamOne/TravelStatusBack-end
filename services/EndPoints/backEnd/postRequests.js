/**
 * Created by Chanaka Fernando on 1/16/2017.
 */
var utills = require('../../../utills');
var collectionModels = require('../../../dataModels/collectionModels');
var config =require('../../../app-config.json');


module.exports.postMethods = function (app) {
    utills.logger(__dirname + "\\getRequest.js", 200);



    /**
     *this method will save the Advertiestment details came from admin, into database
     */
    app.post('/post/add', function (req, res) {
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
                res.status(200).send({Message:'error',status:400});
            } else {
                utills.logger('Document is saved successfully', 200);
                res.status(200).send({Message:'success',status:200});
            }
        });

    });




    /**
     *this method will save the user's comment came from admin, into database
     */
    app.post('/post/comment', function (req, res) {
        utills.logger('sucessfully accessed ' + req.url, 200);
        utills.DBConnection();
        var newComment = collectionModels.Comments ({
            userName   :req.body.userName,
            texts      :req.body.message,
            imag       :req.body.photo,
            date       :new Date().toLocaleString(),
            longitude  :req.body.longitude,
            latitude   :req.body.latitude,
            type       :req.body.type,
            transportId:req.body.transportId,
            route      :req.body.routeNumber

        });
        newComment.save(function (err) {
            if (err) {
                utills.logger("Document is not saved", 500, err);
                res.status(200).send({Message:'error',status:400});
            } else {
                utills.logger('Document is saved successfully', 200);
                res.status(200).send({Message:'success',status:200});
            }
        });

    });

    /**
     *this method will save the user's ranking came from mobile, into database
     */
    app.post('/post/ranking', function (req, res) {

        utills.logger('sucessfully accessed ' + req.url, 200);
        utills.DBConnection();

        var newRank = collectionModels.Ranking ({
            userName   :req.body.userName,
            time       :req.body.time,
            longitude  :req.body.longitude,
            latitude   :req.body.latitude,
            transpostType:req.body.type,
            transportId:req.body.transId,
            transportName:req.body.transName,
            rankType     :req.body.ranakType,
            rankValue    :req.body.rank,
            route        :req.body.RouteNo

        });
        newRank.save(function (err) {
            if (err) {
                utills.logger("Document is not saved", 500, err);
                res.status(200).send({Message:'error',status:400});
            } else {
                utills.logger(req.body.userName+ ' Document is saved successfully', 200);
                res.status(200).send({Message:'success',status:200});
            }
        });

    });



};

