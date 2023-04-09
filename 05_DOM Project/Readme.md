# **DOM Assignment 5**

## **Task 1**

The user has to add the button name **"Pro Subscription"** on right side of **"contact"** button. The user has to add the **"anchor tag"** name as **"chinese"** and have to add one **"div"** card inside the recipe-gallery section.

### **After Update**
![Output Image](./Output/DOM%20P2%20SS.png)

### **Project Solution**
````javascript
    /*--------------------------------------first change-----------------------------------------------*/
      const mainNav = document.querySelector(".nav-center");
      const thirdDiv = mainNav.querySelector("div:nth-child(3)");

      const newAnchor = document.createElement("a");
      newAnchor.href = "#";
      newAnchor.className = "btn";
      newAnchor.textContent = "Pro Subscription";

      thirdDiv.append(newAnchor);

      /*------------------------------------second change-------------------------------------------------*/
      const mainTags = document.querySelector(".tags-container");
      const childElements = mainTags.querySelectorAll("*");
      const secondElement = childElements[1];

      const listAnchor = document.createElement("a");
      listAnchor.href = "#";
      listAnchor.textContent = "Chinese (7)";

      secondElement.append(listAnchor);

      /*----------------------------------------third change-----------------------------------------------*/
      const mainReceipeDiv = document.querySelector(".recipe-gallery");

      const newDiv = document.createElement("div");
      newDiv.className = "card";

      const span = document.createElement("span");
      span.textContent = "add 6th card here";
      span.style.fontSize = "20px";
      span.style.fontWeight = "600";

      newDiv.append(span);
      mainReceipeDiv.append(newDiv);
````