const FavoriteSection = ({
  items,
  isRecentlyViewed
}: {
  items: string[];
  isRecentlyViewed: boolean;
}) => {
  return (
    <nav aria-label="Favorites" className="mb-6" data-testid="sidebar-favorites">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="mb-2 text-sm font-semibold text-gray-600">Favorites</h2>
        {isRecentlyViewed && <p className="font-light text-gray-300">Recently</p>}
      </div>
      <ul className="list-inside list-disc marker:text-gray-500">
        {items.map((fav, idx) => (
          <li key={fav + idx}>{fav}</li>
        ))}
      </ul>
    </nav>
  );
};

export default FavoriteSection;
