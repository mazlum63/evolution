const farm = document.getElementById('farm');


let currentSize = 50;
let currentColor = 50;
let counter = 3;
let size = 0;
let color = 0;
let generation = 1;


const currentGeneration = document.querySelector(".currentGeneration");
const currentValues = document.querySelector(".currentValues");
currentGeneration.innerHTML = "Mevcut Jenerasyon= " + generation;
currentValues.innerHTML = `Mevcut Ortalama Renk Degeri= ${Math.floor(currentColor)} <br> Mevcut Ortalama Buyukluk Degeri= ${Math.floor(currentSize)}`



createTomato(currentSize, currentColor)



function createTomato(tomatoSize, tomatoColor) {
    const newTomatoTree = document.createElement("div");
    newTomatoTree.classList.add("tomato-tree")
    for (let i = 0; i < 10; i++) {
        const newTomatoBranch = document.createElement("div");
        newTomatoBranch.classList.add("tomato-branch");
        const newTomato = document.createElement("div");
        newTomato.classList.add("tomato");
        const newTomatoHead = document.createElement("div");
        newTomatoHead.classList.add("tomato-head");
        const newTomatoBody = document.createElement("div");
        newTomatoBody.classList.add("tomato-body");


        const generationDNA = Math.floor(Math.random() * 156);
        let newGen = 0;
        let newRed = 0;
        const negPosSize = Math.floor(Math.random() * 2)
        const negPosColor = Math.floor(Math.random() * 2);
        //this part generate random number for simulating different DNA in population
        {
            if (generationDNA <= 80) {
                newGen = Math.floor(Math.random() * ((tomatoSize + 3) - (tomatoSize - 3)) + (tomatoSize - 3));
                newRed = Math.floor(Math.random() * ((tomatoColor + 6) - (tomatoColor - 6)) + (tomatoColor - 6));
            }
            else if (generationDNA > 80 && generationDNA < 130) {
                if (negPosSize == 0) {
                    newGen = Math.floor(Math.random() * ((tomatoSize - 3) - (tomatoSize - 5)) + (tomatoSize - 5));
                }
                else {
                    newGen = Math.floor(Math.random() * ((tomatoSize + 5) - (tomatoSize + 3)) + (tomatoSize + 3));
                }

                if (negPosColor == 0) {
                    newRed = Math.floor(Math.random() * ((tomatoColor - 6) - (tomatoColor - 12)) + (tomatoColor - 12));
                } else {
                    newRed = Math.floor(Math.random() * ((tomatoColor + 12) - (tomatoColor + 6)) + (tomatoColor + 6));
                }
            }
            else if (generationDNA > 130 && generationDNA < 150) {
                if (negPosSize == 0) {
                    newGen = Math.floor(Math.random() * ((tomatoSize - 5) - (tomatoSize - 7)) + (tomatoSize - 7));
                }
                else {
                    newGen = Math.floor(Math.random() * ((tomatoSize + 7) - (tomatoSize - 5)) + (tomatoSize - 5));
                }
                if (negPosColor == 0) {
                    newRed = Math.floor(Math.random() * ((tomatoColor - 12) - (tomatoColor - 18)) + (tomatoColor - 18));
                } else {
                    newRed = Math.floor(Math.random() * ((tomatoColor + 18) - (tomatoColor + 12)) + (tomatoColor + 12));
                }
            }
            else if (generationDNA > 150 && generationDNA < 155) {
                if (negPosSize == 0) {
                    newGen = Math.floor(Math.random() * ((tomatoSize - 7) - (tomatoSize - 10)) + (tomatoSize - 10));
                }
                else {
                    newGen = Math.floor(Math.random() * ((tomatoSize + 10) - (tomatoSize + 7)) + (tomatoSize + 7));
                }
                if (negPosColor == 0) {
                    newRed = Math.floor(Math.random() * ((tomatoColor - 18) - (tomatoColor - 24)) + (tomatoColor - 24));
                } else {
                    newRed = Math.floor(Math.random() * ((tomatoColor + 24) - (tomatoColor + 18)) + (tomatoColor + 18));
                }
            }
            else {
                if (negPosSize == 0) {
                    newGen = Math.floor(Math.random() * ((tomatoSize - 10) - (tomatoSize - 14)) + (tomatoSize - 14));
                }
                else {
                    newGen = Math.floor(Math.random() * ((tomatoSize + 15) - (tomatoSize + 10)) + (tomatoSize + 10));
                }
                if (negPosColor == 0) {
                    newRed = Math.floor(Math.random() * ((tomatoColor - 24) - (tomatoColor - 30)) + (tomatoColor - 30));
                } else {
                    newRed = Math.floor(Math.random() * ((tomatoColor + 30) - (tomatoColor + 24)) + (tomatoColor + 24));
                }
            }

        }
        //end of random DNA

        newTomato.style.width = newGen + 'px'
        newTomato.style.height = newGen + 'px'
        newTomato.setAttribute("size", newGen)
        newTomato.setAttribute("color", newRed)
        newTomatoBody.style.backgroundColor = `rgb(${newRed},0,0)`

        newTomato.appendChild(newTomatoHead);
        newTomato.appendChild(newTomatoBody);
        newTomatoBranch.appendChild(newTomato);
        newTomatoTree.appendChild(newTomatoBranch)
    }
    farm.appendChild(newTomatoTree)
    currentColor = color / 3;
    currentSize = size / 3;

    const tomatoes = document.querySelectorAll(".tomato")

    tomatoes.forEach(item => {
        item.addEventListener("click", () => {
            if (counter == 0) {
                const oldTomatoes = document.querySelectorAll(".tomato");
                oldTomatoes.forEach(oldTomat => {
                    oldTomat.style.pointerEvents = 'none';
                })
                currentColor = color / 3;
                currentSize = size / 3;
                if (currentColor > 255) {
                    currentColor = 255
                }
                if (currentColor < 50) {
                    currentColor = 50
                }
                if (currentSize > 150) {
                    currentSize = 150;
                }
                if (currentSize < 50) {
                    currentSize = 50;
                }
                createTomato(currentSize, currentColor);
                counter = 3;
                size = 0;
                color = 0;
                generation += 1;
                if (currentColor >= 255) {
                    currentColor = 255
                }
                if (currentSize >= 150) {
                    currentSize = 150;
                }
                const currentGeneration = document.querySelector(".currentGeneration");
                const currentValues = document.querySelector(".currentValues");
                currentGeneration.innerHTML = "Mevcut Jenerasyon= " + generation;
                currentValues.innerHTML = `Mevcut Ortalama Renk Degeri= ${Math.floor(currentColor)} <br> Mevcut Ortalama Buyukluk Degeri= ${Math.floor(currentSize)}`
                return true;
            }
            item.style.pointerEvents = 'none';
            item.style.backgroundColor = 'gray';
            const itemSizeAtt = Number(item.getAttribute("size"));
            const itemColorAtt = Number(item.getAttribute("color"));
            size += itemSizeAtt;
            color += itemColorAtt;
            counter -= 1;
        })
    })
}


function closeModal() {
    const modal = document.querySelector(".modal")
    modal.classList.add("close")
}