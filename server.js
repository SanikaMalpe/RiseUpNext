const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection with auto-creation
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/riseupnext';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // These options help with auto-creation
  autoIndex: true,
  autoCreate: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB successfully');
  console.log(`📊 Database: ${MONGODB_URI}`);
  
  // Ensure collections exist by creating a test document
  const User = require('./models/User');
  User.createCollection()
    .then(() => {
      console.log('✅ Users collection created/verified');
    })
    .catch((error) => {
      console.log('ℹ️ Users collection already exists');
    });
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error.message);
  console.log('💡 Make sure MongoDB is running on your system');
  console.log('💡 You can start MongoDB with: mongod');
});

// Routes
app.use('/api/auth', require('./routes/auth'));

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'RiseUpNext API is running',
    status: 'active',
    timestamp: new Date().toISOString()
  });
});

// Health check route
app.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({
    status: 'ok',
    database: dbStatus,
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 API URL: http://localhost:${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});
