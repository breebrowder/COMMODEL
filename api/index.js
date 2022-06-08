const path = require('path');
const express = require("express");
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.options('*', cors());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [
        "'self'",
        'blob:',
        'https://*.mapbox.com',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js',
        'http://localhost:3000/*',
        'https://localhost:3000',
        "https://js.stripe.com/",
        'ws://127.0.0.1:*/',
      ],
      scriptSrc: [
        "'self'",
        'https://*.mapbox.com',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js',
        'http://localhost:3000/*',
        'https://localhost:3000',
        "'unsafe-inline'",
        "https://js.stripe.com/v3",
        'blob:',
      ],
    },
  })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);



  app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});