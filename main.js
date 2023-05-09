const allExercises = []
fetch("http://localhost:3000/exercises").then(res => res.json()).then(exercises => {
    exercises.forEach(exercise => {
        allExercises.push(exercise)
        createInfoBox(exercise)
        
    });
});
const select = document.getElementById('workout')
const exerciseList = document.getElementById("exercisesStack")
select.addEventListener('change', (e) =>{
    exerciseList.innerHTML =''
    const selected = e.target.value
    const allExercisesCopy = [...allExercises];
    filteredExercises = allExercisesCopy.filter(exercise => {
        if(selected === 'All'){
            return exercise
        }
        else if(exercise.musclesWorked === selected){
            return exercise
        }
        })
    filteredExercises.forEach(exercise => createInfoBox(exercise))
})

const box = document.getElementsByClassName('box')
    box.addEventListener('mouseover', function() {
    box.style.borderColor = 'white';
    console.log("you are hovering")
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
    document.getElementById("exercisesStack").append(infoBox)

}

