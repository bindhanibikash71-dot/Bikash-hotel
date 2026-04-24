const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    food: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  deliveryAddress: String,
  paymentMethod: { type: String, enum: ['Razorpay', 'COD'] },
  paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Failed'], default: 'Pending' },
  razorpayOrderId: String,
  razorpayPaymentId: String,
  status: { // 4. Live Order Status
    type: String, 
    enum: ['Pending', 'Preparing', 'Out for Delivery', 'Delivered'], 
    default: 'Pending' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
