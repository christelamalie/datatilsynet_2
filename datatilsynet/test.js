function send(){
    event.preventDefault()
    console.log("Jeg er klikket på")

    const age = document.getElementById("age").value
    console.log(age)

    const answer1 = document.querySelector("input[name=question1]:checked").value;
    console.log(answer1)
}