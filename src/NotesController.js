const Note = require('./Note');

class NotesController {
  constructor() {
    this.notes = [];
  }

  getAllNotes() {
    return this.notes;
  }

  createNote(object) {
    const post = new Note(object);
    this.notes.push(post);
    return post;
  }

  deleteNote(object) {
    const index = this.notes.findIndex(o => o.id === object);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
    return this.notes;
  }
}

module.exports = NotesController;
