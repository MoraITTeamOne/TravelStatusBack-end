/**
 * Created by Chanaka Fernando on 3/14/2017.
 * @email : nuwan.c.fernando@gmail.com
 */

var utills = require('../../utills');
var mongoose =require('mongoose');
var collectionModels =require('../../dataModels/collectionModels');

module.exports.Authnication =function (app) {
    utills.logger('Ready to exicute Authanication services',200);


    app.post('/login/android',function (req,res) {
        utills.logger("Authanication mode access",200);

        
        var selction={

            userName:req.body.userName,
            password:req.body.password
        };

        collectionModels.Users.find(selction,{},function (err,data) {
            if (err) {
                utills.logger("error occured when logging"+req.body.userName, 500, err);
                res.statusCode(500).send({status:500,Message:"Error"});
            } else if(data.length ==0){
                utills.logger("does not exist the user "+req.body.userName, 404, err);
                res.statusCode(404).send({status:404,Message:"Not Found"});
            }else if(data.length == 1){
                utills.logger("exist the user "+req.body.userName, 200, err);
                res.statusCode(200).send({status:200,Message:"success"});
            }else {
                utills.logger("Some error occure  "+req.body.userName, 304, err);
                res.statusCode(304).send({status:304,Message:"success"});
            }


        })

    });



    app.post('/reg/android',function (req,res) {
        utills.logger("Authanication mode access for Registration",200);


        var selction={
            userName:req.body.userName
        };

        collectionModels.Users.find(selction,projection,function (err,data) {
            if (err) {
                utills.logger("Internal error occured when logging"+req.body.userName, 500, err);
                res.statusCode(500).send({status:500,Message:"Internal Error"});
            } else if(data.length ==0){
                utills.logger("does not exist the user "+req.body.userName, 200, err);
                var newUser = collectionModels.Users ({
                    name        :{
                        fName:req.body.firstName,
                        lName:req.body.lastName
                    },
                    email       :req.body.eMail,
                    telNo       :req.body.telNumber,
                    rank        :req.body.rank,
                    point       :req.body.points,
                    userName    :req.body.userName,
                    regDate     :new Date()

                });
                newUser.save(function (err) {
                    if (err) {
                        utills.logger("Document is not saved", 500, err);
                        res.statusCode(500).send({status:500,Message:"Internal Error"});
                    } else {
                        utills.logger(req.body.userName+' is saved successfully', 200);
                        res.statusCode(200).send({status:200,Message:"success"});
                    }
                });

            }else if(data.length != 0){
                utills.logger("exist the user "+req.body.userName, 200, err);
                res.statusCode(400).send({status:400,Message:"Bad request"});
            }


        })

    })


};

