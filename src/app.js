const express = require('express');
const app = express();
const PORT = 8081;
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

app.use(express.json());

app.post("/:type", (req, res) => {
    const type = req.params.type;
    const data = req.body;
    knex(type)
    .insert(data)
    .then(res.status(200).json({message: `Successfully inserted ${data.name}!`}))
    .catch(err => res.status(400).json({message: `Error adding ${body.name}: ${err}`}));
});

app.get("/:type", (req, res) => {
    const type = req.params.type;
    knex.select()
    .from(type)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json({message: `${type} Not found`}));
    console.log("Connection successful");
});

app.get("/:type/:id", (req, res) => {
    const { type, id } = req.params;
    knex.select()
    .from(type)
    .where({ id: id })
    .then(data => res.status(200).json(data[0]))
    .catch(err => res.status(404).json({message: `${type} with ID ${id} Not found`}));
    console.log("Connection successful");
});

app.patch("/:type/:id", (req, res) => {
    const { type, id } = req.params;
    const data = req.body;
    knex(type)
    .where({ id: id })
    .update(data)
    .then(res.status(200).json({message: `Successfully updated ${data.name}!`}))
    .catch(err => res.status(400).json({message: `Error adding ${body.name}: ${err}`}));
});

app.delete("/:type/:id", async (req, res) => {
    const { type, id } = req.params;
    knex.select()
    .from(type)
    .where({ id: id })
    .then(data => {
        console.log(data[0])
        knex(type)
        .where({ id: id })
        .delete()
        .then(res.status(200).json({message: `Successfully deleted ${data[0].name}!`}))
        .catch(err => res.status(400).json({message: `Error deleting ${id} fron ${type}: ${err}`}));
    });
});

app.listen(PORT, () => {
    console.log("Listening on port ", PORT);
});