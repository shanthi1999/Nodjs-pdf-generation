const express = require("express");
const routes = express.Router();
const pdfTemplates = require("./documents");
const pdf = require("html-pdf");
const response  = require('./Responses/Response');

routes.post("/",async (req, res) => {

  pdf.create(pdfTemplates(req.body), {}).toFile("sample.pdf", (err) => {
    if (err) {
      res.status(500).json(response.Error(err))
    } else {
      const message = "succesfully registered"
      res.json(response.Success(message))
    }
  });
});



routes.get("/", (req, res) => {
  res.sendFile(__dirname + "/sample.pdf");
});

module.exports = routes;
