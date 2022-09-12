import express from 'express';

const app = express();
app.use(express.json());
const PORT = 5555;


/*
Create exercise
Create a new exercise with the name, reps, weight, unit, and date attributes 
in the query request parameters
*/
app.get('/rules', (req, res) => {
    
    res.send(rules)
    .then(exercise => {
    res.status(201).json(exercise);
    })
    .catch(error => {
    console.error(error);
    res.status(400).json({ Error: 'Request failed' })
    });
});

/*
Update exercise
Updates the exercise information with the given _id to the
values in the provided query parameters
 */
app.post('/save/', (req, res) => {

    let currGameJSON = "/../word-game-microservice/currentGame.json"
    console.log("SAVE ENDPOINT");
    //let fs = require('fs');
    //fs.writeFile('currGameJSON')
    // savedGame.dice.push();

    // const args = { _id: req.params.id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date };
    // exercises.replaceExercise(args)
    // .then(nModified => {
    //     if (nModified === 0){
    //         res.status(404).json({ Error: 'Resource not found' }) 
    //     } else {
    //         res.json(args)
    //     }
    // })
    // .catch(error => {
    //     console.error(error)
    //     res.status(400).json({ Error: 'Request failed' })
    // });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
