import express from 'express';
import MenuItem from '../models/menuItem.js';


const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('Data saved');
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Data featch');
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:taste', async (req, res) => {
    try {
        const Taste = req.params.taste;
        if (Taste == 'sweet' || Taste == 'sour' || Taste == 'spicy') {
            const response = await MenuItem.find({ taste: Taste });
            console.log('Data featch');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid taste type' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router