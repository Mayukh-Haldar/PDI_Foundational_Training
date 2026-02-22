const Listing = require("../models/listings");

const listingService = {
  async getAllListings() {
    return await Listing.find();
  },

  async getListingById(id) {
    return await Listing.findById(id);
  },

  async createNewListing(data) {
    return await Listing.create(data);
  },

  async updateListing(id, data) {
    return await Listing.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  },

  async deleteListing(id) {
    return await Listing.findByIdAndDelete(id);
  },
};

module.exports = listingService;
