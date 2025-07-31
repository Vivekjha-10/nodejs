import express from 'express';
import person from '../models/person.js'; // ✅ correct if personRoutes.js is in /nodejs/routes
import Person from '../models/person.js';


const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('Data saved');
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/', async (req, res) => {
    try {
        const data = await person.find();
        console.log('Data fatch.');
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:worktype', async (req, res) => {
    try {
        const workType = req.params.worktype;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await person.find({ work: workType });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true,
        })

        if (!response) {
            return res.status(404).json({ error: 'Person not found' })
        }

        console.log("data updated");
        res.status(200).json(response);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;

        const response = await person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: 'Person not found' })
        }

        console.log('data delet');
        res.status(200).json({ message: 'Person Deleted Successfully' })

    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;