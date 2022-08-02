// items
const menu = [
    {
        id: 1,
        title: "cereals, yogurt and berries",
        category: "breakfast",
        price: 8.99,
        img: "images/breakyog.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec urna nec mauris vehicula egestas. Orci varius natoque penatibus et.`,
    },
    {
        id: 2,
        title: "roasted meat and salad",
        category: "lunch",
        price: 25.99,
        img: "images/lunch_meat.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec urna nec mauris vehicula egestas. Orci varius natoque penatibus et.`,
    },
    {
        id: 3,
        title: "raspberry milkshake",
        category: "shakes",
        price: 10.99,
        img: "images/raspberry.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec urna nec mauris vehicula egestas. Orci varius natoque penatibus et.`,
    },
    {
        id: 4,
        title: "belgian waffles",
        category: "breakfast",
        price: 6.99,
        img: "images/breakfast_waffles.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec urna nec mauris vehicula egestas. Orci varius natoque penatibus et.`,
    },
    {
        id: 5,
        title: "ham sandwich and lettuce",
        category: "lunch",
        price: 15.99,
        img: "images/lunch_sandwich.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec urna nec mauris vehicula egestas. Orci varius natoque penatibus et.`,
    },
    {
        id: 6,
        title: "coffee milkshake",
        category: "shakes",
        price: 12.99,
        img: "images/shake_coffee.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec urna nec mauris vehicula egestas. Orci varius natoque penatibus et.`,
    },
    {
        id: 7,
        title: "eggs, vegetables and bread",
        category: "breakfast",
        price: 10.99,
        img: "images/breakfast_eggs.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec urna nec mauris vehicula egestas. Orci varius natoque penatibus et.`,
    },
    {
        id: 8,
        title: "fondant",
        category: "lunch",
        price: 30.99,
        img: "images/lunch_dessert.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec urna nec mauris vehicula egestas. Orci varius natoque penatibus et.`,
    },
    {
        id: 9,
        title: "chocolate milkshake",
        category: "shakes",
        price: 15.99,
        img: "images/shake_chocolate.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec urna nec mauris vehicula egestas. Orci varius natoque penatibus et.`,
    },
    {
        id: 10,
        title: "grilled dinner",
        category: "dinner",
        price: 39.99,
        img: "images/dinner.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec urna nec mauris vehicula egestas. Orci varius natoque penatibus et.`,
    },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayMenuButtons();
});  


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
           return `<article class="menu-item">
           <img src=${item.img} class="photo" alt=${item.title}>
           <div class="item-info">
               <header>
                   <h4>${item.title}</h4>
                   <h4 class="price">${item.price}</h4>
               </header>
               <p class="item-text">
               ${item.desc}</p>
           </div>
       </article>`;      
       });
       displayMenu = displayMenu.join("");
       sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },["all"]);
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" 
        type="button" 
        data-id="${category}">${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");

    // filter items
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){           
            if(menuItem.category === category){
                return menuItem;
            }
        });
        if(category === "all"){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }
    });
});
}