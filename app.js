// https://restcountries.com/v3.1/all


let tblCountries = document.getElementById("tblCountries");
let btnBack = document.getElementById("btnBack");

function searchCountries() {
    const searchInput = document.getElementById('countrySearch').value.toLowerCase();
    const rows = document.querySelectorAll('#tblCountries tr');
    let isSearching = searchInput.length > 0;

    rows.forEach((row) => {
        const countryName = row.querySelector('td h1')?.textContent.toLowerCase();
        if (countryName && countryName.includes(searchInput)) {
            row.style.display = 'table-row';
        } else if (row.rowIndex !== 0) {
            row.style.display = 'none';
        }
    });

    btnBack.style.display = isSearching ? 'block' : 'none';
}

function resetSearch() {
    document.getElementById('countrySearch').value = '';
    const rows = document.querySelectorAll('#tblCountries tr');
    rows.forEach((row) => {
        row.style.display = 'table-row';
    });
    btnBack.style.display = 'none';
}

let tableBody = `<tr>
    <th>Name</th>
    <th>Flag</th>
</tr>`;

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
                <td><img src="${element.flags.png}" alt="Flag of ${element.name.common}"></td>
            </tr>`;
        });

        tblCountries.innerHTML = tableBody;
    });
