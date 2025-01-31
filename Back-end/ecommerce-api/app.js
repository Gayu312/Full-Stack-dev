require('dotenv').config();


const express = require('express');
const app = express();
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', productRoutes);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
