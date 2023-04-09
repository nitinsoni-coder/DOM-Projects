# **DOM Assignment 9**

## **Task 1**

The user have to change the color of **"Gabrielle Essence Eau De Parfum"** text to **"red"** color.

### **After Update**
![Output Image](./ass9.1-after.png)

### **Project Solution**
````javascript
  const title = document.querySelector("h1");
  title.style.color = "red";
````

## **Task 2**

The user have to change the hover color of **"Add to cart"** button to **"red"** color.

### **After Update**
![Output Image](./ass9.2-after.png)

### **Project Solution**
````javascript
  const cartColor = document.getElementsByClassName("add-to-cart")[0];

  cartColor.addEventListener("mouseover", () => {
  cartColor.style.backgroundColor = "red";
  });
````