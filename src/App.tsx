import { useState, useMemo } from "react";
import eventsData from "./data/events.json";
import type { Event } from "./types";
import CityFilter from "./components/CityFilter";
import EventCard from "./components/EventCard";
import "./App.css";

const events = eventsData as Event[];

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const cities = useMemo(() => {
    const citySet = new Set(events.map((e) => e.city));
    return Array.from(citySet).sort();
  }, []);

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchesCity = selectedCity === "" || e.city === selectedCity;
      const matchesSearch =
        searchQuery === "" ||
        e.title.includes(searchQuery) ||
        e.description.includes(searchQuery) ||
        e.location.includes(searchQuery);
      return matchesCity && matchesSearch;
    });
  }, [selectedCity, searchQuery]);

  return (
    <div className="app" dir="rtl">
      <header className="header">
        <div className="header-content">
          <h1>🇮🇱 אירועי יום העצמאות</h1>
          <p>כל האירועים בכל הארץ במקום אחד</p>
        </div>
      </header>

      <main className="main">
        <div className="controls">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 חפש אירוע..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <CityFilter
            cities={cities}
            selectedCity={selectedCity}
            onSelect={setSelectedCity}
          />
        </div>

        <div className="results-count">
          {filtered.length} אירועים {selectedCity ? `ב${selectedCity}` : "בכל הארץ"}
        </div>

        {filtered.length > 0 ? (
          <div className="events-grid">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>😕 לא נמצאו אירועים</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
