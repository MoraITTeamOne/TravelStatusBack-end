/**
 * Created by Chanaka Fernando on 3/15/2017.
 * @email nuwan.c.fernando@gmail.com
 */




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
        seats: "heigh",
        facilities: "Low",
        crowd: "moderate",
        longi: "",
        lati: ""
    };

    app.post('/get/result', function (req, res) {
        console.log(req.url);
        console.log(req.body);
        // console.log(train);
        res.send("ok");
    });

}