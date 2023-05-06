fetch("http://localhost:3000/push").then(res => res.json()).then(muscleGroup => {
    muscleGroup.forEach(pushExercises => {
        createInfoBox(pushExercises)
    });
})
fetch("http://localhost:3000/pull").then(res => res.json()).then(muscleGroup => {
    muscleGroup.forEach(pullExercises => {
        createInfoBox(pullExercises)
    });
})
fetch("http://localhost:3000/legs").then(res => res.json()).then(muscleGroup => {
    muscleGroup.forEach(legsExercises => {
        createInfoBox(legsExercises)
    });
})
fetch("http://localhost:3000/core").then(res => res.json()).then(muscleGroup => {
    muscleGroup.forEach(coreExercises => {
        createInfoBox(coreExercises)
    });
})

const push = document.getElementById('pushExercises')
const pull = document.getElementById('pullExercises')
const legs = document.getElementById('legsExercises')
const core = document.getElementById('coreExercises')
const errorElement = document.getElementById('error')

const form = document.getElementById('chooseWorkout')
form.addEventListener('submit', (e) => {
    let message = []
    if(select.value ==''){
        message.push("Choose a workout")
        console.log(message)
    }
    if(message.length > 0){
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }
    
})

function createInfoBox(excercise){
    let infoBox = document.createElement("div")
    infoBox.classList.add("box")

    let name = document.createElement("h2")
    name.textContent = excercise.name

    let gif = document.createElement("img")
    gif.src = excercise.gif
    gif.classList.add("excercise-gif")

    let musclesWorked = document.createElement("p")
    musclesWorked.textContent = excercise.musclesWorked

    let description = document.createElement("p")
    description.textContent = excercise.description

    infoBox.append(name, gif, musclesWorked, description)
    document.getElementById("exercisesList").append(infoBox)
}

