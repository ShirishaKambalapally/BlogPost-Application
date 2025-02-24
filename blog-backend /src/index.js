import express from 'express';
import cors from 'cors'; // Import cors
import routes from './routes.js';

const app = express();

const PORT = process.env.PORT || 3001;

// Enable CORS for all origins
app.use(cors()); // This will allow requests from all origins

// If you want to restrict CORS to specific origins, you can do something like:
app.use(cors({
    origin: 'http://localhost:3000' // Change to your frontend's URL
}));

app.use(express.json()); // Middleware to parse JSON

app.use('/api', routes); // Using the routes defined in routes.js

// Root route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// import express from 'express';
// import routes from './routes.js';
// const app = express();

// const PORT = process.env.PORT || 3001; // Use the PORT environment variable or default to 3001

// app.use(express.json()); // Middleware to parse JSON .. why this?


// app.use('/api', routes); // Using the routes defined in routes.js

// // Root route
// app.get('/', (req, res) => {
//     res.send('Server is running!');
// });

// app.listen(PORT, () => {
//     console.log('Server is running on 3001');
// });

