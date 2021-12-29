const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const btnContainerDom = document.querySelector('.btn-container');
const sectionCenter = document.querySelector('.section-center');
btnContainerDom.addEventListener('click',showItems);

function onLoad(){
  addMenu();
  allItems();
}


let categoryList = ['ALL'];
menu.forEach(item => {
  if(!categoryList.includes(item.category)){
    categoryList.push(item.category);
  }
});

function addMenu(){
  categoryList.forEach(item => {
    menuItem(item);
  });
}

function menuItem(btnName){
  let btn = document.createElement('button');
  btn.innerText = btnName;
  btn.classList.add('btn-item', 'btn', 'btn-outline-dark');
  btnContainerDom.appendChild(btn);
}

function allItems(){
  menu.forEach(item => {
    singleItem(item);
  });
}

function singleItem(item){
  
  let itemDiv = document.createElement('div');
  itemDiv.classList.add('menu-items');
  itemDiv.classList.add('col-lg-6');
  itemDiv.classList.add('col-sm-12');

  let imgDOM = document.createElement('img');
  imgDOM.classList.add('photo');
  imgDOM.src = item.img;

  let menuInfoDOM = document.createElement('div');
  menuInfoDOM.classList.add('menu-info');

  let menuTitleDOM = document.createElement('div');
  menuTitleDOM.classList.add('menu-title');
  
  let h4DOM = document.createElement('h4');
  h4DOM.classList.add('h4');
  h4DOM.innerText = item.title;

  let h4DOM2 = document.createElement('h4');
  h4DOM2.classList.add('h4');
  h4DOM2.innerText = item.price;

  menuTitleDOM.appendChild(h4DOM);
  menuTitleDOM.appendChild(h4DOM2);

  let menuTextDOM = document.createElement('div');
  menuTextDOM.classList.add('menu-text');
  menuTextDOM.innerText = item.desc;

  itemDiv.appendChild(imgDOM);
  
  menuInfoDOM.appendChild(menuTitleDOM);
  menuInfoDOM.appendChild(menuTextDOM);
  itemDiv.appendChild(menuInfoDOM);
  sectionCenter.appendChild(itemDiv);
  
}

function showItems(e){


  if(e.target.innerText.length <= menu.length){
    while(sectionCenter.firstChild){
      sectionCenter.removeChild(sectionCenter.firstChild);
    }
    if(e.target.innerText == 'ALL'){
      allItems();
    }else{
      menu.forEach(item => {
        if(e.target.innerText == item.category){
          console.log('tiklandi');
          singleItem(item);
        }
      });
    }
  }
}




