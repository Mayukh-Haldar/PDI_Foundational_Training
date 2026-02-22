const express = require("express");
const router = express.Router();
const Listing = require("../models/listings");

router.get("/", async (req, res) => {
  let listings = await Listing.find();
  res.send(listings);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, price, location } = req.body;
  if (!name) {
    return res.send({ error: "name is required" });
  }

  const listing = await Listing.create({ name, price, location });
  res.send(listing);
});

router.get("/search", async (req, res) => {
  const { location } = req.query;

  if (!location) {
    return res.status(400).json({ error: "Location is required" });
  }

  const listings = await Listing.find({
    location: { $regex: location, $options: "i" },
  });

  res.json(listings);
});

router.get("/:listingId", async (req, res) => {
  const listing = await Listing.findById(req.params.listingId);

  if (!listing) {
    return res.status(404).json({ error: "Not found" });
  }

  res.json(listing);
});

module.exports = router;
