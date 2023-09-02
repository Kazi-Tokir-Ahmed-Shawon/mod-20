const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Load routes
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const cartItemRoutes = require('./routes/cartItem.routes');
const orderRoutes = require('./routes/order.routes');

app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/cartitem', cartItemRoutes);
app.use('/order', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
