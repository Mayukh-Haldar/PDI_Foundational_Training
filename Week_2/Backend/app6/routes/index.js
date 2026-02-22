const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listingController");

// Listing Routes
router
  .route("/api/v1/listings")
  .get(listingController.getListings)
  .post(listingController.createListing);

router
  .route("/api/v1/listings/:listingId")
  .get(listingController.getSingleListing)
  .put(listingController.updateListing)
  .delete(listingController.deleteListing);

module.exports = router;
