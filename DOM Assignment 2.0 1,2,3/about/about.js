let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

/* -------------------------------second assignment-----------------------------------*/

//--------------------------------------------first task------------------------------------------------//
const menuLink = document.querySelector("nav ul");
const projectsLi = document.createElement("li");
projectsLi.innerHTML = `<a href="#">Projects</a>`;
menuLink.append(projectsLi);

const contactRemove = menuLink.children[2];

contactRemove.remove();

const para = document.querySelectorAll(".accordian h3");

para.forEach((element) => {
  element.style.display = "block";
  element.style.backgroundColor = "#DADAF8";
});

// --------------------------------------------------second task-------------------------------------------------
const newAccord = document.querySelector(".accordian-wrapper");
const newDiv = document.createElement("div");

newDiv.className = "accordian";

const newH3 = document.createElement("h3");
newH3.innerText = "Skills";

const newPara = document.createElement("p");
newPara.innerText =
  "I posses a very good command over the Full stack Development technologies like MERN which can be seen in my work over the Github.";

newDiv.append(newH3);
newDiv.append(newPara);
newAccord.append(newDiv);
