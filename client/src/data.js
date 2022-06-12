// const axios = require('axios');

// let products = [];
// const getProducts = async (products) => {
//   const res = await axios.get('http://localhost:5000/api/products');
//   products = res.data;
//   // console.log(products);
//   // console.log(res.data);
//   // return res.data.data;
// }

// getProducts(products);





// const axios = require('axios').default;

// const res = await axios.get('http://localhost:5000/api/products')
// console.log(res.data); // Returns the HTTP response body at the server we requested.
// typeof res.data; // object
// Make a request for a user with a given ID
// let products = [];
// axios.get('http://localhost:5000/api/products')
//   .then(function (response) {
//     // handle success
//     // console.log(response.data);
//     products = response.data;
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
// console.log(products);



export const sliderItems = [
  {
    id: 1,
    img: "http://54.243.27.61:5000/img/abstract.png",
    title: "ABSTRACT",
    desc: "CHECK OUT OUR ABSTRACT MODELS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "http://54.243.27.61:5000/img/crystal.png",
    title: "CRYSTAL",
    desc: "CHECK OUT OUR CRYSTAL MODELS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "http://54.243.27.61:5000/img/motorcycle.png",
    title: "MOTORCYCLE",
    desc: "CHECK OUT OUR MOTORCYCLE MODELS.",
    bg: "fbf0f4",
  },
];


export const categories = [
  {
    id: 1,
    img: "http://54.243.27.61:5000/img/abstract.png",
    title: "ABSTRACT",
  },
  {
    id: 2,
    img: "http://54.243.27.61:5000/img/holbie-coin.png",
    title: "COINS",
  },
  {
    id: 3,
    img: "http://54.243.27.61:5000/img/motorcycle.png",
    title: "MOTORCYCLE",
  },
];


export const popularProducts = [
  {
    id:1,
    img:"http://localhost:3000/img/abstract.png",
  },
  {
    id:2,
    img:"http://localhost:3000/img/crystal.png",
  },
  {
    id:3,
    img:"http://localhost:3000/img/motorcycle.png",
  },
  {
    id:4,
    img:"http://localhost:3000/img/glow-cube.png",
  },
  {
    id:5,
    img:"http://localhost:3000/img/holbie-coin.png",
  },
  {
    id:6,
    img:"http://localhost:3000/img/motorcycle.png",
  },
]