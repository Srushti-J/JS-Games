const countryInp = document.querySelector("#country-inp");
const button = document.querySelector("#search-btn");
const result = document.querySelector("#result");

button.addEventListener("click",function(){
    const countryName = (countryInp.value);
    let finalurl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalurl);
    fetch(finalurl).then((Response) => Response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].name.common);
        console.log(data[0].capital[0]);
        console.log(data[0].population);
        console.log(data[0].flags.svg);
        console.log(data[0].continents[0]);

        const currencyCode = Object.keys(data[0].currencies)[0];
        console.log(data[0].currencies[currencyCode].name);

        const demom = Object.keys(data[0].demonyms)[0];
        console.log(data[0].demonyms[demom].m);

        console.log(Object.values(data[0].languages).toString());

        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2> ${data[0].name.common} </h2>

        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Capital : </h4>
        <span> ${data[0].capital[0]}</span>
        </div>
        </div>

        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Continent : </h4>
        <span> ${data[0].continents[0]}</span>
        </div>
        </div>

        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Population : </h4>
        <span> ${data[0].population}</span>
        </div>
        </div>

        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Currency : </h4>
        <span> ${data[0].currencies[currencyCode].name}</span>
        </div>
        </div>

        <div class="wrapper">
        <div class="data-wrapper">
        <h4>People : </h4>
        <span> ${data[0].demonyms[demom].m}</span>
        </div>
        </div>

        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Language : </h4>
        <span> ${Object.values(data[0].languages).toString()}</span>
        </div>
        </div>`;

    })
    .catch(() => {
        if(countryName.length == 0){
            result.innerHTML = `<h3>Input field cannot be empty. </h3>`
        }else{
            result.innerHTML = `<h3>Please enter a valid country name.</h3>`
        }
    })
})
