import { removeTrail } from "./app.js";

const trailsContainer = document.querySelector(".trailsContainer")

export const renderSaved = ()=>{
        const trails = JSON.parse(localStorage.getItem("savedTrails"));
        trailsContainer.innerHTML = "";
        
        trails.forEach( (trail) => {

        const trailCard = document.createElement("div")
        trailCard.classList.add("trailCard")

        const trailImg = document.createElement("div")
        trailImg.classList.add("trailImg")

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("saveBtn")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.style.width = 55 + "px";

        const trailTitle = document.createElement("div")
        trailTitle.classList.add("trailTitle")
        trailTitle.innerText = trail.name

        const trailPark = document.createElement("div")
        trailPark.classList.add("trailPark")
        trailPark.innerText = trail.park

        const trailLenDif = document.createElement("div")
        trailLenDif.classList.add("trailPark")
        trailLenDif.innerText = trail.difficulty + "   |    " 
        + trail.miles + " mi"

        trailsContainer.appendChild(trailCard)
        trailCard.appendChild(deleteBtn)
        trailCard.appendChild(trailImg)
        trailCard.appendChild(trailTitle)
        trailCard.appendChild(trailPark)
        trailCard.appendChild(trailLenDif)

        deleteBtn.addEventListener("click", ()=>{
            console.log(trail.starFilled)

            trail.starFilled = false;
            removeTrail(trail.id)

            trailsContainer.innerHTML = "";
            renderSaved();

        })

    })

    }