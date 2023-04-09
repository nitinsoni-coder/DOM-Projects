# **DOM Assignment 7**

## **Task 1**

The user has to remove the languages that have **"2.0"** in their name.

### **After Update**
![Output Image](./ass7.1-after.png)

### **Project Solution**
````javascript
    const mainLangDiv = document.querySelectorAll(".main__languages a");

    let oldStr = [];
    mainLangDiv.forEach((element, index) => {
    oldStr.push(element.innerHTML);
    if (index % 2 !== 0) {
        let newStr = element.innerHTML.replace("2.0", "");
        element.innerHTML = newStr
    }
    });
````

## **Task 2**

The user has make input box "enabled" so he can type anything and when he click on submit button then left side card which have different language names become as old language which had **"2.0"** in their name.

### **After Update**
![Output Image](./ass7.2-after.png)

### **Project Solution**
````javascript
const inputAndButtons = document.querySelectorAll("input, button");

inputAndButtons.forEach(element  => {
element.removeAttribute("disabled")
})

const addFunction = document.querySelector(".main__form-btn");

addFunction.addEventListener("click", (e) => {
e.preventDefault();
mainLangDiv.forEach((element, index) => {
    element.innerHTML = oldStr[index];
}) 
})
````