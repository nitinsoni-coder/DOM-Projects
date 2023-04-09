# **DOM Assignment 1**

## **Task 1**

The user has to append a new element in the navigation menu named **"Hire Me"** after the **"Projects"**.

### **After Update**
![Output Image](./firstAssignmentImage/task1Output.png)

### **Project Solution**
```javascript
const menuLink = document.querySelector("nav ul");
const hireLi = document.createElement("li");  
hireLi.innerHTML = `<a href="#">Hire Me</a>`;
menuLink.append(hireLi);
```
---
<br/>

## **Task 2**

The user has to change the input box placeholder text **"Search"** to "**Search My Project**".

### **After Update**
![Output Image](./firstAssignmentImage/task2Output.png)

### **Project Solution**
```javascript
const input2 = document.querySelector("input");
input2.placeholder = "Search";
```
---
<br/>

## **Task 3**

The user has to change the text from **"National and International Client"** to "**iNeuron Intelligence Pvt Ltd.**".

### **After Update**
![Output Image](./firstAssignmentImage/task3Output.png)

### **Project Solution**
```javascript
 const heroLeftSection = document.querySelector("div.hero-left-section > p:nth-child(2) > span:nth-child(5)");

heroLeftSection.innerHTML = "iNeuron Intelligence Pvt Ltd."
```
---
<br/>

## **Task 4**

The user has to change the user profile image**".

### **After Update**
![Output Image](./firstAssignmentImage/task4Output.png)

### **Project Solution**
```javascript
const image = document.querySelector("img");
image.src = "./person-image.jpg"
```
---
<br/>

## **Task 5**

The user has to add the button named **"Support Me"** aside by **"Chat Me"** button.

### **After Update**
![Output Image](./firstAssignmentImage/task5Output.png)

### **Project Solution**
```javascript
const newBtn = document.querySelector(".hero-right-section-btns");
const supportBtn = document.createElement("button");
supportBtn.innerText = "Support Me";
newBtn.append(supportBtn);
```
---

<br/>

# **DOM Assignment 2**

## **Task 1**

The user has to append a new element in the navigation menu named **"Projects"** and also have to change the color of accordion heading background color.

### **After Update**
![Output Image](./secondAssignmentImage/task1Output.png)

### **Project Solution**
***To check the solution go to about.js file***
```javascript
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
```
---
<br/>

## **Task 2**

The user has to append new accordion named **"Skills"** after the **"Hobbies"**.

### **After Update**
![Output Image](./secondAssignmentImage/task2Output.png)

### **Project Solution**
***To check the solution go to about.js file***
```javascript
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
```
---
<br/>

# **DOM Assignment 3**

## **Task 1**

The user has to write same text inside both the input field of **"User Output Board"** and **"User Input Board"**.

### **After Update**
![Output Image](./thirdAssignmentImage/task1Output.png)

### **Project Solution**
***To check the solution go to contact.html file***
```javascript
const outputName = document.querySelector(".enterName");
outputName.value = "FSJS 2.0";

const outputEmail = document.querySelector(".enterMail");
outputEmail.value = "fsjs@ineuron.ai";

const outputMessage = document.querySelector(".enterMessage");
outputMessage.value = "Hello World";

const inputName = document.querySelector(".userName");
inputName.value = "FSJS 2.0";

const inputEmail = document.querySelector(".userEmail");
inputEmail.value = "fsjs@ineuron.ai";

const inputMessage = document.querySelector(".userMessage");
inputMessage.value = "Hello World";
```
---
<br/>

