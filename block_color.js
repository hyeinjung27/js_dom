const div = document.querySelector('div')
const divs = document.querySelectorAll('div')

function addColor(event) {
    const picked = event.target
    const surrounding = picked.parentNode

    picked.style.backgroundColor = "yellow"

    if (surrounding.tagName === "DIV")
    surrounding.style.backgroundColor = "black"

    divs.forEach(function(div){
        if (div !== picked && div !== surrounding){
            div.style.backgroundColor = "white"
        }
    })
}

div.addEventListener('click', addColor)