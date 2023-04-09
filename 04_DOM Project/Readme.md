# **DOM Assignment 4**

## **Task 1**

The user has to change the name of **"Character 2"** to **"The Archer"** and name of of **"Character 4"** to **"The Goblin"**. And user has to change the Hero stat **"Background color"** and **"Text color"**.
 
### **After Update**
![Output Image](./Output/DOM%20P1%20SS.png)

### **Project Solution**
```javascript
    /*------------------------------To change the Hero Name --------------------------------------*/
      const archerContainer = document.querySelector(".archer");
      const archerChildElement = archerContainer.querySelectorAll("div")[2];
      const archerChild = archerChildElement.innerText = "The Archer";


      const goblinContainer = document.querySelector(".goblin");
      const goblinChildElement = goblinContainer.querySelectorAll("div")[2];
      const goblinChild = goblinChildElement.innerText = "The Goblin";

    /* -----------------------------To change the hero stat div background color and text color-----------------------------*/
      const barbarianStat = document.querySelector(".clash-card__unit-stats--barbarian");
      barbarianStat.classList.add("barbianStatColor");   
      const newBarbiClass = document.querySelector(".barbianStatColor");

      newBarbiClass.style.backgroundColor = "#ec9b3b";
      newBarbiClass.style.color = "white"

      const archerStat = document.querySelector(".clash-card__unit-stats--archer");
      archerStat.classList.add("archerStatColor");   
      const newArcherClass = document.querySelector(".archerStatColor");

      newArcherClass.style.backgroundColor = "#ee5487";
      newArcherClass.style.color = "white"

      const giantStat = document.querySelector(".clash-card__unit-stats--giant");
      giantStat.classList.add("giantStatColor");   
      const newGiantClass = document.querySelector(".giantStatColor");

      newGiantClass.style.backgroundColor = "#f6901a";
      newGiantClass.style.color = "white"

      const goblinStat = document.querySelector(".clash-card__unit-stats--goblin");
      goblinStat.classList.add("goblinStatColor");   
      const newGoblinClass = document.querySelector(".goblinStatColor");

      newGoblinClass.style.backgroundColor = "#82bb30";
      newGoblinClass.style.color = "white"

      const wizardStat = document.querySelector(".clash-card__unit-stats--wizard");
      wizardStat.classList.add("wizardStatColor");   
      const newWizardClass = document.querySelector(".wizardStatColor");

      newWizardClass.style.backgroundColor = "#4facff";
      newWizardClass.style.color = "white"


    /*------------------------------------------- To change the hero stat last div text color-------------------------------*/
      const getClashCard = document.querySelectorAll(".no-border");
      getClashCard.forEach((element) => {
        element.classList.add("whiteColor")
      })

      const getNewWhiteClass = document.querySelectorAll(".whiteColor");

      getNewWhiteClass.forEach(element => {
        element.style.color = "white"
      })
```
---
<br/>