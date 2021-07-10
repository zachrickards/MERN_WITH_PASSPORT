import axios from "axios";

export default {
  // Gets all books
  Swipe: {
    getSwipe: function() {
      return axios.get("/api/swipes");
    },

  },

  Match: {
    createMatch: function(obj) {
      return axios.post("/api/match/", obj)
    },

    findAllMatches: function() {
      return axios.get("/api/match/all");
    },

    findAllMatchesModified: function() {
      return axios.get("/api/match/all/modified");
    },

  }

  

  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
