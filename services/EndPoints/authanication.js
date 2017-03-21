/**
 * Created by Chanaka Fernando on 3/14/2017.
 * @email : nuwan.c.fernando@gmail.com
 */

var utills = require('../../utills');
var mongoose =require('mongoose');
var collectionModels =require('../../dataModels/collectionModels');

module.exports.Authnication =function (app) {
    utills.logger('Ready to exicute Authanication services',200);


    app.post('/login/user',function (req,res) {
        console.log(req.body);
        utills.logger("Authanication mode access",200);
        var selction={
            userName:req.body.userName,
            password:req.body.password
        };

        utills.DBConnection();
        collectionModels.Users.find(selction,function (err,data) {
            console.log(data.length);
            if (err) {
                utills.logger("error occured when logging"+req.body.userName, 500, err);
                res.status(400).send({status:500,Message:err.message});
            } else if(data.length ==0){
                utills.logger("does not exist the user "+req.body.userName, 404, err);
                res.status(200).send({status:400,Message:"Not Found"});
            }else if(data.length == 1){
                utills.logger("exist the user "+req.body.userName, 200, err);
                res.status(200).send({status:200,Message:"success"});
            }else {
                utills.logger("Some error occure  "+req.body.userName, 304, err);
                res.status(200).send({status:500,Message:"Internal error"});
            }
        })

    });



    app.post('/reg/user',function (req,res) {
        console.log(req.body);
        utills.logger("Authanication mode access for Registration",200);
        console.log(req.body);
        var selction={
            userName:req.body.userName
        };
        console.log(req.body.userName);
        utills.DBConnection();
        collectionModels.Users.find(selction,{},{},function (err,data) {
            console.log("number of users"+data.length);
            if (err) {
                utills.logger("Internal error occured when logging"+req.body.userName, 500, err);
                res.status(500).send({status:500,Message:err.message});
            } else if(data.length == 0){
                var date = new Date().toLocaleString();
                utills.logger("does not exist the user "+req.body.userName , 200, err);
                var newUser = collectionModels.Users ({
                    name        :{
                        fName:req.body.firstName,
                        lName:req.body.lastName
                    },
                    email       :req.body.email,
                    telNo       :req.body.telNumber,
                    rank        :0,
                    rewardsPoint:0,
                    userName    :req.body.userName,
                    password    :req.body.password,
                    proPic      :req.body.img,
                    regDate     :date

                });
                newUser.save(function (err){
                    if (err) {
                        utills.logger("Document is not saved", 500, err);
                        res.status(500).send({status:500,Message:err.message});
                    } else {
                        utills.logger(req.body.userName+' is saved successfully', 200);
                        res.status(200).send({status:200,Message:"success"});
                    }
                });

            }else if(data.length != 0){
                utills.logger("exist the user "+req.body.userName, 200, err);
                res.status(400).send({status:400,Message:"User name Exists"});
            }


        });
    });


    /**
     * to validate sponsor login
     */
    app.post('/login/sponsor',function (req,res) {
        console.log(req.body);
        utills.logger("Authanication mode access",200);
        var selection={
            comName:req.body.comName,
            password:req.body.password
        };

        utills.DBConnection();
        collectionModels.Sponsors.find(selection,function (err,data) {
            console.log(data.length);
            if (err) {
                utills.logger("error occured when logging"+req.body.comName, 500, err);
                res.status(500).send({status:500,Message:err.message});
            } else if(data.length == 0){
                utills.logger("does not exist the sponser "+req.body.comName, 404, err);
                res.status(400).send({status:400,Message:"Bad Request"});
            }else if(data.length == 1){
                utills.logger("exist the sponsor "+req.body.comName, 200, err);
                res.status(200).send({status:200,Message:"success"});
            }else {
                utills.logger("Some error occure  "+req.body.comName, 304, err);
                res.status(304).send({status:500,Message:"Internal error"});
            }
        })

    });


    /**
     * to registration of the sponsor
     */
    app.post('/reg/sponsor',function (req,res) {
        utills.logger("Authanication mode access for Registration",200);
        console.log(req.body);
        var selection={
            comName:req.body.comName
        };
        console.log(req.body.comName);
        utills.DBConnection();
        collectionModels.Sponsors.find(selection,{},{},function (err,data) {
            console.log("number of users"+data.length);
            if (err) {
                utills.logger("Internal error occured when logging"+req.body.userName, 500, err);
                res.status(500).send({status:500,Message:err.message});
            } else if(data.length == 0){
                var date =new Date().toLocaleString();
                console.log(date);
                utills.logger("does not exist the sponsor "+req.body.comName, 200, err);
                var newSponsor = collectionModels.Sponsors ({
                    comName    :req.body.comName,
                    password :req.body.password,
                    postalCode :req.body.postalCode,
                    email      :req.body.email,
                    mobileNo   :req.body.mobileNumber,
                    faxNum     :req.body.faxNumber,
                    fixdLine   :req.body.fixdLine,
                    address    :req.body.address,
                    proPic      :req.body.img,
                    regDate    :date,
                    points     :0

                });
                console.log(newSponsor);
                newSponsor.save(function (err){
                    if (err) {
                        utills.logger("Document is not saved", 400, err);
                        res.status(400).send({status:400,Message:err.message});
                    } else {
                        utills.logger(req.body.comName+' is saved successfully', 200);
                        res.status(200).send({status:200,Message:"success"});
                    }
                });

            }else if(data.length != 0){
                utills.logger("exist the user "+req.body.comName, 400, err);
                res.status(400).send({status:400,Message:"Bad request"});
            }

        });
    });



    /**
     * to validate admin login
     */
    app.post('/login/admin',function (req,res) {
        console.log(req.body);
        utills.logger("Authanication mode access",200);
        var selction={
            userName:req.body.userName,
            adminPass:req.body.password
        };

        utills.DBConnection();
        collectionModels.Administrator.find(selction,function (err,data) {
            console.log(data);
            if (err) {
                utills.logger("error occured when logging"+req.body.userName, 500, err);
                res.status(500).send({status:500,Message:err.message});
            } else if(data.length ==0){
                utills.logger("does not exist the dministrator "+req.body.userName, 404, err);
                res.status(400).send({status:400,Message:"Bad Request"});
            }else if(data.length == 1){
                utills.logger("exist the admin "+req.body.userName, 200, err);
                res.status(200).send({status:200,Message:"success"});
            }else {
                utills.logger("Some error occure  "+req.body.userName, 304, err);
                res.status(304).send({status:500,Message:"Internal error"});
            }
        })

    });


    /**
     * admin registration
     */
    app.post('/reg/admin',function (req,res) {
        console.log(req.body);
        utills.logger("Authanication mode access for Registration",200);
        var selction={
            userName:req.body.userName
        };
        console.log(req.body.userName);
        utills.DBConnection();
        collectionModels.Administrator.find(selction,{},{},function (err,data) {
            console.log("number of users"+data.length);
            if (err) {
                utills.logger("Internal error occured when logging"+req.body.userName, 500, err);
                res.status(500).send({status:500,Message:err.message});
            } else if(data.length == 0){
                utills.logger("does not exist the user "+req.body.userName, 200, err);
                var date = new Date().toLocaleString();
                var newAdmin = collectionModels.Administrator ({
                    name        :{
                        fName:req.body.firstName,
                        lName:req.body.lastName
                    },
                    eMail       :req.body.email,
                    telNo       :req.body.telNumber,
                    userName    :req.body.userName,
                    adminPass    :req.body.password,
                    proPic      :req.body.img,
                    regDate     :date

                });
                newAdmin.save(function (err){
                    if (err) {
                        utills.logger("Document is not saved", 500, err);
                        res.status(500).send({status:500,Message:err.message});
                    } else {
                        utills.logger(req.body.userName+' is saved successfully', 200);
                        res.status(200).send({status:200,Message:"success"});
                    }
                });

            }else if(data.length != 0){
                utills.logger("exist the user "+req.body.userName, 200, err);
                res.status(400).send({status:400,Message:"User name Exists"});
            }


        });
    });


    app.post('/update/admin',function (req,res) {
        utills.logger('successfully acced authonication ',200);
        utills.DBConnection();

        var selection ={
            userName :req.body.userName
        };

        var update ={
            adminPass :req.body.password
        };

        var options = {
            new:true,
            projection:{_id: false,__v:false,password:false},
            maxTimeMS: 300
        };

        collectionModels.Administrator.findOneAndUpdate(selection,update,options,function (err,list) {
            if(err){
                utills.logger("Document is not updated", 500, err);
                utills.sendResponce(500,res,err);
            }else {
                utills.logger('Document is updated successfully', 200);
                utills.sendResponce(200,res,err,list);
            }
        });
    });




};

