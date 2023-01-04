/* eslint-disable no-undef */
const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'containers-us-west-147.railway.app',
    database: 'railway',
    password: 'oImhJawcFBHLGO9T6dYz',
    port: '5778',
    // ssl: {
    //     rejectUnauthorized: false,
    // }
})

module.exports = pool 