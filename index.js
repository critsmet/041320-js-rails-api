let countryContainer = document.getElementById('country-container')
let countriesPath = "http://localhost:3000/countries"

fetch(countriesPath)
  .then(function(obj){
    return obj.json()
  })
  .then(function(countriesArray){
    countriesArray.forEach(makeCountryDiv)
  })

function makeCountryDiv(country){
  countryContainer.innerHTML += `
  <div id=country-${country.id}>
  <p>Name: ${country.name}</p>
  <p>Population: ${country.population}</p>
  <p>Bird: ${country.bird}</p>
  <ul>
  ${country.cities.map(makeCityLi).join('')}
  <ul>
  </div>
  `
}

function makeCityLi(city){
  return `<li>${city.name}</li>`
}






  // let divCard = document.createElement('div')
  // divCard.setAttribute('id', `country-${country.id}`)
  // let name = document.createElement('p')
  // let pop = document.createElement('p')
  // let bird = document.createElement('p')
  // let ul = document.createElement('ul')
  // country.cities.forEach(function(city){
    //   let li = document.createElement('li')
    //   li.innerText = city.name
    //   ul.appendChild(li)
    // })
    // name.innerText = `Name: ${country.name}`
    // pop.innerText = country.population
    // bird.innerText = country.bird
    // divCard.appendChild(name)
    // divCard.appendChild(pop)
    // divCard.appendChild(bird)
    // divCard.appendChild(ul)
    // countryContainer.appendChild(divCard)
    //div with name, population, bird, then ul with lis of city names


















//
