const express = require("express");

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    data: [
      {
        id: "h1",
        name: "Pink City Hostel",
        city: "Jaipur",
        style: "Heritage courtyard stays"
      },
      {
        id: "h2",
        name: "Himalayan Basecamp",
        city: "Leh",
        style: "Mountain-view dorms"
      }
    ]
  });
});

module.exports = router;
