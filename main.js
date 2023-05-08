const allExercises = []
fetch("http://localhost:3000/exercises").then(res => res.json()).then(exercises => {
    exercises.forEach(exercise => {
        allExercises.push(exercise)
        
    });
});
const select = document.getElementById('workout')
const exerciseList = document.getElementById("exercisesList")
select.addEventListener('change', (e) =>{
    console.log(e)
    exerciseList.innerHTML =''
    const selected = e.target.value
    const allExercisesCopy = [...allExercises];
    filteredExercises = allExercisesCopy.filter(exercise => exercise.musclesWorked === selected)
    filteredExercises.forEach(exercise => createInfoBox(exercise))
})


console.log(allExercises)
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

