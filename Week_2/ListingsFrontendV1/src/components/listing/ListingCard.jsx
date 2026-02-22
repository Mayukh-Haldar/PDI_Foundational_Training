function ListingCard({ image, title }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} className="h-64 w-full object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default ListingCard;
