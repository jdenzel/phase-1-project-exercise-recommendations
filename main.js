console.log("main js works");
fetch("http://localhost:3000/push").then(res => res.json()).then(json => console.log(json))
fetch("http://localhost:3000/pull").then(res => res.json()).then(json => console.log(json))
fetch("http://localhost:3000/legs").then(res => res.json()).then(json => console.log(json))
fetch("http://localhost:3000/core").then(res => res.json()).then(json => console.log(json))

