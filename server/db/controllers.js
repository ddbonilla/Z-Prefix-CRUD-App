const knex = require('./dbConnection');

const getAllItems = async () => {
    return knex.select('*').from('bowling_tbl')
}

module.exports = {
    getAllItems
};