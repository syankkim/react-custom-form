require('dotenv').config()
// > npm i cors dotenv express pg
// We'll add some options to the cors library.
// When we used cors(), we made the app available for use from any browser

// > npm i nodemon
// We'll also install nodemon for development,
//  which automatically restarts the server every time you make a change.


const {Pool} = require('pg')
const isProduction = process.env.NODE_ENV === 'production'
const connectionString =
 `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

 // const pool = new Pool({
//     connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//     ssl: isProduction,
// })

const pool = new Pool({
    user: 'gigaeyes',
    host: 'localhost',
    database: 'gigaeyes',
    password: 'vsaas12#$',
    port: 1234
})

const getUsers = (request, response)=>{
    pool.query('select * from int_user limit 1', (err, result)=>{
        if(err){
            throw err
        }
        response.status(200).json(result.rows)
    })
}

module.exports = {
    getUsers
}