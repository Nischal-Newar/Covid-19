const global = document.getElementById("global");
const notify = document.getElementById("notify");

notify.innerHTML = `<p>Loading World Live Covid-19 Information....</p>`

fetch(`/worlddata`).then((response) => {
    response.json().then((data) =>{
        if(data.error){
            global.innerHTML = `<th>0</th><th>0</th><th>0</th><th>0</th><th>0</th><th>0</th>`;
            notify.innerHTML = `<p>Unable to fetch data from source</p>`;
        }else{
            global.innerHTML = `<td>${data.Global["NewConfirmed"]}</td>
                                <td>${data.Global["TotalConfirmed"]}</td>
                                <td>${data.Global["NewDeaths"]}</td>
                                <td>${data.Global["TotalDeaths"]}</td>
                                <td>${data.Global["NewRecovered"]}</td>
                                <td>${data.Global["TotalRecovered"]}</td>`;
            notify.innerHTML = `<p>Source - Axway API Builder</p>`;
        }
    });
});