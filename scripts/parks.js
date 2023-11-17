"use strict"



window.onload = function (_event) {
  const locationCategory = document.getElementById("locationType")
  locationCategory.onchange = renderLocationcard
  const parksCategory = document.getElementById("parkType")
  parksCategory.onchange = renderLocationcard
  populatelocationCategory(locationsArray, locationCategory)
  populateparksCategory(parkTypesArray, parksCategory)

  populateAllCategory(nationalParksArray)

}

function populatelocationCategory(locationsArray, selectElement) {
  let html = `<option value="chicken">Select your Location</option>`

  for (let index = 0; index < locationsArray.length; index += 1) {
    const locations = locationsArray[index];
    html += `<option value="${locations}">${locations}</option>`
  }
  selectElement.innerHTML = html
}

function populateparksCategory(parkTypesArray, selectElement) {
  let html = `<option value="n/a">Select park type</option>`
  for (let index = 0; index < parkTypesArray.length; index += 1) {
    const parks = parkTypesArray[index];
    html += `<option value="${parks}">${parks}</option>`
  }
  selectElement.innerHTML = html
}
function populateAllCategory(nationalParksArray) {
  let html = ""
  for (let index = 0; index < nationalParksArray.length; index += 1) {
    const location = nationalParksArray[index];
    html += `<div class="card" >
    <div class="card-body">
    
      <p class="card-text">
     <p><strong>Name:</strong><h1> ${location.LocationName}</p></h1>
      <p><strong>Address:</strong><h3>${location.Address}</p></h3>
      <p><strong>City:</strong> ${location.City}</p>
      <p><strong>State:</strong> ${location.State}</p>
      <p><strong>Zipcode:</strong> ${location.ZipCode}</p>
      <p><strong>Phone:</strong> ${location.Phone}</p>
      <p><strong>Fax:</strong> ${location.Fax}</p>
      <p><strong>Latitude:</strong> ${location.Latitude}</p>
      <p><strong>Longtitude:</strong> ${location.Longitude}</p>
      <p><strong>Coordinate:</strong> ${location.Location.coordinates}</p>
      
      </p>
    </div>
  </div>`
  } const resultDiv = document.getElementById("selected-park")
  resultDiv.innerHTML = html


}



function renderLocationcard(event) {
  const selectElement = event.target.value

  let html = ""
  for (let index = 0; index < nationalParksArray.length; index += 1) {
    const location = nationalParksArray[index];
    const locationMatch = location.State === selectElement
    const parkMatch = location.LocationName.includes(selectElement) === true

    if (locationMatch) {
      html += `<div class="card" >
            <div class="card-body">
              <p class="card-text">
             <h1><p><strong>Name:</strong> ${location.LocationName}</p><h1>
              <p><strong>Address:</strong><h3> ${location.Address}</p></h3>
              <h6><p><strong>City:</strong> ${location.City}</p>
              <p><strong>State:</strong> ${location.State}</p>
              <p><strong>Zipcode:</strong> ${location.ZipCode}</p>
              <p><strong>Phone:</strong> ${location.Phone}</p>
              <p><strong>Fax:</strong> ${location.Fax}</p>
              <p><strong>Latitude:</strong> ${location.Latitude}</p>
              <p><strong>Longtitude:</strong> ${location.Longitude}</p>
              <p><strong>Coordinates:</strong> ${location.Location.coordinates}</p><h6>
              </p>
              </div>
          </div>
          `} else if (parkMatch) {
      html += `<div class="card">
            <div class="card-body">
              <p class="card-text">
             <h1> <p> Name: ${location.LocationName}</p></h1>
             <h3> <p>Address: ${location.Address}</p></h3>
              <h6><p>City: ${location.City}</p>
              <p>State: ${location.State}</p>
              <p>ZipCode: ${location.ZipCode}</p>
              <p>Phone: ${location.Phone}</p>
              <p>Fax: ${location.Fax}</p>
              <p>Latitude: ${location.Latitude}</p>
              <p>Longitude: ${location.Longitude}</p>
              <p>Cooridinates: ${location.Location.coordinates}</p></h6>  
              </p>
            </div>
          </div>
          `
    }
  } const resultDiv = document.getElementById("selected-park")
  resultDiv.innerHTML = html
}








