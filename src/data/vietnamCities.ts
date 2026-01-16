export interface CityDay {
  day: number;
  city: string;
  region: "North" | "Central" | "South";
  headline: string;
  excerpt: string;
  tags: string[];
  image: string;
  highlights: string[];
}

export const vietnamCities: CityDay[] = [
  {
    day: 1,
    city: "Hanoi",
    region: "North",
    headline: "Where Ancient Meets Chaotic",
    excerpt: "Starting the journey in Vietnam's capital—a city of lakes, temples, and the best pho you'll ever taste.",
    tags: ["Capital", "Street Food", "Culture", "History"],
    image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=800",
    highlights: ["Old Quarter", "Hoan Kiem Lake", "Street Food Tour"]
  },
  {
    day: 2,
    city: "Ninh Binh",
    region: "North",
    headline: "The Dry Halong Bay",
    excerpt: "Limestone karsts rising from emerald rice paddies—this is Vietnam's most underrated gem.",
    tags: ["Nature", "UNESCO", "Photography", "Cycling"],
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
    highlights: ["Tam Coc", "Trang An", "Bai Dinh Pagoda"]
  },
  {
    day: 3,
    city: "Ha Long",
    region: "North",
    headline: "Sailing Through Legends",
    excerpt: "Three thousand islands of limestone dreams floating on emerald waters.",
    tags: ["UNESCO", "Cruise", "Nature", "Iconic"],
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
    highlights: ["Overnight Cruise", "Kayaking", "Cave Exploration"]
  },
  {
    day: 4,
    city: "Sapa",
    region: "North",
    headline: "Walking in the Clouds",
    excerpt: "Terraced rice fields cascade down misty mountains in this highland paradise.",
    tags: ["Mountains", "Trekking", "Culture", "Photography"],
    image: "https://images.unsplash.com/photo-1570366583862-f91883984fde?w=800",
    highlights: ["Fansipan Peak", "Hmong Villages", "Rice Terraces"]
  },
  {
    day: 5,
    city: "Ha Giang",
    region: "North",
    headline: "The Ultimate Road Trip",
    excerpt: "Vietnam's most spectacular mountain pass—the Ha Giang Loop is pure adventure.",
    tags: ["Adventure", "Motorcycle", "Remote", "Epic Views"],
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800",
    highlights: ["Ma Pi Leng Pass", "Dong Van", "Local Homestays"]
  },
  {
    day: 6,
    city: "Cao Bang",
    region: "North",
    headline: "Waterfalls and Borders",
    excerpt: "Home to the stunning Ban Gioc Falls—Asia's largest transnational waterfall.",
    tags: ["Waterfalls", "Nature", "Off-Beat", "Adventure"],
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800",
    highlights: ["Ban Gioc Falls", "Nguom Ngao Cave", "Border Markets"]
  },
  {
    day: 7,
    city: "Lang Son",
    region: "North",
    headline: "Gateway to China",
    excerpt: "A border town rich with history, caves, and authentic mountain cuisine.",
    tags: ["Border Town", "Markets", "History", "Food"],
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800",
    highlights: ["Tam Thanh Cave", "Ky Lua Market", "Roast Duck"]
  },
  {
    day: 8,
    city: "Hai Phong",
    region: "North",
    headline: "The Port City Surprise",
    excerpt: "Vietnam's third-largest city offers French colonial charm and seafood heaven.",
    tags: ["Colonial", "Seafood", "Urban", "Architecture"],
    image: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800",
    highlights: ["Du Hang Pagoda", "Cat Ba Island", "Fresh Seafood"]
  },
  {
    day: 9,
    city: "Nam Dinh",
    region: "North",
    headline: "Spiritual Heartland",
    excerpt: "One of Vietnam's most important Catholic centers with stunning cathedrals.",
    tags: ["Religion", "Architecture", "Off-Beat", "Culture"],
    image: "https://images.unsplash.com/photo-1564596823821-79b97151055e?w=800",
    highlights: ["Phu Day Temple", "Bui Chu Cathedral", "Local Cuisine"]
  },
  {
    day: 10,
    city: "Thanh Hoa",
    region: "Central",
    headline: "Ancient Kingdom Vibes",
    excerpt: "The Citadel of the Ho Dynasty awaits in this historic province.",
    tags: ["UNESCO", "History", "Beach", "Culture"],
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
    highlights: ["Ho Citadel", "Sam Son Beach", "Lam Kinh Palace"]
  },
  {
    day: 11,
    city: "Vinh",
    region: "Central",
    headline: "Ho Chi Minh's Hometown",
    excerpt: "Walk in the footsteps of Vietnam's most famous leader in his birthplace.",
    tags: ["History", "Culture", "Heritage", "Urban"],
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800",
    highlights: ["Kim Lien Village", "Cua Lo Beach", "Local History"]
  },
  {
    day: 12,
    city: "Dong Hoi",
    region: "Central",
    headline: "Cave Capital of the World",
    excerpt: "Gateway to Phong Nha—home to the world's largest caves.",
    tags: ["Caves", "Adventure", "UNESCO", "Nature"],
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
    highlights: ["Phong Nha Cave", "Paradise Cave", "Dark Cave"]
  },
  {
    day: 13,
    city: "Hue",
    region: "Central",
    headline: "Imperial Nostalgia",
    excerpt: "Vietnam's former capital whispers stories of emperors and ancient courts.",
    tags: ["Imperial", "UNESCO", "History", "Food"],
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
    highlights: ["Imperial City", "Royal Tombs", "Perfume River"]
  },
  {
    day: 14,
    city: "Da Nang",
    region: "Central",
    headline: "Vietnam's Rising Star",
    excerpt: "Modern beaches meet ancient mountains in Vietnam's most livable city.",
    tags: ["Beach", "Modern", "Nightlife", "Digital Nomad"],
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
    highlights: ["My Khe Beach", "Ba Na Hills", "Dragon Bridge"]
  },
  {
    day: 15,
    city: "Hoi An",
    region: "Central",
    headline: "Lantern-Lit Dreams",
    excerpt: "Yellow walls, silk lanterns, and the most photogenic old town in Southeast Asia.",
    tags: ["UNESCO", "Photography", "Shopping", "Food"],
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
    highlights: ["Ancient Town", "Lantern Festival", "Tailoring"]
  },
  {
    day: 16,
    city: "Quy Nhon",
    region: "Central",
    headline: "The Secret Beach Town",
    excerpt: "Empty beaches and Cham temples—Vietnam's best-kept coastal secret.",
    tags: ["Beach", "Off-Beat", "History", "Relaxation"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    highlights: ["Ky Co Beach", "Cham Towers", "Seafood Markets"]
  },
  {
    day: 17,
    city: "Nha Trang",
    region: "Central",
    headline: "Beach Party Central",
    excerpt: "Vietnam's most famous beach resort town—sun, sand, and nightlife.",
    tags: ["Beach", "Nightlife", "Resort", "Water Sports"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    highlights: ["Beach Strip", "Vinpearl", "Mud Baths"]
  },
  {
    day: 18,
    city: "Da Lat",
    region: "Central",
    headline: "The Eternal Spring",
    excerpt: "Cool mountain air, French villas, and the freshest vegetables in Vietnam.",
    tags: ["Mountains", "Colonial", "Romance", "Cool Weather"],
    image: "https://images.unsplash.com/photo-1570366583862-f91883984fde?w=800",
    highlights: ["Crazy House", "Flower Gardens", "Coffee Farms"]
  },
  {
    day: 19,
    city: "Phan Thiet",
    region: "South",
    headline: "Sand Dunes and Sunrises",
    excerpt: "Red and white sand dunes meet the South China Sea in this unique landscape.",
    tags: ["Beach", "Desert", "Adventure", "Photography"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    highlights: ["White Sand Dunes", "Fairy Stream", "Mui Ne Beach"]
  },
  {
    day: 20,
    city: "Vung Tau",
    region: "South",
    headline: "Saigon's Beach Escape",
    excerpt: "Just two hours from HCMC—the weekend getaway of choice for city dwellers.",
    tags: ["Beach", "Weekend Trip", "Seafood", "Accessible"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    highlights: ["Christ Statue", "Back Beach", "Fresh Seafood"]
  },
  {
    day: 21,
    city: "Ho Chi Minh City",
    region: "South",
    headline: "The City That Never Sleeps",
    excerpt: "Vietnam's economic powerhouse—a city of skyscrapers, street food, and endless energy.",
    tags: ["Urban", "Nightlife", "Street Food", "History"],
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800",
    highlights: ["District 1", "War Museum", "Ben Thanh Market"]
  },
  {
    day: 22,
    city: "Cu Chi",
    region: "South",
    headline: "Underground History",
    excerpt: "Crawl through the tunnels that changed the course of the Vietnam War.",
    tags: ["History", "War", "Adventure", "Day Trip"],
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800",
    highlights: ["Cu Chi Tunnels", "Shooting Range", "War History"]
  },
  {
    day: 23,
    city: "Tay Ninh",
    region: "South",
    headline: "The Most Colorful Temple",
    excerpt: "The Cao Dai Great Temple—one of the most unique religious sites on Earth.",
    tags: ["Religion", "Architecture", "Unique", "Culture"],
    image: "https://images.unsplash.com/photo-1564596823821-79b97151055e?w=800",
    highlights: ["Cao Dai Temple", "Black Virgin Mountain", "Noon Mass"]
  },
  {
    day: 24,
    city: "Can Tho",
    region: "South",
    headline: "Heart of the Mekong",
    excerpt: "Floating markets and river life in the Mekong Delta's largest city.",
    tags: ["Mekong", "Markets", "River", "Culture"],
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
    highlights: ["Cai Rang Market", "Boat Tours", "Fruit Gardens"]
  },
  {
    day: 25,
    city: "Chau Doc",
    region: "South",
    headline: "Border Town Charm",
    excerpt: "Where Vietnam meets Cambodia—a melting pot of Khmer, Cham, and Vietnamese cultures.",
    tags: ["Border", "Culture", "River", "Multi-Cultural"],
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
    highlights: ["Sam Mountain", "Floating Villages", "Cambodia Border"]
  },
  {
    day: 26,
    city: "Rach Gia",
    region: "South",
    headline: "Gateway to Paradise",
    excerpt: "The jumping-off point for Phu Quoc—but worth exploring in its own right.",
    tags: ["Coastal", "Seafood", "Gateway", "Authentic"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    highlights: ["Seafood Restaurants", "Temples", "Ferry Terminal"]
  },
  {
    day: 27,
    city: "Phu Quoc",
    region: "South",
    headline: "Vietnam's Island Paradise",
    excerpt: "White sand beaches, fish sauce factories, and stunning sunsets.",
    tags: ["Island", "Beach", "Resort", "Relaxation"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    highlights: ["Long Beach", "Night Market", "Snorkeling"]
  },
  {
    day: 28,
    city: "Ca Mau",
    region: "South",
    headline: "The Southernmost Point",
    excerpt: "Vietnam's final frontier—where the land ends and the mangroves begin.",
    tags: ["Remote", "Nature", "Adventure", "Unique"],
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
    highlights: ["Ca Mau Cape", "U Minh Forest", "Mangrove Tours"]
  },
  {
    day: 29,
    city: "Soc Trang",
    region: "South",
    headline: "Khmer Culture in Vietnam",
    excerpt: "Khmer pagodas and bat sanctuaries in this often-overlooked delta town.",
    tags: ["Culture", "Khmer", "Off-Beat", "Religion"],
    image: "https://images.unsplash.com/photo-1564596823821-79b97151055e?w=800",
    highlights: ["Bat Pagoda", "Khmer Temples", "Local Markets"]
  },
  {
    day: 30,
    city: "Ben Tre",
    region: "South",
    headline: "Coconut Kingdom",
    excerpt: "Ending the journey in the land of coconuts—Vietnam's sweetest farewell.",
    tags: ["Mekong", "Nature", "Relaxation", "Food"],
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
    highlights: ["Coconut Candy", "Boat Tours", "Homestays"]
  }
];

export const allTags = Array.from(
  new Set(vietnamCities.flatMap(city => city.tags))
).sort();

export const regions = ["All", "North", "Central", "South"] as const;
