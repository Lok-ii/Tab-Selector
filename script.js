let content = document.querySelector(".content");
let tabs = document.querySelectorAll("button");
let tabContent = document.querySelectorAll("p");
let step = document.querySelector("h2");

tabs.forEach((e) => {
  e.addEventListener("click", ()=>{
    if (e.classList.contains("btn1")) {
        tabs[0].classList.add("selected");
        tabs[0].classList.remove("notSelected");
        tabs[1].classList.add("notSelected");
        tabs[2].classList.add("notSelected");
        tabs[1].classList.remove("selected");
        tabs[2].classList.remove("selected");
        tabContent[0].classList.remove("hidden");
        tabContent[1].classList.add("hidden");
        tabContent[2].classList.add("hidden");
      } else if (e.classList.contains("btn2")) {
        tabs[1].classList.add("selected");
        tabs[1].classList.remove("notSelected");
        tabs[0].classList.add("notSelected");
        tabs[2].classList.add("notSelected");
        tabs[0].classList.remove("selected");
        tabs[2].classList.remove("selected");
        tabContent[1].classList.remove("hidden");
        tabContent[0].classList.add("hidden");
        tabContent[2].classList.add("hidden");
      } else {
        tabs[2].classList.add("selected");
        tabs[2].classList.remove("notSelected");
        tabs[0].classList.add("notSelected");
        tabs[1].classList.add("notSelected");
        tabs[0].classList.remove("selected");
        tabs[1].classList.remove("selected");
        tabContent[2].classList.remove("hidden");
        tabContent[0].classList.add("hidden");
        tabContent[1].classList.add("hidden");
      }
      step.innerText = e.innerText;
  });
});

