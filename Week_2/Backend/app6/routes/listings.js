const express = require("express");
const listingRoutes = express.Router();
const listingController = require("../controllers/listingController");

listingRoutes.get("/", listingController.getListings);
listingRoutes.post("/", listingController.createListing);
listingRoutes.put("/", listingController.updateListing);
listingRoutes.delete("/", listingController.deleteListing);
listingRoutes.get("/search", listingController.searchListing);
listingRoutes.get("/:listingId", listingController.getSingleListing);

module.exports = listingRoutes;
