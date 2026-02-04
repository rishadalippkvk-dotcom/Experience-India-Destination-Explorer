const express = require("express");

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    data: [
      {
        id: "jaipur",
        name: "Jaipur",
        category: "History",
        history: "Royal palaces and vibrant bazaars in the Pink City.",
        mystery: "Legends of hidden tunnels beneath the forts."
      },
      {
        id: "varanasi",
        name: "Varanasi",
        category: "Culture",
        history: "A timeless river city on the banks of the Ganga.",
        mystery: "Stories of sacred flames that never fade."
      }
    ]
  });
});

router.get("/:id", (req, res) => {
  res.json({
    data: {
      id: req.params.id,
      name: "Sample Destination",
      category: "Mystery",
      history: "Detail view coming soon.",
      mystery: "Legends and stories will live here."
    }
  });
});

module.exports = router;
