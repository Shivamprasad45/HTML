const express = require('express');
const path = require('path');
const app = express();
const productRoutes = require('./routes/productRoute');
// Middleware
app.use(express.static(path.join(__dirname, 'public')));
// Mount routes
app.use('/api/products', productRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});