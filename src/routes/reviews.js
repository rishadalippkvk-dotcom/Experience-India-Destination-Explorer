const express = require("express");

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    data: [
      {
        id: "r1",
        destination: "Varanasi",
        rating: 5,
        quote: "A sunrise I will never forget."
      },
      {
        id: "r2",
        destination: "Kerala Backwaters",
        rating: 4,
        quote: "Stillness and spice in every stop."
      }
    ]
  });
});

module.exports = router;
