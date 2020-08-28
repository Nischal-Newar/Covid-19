const country = document.getElementById("country");
const notifycountry = document.getElementById("notifycountry");
var datavalue ='<table border="1" align="center">';

country.innerHTML = `<table border="1" align="center"><tr><th>Country</th><th>NewConfirmed</th><th>TotalConfirmed</th><th>NewDeaths</th><th>TotalDeaths</th><th>NewRecovered</th><th>TotalRecovered</th></tr></table>`;
notifycountry.innerHTML = `<p>Loading Country Wise Live Covid-19 Information....</p>`

fetch(`/countrydata`).then((response) => {
    response.json().then((data) =>{
        if(data.error){
            country.innerHTML = country.innerHTML = `<table border="1" align="center"><tr><th>Country</th><th>NewConfirmed</th><th>TotalConfirmed</th><th>NewDeaths</th><th>TotalDeaths</th><th>NewRecovered</th><th>TotalRecovered</th></tr></table>`;
            notifycountry.innerHTML = `<p>Unable to fetch data from source</p>`;
        }else{
            datavalue += `<tr>
                            <th>Country</th>
                            <th>NewConfirmed</th>
                            <th>TotalConfirmed</th>
                            <th>NewDeaths</th>
                            <th>TotalDeaths</th>
                            <th>NewRecovered</th>
                            <th>TotalRecovered</th>
                            </tr>`
            for(var i=0;i<data.Countries.length;i++)
            {
                datavalue += `<tr><td>${data.Countries[i].Country}</td>
                              <td>${data.Countries[i].NewConfirmed}</td>
                              <td>${data.Countries[i].TotalConfirmed}</td>
                              <td>${data.Countries[i].NewDeaths}</td>
                              <td>${data.Countries[i].TotalDeaths}</td>
                              <td>${data.Countries[i].NewRecovered}</td>
                              <td>${data.Countries[i].TotalRecovered}</td></tr>`
            }
            country.innerHTML = `${datavalue}</table>`;
            notifycountry.innerHTML = `<p>Source: Axway API Builder</p>`;
        }
    });
});