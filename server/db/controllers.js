const knex = require('./dbConnection');

const getAllItems = async () => {
    return knex.select('*').from('bowling_tbl')
}
const getAllManagers = async () => {
    return knex.select('*').from('users_tbl')
}

module.exports = {
    getAllItems,
    getAllManagers
};