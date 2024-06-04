const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
<<<<<<< HEAD
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Admin', AdminSchema);

=======
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Admin', AdminSchema);
>>>>>>> a0d37472d8fb3c335e48951abe0c68b35d554076
