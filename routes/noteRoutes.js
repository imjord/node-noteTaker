module.exports = (app) => {
    const notes = require('../controllers/noteController')



    // create a note 
    app.post('/notes', notes.create);

    app.get('/notes', notes.findAll);

    // get a note with a single id
    app.get('/notes/:noteId', notes.findOne);

    // update note with id 
    app.put('/notes/:noteId', notes.update);

    // delete note 
    app.delete('/notes/:noteId', notes.delete);


}