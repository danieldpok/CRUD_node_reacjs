const controller = {}
// import model
var Customers = require('../models/Customers');

controller.index = (req, res) => {

    const data = {
        message: "Developed by Artyom"
    }
    res.render('customer', data);

};

controller.testApi = async (req, res) => {

    // const data = {
    //   success: true,
    //   message: "Developed by Artyom"
    // }
    // res.json(data);

    const response = await Customers.findAll()
        .then(function (data) {
            const res = { success: true, data: data }
            return res;
        })
        .catch(error => {
            const res = { success: false, error: error }
            return res;
        })

    res.json(response);

};

controller.create = async (req, res) => {

    try {

        const { name, email, address, phone } = req.body;

        const data = await Customers.create({
            name: name,
            email: email,
            address: address,
            phone: phone
        })
            .then(function (data) {
                const res = { success: true, data: data, message: "Saved success" }
                return res;
            })
            .catch(error => {
                const res = { success: false, message: error }
                return res;
            })

        res.json(data);

    } catch (e) {
        const data = { success: false, message: error }
        res.json(data);
    }

};


module.exports = controller;
