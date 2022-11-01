const above = document.getElementsByClassName("backToTop");
const Slide = document.querySelectorAll(".slider");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const accordion = document.getElementsByClassName('box');
const modalBtn = document.querySelector('.modalButton');


//acordion menu
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}

//slider
const nextSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('active');
    }
    else {
        Slide[0].classList.add('active')
    }
}
const prevSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add('active');
    }
    else {
        Slide[Slide.length - 1].classList.add('active')
    }
}
nextButton.addEventListener('click', () => {
    nextSlide();
})
prevButton.addEventListener('click', () => {
    prevSlide();
})



//back to top
window.addEventListener("scroll", () => {
    const aboveDistance = this.window.scrollY; // Bu fonskiyon bize back To Top butonunun en üste olan uzaklığını verir. (her scroll olduğunda)
    if (aboveDistance > 200) {
        above[0].style.display = "block";
    }
    else {
        above[0].style.display = "none";
    }
})

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




//dropdown hamburger menu
function onOff() {
    let onHamburger = document.querySelector('.nav');
    onHamburger.classList.toggle('active');
}

//Modal
const modal = document.getElementById("myModal");
const btn1 = document.getElementById("button4");
const text = document.getElementsByClassName("close")[0];

btn1.onclick = function () {
    modal.style.display = "block";
}

text.onclick = function () {
    modal.style.display = "none";
}

const modalButton = document.querySelector(".modalButton");
const firstname = document.getElementById("firstName");
const surname = document.getElementById("surName");
const city = document.getElementById("city");
const tarih = document.querySelector(".tarih");

modalButton.addEventListener("click", function (e) {
    console.log(mydate)
    if (firstname.value === "" || surname.value === "" || tarih.value === "") {
        alert("Lütfen doğru bir tüm alanları doldurunuz.");
    }
    else {
        alert("Randevunuz oluşturuldu.");
        firstname.value = "";
        surname.value = "";
        tarih.value = "";
    }
})






