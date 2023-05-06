console.log("main js works");
fetch("http://localhost:3000/push/chest").then(res => res.json()).then(pushExercises => {
    const container = document.querySelector("ul#exerciseList")
    pushExercises.forEach(pushExercise => {
        pushExercise.forEach(excercise => {
            createInfoBox(excercise)
        })
        //display name, gif, description
        //create an h2 element for name
        //create an <img> element for gif
        //create a p element for description 
        // append elements to list item
        //append list item to container


    })
    
})
function createInfoBox(excercise){
    let infoBox = document.createElement("div")
    infoBox.classList.add("box")

    let name = document.createElement("h2")
    name.textContent = excercise.name

    let gif = document.createElement("img")
    gif.src = excercise.img
    gif.classList.add("excercise-gif")

    let description = document.createElement("p")
    description.textContent = excercise.description

    infoBox.append(name, gif, description)
    document.getElementById("exercise-stack").append(infoBox)
}








fetch("http://localhost:3000/pull").then(res => res.json()).then(json => console.log(json))
fetch("http://localhost:3000/legs").then(res => res.json()).then(json => console.log(json))
fetch("http://localhost:3000/core").then(res => res.json()).then(json => console.log(json))

