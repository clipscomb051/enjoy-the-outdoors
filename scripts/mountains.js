"use strict"
window.onload = function (_event) {
    const mountainCategory = document.getElementById("mountainSelect")
    mountainCategory.onchange = renderMountaincard

    populateMountainCategory(mountainsArray, mountainCategory)
}

function populateMountainCategory(mountainsArray, mountainSelect) {
    let html = "<option>Select Mountain</option>"
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const mountains = mountainsArray[index];
        html += `<option value="${mountains.name}">${mountains.name}</option>`
    }
    mountainSelect.innerHTML = html
}



function renderMountaincard(event) {
    const mountainCoolid = event.target.value
    let html = ""
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const mountain = mountainsArray[index];
        if (mountain.name === mountainCoolid) {
            html += `<div class="card" style="width: 30rem;" style= padding-bottom: 10%;>
            <img src="/data/images/${mountain.img}" class="card-img-top" alt="...">
            <div class="card-body" id="mountain">
            
              <p class="card-text" id="mountaintext">
              <p>Name: ${mountain.name}</p>
              <p>Description: ${mountain.desc}</p>
              <p>Effort: {mountain.effort}</p>
              <p>Latitude: ${mountain.coords.lat}</p>
              <p>Longitude: ${mountain.coords.lng}</p>
              </p>
            </div>
          </div>
          `
        }
        const resultDiv = document.getElementById("selected-mountain")
        resultDiv.innerHTML = html
    }
}
