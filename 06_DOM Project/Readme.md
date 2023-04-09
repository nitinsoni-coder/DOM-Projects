# **DOM Assignment 6**

## **Task 1**

The user has to change the **"logo image"**.

### **After Update**
![Output Image](./Output/DOM%20P3%20SS-1.png)

### **Project Solution**
````javascript
        const logo = document.querySelector(".logo");

        const currentSrc = logo.getAttribute("src");
        const newSrc = logo.setAttribute("src", "./assets/ineuron-logo.png");
````

## **Task 2**

The user have to change the app price from **"$4"** to **"$10"**.

### **After Update**
![Output Image](./Output/DOM%20P3%20SS-2.png)

### **Project Solution**
````javascript
 const appPriceDiv = document.querySelector(".app_price span");
 appPriceDiv.textContent = "$10";
````

