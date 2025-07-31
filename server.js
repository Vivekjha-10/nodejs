import express from 'express';
import bodyParser from 'body-parser';
import db from './db.js'
import person from './models/person.js'; // ✅ relative to server.js
import personRoutes from './routes/personRoutes.js'; 
import menuRoutes from './routes/menuRoutes.js';


const app = express();
app.use(bodyParser.json());

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.listen(3000, () => {
    console.log('Listening on port 3000');
});
