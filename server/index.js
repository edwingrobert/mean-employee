const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');

const app = express();
const {mongoose} = require('./database');


//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());//para que el servidor entienda json y todo lo que viene del navegador

app.use(cors({origin:'http://localhost:4200'}));

//routes
app.use('/api/employees',require('./routes/employee.route'));


//starting the server
app.listen(app.get('port'), () =>{
    console.log('listening port', app.get('port'))
});