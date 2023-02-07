/**выпадающее меню с выбором города */
function show(a) {
  document.querySelector(".text2").value = a;
}
let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};
/** стрелки в кнопках слайдера (костыль, но работает) */
const btnNext = document.querySelectorAll(".next");
const btnPrev = document.querySelectorAll(".prev");
btnNext.forEach((el) => el.addEventListener("click", change1));
btnPrev.forEach((el) => el.addEventListener("click", change));

const tar = document.querySelectorAll(".arrow");
const tar1 = document.querySelectorAll(".arrow1");

const tar2 = document.querySelectorAll(".arrow2");
const tar3 = document.querySelectorAll(".arrow3");

const btnNext1 = document.querySelectorAll(".next1");
const btnPrev1 = document.querySelectorAll(".prev1");
btnNext1.forEach((el) => el.addEventListener("click", change3));
btnPrev1.forEach((el) => el.addEventListener("click", change2));

function change2() {
  const a = setTimeout(function () {
    tar2.forEach((el) => el.classList.remove("arrow2"));
    tar2.forEach((el) => el.classList.add("arrow_active2"));
  }, 100);
  const b = setTimeout(function () {
    tar2.forEach((el) => el.classList.remove("arrow_active2"));
    tar2.forEach((el) => el.classList.add("arrow2"));
  }, 300);
}

function change3() {
  const a = setTimeout(function () {
    tar3.forEach((el) => el.classList.remove("arrow3"));
    tar3.forEach((el) => el.classList.add("arrow_active3"));
  }, 100);
  const b = setTimeout(function () {
    tar3.forEach((el) => el.classList.remove("arrow_active3"));
    tar3.forEach((el) => el.classList.add("arrow3"));
  }, 300);
}

function change() {
  const a = setTimeout(function () {
    tar.forEach((el) => el.classList.remove("arrow"));
    tar.forEach((el) => el.classList.add("arrow_active"));
  }, 100);
  const b = setTimeout(function () {
    tar.forEach((el) => el.classList.remove("arrow_active"));
    tar.forEach((el) => el.classList.add("arrow"));
  }, 300);
}

function change1() {
  const a = setTimeout(function () {
    tar1.forEach((el) => el.classList.remove("arrow1"));
    tar1.forEach((el) => el.classList.add("arrow_active1"));
  }, 100);
  const b = setTimeout(function () {
    tar1.forEach((el) => el.classList.remove("arrow_active1"));
    tar1.forEach((el) => el.classList.add("arrow1"));
  }, 300);
}

/** всплывающее окно */
const popUp = document.querySelector(".wrap_qwestion");
const btn = document.querySelector(".qwes");

btn.addEventListener("click", openModal);
popUp.addEventListener("click", closeModal);

function openModal() {
  popUp.style.display = "block";
}

function closeModal() {
  popUp.style.display = "none";
}

/**слайдер2 */
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth / 4;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth / 4;
  slidesContainer.scrollLeft -= slideWidth;
});
////////////////////////////////////////////////
(function () {
  function Carousel(setting) {
    if (document.querySelector(setting.wrap) === null) {
      console.error(`Carousel not fount selector ${setting.wrap}`);
      return;
    }

    let privates = {};

    this.prev_slide = () => {
      --privates.opt.position;

      if (privates.opt.position < 0) {
        privates.sel.wrap.classList.add("s-notransition");
        privates.opt.position = privates.opt.max_position - 1;
      }

      privates.sel.wrap.style[
        "transform"
      ] = `translateX(-${privates.opt.position}00%)`;
    };

    this.next_slide = () => {
      ++privates.opt.position;

      if (privates.opt.position >= privates.opt.max_position) {
        privates.opt.position = 0;
      }

      privates.sel.wrap.style[
        "transform"
      ] = `translateX(-${privates.opt.position}00%)`;
    };

    privates.setting = setting;

    privates.sel = {
      main: document.querySelector(privates.setting.main),
      wrap: document.querySelector(privates.setting.wrap),
      children: document.querySelector(privates.setting.wrap).children,
      prev: document.querySelector(privates.setting.prev),
      next: document.querySelector(privates.setting.next),
    };

    privates.opt = {
      position: 0,
      max_position: document.querySelector(privates.setting.wrap).children
        .length,
    };

    if (privates.sel.prev !== null) {
      privates.sel.prev.addEventListener("click", () => {
        this.prev_slide();
      });
    }

    if (privates.sel.next !== null) {
      privates.sel.next.addEventListener("click", () => {
        this.next_slide();
      });
    }
  }

  let a = new Carousel({
    main: ".js-carousel",
    wrap: ".js-carousel__wrap",
    prev: ".js-carousel__prev",
    next: ".js-carousel__next",
  });
})();
/////////////////таймер//////////////////////
const hour = document.querySelector(".h");
const min = document.querySelector(".m");
const sec = document.querySelector(".s");

function clock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  hour.innerHTML = hours;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;

  setTimeout("clock()", 1000);
}
clock();
/**cлайдер 3 */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentxSlide(n) {
  showSlides((slideIndex = n));
}

/* Основная функция слайдера */
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
