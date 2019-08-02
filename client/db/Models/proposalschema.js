const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/mongodb-orm', { useMongoClient: true});

const proposalSchema = new Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  proposal: String,
  scalable: String
});


const Proposal = mongoose.model('Proposal', proposalSchema);

module.exports = Proposal;