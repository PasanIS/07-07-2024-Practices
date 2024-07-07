// https://restcountries.com/v3.1/all


let tblCountries = document.getElementById("tblCountries");

function searchCountries() {
    const searchInput = document.getElementById('countrySearch').value.toLowerCase();
    const rows = document.querySelectorAll('#tblCountries tr');

    rows.forEach((row) => {
        const countryName = row.querySelector('td h1').textContent.toLowerCase();
        if (countryName.includes(searchInput)) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}

let tableBody = `      <tr>
            <th>Name</th>
            <th>Flag</th>
        </tr>` ;



fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then(data => {

        data.forEach(element => {

            tableBody += `<tr>
                        <td><h1>${element.name.common}</h1> <br>

                        Official Name : ${element.name.official}
                        <p>Region : ${element.region} </p>
                        <p>Population : ${element.population} </p>
                        <a class="btn btn-primary" href="${element.maps.googleMaps}">Go To Map</a>
                        
                        </td>
                        <td><img src="${element.flags.png}"></td>
                    </tr>`
            console.log(element.name.common);
        });

        tblCountries.innerHTML = tableBody;
    })


