import { hikingTrails } from "./data.js"

    //localStorage.setItem("key", "value (can have this as an array)")
    if (!localStorage.getItem("savedTrails")) {
        localStorage.setItem("savedTrails", JSON.stringify([]));
    }
    
    const savedTrails = JSON.parse(localStorage.getItem("savedTrails"))

    const trailsContainer = document.querySelector(".trailsContainer")

    hikingTrails.forEach(trail => {
        trail.starFilled = savedTrails.some(saved => saved.id === trail.id);
    });

    renderTrails(hikingTrails);

    export function renderTrails(trailList) {

    trailList.forEach( (trail) => {

        const trailCard = document.createElement("div")
        trailCard.classList.add("trailCard")

        const trailImg = document.createElement("div")
        trailImg.classList.add("trailImg")

        const saveBtn = document.createElement("button")
        saveBtn.classList.add("saveBtn")
        saveBtn.innerText = "Save"

        const star = document.createElement("div")
        star.classList.add("starIcon")
        if (trail.starFilled) {
            star.classList.add("starFilled");
        }
        
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
        trailCard.appendChild(saveBtn)
        saveBtn.appendChild(star)
        trailCard.appendChild(trailImg)
        trailCard.appendChild(trailTitle)
        trailCard.appendChild(trailPark)
        trailCard.appendChild(trailLenDif)

        saveBtn.addEventListener("click", ()=>{
            console.log(trail.starFilled)

            if (!trail.starFilled) {
                trail.starFilled = true;
                star.classList.add("starFilled");
                addTrail(trail.id);

            } else {
                trail.starFilled = false;
                star.classList.remove("starFilled");
                removeTrail(trail.id);
            }
        })

    })

    }


    function addTrail(id) {
        const trail = hikingTrails.find(trail => trail.id === id);

        if (trail) {
            const trailSave = JSON.parse(localStorage.getItem("savedTrails"));

            if (!trailSave.some(saved => saved.id === id)) {
            trailSave.push(trail);
            localStorage.setItem("savedTrails", JSON.stringify(trailSave));
        }
        }
    }

    export function removeTrail(id) {
    let trailDel = JSON.parse(localStorage.getItem("savedTrails"));

    trailDel = trailDel.filter(trail => trail.id !== id);

    localStorage.setItem("savedTrails", JSON.stringify(trailDel));

    const trailOrig = hikingTrails.find(trail => trail.id === id);

    if (trailOrig) {
        trailOrig.starFilled = false;
    }

}
        