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
    img: "http://54.163.61.125:5000/img/mission.jpeg",
    title: "Mission Driven",
    desc: "The COMMODEL Team works to collaboratively break into the crypto industry with NFT 3D/XR models that tell a unique story, while both providing meaning and value for each consumer.",
    bg: "FF6666",
  },
  {
    id: 2,
    img: "http://54.163.61.125:5000/img/team.JPG",
    title: "Meet the Team",
    desc: "Inspired to come together to create an experience for crypto enthusiasts, NFT artists, and AR/XR developers.",
    bg: "dda0dd",
  },
  {
    id: 3,
    img: "http://54.163.61.125:5000/img/hotDealsLogo.png",
    title: "New, New, New",
    desc: "Check back into the application to see new releases and active updates for COMMODEL. ",
    bg: "ffe135",
  },
];
