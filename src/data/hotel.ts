// Central mock data for the Sunrise Hotel demo website.
// Keep this consistent with the CMND.ai chatbot's demo data.

export interface Room {
  id: string;
  name: string;
  description: string;
  capacity: number;
  adultCapacity: number;
  policy: string;
  image: string;
}

export interface Facility {
  name: string;
  hours: string;
  price: string;
  icon: string;
}

export interface Service {
  name: string;
  price: string;
  hours: string;
  icon: string;
}

export interface Activity {
  name: string;
  days: string;
  hours: string;
  location: string;
  price: string;
  note?: string;
}

export interface NearbyPlace {
  name: string;
  distance: string;
  time: string;
}

export const hotel = {
  name: "Sunrise Hotel",
  category: "4-star Hotel",
  location: "Famagusta, Cyprus",
  shortDescription: "A comfortable and modern hotel experience in Famagusta.",
  fullDescription:
    "Sunrise Hotel is a 4-star hotel in Famagusta offering comfortable accommodation, modern services and a guest-focused experience.",
  languages: ["Turkish", "English"],
  checkIn: "14:00",
  checkOut: "12:00",
  reception: "24 hours",
};

export const contact = {
  phone: "+90 392 000 00 00",
  reception: "+90 392 000 00 01",
  whatsapp: "+90 533 000 00 00",
  email: "info@sunrisehotel.com",
  website: "https://www.sunrisehotel.com",
  address: "Famagusta, Cyprus",
  lat: 35.125,
  lng: 33.95,
};

export const rooms: Room[] = [
  {
    id: "standard-room",
    name: "Standard Room",
    description: "Comfortable standard room suitable for couples and solo travelers.",
    capacity: 2,
    adultCapacity: 2,
    policy: "Non-smoking",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    description: "Spacious deluxe room offering additional comfort.",
    capacity: 3,
    adultCapacity: 2,
    policy: "Non-smoking",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop&sat=-20",
  },
  {
    id: "family-room",
    name: "Family Room",
    description: "Large room designed for families travelling with children.",
    capacity: 4,
    adultCapacity: 3,
    policy: "Non-smoking",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
  },
];

export const facilities: Facility[] = [
  { name: "Outdoor Swimming Pool", hours: "08:00 - 19:00", price: "Free", icon: "pool" },
  { name: "Free Wi-Fi", hours: "24 hours", price: "Free", icon: "wifi" },
  { name: "Parking", hours: "24 hours", price: "Free", icon: "parking" },
  { name: "Fitness Center", hours: "07:00 - 22:00", price: "Free", icon: "fitness" },
  { name: "Garden", hours: "Available to guests", price: "Free", icon: "garden" },
];

export const services: Service[] = [
  { name: "Airport Transfer", price: "Paid — reservation required", hours: "By reservation", icon: "transfer" },
  { name: "Room Service", price: "Paid", hours: "07:00 - 23:00", icon: "room-service" },
  { name: "Laundry Service", price: "Paid", hours: "09:00 - 18:00", icon: "laundry" },
  { name: "Luggage Storage", price: "Free", hours: "24 hours", icon: "luggage" },
  { name: "Daily Housekeeping", price: "Free", hours: "Daily", icon: "housekeeping" },
];

export const dining = {
  breakfast: {
    name: "Breakfast",
    type: "Open buffet",
    hours: "07:00 - 10:30",
    location: "Sunrise Restaurant",
    note: "Breakfast inclusion depends on rate plan.",
  },
  restaurant: {
    name: "Sunrise Restaurant",
    description: "Local and international cuisine.",
    hours: "12:00 - 23:00",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  bar: {
    name: "Sunset Bar",
    description: "Hot and cold beverages.",
    hours: "11:00 - 00:00",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop",
  },
};

export const activities: Activity[] = [
  {
    name: "Live Music Night",
    days: "Friday",
    hours: "20:30 - 23:00",
    location: "Sunset Bar",
    price: "Free",
  },
  {
    name: "Pool Activities",
    days: "Saturday & Sunday",
    hours: "14:00 - 16:00",
    location: "Outdoor Swimming Pool",
    price: "Free",
  },
  {
    name: "Morning Yoga",
    days: "Tuesday & Thursday",
    hours: "08:00 - 09:00",
    location: "Hotel Garden",
    price: "Free",
    note: "Reservation required",
  },
];

export const policies = [
  { title: "Smoking", text: "Not permitted inside hotel rooms." },
  { title: "Pets", text: "Not permitted." },
  { title: "Children", text: "Welcome." },
  { title: "Extra Bed", text: "Available subject to room availability and room capacity." },
  { title: "Cancellation", text: "Depends on rate plan and reservation conditions." },
  { title: "Identification", text: "Valid identification is required during check-in." },
];

export const nearby: NearbyPlace[] = [
  { name: "Famagusta City Center", distance: "2.5 km", time: "Approx. 7 min drive" },
  { name: "Beach", distance: "0.5 km", time: "Approx. 7 min walk" },
];

export const suggestedQuestions = [
  "What time is check-in?",
  "Do you have a swimming pool?",
  "Which rooms are available?",
  "How much is a Family Room?",
  "Show me the hotel location.",
  "Can I check my reservation?",
];
