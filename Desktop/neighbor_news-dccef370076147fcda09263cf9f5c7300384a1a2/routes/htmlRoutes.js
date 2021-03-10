const path = require("path");

module.exports = (app) => {
  app.get("/product-listings", (req, res) => {
    console.log(req);
    res.sendFile(path.join(""));
  });

  app.get("/index", (req, res) => {
    res.sendFile(path.join(""));
  });

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(""));
  });
};
