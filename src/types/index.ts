export interface Event {
  id: string;
  title: string;
  city: string;
  location: string;
  date: string;
  time: string;
  description: string;
  category: "זיקוקים" | "מסיבה" | "הופעה" | "תצוגה אווירית" | "אחר";
  isFree: boolean;
  link?: string;
}
