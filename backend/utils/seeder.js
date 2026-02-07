const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/user.model');
const Complaint = require('../models/complaint.model');

dotenv.config();

const users = [
    {
        name: 'Admin User',
        email: 'admin@college.edu',
        password: 'password123',
        role: 'Admin',
        department: 'Administration'
    }
];

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        // Clear existing data
        await User.deleteMany();
        await Complaint.deleteMany();

        // Create users
        await User.create(users);

        console.log('Demo Data Seeded Successfully!');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedData();
