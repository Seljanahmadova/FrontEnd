// Navbar JS
// alinmadi, hevesden dusmemekcun yarimciq qoydum :D

$(document).ready(function () {
    $("#home").click(function () {
        console.log("yes!")
    })
})


// Accordion JS=>




// let accText = document.getElementsByClassName(".accText")

// $(document).ready(function () {
//     $(".accTitle").click(function () {
//         console.log(accText)
//         // $(".accText").css("display", "block")
//     })
// }) JQuery alinmadi, kecek JAVASCRIPTe


let accList = document.querySelectorAll(".accTitle");
let spanTitle = document.querySelector("#spanTitle")

for (let i = 0; i < accList.length; i++) {
    accList[i].addEventListener("click", function () {

        if (this.nextElementSibling.style.maxHeight == "") {
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
            spanTitle.style.background = "red"
        } else {
            this.nextElementSibling.style.maxHeight = "";
        }

    });
}

// icon-un, background-un deyismesi qaldi.