const nature = document.querySelector('.nature');


let currentSpeed = 5;
let generation = 1;
let lifeCount = 3;
let clicked = false;

const currentGeneration = document.querySelector(".currentGeneration");
const currentValues = document.querySelector(".currentValues");
const currentChance = document.querySelector(".currentChance");
currentGeneration.innerHTML = `Mevcut Jenerasyon= ${generation}`;
currentValues.innerHTML = `Mevcut Ortalama Hız Değeri= ${currentSpeed}`;
currentChance.innerHTML = `Mevcut Hak= ${lifeCount}`;

function closeModal() {
    const modal = document.querySelector(".modal")
    modal.classList.add("close")
    createIndividuel(currentSpeed);
}

function createIndividuel(individualSpeed) {
    if (currentSpeed < 5) {
        currentSpeed = 5;
    }
    for (let i = 0; i < 10; i++) {
        let firstLocationY = Math.floor(Math.random() * 520);
        let firstLocationX = Math.floor(Math.random() * 520);
        const newIndividual = document.createElement("div")
        newIndividual.classList.add("individual");
        nature.appendChild(newIndividual);
        newIndividual.style.left = firstLocationX + "px";
        newIndividual.style.top = firstLocationX + "px";


        const generationDNA = Math.floor(Math.random() * 156);
        let newSpeed = 0;
        const negPosSpeed = Math.floor(Math.random() * 2)
        //this part generate random number for simulating different DNA in population
        {
            if (generationDNA <= 80) {
                newSpeed = Math.random() * ((individualSpeed + 0.5) - (individualSpeed - 0.5)) + (individualSpeed - 0.5);
            }
            else if (generationDNA > 80 && generationDNA < 130) {
                if (negPosSpeed == 0) {
                    newSpeed = Math.random() * ((individualSpeed - 0.5) - (individualSpeed - 0.75)) + (individualSpeed - 0.75);
                }
                else {
                    newSpeed = Math.random() * ((individualSpeed + 0.75) - (individualSpeed + 0.5)) + (individualSpeed + 0.5);
                }
            }
            else if (generationDNA > 130 && generationDNA < 150) {
                if (negPosSpeed == 0) {
                    newSpeed = Math.random() * ((individualSpeed - 0.75) - (individualSpeed - 1)) + (individualSpeed - 1);
                }
                else {
                    newSpeed = Math.random() * ((individualSpeed + 1) - (individualSpeed + 0.75)) + (individualSpeed + 0.75);
                }
            }
            else if (generationDNA > 150 && generationDNA < 155) {
                if (negPosSpeed == 0) {
                    newSpeed = Math.random() * ((individualSpeed - 1) - (individualSpeed - 1.5)) + (individualSpeed - 1);
                }
                else {
                    newSpeed = Math.random() * ((individualSpeed + 1.5) - (individualSpeed + 1)) + (individualSpeed + 1);
                }
            }
            else {
                if (negPosSpeed == 0) {
                    newSpeed = Math.random() * ((individualSpeed - 1.5) - (individualSpeed - 2)) + (individualSpeed - 2);
                }
                else {
                    newSpeed = Math.random() * ((individualSpeed + 2) - (individualSpeed + 1.5)) + (individualSpeed + 1.5);
                }
            }

        }
        //end of random DNA

        newIndividual.setAttribute("speed", newSpeed)
        let angleX = Math.sin(Math.random() * 10)
        let angleY = Math.cos(Math.random() * 10)


        animate()
        function animate() {
            requestAnimationFrame(animate)
            if (firstLocationY > 530 || firstLocationY < 0) {
                angleY = angleY * -1
            }
            if (firstLocationX > 530 || firstLocationX < 0) {
                angleX = angleX * -1
            }
            firstLocationX -= angleX * newSpeed;
            firstLocationY -= angleY * newSpeed;
            newIndividual.style.top = firstLocationY + "px";
            newIndividual.style.left = firstLocationX + "px";
        }
        newIndividual.addEventListener("click", () => {
            newIndividual.remove();
            clicked = true;
        });
    }

    setTimeout(gameOver, 5000);

    function gameOver() {
        let surviversSpeed = 0;
        const survivers = document.querySelectorAll('.individual');
        let surviverCounter = survivers.length;

        survivers.forEach(surviver => {
            const surviverSpeed = surviver.getAttribute('speed');
            surviversSpeed += Number(surviverSpeed);
            surviver.remove()
        })
        currentSpeed = surviversSpeed / surviverCounter;
        surviversSpeed = 0;
        generation++;
        if (surviverCounter == 10) {
            lifeCount -= 1;
        }
        if (lifeCount <= 0) {
            if (clicked) {
                alert('Tüm haklarını kullandın. Avlarının yavaş üyelerini yakalayarak popülasyonun her nesilde daha da hızlanmasına sebep oldun. Oyuna tekrar başlamak için sayfayı yenileyebilirsin.');
            } else {
                alert("Tüm haklarını kullandın. Canlıları yakalamak için üzerine tıklamayı unutma! Oyuna tekrar başlamak için sayfayı yenileyebilirsin.")
            }
        } else {
            createIndividuel(currentSpeed);
        }



        currentGeneration.innerHTML = `Mevcut Jenerasyon= ${generation}`;
        currentValues.innerHTML = `Mevcut Ortalama Hız Değeri= ${currentSpeed.toFixed(2)}`
        currentChance.innerHTML = `Mevcut Hak= ${lifeCount}`;
    }

}