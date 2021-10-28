// const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// let errors = 0

// function onload() {
//     const focusedElements = [...document.forms[0].elements]
//     for (let elm of focusedElements) {
//         elm.addEventListener("focus", function() {
//             this.classList.add("focused")
//         })

//         elm.addEventListener("blur", function() {
//             this.classList.remove("focused")
//         })

//         if (elm.tagName === "INPUT") {
//             elm.addEventListener("input", function() {
//                 if (elm.name === "pass") {
//                     checkLength(elm)
//                 }
//                 if (elm.name === "email") {
//                     checkEmail(elm)
//                 }
//             })
//         }
//     }

// }

// //stokda bitenler
// const fruits = [1, 3]

// function checkFruit(elm) {
//     if (elm.value !== "" && fruits.includes(Number(elm.value))) {
//         elm.nextElementSibling.textContent = "Bu meyve bazada yoxdur !"
//         errors++;
//     } else {
//         elm.nextElementSibling.textContent = ""
//         errors--
//     }
// }

// function checkLength(element) {
//     if (element.value !== "" && element.value.length < 5) {
//         element.nextElementSibling.textContent = "parol etibarli deyil"
//         errors++
//     } else {
//         element.nextElementSibling.textContent = ""
//         errors--
//     }
// }

// function checkEmail(elm) {
//     if (elm.value !== "" && !EMAIL_REGEX.test(elm.value)) {
//         elm.nextElementSibling.textContent = "Email duzgun deyil"
//         errors++
//     } else {
//         elm.nextElementSibling.textContent = ""
//         errors--
//     }
// }

// function getFormValues(event) {
//     event.preventDefault();
//     let elms = document.forms[0].elements
//     for (let elm of[...elms]) {
//         required(elm)
//     }
//     const data = new FormData(event.target);
//     if (errors === 0) {
//         document.querySelector(".form-data").innerHTML = JSON.stringify(Object.fromEntries(data))
//     }
// }

// function required(element) {
//     if (element.nextElementSibling) {
//         if (element.value === "") {
//             element.nextElementSibling.textContent = "Mutleq daxil edilmelidir"
//             errors++
//         } else {
//             element.nextElementSibling.textContent = ""
//             errors--
//         }
//     }
// }

const element = document.querySelector(".ball")
const coords = element.getBoundingClientRect()

document.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "w":
            coords.y -= 10
            break;
        case "a":
            coords.x -= 10
            break;
        case "d":
            coords.x += 10
            break;
        case "s":
            coords.y += 10
            break;
    }
    element.style.top = `${coords.y}px`
    element.style.left = `${coords.x}px`
})