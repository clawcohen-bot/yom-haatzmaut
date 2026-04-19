interface CityFilterProps {
  cities: string[];
  selectedCity: string;
  onSelect: (city: string) => void;
}

export default function CityFilter({ cities, selectedCity, onSelect }: CityFilterProps) {
  return (
    <div className="city-filter">
      <button
        className={`filter-btn ${selectedCity === "" ? "active" : ""}`}
        onClick={() => onSelect("")}
      >
        כל הערים
      </button>
      {cities.map((city) => (
        <button
          key={city}
          className={`filter-btn ${selectedCity === city ? "active" : ""}`}
          onClick={() => onSelect(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
}
