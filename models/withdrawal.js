const mongoose = require('mongoose');
const User = require('./User'); 

const withdrawalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  withdrawalMethod: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed'],
    default: 'Pending'
  },
  transactionDate: {
    type: Date,
    default: Date.now
  }
});

// Method to get the user making the withdrawal
withdrawalSchema.methods.getUser = async function() {
  return await User.findById(this.userId);
};

const Withdrawal = mongoose.model('Withdrawal', withdrawalSchema);

module.exports = Withdrawal;
