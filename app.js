// https://restcountries.com/v3.1/all


let tblCountries = document.getElementById("tblCountries");

let tableBody = `      <tr>
            <th>Name</th>
            <th>Flag</th>
        </tr>` ;



fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{

    data.forEach(element => {

        tableBody+=`<tr>
                        <td>${element.name.common}</td>
                        <td><img src="${element.flags.png}"></td>
                    </tr>`
        console.log(element.name.common);
    });

    tblCountries.innerHTML=tableBody;
})


