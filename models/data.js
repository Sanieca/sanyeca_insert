const db = require('../config/db');
const information = {
    save: (data, callback) => {
        const query = "INSERT INTO sanieca (product_name, category,price, Stocks,description) VALUES (?, ?, ?, ?, ?)";
        db.query(query, [data.product_name, data.category, data.price, data.Stocks, data.description], callback);

    },
    getAllInformation:(callback) => {
        const query = "SELECT * FROM sanieca";
        db.query(query, callback);
    }
};

module.exports = information;