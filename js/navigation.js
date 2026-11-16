import {renderTrails} from "./app.js"
import { hikingTrails } from "./data.js"
import { renderSaved } from "./saved.js"

const trailsContainer = document.querySelector(".trailsContainer")
const allBtn = document.getElementById("allTrails")
const savedBtn = document.getElementById("savedTrails")


allBtn.addEventListener("click", ()=>{
    console.log("all")
    trailsContainer.innerHTML = ""
    renderTrails(hikingTrails);
})

savedBtn.addEventListener("click", ()=>{
    trailsContainer.innerHTML = ""
    renderSaved();
})
