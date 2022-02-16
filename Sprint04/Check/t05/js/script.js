let appetizers = new Map();
appetizers.set('HUMMUS', '4.20');
appetizers.set('GUACAMOLE', '4.21');

let salads = new Map();
salads.set('OLIVIER', '5.99');
salads.set('OLIVIER WITH SALMON', '7.99');
salads.set('CAESAR SALAD', '6.57')

let soups = new Map();
soups.set('SEAFOOD SOUP', '10.00');
soups.set('CARPATHIAN SOUP', '9.50');
soups.set('CHICKEN BROTH', '9.00');

let desserts = new Map();
desserts.set('BLUEBERRY HARMONY', "4.99");
desserts.set('CREME BRULEE', '5.45');
desserts.set('STRAWBERRY NAPOLEON', '3.88');
desserts.set('PAVLOVA WITH STRAWBERRY', '5.00')

let menu = new Map();
menu.set('appetizers', appetizers);
menu.set("salads", salads);
menu.set('soups', soups);
menu.set("desserts", desserts);
console.log(menu);

let menu_list = document.querySelector('#menu');

for(const [key, value] of menu){
    menu_list.innerHTML += `<ul id="${key}">${key}</ul>`
    for(const [key1, value1] of value){
        document.querySelector(`#${key}`).innerHTML += `<li><span class="name">${key1}</span><span class="price">${value1}$</span></li>`
    }
}