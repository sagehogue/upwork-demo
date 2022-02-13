function toggleClasses(e, querySelector) {
    console.log(e.target.classList)
    // if (e.target.classList.contains("open") || e.target.classList.contains("closed") || e.target.nodeName == "P") {
        document.querySelectorAll(querySelector).forEach((el) => {
            el.classList.toggle("open")
            el.classList.toggle("closed")
        })
    // }
    console.log(document.querySelectorAll(querySelector))
    
}

document.getElementById("hrGroup1").addEventListener("click", (e) => {
    toggleClasses(e, ".hrGroup1")
})
document.getElementById("hrGroup2").addEventListener("click", (e) => {
    toggleClasses(e, ".hrGroup2")
})
document.getElementById("hrGroup3").addEventListener("click", (e) => {
    toggleClasses(e, ".hrGroup3")
})