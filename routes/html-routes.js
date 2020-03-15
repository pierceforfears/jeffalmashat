// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/figures", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/figures.html"));
  });
  app.get("/elephants", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/elephants.html"));
  });
  app.get("/early", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/early.html"));
  });
  app.get("/thesis", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/thesis.html"));
  });
  app.get("/thesis_show", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/thesis_show.html"));
  });
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
