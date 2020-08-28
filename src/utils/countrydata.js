//import modules
const request = require('request');

//api builder integration
const options = {
	url: 'http://localhost:8080/api/summary',
	method: 'get',
	headers: {
		'Accept': 'application/json',
		'Authorization': 'Basic UUw0R1Q1VmxIQnhCUXI0OHF6WlAyaHFUL29hc3Z1YjI6'
	},
	gzip: true,
	json: true
};

//global summary
const countrydata = (value) => {
    request(options, (error,response) =>{
        if(error){
            value(`Unable to fetch data at this moment`,undefined);
        }else if(!response.statusCode == 200){
            value(response.body, undefined);
        }else{
            value(undefined,response.body);
        }
    })   
};
module.exports = countrydata;