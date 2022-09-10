const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/new.png",
      },
      {
        code: "blue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 120,
    colors: [
      {
        code: "white",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Air Beauty",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "white",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Air Crater",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/jordan.png",
      },
      {
        code: "blue",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Air Hippie",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/hippie.png",
      },
      {
        code: "blue",
        img: "./img/hippie2.png",
      },
    ],
  },
];

const wrapper = document.querySelector(".sliderWrapper");
// console.log(wrapper);
// wrapper.style.transform="translateX(00vw)"
const menuItems = document.querySelectorAll(".menuItem");

let chooseProduct = products[0];
const currentProductImg = document.querySelector(".productIcon");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    chooseProduct = products[index];
    //change text of current products

    currentProductTitle.textContent = chooseProduct.title;
    currentProductPrice.textContent = chooseProduct.price;
    currentProductImg.src = chooseProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chooseProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chooseProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "green";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex";
})
close.addEventListener("click",()=>{
  payment.style.display="none";
})