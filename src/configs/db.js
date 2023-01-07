/* eslint-disable no-undef */
const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'containers-us-west-28.railway.app',
    database: 'railway',
    password: 'wnnduT9n7JYdWQgHAXKa',
    port: '6224',
})

module.exports = pool 