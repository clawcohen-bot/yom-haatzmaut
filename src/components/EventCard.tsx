import type { Event } from "../types";

const categoryEmoji: Record<Event["category"], string> = {
  זיקוקים: "🎆",
  מסיבה: "🎉",
  הופעה: "🎵",
  "תצוגה אווירית": "✈️",
  אחר: "🎊",
};

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="event-card">
      <div className="event-header">
        <span className="event-category">
          {categoryEmoji[event.category]} {event.category}
        </span>
        <span className={`event-price ${event.isFree ? "free" : "paid"}`}>
          {event.isFree ? "חינם" : "בתשלום"}
        </span>
      </div>

      <h2 className="event-title">{event.title}</h2>

      <div className="event-details">
        <div className="event-detail">
          <span>📍</span>
          <span>{event.location}, {event.city}</span>
        </div>
        <div className="event-detail">
          <span>🕐</span>
          <span>{event.time}</span>
        </div>
      </div>

      <p className="event-description">{event.description}</p>

      {event.link && (
        <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-link">
          לפרטים נוספים ←
        </a>
      )}
    </div>
  );
}
