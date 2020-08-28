//import npm and core modules
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const world = require('../src/utils/worlddata');
const countrydata = require('../src/utils/countrydata');


//setup application
const app = express();
const port = process.env.PORT || 4001;

//set paths
const staticPath = path.join(__dirname,"../src/public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//set handle bars engie
app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//setup all calls
app.get('',(request,response) => {
    response.render('index');
});

app.get('/whoguideline',(request,response) => {
    response.render('guideline');
});

app.get('/worlddata',(request,response) => {
    world((error,data) =>{
        if(error){
            return response.send({
                error: error});
        }
        return response.send(data);
    })
});

app.get('/countrydata',(request,response) => {
    countrydata((error,data) =>{
        if(error){
            return response.send({
                error: error});
        }
        return response.send(data);
    })
});

//initialise express server
app.listen(port,()=>{
    console.log("Express Server Started");
});