import express from 'express';
//if in json type module is present we can use import and export or else we have to use require and module.exports
import { connectDB } from './config/db.js'; // Import the connectDB function
import mongoose from 'mongoose';
const app = express();
import User from './model/User.js';
connectDB();

// if this users exist in compass that is linked or else new collection will be created


app.get('/get', async (req, res) => {
 
    const users = await User.find(); // Await the query to get data
    res.json(users);                 // Now this is plain JSON data
  
});

app.post('/post', (req, res) => {
  res.send('from post request');
});

app.put('/put', (req, res) => {
  res.send('from put request');
});

app.delete('/delete', (req, res) => {
  res.send('from delete request');
});

app.patch('/patch', (req, res) => {
  res.send('from patch request');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000: http://localhost:3000');
});