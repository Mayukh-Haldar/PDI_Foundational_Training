import ListingCard from "./ListingCard";

function ListingSection() {
  const listings = [
    {
      id: 1,
      title: "Modern Exterior House",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "House with Patio",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Luxury Home Outdoor View",
      image:
        "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Heading + Search */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xl font-semibold">Listing</h2>

        <input
          type="text"
          placeholder="Search Listings"
          className="input input-bordered w-full max-w-xs"
        />

        <button className="btn btn-primary">Search</button>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {listings.map((item) => (
          <ListingCard key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default ListingSection;
