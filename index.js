const express = require('express')
const Routes = require('./Routes')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
// app.use(Routes)


// var pg = require('pg');
// //or native libpq bindings
// //var pg = require('pg').native

// var conString = "postgres://scrbnygq:k665WwcM3f4YoU20qiFFT-DaxyN5tGdg@castor.db.elephantsql.com/scrbnygq" //Can be found in the Details page
// var client = new pg.Client(conString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });

app.get('/',(req,res)=>{
    res.send('oi')
})


app.listen(4000,()=>console.log('servidor rodando ...'))