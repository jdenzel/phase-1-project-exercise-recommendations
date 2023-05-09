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

    const dropdown = document.getElementById('workout');
    dropdown.addEventListener('mouseover', function() {
    dropdown.style.borderColor = '#8b3321';
    dropdown.style.color = '#eea993';
});
    dropdown.addEventListener('mouseout', function() {
    dropdown.style.borderColor = 'black';
    dropdown.style.color = 'white';
});

function createInfoBox(exercise){
    let infoBox = document.createElement("div")
    infoBox.classList.add("box")
    let name = document.createElement("h2")
    name.textContent = exercise.name
    let gif = document.createElement("img")
    gif.src = exercise.gif
    gif.classList.add("exercise-gif")
    let musclesWorked = document.createElement("p")
    musclesWorked.textContent = exercise.musclesWorked
    let description = document.createElement("p")
    description.textContent = exercise.description
    infoBox.append(name, gif, musclesWorked, description)
    document.getElementById("exercisesStack").append(infoBox)

}

