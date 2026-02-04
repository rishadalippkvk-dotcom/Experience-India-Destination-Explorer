const express = require("express");

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    data: [
      {
        id: "1",
        name: "Spice Route Café",
        city: "Kochi",
        specialty: "Kerala seafood thali"
      },
      {
        id: "2",
        name: "Ghat View Chai",
        city: "Varanasi",
        specialty: "Masala chai & kachori"
      }
    ]
  });
});

module.exports = router;
