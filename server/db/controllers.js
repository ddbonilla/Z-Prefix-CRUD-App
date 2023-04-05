const knex = require('./dbConnection');

//bowling_table queries
const getAllItems = async () => {
    return knex.select('*').from('bowling_tbl')
}

const getOneItem = async (item) => {
    return knex.select('*').from('bowling_tbl').where('ItemName', 'ilike', `%${item}%`);
}

const addItem = async (item) => {
    return knex('bowling_tbl').insert(item);
}

const deleteItem = async (id) => {
    return knex('bowling_tbl').where({InvId: id}).delete();
}


//users_table queries
const getAllManagers = async () => {
    return knex.select('*').from('users_tbl')
}

module.exports = {
    getAllItems,
    getOneItem,
    addItem,
    deleteItem,
    getAllManagers
};