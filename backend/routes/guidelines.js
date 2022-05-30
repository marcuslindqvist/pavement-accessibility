const getDatabase = require('../database.js');
const db = getDatabase();
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const guidelinesRef = db.collection('guidelines');
        const snapshot = await guidelinesRef.get();

        if (snapshot.empty) {
            res.send([]);
            return;
        }
        let items = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            items.push(data);
        });
        res.send(items);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// router.get('/:id', async (req, res) => {
//     try {
//         const guidelineNumber = parseInt(req.params.id);
//         console.log(guidelineNumber);
//         const guidelinesRef = db.collection('guidelines');
//         const singleGuidelineRef = await guidelinesRef
//             .where('number', '==', guidelineNumber)
//             .get();
//         debugger;
//         if (!singleGuidelineRef.exists) {
//             res.status(404).send('Sorry, that guideline does not exist!');
//             return;
//         }
//         const data = guidelinesRef.data();
//         res.status(200).send(data);
//     } catch (err) {
//         res.status(500).send(err.message);
//     }
// });

// router.post("/", async (req, res) => {
//   try {
//     console.log(req);
//     if (!req) {
//       return res.status(400).jsonp(errors.array());
//     } else {
//       req.body.guidelines.forEach((element) => {
//         const docRef = db.collection("guidelines").add(element);
//         res.status(200);
//       });
//     }
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });
module.exports = router;
