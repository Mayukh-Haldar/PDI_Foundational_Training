const ListingDTO = require("../dtos/listingDTO");
const ListingService = require("../services/listingService");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const mongoose = require("mongoose");

const listingController = {
  async getListings(req, res, next) {
    try {
      const listings = await ListingService.getAllListings();
      const listingsDTOs = listings.map((listing) => new ListingDTO(listing));
      return res
        .status(200)
        .json(
          new ApiResponse(200, listingsDTOs, "Listings Fetched Successfully"),
        );
    } catch (error) {
      next(error);
    }
  },

  async getSingleListing(req, res, next) {
    try {
      const { listingId } = req.params;

      if (!mongoose.Types.ObjectId.isValid(listingId)) {
        throw new ApiError(400, "Invalid Listing ID");
      }

      const listing = await ListingService.getListingById(listingId);

      if (!listing) {
        throw new ApiError(404, "Listing Not Found");
      }

      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            new ListingDTO(listing),
            "Listing Fetched Successfully",
          ),
        );
    } catch (error) {
      next(error);
    }
  },

  async createListing(req, res, next) {
    try {
      const { name, price, location } = req.body;

      if (!name || !price || !location) {
        throw new ApiError(400, "All fields are required");
      }

      const listing = await ListingService.createNewListing({
        name,
        price,
        location,
      });

      return res
        .status(201)
        .json(
          new ApiResponse(
            201,
            new ListingDTO(listing),
            "Listing Created Successfully",
          ),
        );
    } catch (error) {
      next(error);
    }
  },

  async updateListing(req, res, next) {
    try {
      const { listingId } = req.params;
      const updatedListing = await ListingService.updateListing(
        listingId,
        req.body,
      );

      if (!updatedListing) {
        throw new ApiError(404, "Listing Not Found");
      }

      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            new ListingDTO(updatedListing),
            "Listing Updated Successfully",
          ),
        );
    } catch (error) {
      next(error);
    }
  },

  async deleteListing(req, res, next) {
    try {
      const { listingId } = req.params;
      const deletedListing = await ListingService.deleteListing(listingId);

      if (!deletedListing) {
        throw new ApiError(404, "Listing Not Found");
      }

      return res
        .status(200)
        .json(new ApiResponse(200, null, "Listing Deleted Successfully"));
    } catch (error) {
      next(error);
    }
  },
};

module.exports = listingController;
