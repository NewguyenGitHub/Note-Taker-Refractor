// Dependencies
const router = require('express').Router();

const noteUtils = require('../utils/noteUtils');

// GET request
router.get('/notes', function (req, res) {
    noteUtils.retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST request
router.post('/notes', (req, res) => {
    noteUtils.addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// DELETE request
router.delete('/notes/:id', function (req, res) {
    noteUtils.deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});


module.exports = router;