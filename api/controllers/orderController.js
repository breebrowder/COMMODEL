
const Product = require('../models/Product');
const order = require('../models/Order');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');
const stripe = require('stripe')('sk_test_51KvXAQEe0nwrWacBZHhWXuslUxuVmYM0kjfYqpVaH8XPJenwwKyNGlbutJu5MVHmfS55UQemccD2EjbmCH6Iuass00GHasVtQD');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the currently booked tour
  console.log(process.env.STRIPE_SECRET_KEY);
  const product = await Product.findById(req.params.productID);
  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: 'https://google.com',
    cancel_url: 'https://google.com',
    // success_url: `${req.protocol}://${req.get('host')}/?product=${
    //   req.params.productID
    // }&user=${req.user.id}&price=${product.price}`,
    // cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
    // customer_email: req.user.email,
    client_reference_id: req.params.productID,
    line_items: [
      {
        name: `${product.title}`,
        description: product.desc,
        images: [`http://54.163.61.125/img/${product.img}`],
        amount: product.price * 100,
        currency: 'usd',
        quantity: 1,
      },
    ],
  });
  // 3) Create session as response
  res.status(200).json({
    status: 'success',
    session,
  });
});
exports.createBookingCheckout = catchAsync(async (req, res, next) => {
  // This is only TEMPORARY, because it's UNSECURE: everyone can make bookings without paying
  const { tour, user, price } = req.query;
  if (!tour && !user && !price) return next();
  await Booking.create({ tour, user, price });
  res.redirect(req.originalUrl.split('?')[0]);
});

exports.createBooking = factory.createOne(order);
exports.getBooking = factory.getOne(order);
exports.getAllBookings = factory.getAll(order);
exports.updateBooking = factory.updateOne(order);
exports.deleteBooking = factory.deleteOne(order);