

userSchema.virtual('cartItems', {
    ref: 'CartItem',
    localField: '_id',
    foreignField: 'user',
  });
  
  userSchema.virtual('orders', {
    ref: 'Order',
    localField: '_id',
    foreignField: 'user',
  });
  
  userSchema.pre('remove', async function (next) {
    await CartItem.deleteMany({ user: this._id });
    await Order.deleteMany({ user: this._id });
    next();
  });
  