"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageModal from "@/components/PackageModal";
import CustomTripModal from "@/components/CustomTripModal";
import { TourPackage, TESTIMONIALS_DATA } from "@/data/packages";
import {
  Sparkles,
  Compass,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Plane,
  Building,
  Car,
  Ticket,
  Sun,
  ShoppingBag,
  Palmtree,
  Ship,
  UtensilsCrossed,
  Info,
  Send,
  HelpCircle,
  Gem,
  Award,
  Waves,
  Heart,
  Users,
  Compass as CompassIcon,
  Smile,
  Anchor,
  Glasses,
  Coffee,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

export default function ThailandClientPage() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);

  // Package Filter / Slider state
  const [activePackageFilter, setActivePackageFilter] = useState<string>("all");
  const [activePlaceFilter, setActivePlaceFilter] = useState<string>("all");

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Thailand (Bangkok, Phuket, Pattaya & Krabi)",
    travelMonth: "Next 30 Days",
    guests: "2 Adults (Couple)",
    packageType: "Thailand Bangkok Phuket Package",
    notes: "Inquiring for Thailand tour packages from Delhi.",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 9 Complete Package Card Examples requested in prompt
  const thailandPackages: TourPackage[] = [
    {
      id: "thailand-4n-5d",
      title: "Thailand 4 Nights / 5 Days: Bangkok & Pattaya Express",
      cardTitle: "Thailand 4 Nights / 5 Days",
      subtitle: "Pattaya Coral Island & Bangkok City Temples",
      shortDescription:
        "The quintessential budget getaway featuring Coral Island speedboat trip, Alcazar show, and Bangkok Golden Buddha.",
      category: "international",
      destination: "Thailand",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      priceStarting: "₹24,999",
      rating: 4.8,
      reviewsCount: 168,
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
      tag: "Best Seller",
      iconicLandmarks: ["Coral Island Speedboat Tour", "Wat Traimit Golden Buddha", "Pattaya Floating Market", "Chao Phraya Views"],
      hiddenGems: ["Sanctuary of Truth seaside cafe", "Talad Neon night bites", "Koh Larn Tawaen beach viewpoint"],
      localFoodHighlight: "Authentic Pad Thai, mango sticky rice, and Thai iced tea",
      freeDayNote: "Day 3 evening in Pattaya offers relaxed free time for beach strolls or shopping.",
      overview:
        "An exhilarating 5-day journey taking in the vibrant coastal pulse of Pattaya and the magnificent cultural heartbeat of Bangkok with comfortable 4-star stays and private airport transfers.",
      itinerary: [
        { day: 1, title: "Arrive in Bangkok & Transfer to Pattaya", description: "Meet & greet at Suvarnabhumi Airport, private air-conditioned coach transfer to Pattaya, check-in, and evening Alcazar Cabaret Show." },
        { day: 2, title: "Coral Island (Koh Larn) Speedboat Adventure", description: "Speedboat excursion to Coral Island with parasailing, banana boat, Indian lunch buffet, and beach lounging." },
        { day: 3, title: "Transfer to Bangkok & City Temple Tour", description: "Scenic transfer to Bangkok. Visit Wat Traimit (Golden Buddha) and Wat Benchamabophit (Marble Temple) with evening at Pratunam Market." },
        { day: 4, title: "Free Day for Shopping & Chao Phraya Dinner Cruise", description: "Leisure morning to shop at Platinum Mall or CentralWorld, followed by an evening luxury Chao Phraya Princess Dinner Cruise with live music." },
        { day: 5, title: "Bangkok Souvenirs & Flight Home to Delhi", description: "Breakfast at leisure, final duty-free shopping, and private transfer to airport for direct flight to New Delhi." },
      ],
      inclusions: ["4 Nights in 4-Star Hotels (2N Pattaya + 2N Bangkok)", "Daily Breakfast & Coral Island Indian Buffet Lunch", "Coral Island Speedboat with Shared Transfers", "Bangkok City & Temple Sightseeing Tour", "Private Airport & Inter-city AC Transfers", "Delhi Desk 24/7 Concierge Support"],
      exclusions: ["International Flights ex-Delhi", "Personal water sports charges on island", "Tips & GST"],
    },
    {
      id: "thailand-5n-6d",
      title: "Thailand 5 Nights / 6 Days: Phuket & Krabi Island Fantasy",
      cardTitle: "Thailand 5 Nights / 6 Days",
      subtitle: "Phuket, Phi Phi Islands & Krabi 4 Islands",
      shortDescription:
        "Tropical Andaman paradise combining world-famous Phi Phi Islands, Railay Beach karsts, and Phuket viewpoints.",
      category: "international",
      destination: "Thailand",
      duration: "6 Days / 5 Nights",
      days: 6,
      nights: 5,
      priceStarting: "₹34,500",
      rating: 4.9,
      reviewsCount: 194,
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
      tag: "Island Hopper",
      iconicLandmarks: ["Phi Phi Don & Maya Bay", "Krabi 4-Islands Speedboat Tour", "Phuket Big Buddha", "Railay Beach Karsts"],
      hiddenGems: ["Phromthep Cape sunset point", "Krabi Emerald Pool jungle trail", "Ao Nang night walking street"],
      localFoodHighlight: "Fresh Andaman grilled prawns, Tom Yum Goong & coconut ice cream",
      freeDayNote: "Day 5 in Krabi is an unscheduled free day to kayak or relax at your resort pool.",
      overview:
        "The quintessential island discovery. Cruise turquoise Andaman waters, snorkel among vibrant coral reefs, and relax under swaying palms with private luxury transfers throughout.",
      itinerary: [
        { day: 1, title: "Welcome to Phuket & Patong Leisure", description: "Arrival at Phuket International Airport, private transfer to beachfront resort, and evening stroll along Patong Beach." },
        { day: 2, title: "Phi Phi Islands & Maya Bay by Speedboat", description: "Full-day premium speedboat tour to Phi Phi Leh, Maya Bay ('The Beach'), Viking Cave, Monkey Beach, and snorkeling at Bamboo Island." },
        { day: 3, title: "Phuket Cultural Tour & Transfer to Krabi", description: "Visit Big Buddha and Wat Chalong, then enjoy a scenic road or ferry transfer to Krabi Ao Nang beachfront." },
        { day: 4, title: "Krabi 4-Islands Speedboat Tour with Box Lunch", description: "Visit Koh Poda, Chicken Island, Tup Island (sandbar walk), and Phra Nang Cave Beach with crystal snorkeling." },
        { day: 5, title: "A Complete Free Day in Krabi", description: "Relax at resort, take a longtail boat to Railay Beach for rock climbing, or visit Tiger Cave Temple." },
        { day: 6, title: "Krabi Departure to Delhi", description: "Breakfast overlooking limestone cliffs and private transfer to Krabi International Airport for return flight." },
      ],
      inclusions: ["5 Nights in Premier 4-Star Resorts (3N Phuket + 2N Krabi)", "Daily Buffet Breakfasts + 2 Island Tour Lunches", "Full Day Phi Phi Islands Speedboat Pass with Snorkel Gear", "Krabi 4 Islands Speedboat Tour with National Park Fees", "Private Airport & Inter-city Transfers", "Thailand Travel Insurance Guidance"],
      exclusions: ["International Flights", "National park cleaning fees (~400 THB/pax)", "Personal expenses"],
    },
    {
      id: "thailand-6n-7d",
      title: "Thailand 6 Nights / 7 Days: Bangkok, Pattaya & Coral Island",
      cardTitle: "Thailand 6 Nights / 7 Days",
      subtitle: "3 Nights Pattaya Beach + 3 Nights Bangkok Capital",
      shortDescription:
        "A leisurely balanced journey with ample free time for shopping, beach clubs, safari parks, and river cruises.",
      category: "international",
      destination: "Thailand",
      duration: "7 Days / 6 Nights",
      days: 7,
      nights: 6,
      priceStarting: "₹31,800",
      rating: 4.9,
      reviewsCount: 152,
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      tag: "Extended Leisure",
      iconicLandmarks: ["Nong Nooch Tropical Garden", "Safari World & Marine Park", "Coral Island Watersports", "Wat Arun Dawn Temple"],
      hiddenGems: ["Pattaya viewpoint sunset drinks", "Bangkok rooftop speakeasy", "Chatuchak weekend market alleys"],
      localFoodHighlight: "Authentic Som Tum papaya salad, Massaman curry & crispy banana pancakes",
      freeDayNote: "Days 3 and 6 are dedicated free days for shopping, massages, and independent exploring.",
      overview:
        "The ultimate family and couples holiday combining Pattaya's coastal sunshine with Bangkok's world-class mega malls and historic river heritage.",
      itinerary: [
        { day: 1, title: "Delhi to Bangkok & Private Transfer to Pattaya", description: "Arrive in Bangkok, meet private chauffeur, transfer to Pattaya beachfront resort and relax." },
        { day: 2, title: "Coral Island Speedboat Tour with Parasailing", description: "Fast speedboat to Coral Island with water activities, beach chair relaxation, and Indian hot lunch." },
        { day: 3, title: "Nong Nooch Botanical Garden & Free Afternoon", description: "Visit world-class botanical gardens and Thai cultural elephant show, followed by a free afternoon in Pattaya." },
        { day: 4, title: "Scenic Transfer to Bangkok & Temple Discovery", description: "Drive to Bangkok. Visit Wat Arun across the Chao Phraya River and Wat Pho Reclining Buddha." },
        { day: 5, title: "Safari World & Marine Park Full Day Trip", description: "Full day safari open zoo drive with lion feeding, followed by dolphin and sea lion stunts with buffet lunch." },
        { day: 6, title: "Guaranteed Free Day for Bangkok Shopping", description: "Complete free day to explore ICONSIAM, Siam Paragon, Platinum Mall, or take a traditional Thai massage." },
        { day: 7, title: "Farewell Thailand & Flight to Delhi", description: "Breakfast, checkout, souvenir packaging, and private limousine drop to Bangkok airport." },
      ],
      inclusions: ["6 Nights in Deluxe 4-Star Stays (3N Pattaya + 3N Bangkok)", "Daily Breakfast + 2 Lunches (Coral Island & Safari World)", "Safari World & Marine Park Entry Tickets with Safari Coach", "Coral Island Speedboat with Transfers", "Private Chauffeur AC Vehicles for all transfers", "24/7 On-Ground Support Desk"],
      exclusions: ["International Flights", "Personal shopping & water sports", "Tips"],
    },
    {
      id: "thailand-honeymoon-package",
      title: "Thailand Honeymoon Package: Romantic Phuket & Krabi Pool Villa",
      cardTitle: "Thailand Honeymoon Package",
      subtitle: "Phuket Luxury Beach Resort & Krabi Private Pool Villa",
      shortDescription:
        "Candlelight beach dinners, private longtail boat cruises, sunset catamarans, and champagne villa stays.",
      category: "international",
      destination: "Thailand",
      duration: "6 Days / 5 Nights",
      days: 6,
      nights: 5,
      priceStarting: "₹48,999",
      rating: 5.0,
      reviewsCount: 128,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      tag: "Romantic Escape",
      iconicLandmarks: ["Private Sunset Catamaran Cruise", "Hong Island Lagoon", "Phuket Beach Club Cabana", "Maya Bay Early Bird"],
      hiddenGems: ["Tubkaek Beach tranquil sunset", "Private candlelight seafood dinner on the sand", "Couples aroma massage"],
      localFoodHighlight: "Romantic seafood banquet, sparkling wine & tropical fruit platters",
      freeDayNote: "Day 4 is an uninterrupted free day in your private pool villa in Krabi.",
      overview:
        "Crafted for newlyweds seeking privacy, romance, and barefoot luxury. Enjoy champagne on sunset catamarans and awake to limestone vistas from your private pool villa.",
      itinerary: [
        { day: 1, title: "Phuket Arrival with Floral Welcome", description: "VIP private airport transfer, luxury beachfront pool suite check-in, and welcome honeymoon bed decoration with wine." },
        { day: 2, title: "Phi Phi Early Bird Speedboat & Snorkel", description: "Early departure to Maya Bay avoiding crowds, snorkeling in Pi Leh Lagoon, and gourmet beach picnic." },
        { day: 3, title: "Private Sunset Sailing Catamaran Cruise", description: "Sail past Promthep Cape, watch sunset over the Andaman Sea with canapes and chilled champagne." },
        { day: 4, title: "Transfer to Krabi Private Pool Villa", description: "Luxury private transfer to Tubkaek Beach, Krabi. Enjoy your private plunge pool and undisturbed relaxation." },
        { day: 5, title: "Hong Island Lagoon Private Longtail Tour", description: "Private luxury wooden longtail boat to Hong Island emerald lagoon with private couples photo stops." },
        { day: 6, title: "Departure to Delhi with Cherished Memories", description: "Floating breakfast in villa pool, leisure checkout, and private drop to Krabi airport." },
      ],
      inclusions: ["5 Nights in 5-Star Luxury Resorts (3N Phuket + 2N Krabi Pool Villa)", "Daily Breakfasts Including 1 Romantic Floating Breakfast", "1 Candlelight 4-Course Dinner on the Beach", "Private Sunset Catamaran Sailing Tour", "Honeymoon Bed Décor & Complimentary Bottle of Wine", "All Private Airport & Inter-city Transfers"],
      exclusions: ["International Flights from Delhi", "Personal spa treatments", "Travel insurance"],
    },
    {
      id: "thailand-family-holiday-package",
      title: "Thailand Family Holiday Package: Bangkok & Phuket Fun",
      cardTitle: "Thailand Family Holiday Package",
      subtitle: "Safari World, Waterparks & Family-Friendly Beach Resorts",
      shortDescription:
        "Wholesome family adventure with dolphin shows, waterparks, gentle snorkeling, and spacious family suites.",
      category: "international",
      destination: "Thailand",
      duration: "7 Days / 6 Nights",
      days: 7,
      nights: 6,
      priceStarting: "₹38,200",
      rating: 4.9,
      reviewsCount: 145,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      tag: "Family Favorite",
      iconicLandmarks: ["Safari World & Marine Park", "Phuket Andamanda Waterpark", "James Bond Island Cruise", "SEA LIFE Bangkok Aquarium"],
      hiddenGems: ["Kata Beach calm family waters", "Chatuchak weekend toy & souvenir market", "Phuket FantaSea show"],
      localFoodHighlight: "Kid-friendly menus, fresh coconut shakes, mild chicken satay & mango desserts",
      freeDayNote: "Day 5 is a relaxing free day by the resort kid-friendly lagoon pools.",
      overview:
        "Thoughtfully planned for families with children and elders. Features spacious connected rooms, private chauffeurs, child-friendly excursions, and plenty of breathing room.",
      itinerary: [
        { day: 1, title: "Arrive in Bangkok & SEA LIFE Ocean World", description: "Direct flight arrival, hotel check-in, and afternoon visit to Southeast Asia's largest aquarium under Siam Paragon." },
        { day: 2, title: "Full Day Safari World & Marine Park", description: "Drive-through African safari with giraffe feeding terrace and international buffet lunch." },
        { day: 3, title: "Fly to Phuket & Beachfront Resort Check-in", description: "Short domestic flight to Phuket, check-in to family resort with water slides, and sunset on Karon Beach." },
        { day: 4, title: "Phang Nga Bay & James Bond Island Boat Tour", description: "Scenic big boat cruise through limestone needles, sea canoeing into sea caves with experienced paddlers." },
        { day: 5, title: "Free Day / Andamanda Phuket Waterpark Fun", description: "Enjoy Thailand's newest mega waterpark with lazy river and wave pool, or relax by the beach." },
        { day: 6, title: "Phuket Cultural Discovery & Night Bazaar", description: "Visit Old Phuket Town colorful Sino-Portuguese streets, Cashew Nut factory, and Chillva Market." },
        { day: 7, title: "Fly Back to New Delhi", description: "Breakfast, leisurely packing, and private transfer to Phuket airport for direct flight home." },
      ],
      inclusions: ["6 Nights in Top Family-Friendly 4-Star Resorts (2N Bangkok + 4N Phuket)", "Daily Buffet Breakfasts & 2 Theme Park Buffet Lunches", "Domestic Flight Bangkok to Phuket with Baggage", "Safari World & Marine Park All-Access Passes", "James Bond Island Cruise with Sea Canoeing", "All Private Family AC Coach Transfers"],
      exclusions: ["International Flights ex-Delhi", "Personal waterpark locker rentals", "Tips"],
    },
    {
      id: "thailand-beach-holiday-package",
      title: "Thailand Beach Holiday Package: Phuket, Phi Phi & Krabi",
      cardTitle: "Thailand Beach Holiday Package",
      subtitle: "Sun, Turquoise Waters & White Sand Islands",
      shortDescription:
        "The ultimate tropical escape for beach worshippers, snorkelers, and sunset seekers across Thailand's finest coasts.",
      category: "international",
      destination: "Thailand",
      duration: "7 Days / 6 Nights",
      days: 7,
      nights: 6,
      priceStarting: "₹36,500",
      rating: 4.9,
      reviewsCount: 162,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      tag: "Pure Beach Bliss",
      iconicLandmarks: ["Maya Bay Sandbar", "Railay Beach", "Karon Beach", "Koh Poda Island"],
      hiddenGems: ["Freedom Beach hidden cove", "Ao Sane secluded snorkeling", "Tonsai Beach beach bouldering"],
      localFoodHighlight: "Beach shack grilled calamari, iced fresh coconuts & spicy crab curry",
      freeDayNote: "Days 4 and 6 are unscheduled beach relaxation days for pure sunbathing and swimming.",
      overview:
        "Immerse yourself in world-class coastal beauty. From the legendary sands of Maya Bay to the soaring cliffs of Railay Beach, this holiday is designed for sun-seekers and coastal relaxation.",
      itinerary: [
        { day: 1, title: "Arrive in Phuket & Check-in by Kata Beach", description: "Private airport reception, transfer to beach resort, and sunset drinks on Kata Beach." },
        { day: 2, title: "Phi Phi Islands & Bamboo Island Beach Paradise", description: "Spend hours swimming in crystal turquoise lagoons and sunbathing on powder-soft white sand beaches." },
        { day: 3, title: "Phuket Secret Beaches & Promthep Sunset", description: "Visit Nai Harn and Ya Nui beaches with panoramic sunset over the Andaman Sea." },
        { day: 4, title: "Scenic Ferry to Krabi & Railay Beach Sunset", description: "Cruise by passenger ferry to Krabi. Walk across to iconic Railay Beach as the sun sets behind limestone karsts." },
        { day: 5, title: "Krabi 4-Islands Snorkel & Sandbar Discovery", description: "Speedboat across Koh Poda and Tup Island; walk on the miraculous white sandbar bridging two islands." },
        { day: 6, title: "A Complete Free Day by the Sea in Krabi", description: "Sleep in, rent a paddleboard, enjoy Thai herbal beachside massages, or lounge by the infinity pool." },
        { day: 7, title: "Transfer to Airport & Fly to Delhi", description: "Farewell tropical breakfast, souvenir shopping, and private drop-off at Krabi airport." },
      ],
      inclusions: ["6 Nights in Deluxe Beachfront Resorts", "Daily Breakfasts + Island Tour Lunches", "Phi Phi Islands Deluxe Speedboat Tour", "Krabi 4-Islands Speedboat Tour with Snorkel Mask", "Ferry Transfer Phuket to Krabi", "Private Airport Transfers"],
      exclusions: ["International Airfare", "Personal beach gear rentals", "National park fees"],
    },
    {
      id: "thailand-bangkok-phuket-package",
      title: "Thailand Bangkok Phuket Package: City Buzz & Island Life",
      cardTitle: "Thailand Bangkok Phuket Package",
      subtitle: "3 Nights Phuket Tropical Island + 2 Nights Bangkok Metropolis",
      shortDescription:
        "The classic Thailand twin-centre itinerary combining Andaman beaches with Bangkok’s mega shopping and night markets.",
      category: "international",
      destination: "Thailand",
      duration: "6 Days / 5 Nights",
      days: 6,
      nights: 5,
      priceStarting: "₹33,900",
      rating: 4.9,
      reviewsCount: 215,
      image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80",
      tag: "Top Classic",
      iconicLandmarks: ["Phi Phi Speedboat Tour", "Patong Nightlife", "Grand Palace Bangkok", "Chao Phraya River Cruise"],
      hiddenGems: ["Chinatown Yaowarat food stalls", "Old Phuket Town coffee culture", "Karon viewpoint"],
      localFoodHighlight: "Spicy Tom Kha soup, street skewers at Yaowarat & Phuket pineapple fried rice",
      freeDayNote: "Day 5 offers an open free afternoon in Bangkok for duty-free shopping at King Power.",
      overview:
        "The #1 recommended first-timer itinerary for Thailand. Get the ideal mix of turquoise tropical waters and high-energy metropolitan thrills.",
      itinerary: [
        { day: 1, title: "Arrive in Phuket & Beachfront Check-in", description: "Direct arrival at Phuket, private AC cab transfer to hotel near Patong or Karon, and evening beach walk." },
        { day: 2, title: "Phi Phi Islands & Maya Bay Speedboat Tour", description: "Explore the dramatic cliffs of Maya Bay, snorkel in emerald waters, and feast on an island buffet lunch." },
        { day: 3, title: "Phuket City Sightseeing & Big Buddha", description: "Half-day cultural tour visiting Big Buddha, Wat Chalong, and colorful heritage streets of Old Phuket Town." },
        { day: 4, title: "Fly to Bangkok & Chao Phraya Dinner Cruise", description: "Morning domestic flight to Bangkok, check-in to city hotel, and evening luxury dinner cruise with live cabaret and skyline views." },
        { day: 5, title: "Bangkok Temples & Free Afternoon Shopping", description: "Guided tour to Golden Buddha and Reclining Buddha, followed by an open afternoon at CentralWorld and Pratunam." },
        { day: 6, title: "Bangkok Departure to New Delhi", description: "Breakfast, last-minute mango sticky rice treats, and private airport drop for direct flight home." },
      ],
      inclusions: ["5 Nights in 4-Star Stays (3N Phuket + 2N Bangkok)", "Domestic Flight Phuket to Bangkok with 20kg Baggage", "Daily Breakfasts & 1 Island Buffet Lunch", "Phi Phi Island Speedboat Tour with Equipment", "Chao Phraya Dinner Cruise Ticket", "Private AC Airport & Hotel Transfers"],
      exclusions: ["International Flights from Delhi", "Personal expenses", "Tips"],
    },
    {
      id: "thailand-bangkok-pattaya-package",
      title: "Thailand Bangkok Pattaya Package: Entertainment & Beach Fun",
      cardTitle: "Thailand Bangkok Pattaya Package",
      subtitle: "2 Nights Pattaya Coastal Fun + 2 Nights Bangkok Shopping",
      shortDescription:
        "India’s most sought-after short vacation. Speedboats to Coral Island, vibrant cabaret, and endless Bangkok shopping.",
      category: "international",
      destination: "Thailand",
      duration: "5 Days / 4 Nights",
      days: 5,
      nights: 4,
      priceStarting: "₹22,999",
      rating: 4.8,
      reviewsCount: 280,
      image: "https://images.unsplash.com/photo-1512553353684-82e3895e6f66?auto=format&fit=crop&w=800&q=80",
      tag: "Best Value",
      iconicLandmarks: ["Coral Island Speedboat Tour", "Alcazar Cabaret Show", "Pratunam Wholesale Market", "Wat Traimit Temple"],
      hiddenGems: ["Pattaya Beach Road night bazaar", "Indra Square Indian food hub", "Erawan Shrine prayers"],
      localFoodHighlight: "Authentic Thai green curry, crispy roti canai & fresh tropical fruit shakes",
      freeDayNote: "Day 4 morning is free for bargain shopping in Bangkok's wholesale markets.",
      overview:
        "Maximum thrills in 5 action-packed days! Drive straight from Bangkok airport to coastal Pattaya for beaches and shows, then return for Bangkok's bustling markets and temples.",
      itinerary: [
        { day: 1, title: "Arrive in Bangkok & Drive to Pattaya", description: "Meet our representative at Bangkok airport, board comfortable coach to Pattaya (2 hours), check-in, and relax." },
        { day: 2, title: "Coral Island by Speedboat & Alcazar Show", description: "Speedboat excursion to Coral Island with lunch, followed by world-famous Alcazar Cabaret performance." },
        { day: 3, title: "Transfer to Bangkok & City Temples", description: "Morning drive to Bangkok. Sightseeing of Wat Traimit Golden Buddha and Wat Pho, with check-in at Pratunam." },
        { day: 4, title: "Free Shopping Day in Bangkok", description: "Full day free for shopping at Platinum Fashion Mall, MBK Center, and Big C supermarket for Thai snacks." },
        { day: 5, title: "Bangkok to Delhi Departure", description: "Breakfast, hotel checkout, and private vehicle drop to Suvarnabhumi or Don Mueang airport." },
      ],
      inclusions: ["4 Nights in Handpicked 4-Star Hotels (2N Pattaya + 2N Bangkok)", "Daily Breakfasts & 1 Indian Lunch at Coral Island", "Coral Island Speedboat Tour with Pickup", "Alcazar Cabaret Show Standard Seat Pass", "Bangkok City & Temple Sightseeing", "All Private AC Transfers with Driver"],
      exclusions: ["International Flights from Delhi", "Personal water sports & tips", "GST"],
    },
    {
      id: "custom-thailand-tour-package",
      title: "Custom Thailand Tour Package: Handcrafted Bespoke Journey",
      cardTitle: "Custom Thailand Tour Package",
      subtitle: "Tailor-Made Destinations, Stays & Private Charters",
      shortDescription:
        "Built completely around your travel dates, budget, preferred islands, hotel tier, and private activities.",
      category: "international",
      destination: "Thailand",
      duration: "Flexible (4 to 12+ Days)",
      days: 8,
      nights: 7,
      priceStarting: "Custom Quote",
      rating: 5.0,
      reviewsCount: 310,
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
      tag: "100% Tailor-Made",
      iconicLandmarks: ["Bangkok Luxury Stays", "Koh Samui Private Villas", "Chiang Mai Mountain Resorts", "Private Speedboat Charters"],
      hiddenGems: ["Koh Lanta quiet beaches", "Khao Sok national park treehouses", "Private yacht charters"],
      localFoodHighlight: "Michelin-starred Thai dining & private chef beachfront barbecues",
      freeDayNote: "Your free days are designed entirely to match your own natural pace and preferences.",
      overview:
        "Want to combine Chiang Mai's misty hills with Koh Samui's tranquil sands or Bangkok's Michelin dining? Our senior Delhi travel planners create your itinerary from scratch with zero compromises.",
      itinerary: [
        { day: 1, title: "Tailored Arrival According to Your Flight", description: "VIP airport reception, fast-track immigration assistance if requested, and private limousine transfer." },
        { day: 2, title: "Handpicked Sightseeing & Private Excursions", description: "Private English-speaking guides and executive chauffeured transport tailored to your wish list." },
        { day: 3, title: "Island Adventures or Cultural Deep Dives", description: "Fly to your chosen islands or northern cultural havens with curated hotel upgrades." },
        { day: 4, title: "Bespoke Activities: Yacht, Cooking, Diving", description: "Enjoy experiences tailored exclusively for you—from ethical elephant encounters to private island charters." },
        { day: 5, title: "Unstructured Leisure at Your Own Rhythm", description: "Relax with guaranteed free time, curated dining recommendations, and on-call concierge." },
        { day: 6, title: "Seamless Departure Curated by Delhi Desk", description: "Private airport transfers, tax-refund (VAT) assistance, and smooth direct flights home." },
      ],
      inclusions: ["Custom Hotel Tier (Boutique 4-Star to Ultra-Luxury 5-Star)", "Private Chauffeured AC Fleet for all Transfers", "Custom Domestic Flight Bookings & Baggage", "Tailor-Made Sightseeing with Dedicated Private Guide", "Direct 24/7 Delhi Planning Desk Access", "Visa Guidance & Transparent Itemized Pricing"],
      exclusions: ["Specified transparently during quote drafting", "No hidden costs"],
    },
  ];

  const handleOpenPackageModal = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsPackageModalOpen(true);
  };

  // 6 Best Places to Visit in Thailand requested in prompt
  const placesToVisit = [
    {
      id: "bangkok",
      title: "Bangkok",
      tag: "Vibrant Capital",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Bangkok is the capital of Thailand and a popular destination for sightseeing, shopping, food, temples, entertainment, and city experiences.",
      elaborations: [
        "Grand Palace & Emerald Buddha (Wat Phra Kaew)",
        "Wat Arun (Temple of Dawn) riverside vista",
        "Chatuchak Weekend Market & Pratunam wholesale bazaars",
        "Chao Phraya River luxury dinner cruises with live music",
        "World-class rooftop lounges (Vertigo, Octave, Mahanakhon)",
      ],
    },
    {
      id: "phuket",
      title: "Phuket",
      tag: "Andaman Beach Haven",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Phuket is one of Thailand's most popular beach destinations. Visitors can enjoy beautiful beaches, island tours, water activities, local markets, and vibrant nightlife.",
      elaborations: [
        "Patong, Karon, and Kata white sandy beaches",
        "Day trips by speedboat to Maya Bay & Phi Phi Islands",
        "45-meter marble Big Buddha with 360-degree island views",
        "Vibrant Bangla Road nightlife and beach clubs",
        "Old Phuket Town colorful Sino-Portuguese heritage architecture",
      ],
    },
    {
      id: "pattaya",
      title: "Pattaya",
      tag: "Coastal Entertainment Hub",
      image: "https://images.unsplash.com/photo-1512553353684-82e3895e6f66?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Pattaya is known for its beaches, entertainment, shopping, water activities, and nightlife. It is a popular destination for travellers looking for both relaxation and fun.",
      elaborations: [
        "Coral Island (Koh Larn) parasailing, jet skiing & snorkeling",
        "Sanctuary of Truth awe-inspiring all-wood carved seaside temple",
        "World-famous Alcazar and Tiffany Cabaret theatre shows",
        "Nong Nooch Tropical Botanical Garden & Thai cultural shows",
        "Pattaya Floating Market traditional wooden boat shopping",
      ],
    },
    {
      id: "krabi",
      title: "Krabi",
      tag: "Limestone Karsts & Natural Wonder",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Krabi is famous for its beautiful beaches, limestone cliffs, islands, and natural scenery. It is a great destination for travellers interested in beaches, adventure, and nature.",
      elaborations: [
        "Towering limestone sea cliffs of world-renowned Railay Beach",
        "Krabi 4-Islands Speedboat Tour (Koh Poda, Chicken, Tup, Mor)",
        "Jungle trek to thermal Emerald Pool and Hot Springs",
        "Hong Island breathtaking enclosed emerald lagoon",
        "World-class sea kayaking through mangrove sea caves",
      ],
    },
    {
      id: "chiang-mai",
      title: "Chiang Mai",
      tag: "Northern Culture & Mountains",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Chiang Mai offers a different side of Thailand with historic temples, local markets, mountains, cultural experiences, and peaceful surroundings.",
      elaborations: [
        "Misty mountain temple Wat Phra That Doi Suthep",
        "Historic moated Old City with over 300 Buddhist pagodas",
        "Ethical elephant rescue sanctuaries with hands-on care",
        "Famous Chiang Mai Sunday Night Market handicraft bazaar",
        "Traditional Lanna cooking classes in organic farm settings",
      ],
    },
    {
      id: "koh-samui",
      title: "Koh Samui",
      tag: "Tropical Resort Paradise",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      verbatimText:
        "Koh Samui is a popular island destination known for its beaches, tropical scenery, resorts, water activities, and relaxing holiday experiences.",
      elaborations: [
        "Chaweng and Lamai palm-fringed sandy shorelines",
        "Ang Thong National Marine Park 42-island archipelago tours",
        "Fisherman’s Village Bophut with seaside dining and night markets",
        "Big Buddha Temple (Wat Phra Yai) coastal monument",
        "Luxury cliffside private pool villas and world-class spa retreats",
      ],
    },
  ];

  // 14 Things to do in Thailand (Verbatim from prompt)
  const thingsToDo = [
    { title: "Explore Bangkok's famous attractions", desc: "Grand Palace, Wat Pho, and iconic riverside sights.", icon: Building, color: "text-amber-600 bg-amber-50" },
    { title: "Visit beautiful Thai temples", desc: "Golden Buddhas, porcelain stupas, and ancient shrines.", icon: Sparkles, color: "text-emerald-600 bg-emerald-50" },
    { title: "Relax on Phuket's beaches", desc: "Soft white sands, warm Andaman surf, and relaxed sun loungers.", icon: Sun, color: "text-sky-600 bg-sky-50" },
    { title: "Enjoy island hopping", desc: "Speedboats to Phi Phi, Maya Bay, Bamboo Island, and Krabi.", icon: Ship, color: "text-teal-600 bg-teal-50" },
    { title: "Experience water sports and beach activities", desc: "Parasailing, snorkeling, banana boats, and jet skiing.", icon: Waves, color: "text-blue-600 bg-blue-50" },
    { title: "Explore Pattaya's attractions", desc: "Alcazar Cabaret, Sanctuary of Truth, and Nong Nooch.", icon: Ticket, color: "text-purple-600 bg-purple-50" },
    { title: "Discover Krabi's natural beauty", desc: "Limestone cliffs, Railay Beach, and lush Emerald Pool.", icon: Palmtree, color: "text-green-600 bg-green-50" },
    { title: "Enjoy shopping in local markets", desc: "Chatuchak weekend market, Platinum Mall, and night bazaars.", icon: ShoppingBag, color: "text-rose-600 bg-rose-50" },
    { title: "Try authentic Thai food", desc: "World-famous Pad Thai, Tom Yum, Som Tum, and mango sticky rice.", icon: UtensilsCrossed, color: "text-orange-600 bg-orange-50" },
    { title: "Take a boat ride", desc: "Longtail wooden canal boats and Chao Phraya dinner cruises.", icon: Anchor, color: "text-indigo-600 bg-indigo-50" },
    { title: "Experience Thailand's nightlife", desc: "Vibrant beach clubs, Bangkok rooftop lounges, and cabaret shows.", icon: Glasses, color: "text-pink-600 bg-pink-50" },
    { title: "Explore local culture and traditions", desc: "Thai massages, floating markets, and authentic cooking classes.", icon: Coffee, color: "text-yellow-700 bg-yellow-50" },
    { title: "Relax at tropical beaches", desc: "Peaceful quiet bays in Koh Samui, Krabi, and Phuket coves.", icon: Palmtree, color: "text-emerald-700 bg-emerald-50" },
    { title: "Visit popular islands and coastal destinations", desc: "Unmatched coastal scenery across Andaman Sea and Gulf of Thailand.", icon: Compass, color: "text-sky-700 bg-sky-50" },
  ];

  // 6 Traveller categories (Verbatim from prompt)
  const travellerTypes = [
    {
      title: "Thailand Family Tour Packages",
      tag: "Family Friendly",
      icon: Users,
      color: "from-blue-500/10 to-sky-500/10 border-blue-200",
      desc: "Enjoy a comfortable Thailand family holiday with sightseeing, beaches, activities, comfortable stays, transfers, and free time. Your itinerary can be planned around family-friendly attractions and experiences.",
      highlights: ["Spacious interconnecting 4-star rooms", "Safari World & SEA LIFE passes included", "Child-friendly private transfers & drivers", "Guaranteed free time for leisurely pool days"],
    },
    {
      title: "Thailand Honeymoon Packages",
      tag: "Romantic Stays",
      icon: Heart,
      color: "from-rose-500/10 to-pink-500/10 border-rose-200",
      desc: "Make your Thailand honeymoon memorable with beautiful beaches, romantic experiences, comfortable stays, island tours, and relaxing moments together.",
      highlights: ["Private pool villas in Phuket & Krabi", "Sunset sailing catamaran with champagne", "Beachfront candlelight dinner under stars", "Couples spa massage & honeymoon bed decor"],
    },
    {
      title: "Thailand Friends Trip Packages",
      tag: "Vibrant & Fun",
      icon: Smile,
      color: "from-amber-500/10 to-yellow-500/10 border-amber-200",
      desc: "Plan an exciting Thailand getaway with your friends. Combine sightseeing, beaches, nightlife, shopping, local food, adventure activities, and free time in one trip.",
      highlights: ["Patong & Bangkok rooftop nightlife", "Coral Island water sports & speedboats", "Street food hopping in Chinatown", "Group-friendly private vans & shared fun"],
    },
    {
      title: "Thailand Beach Holiday Packages",
      tag: "Sea & Sand",
      icon: Waves,
      color: "from-teal-500/10 to-emerald-500/10 border-teal-200",
      desc: "If you want to relax by the sea, Thailand offers beautiful beaches and islands. A beach holiday package can combine destinations such as Phuket, Krabi, Pattaya, or Koh Samui.",
      highlights: ["Beachfront resorts with direct ocean access", "Island hopping to Phi Phi & Maya Bay", "Snorkeling, paddleboarding & sunbathing", "Tropical fruit shakes & fresh seaside seafood"],
    },
    {
      title: "Thailand Adventure Tour Packages",
      tag: "Outdoor Thrills",
      icon: CompassIcon,
      color: "from-orange-500/10 to-amber-500/10 border-orange-200",
      desc: "Thailand offers a variety of activities for travellers looking for adventure. Depending on your itinerary, you can enjoy island hopping, water sports, boat trips, and other outdoor experiences.",
      highlights: ["Rock climbing on Railay limestone cliffs", "Scuba diving & deep sea snorkeling", "Sea cave kayaking in Phang Nga Bay", "Jungle zipline & ATV forest trails"],
    },
    {
      title: "Custom Thailand Tour Packages",
      tag: "100% Bespoke",
      icon: SlidersHorizontal,
      color: "from-purple-500/10 to-indigo-500/10 border-purple-200",
      desc: "Want to create your own Thailand itinerary? Our custom Thailand tour packages can be planned around your travel dates, budget, hotel preferences, activities, and interests.",
      highlights: ["Choose your exact destinations & hotel tier", "Add or skip any activity or tour freely", "Personalized private chauffeur & schedule", "Itemized pricing with zero surprise costs"],
    },
  ];

  // 7 Pillars for Why Choose Altitude Travel Co. (Verbatim from prompt)
  const whyChoosePillars = [
    {
      title: "Flexible Itinerary Options",
      desc: "Choose an itinerary based on your interests, whether you prefer sightseeing, beaches, culture, adventure, shopping, or relaxation.",
    },
    {
      title: "Explore Popular Destinations",
      desc: "Visit well-known destinations such as Bangkok, Phuket, Pattaya, Krabi, and other places based on your itinerary.",
    },
    {
      title: "Free Time to Explore",
      desc: "Wherever possible, we include free time so you can relax, shop, explore, or enjoy the destination at your own pace.",
    },
    {
      title: "Curated Experiences",
      desc: "Our itineraries combine important attractions with experiences that help you discover more of Thailand.",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear information about package inclusions and exclusions before booking.",
    },
    {
      title: "Personal Support",
      desc: "Our team assists with travel planning, itinerary questions, and trip-related support.",
    },
    {
      title: "Customised Thailand Packages",
      desc: "Share your travel dates, budget, group size, and interests, and we can create an itinerary around your requirements.",
    },
  ];

  // 8 FAQs (Verbatim from prompt)
  const faqs = [
    {
      q: "Q1. What is the best time to visit Thailand?",
      a: "The best time to visit Thailand generally depends on the destinations and activities you want to enjoy. Many travellers prefer the cooler and drier months for sightseeing, beaches, and outdoor activities. Your travel dates can help determine the destinations and itinerary that best suit your trip.",
    },
    {
      q: "Q2. How many days are enough for a Thailand trip?",
      a: "A Thailand trip of 5 to 7 days can cover popular destinations such as Bangkok, Phuket, Pattaya, or Krabi. If you have more time, you can include additional islands, cultural destinations, or beach experiences in your itinerary.",
    },
    {
      q: "Q3. What are the best places to visit in Thailand?",
      a: "Some of the popular places to visit in Thailand include Bangkok, Phuket, Pattaya, Krabi, Chiang Mai, and Koh Samui. The best destinations for your trip depend on whether you prefer sightseeing, beaches, culture, adventure, shopping, or relaxation.",
    },
    {
      q: "Q4. Do you offer Thailand tour packages from India?",
      a: "Yes, Thailand tour packages can be planned for travellers from India. You can choose an itinerary based on your travel dates, budget, preferred destinations, group size, and travel interests.",
    },
    {
      q: "Q5. Which Thailand tour package is best for families?",
      a: "Thailand family tour packages can include comfortable stays, sightseeing, beaches, family-friendly activities, transfers, and free time. The itinerary can be customised according to the ages and interests of your family members.",
    },
    {
      q: "Q6. Do you offer Thailand honeymoon packages?",
      a: "Yes, Thailand honeymoon packages can be planned around romantic stays, beautiful beaches, island tours, sightseeing, and relaxing experiences. Your itinerary can be customised according to your preferred destinations and travel dates.",
    },
    {
      q: "Q7. Can I customise my Thailand tour package?",
      a: "Yes, you can customise your Thailand tour package based on your travel dates, budget, preferred hotels, destinations, activities, and group size. Altitude Travel Co. can help create an itinerary according to your requirements.",
    },
    {
      q: "Q8. What are the best things to do in Thailand?",
      a: "Popular things to do in Thailand include visiting temples, exploring Bangkok, relaxing on beaches, island hopping, enjoying water activities, exploring local markets, trying Thai food, taking boat trips, and experiencing local culture and nightlife.",
    },
  ];

  // Filtered packages
  const filteredPackages =
    activePackageFilter === "all"
      ? thailandPackages
      : activePackageFilter === "honeymoon"
      ? thailandPackages.filter((p) => p.id.includes("honeymoon"))
      : activePackageFilter === "family"
      ? thailandPackages.filter((p) => p.id.includes("family"))
      : activePackageFilter === "short"
      ? thailandPackages.filter((p) => p.days <= 5)
      : thailandPackages;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col selection:bg-[#BFA13B]/20 selection:text-stone-950">
      
      {/* Global Header */}
      <Navbar
        onOpenCustomModal={() => setIsCustomModalOpen(true)}
        onOpenInquiryModal={() => {
          const formElem = document.getElementById("thailand-inquiry-box");
          if (formElem) {
            formElem.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }}
      />

      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* HERO SECTION: 3D MOVING ATTRACTIONS + THAI SCRIPT + VERBATIM H1          */}
        {/* ========================================================================= */}
        <section className="relative pt-[128px] pb-10 sm:pt-[132px] sm:pb-12 lg:pt-[136px] lg:pb-14 bg-[#FAF9F6] border-b border-[#E5E0D5] overflow-hidden">
          
          {/* Subtle Warm Luxury Atmosphere Glows */}
          <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-[#BFA13B]/5 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-1/3 -left-20 w-[420px] h-[420px] bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Bar: Thai-Inspired Greeting Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E5E0D5]">
              
              {/* ELEGANT THAI GREETING BADGE */}
              <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-[#FBF7EE] border border-[#BFA13B]/40 px-4 py-1.5 rounded-full shadow-2xs">
                <span className="text-[#BFA13B] font-bold text-sm tracking-wide">🌺</span>
                <span className="font-serif text-stone-900 text-base sm:text-lg font-bold tracking-wide italic">
                  สวัสดี (Sawasdee) — Discover the Land of Smiles
                </span>
                <span className="text-[#BFA13B]/60 hidden sm:inline">•</span>
                <span className="text-xs sm:text-sm font-serif font-bold text-stone-800">
                  Thailand Tour Packages
                </span>
              </div>

              {/* Currency & Direct Flight Information */}
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                <span className="bg-white px-3 py-1 rounded-full border border-[#E5E0D5] shadow-2xs flex items-center gap-1.5">
                  <Gem className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Currency: <strong className="text-stone-900">Thai Baht (THB)</strong></span>
                </span>
                <span className="hidden sm:inline-flex bg-white px-3 py-1 rounded-full border border-[#E5E0D5] shadow-2xs items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>4.0h Direct Flight from Delhi</span>
                </span>
                <span className="hidden md:inline-flex bg-[#FBF7EE] text-stone-900 px-3 py-1 rounded-full border border-[#BFA13B]/40 shadow-2xs items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Visa-Free / Easy Entry for Indians</span>
                </span>
              </div>

            </div>

            {/* Main Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: VERBATIM H1 & INTRODUCTORY COPY */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                
                {/* Eyebrow Micro-caps */}
                <div className="inline-flex items-center gap-2 self-start text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                  <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
                  <span>Curated Southeast Asia Holidays • Connaught Place, Delhi Planning Desk</span>
                </div>

                {/* SIGNATURE EDITORIAL H1 HEADING */}
                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-serif font-bold text-[#1C1917] tracking-tight leading-[1.14]">
                  Thailand Tour Packages |{" "}
                  <span className="italic font-normal text-shining-gold">
                    Explore the Best of Thailand
                  </span>
                </h1>

                {/* Dynamic Moving Accent Line */}
                <div className="moving-line-track max-w-[160px]">
                  <div className="moving-line-beam" />
                </div>

                {/* VERBATIM INTRODUCTORY PARAGRAPHS */}
                <div className="space-y-3.5 text-sm sm:text-[15px] text-stone-600 leading-relaxed font-normal">
                  <p className="text-base sm:text-lg font-serif font-medium text-stone-900 leading-relaxed">
                    Discover the best of Thailand with our Thailand tour packages. Explore Bangkok&apos;s vibrant city life, Phuket&apos;s beautiful beaches, Pattaya&apos;s exciting attractions, and Krabi&apos;s stunning natural surroundings.
                  </p>
                  <p>
                    With Altitude Travel Co., enjoy a carefully planned Thailand holiday that combines sightseeing, beaches, culture, adventure, comfortable stays, and free time to explore at your own pace.
                  </p>
                </div>

                {/* Core Experience Badges Ribbon */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] shadow-2xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#BFA13B]/30">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-serif font-bold text-stone-900">Phuket &amp; Phi Phi</h4>
                      <p className="text-[11px] text-stone-500">Andaman Islands &amp; Sun</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] shadow-2xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#BFA13B]/30">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-serif font-bold text-stone-900">Bangkok &amp; Temples</h4>
                      <p className="text-[11px] text-stone-500">Grand Palace &amp; Shopping</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5] shadow-2xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] text-[#BFA13B] flex items-center justify-center shrink-0 border border-[#BFA13B]/30">
                      <Palmtree className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-serif font-bold text-stone-900">Krabi &amp; Pattaya</h4>
                      <p className="text-[11px] text-stone-500">Cliffs, Watersports &amp; Fun</p>
                    </div>
                  </div>
                </div>

                {/* Popular Discovery Badges */}
                <div className="pt-1 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold tracking-wider text-stone-400 uppercase mr-1">
                    Top Destinations:
                  </span>
                  {["Bangkok", "Phuket", "Pattaya", "Krabi", "Chiang Mai", "Koh Samui", "Phi Phi Islands"].map(
                    (place, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-white text-stone-800 border border-[#E5E0D5] shadow-2xs flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-[#BFA13B]" />
                        <span>{place}</span>
                      </span>
                    )
                  )}
                </div>

              </div>

              {/* Right Column: 3D MOVING PHOTOS SHOWCASE + QUICK INQUIRY CARD */}
              <div className="lg:col-span-5 space-y-6" id="thailand-inquiry-box">
                
                {/* 3D Moving Position Photos Showcase */}
                <div className="relative h-[290px] sm:h-[320px] rounded-2xl p-4 bg-gradient-to-tr from-[#0C0A09] via-stone-900 to-[#0C0A09] overflow-hidden shadow-xl border border-[#BFA13B]/30 flex items-center justify-center">
                  
                  {/* Subtle Background Golden Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(191,161,59,0.22),transparent_60%)]" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-[#E8D08D] px-3 py-1 rounded-full border border-white/20">
                      <Sparkles className="w-3 h-3 text-[#BFA13B]" />
                      <span>Live 3D Attractions Showcase</span>
                    </span>
                  </div>

                  {/* 3D Moving Perspective Photos Container */}
                  <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
                    
                    {/* Card 1: Left 3D Moving Photo - Krabi Railay Beach */}
                    <div className="absolute -left-2 sm:left-2 w-[160px] sm:w-[190px] h-[210px] sm:h-[230px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 animate-3d-left z-10 group cursor-pointer transition-transform">
                      <Image
                        src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80"
                        alt="Krabi limestone cliffs and turquoise Andaman waters"
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] font-bold text-[#BFA13B] block">Natural Wonder</span>
                        <h4 className="text-xs font-bold leading-tight">Krabi Limestone Cliffs</h4>
                      </div>
                    </div>

                    {/* Card 2: Center 3D Floating Hero - Phuket Phi Phi Island */}
                    <div className="relative w-[180px] sm:w-[210px] h-[230px] sm:h-[250px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-2 border-[#BFA13B] animate-3d-center z-20 group cursor-pointer">
                      <Image
                        src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=600&q=80"
                        alt="Phuket Phi Phi Island and Maya Bay turquoise water"
                        fill
                        sizes="240px"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/30 to-transparent" />
                      <div className="absolute top-2.5 right-2.5 bg-[#BFA13B] text-stone-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
                        MUST VISIT
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10.5px] font-bold text-[#E8D08D] block">Andaman Archipelago</span>
                        <h4 className="text-sm font-bold leading-tight">Phi Phi &amp; Maya Bay</h4>
                      </div>
                    </div>

                    {/* Card 3: Right 3D Moving Photo - Bangkok Grand Palace & Temples */}
                    <div className="absolute -right-2 sm:right-2 w-[160px] sm:w-[190px] h-[210px] sm:h-[230px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 animate-3d-right z-10 group cursor-pointer transition-transform">
                      <Image
                        src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80"
                        alt="Bangkok Grand Palace and golden Buddhist pagodas"
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] font-bold text-[#BFA13B] block">Capital Heritage</span>
                        <h4 className="text-xs font-bold leading-tight">Bangkok Wat Arun</h4>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Quick Concierge Inquiry Card with Moving Border Beam */}
                <div className="border-beam-card shadow-[0_16px_40px_-6px_rgba(28,25,23,0.12)]">
                  <div className="border-beam-inner p-6 sm:p-7">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#E5E0D5]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-gold-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                          Thailand Tour Inquiry
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-stone-900 bg-[#FBF7EE] px-2.5 py-0.5 rounded-full border border-[#BFA13B]/40">
                        Delhi Desk Online
                      </span>
                    </div>

                    {/* Dynamic Moving Laser Beam Line */}
                    <div className="moving-line-track mb-3">
                      <div className="moving-line-beam" />
                    </div>

                    {submitted ? (
                      <div className="py-6 text-center space-y-3">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h4 className="text-base font-bold text-stone-900">Inquiry Received</h4>
                        <p className="text-xs text-stone-600 max-w-xs mx-auto">
                          Thank you! Our Thailand travel specialist from Connaught Place, Delhi will contact you shortly with customized package itineraries and best flight deals.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="mt-2 px-4 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmitInquiry} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <div>
                            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Rahul Sharma"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+91 98100 XXXXX"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <div>
                            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                              Package Type
                            </label>
                            <select
                              value={formData.packageType}
                              onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                            >
                              <option value="Thailand 4 Nights / 5 Days">Thailand 4N / 5D (BKK + Pattaya)</option>
                              <option value="Thailand 5 Nights / 6 Days">Thailand 5N / 6D (Phuket + Krabi)</option>
                              <option value="Thailand 6 Nights / 7 Days">Thailand 6N / 7D (BKK + Pattaya Leisure)</option>
                              <option value="Thailand Honeymoon Package">Thailand Honeymoon Package</option>
                              <option value="Thailand Family Holiday Package">Thailand Family Holiday Package</option>
                              <option value="Thailand Beach Holiday Package">Thailand Beach Holiday Package</option>
                              <option value="Custom Thailand Tour Package">Custom Thailand Tour Package</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                              Number of Guests
                            </label>
                            <select
                              value={formData.guests}
                              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                              className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF9F6] border border-[#E5E0D5] focus:bg-white focus:border-[#BFA13B] focus:outline-none"
                            >
                              <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                              <option value="Family with Kids">Family with Kids</option>
                              <option value="Group of Friends (4+)">Group of Friends (4+)</option>
                              <option value="Solo Traveler">Solo Traveler</option>
                            </select>
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm tracking-wide bg-shining-gold shining-sweep hover:brightness-105 active:scale-[0.99] text-stone-950 shadow-[0_8px_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 border border-[#BFA13B]/40 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <span>Submitting Thailand Inquiry...</span>
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5 text-stone-950" />
                              <span>Request Custom Thailand Package Quote</span>
                            </>
                          )}
                        </button>

                        <p className="text-[10.5px] text-center text-stone-400 font-medium">
                          100% Privacy • No Spam • Handcrafted Quotes from Delhi Office
                        </p>
                      </form>
                    )}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1: EXPLORE THAILAND TOUR PACKAGES (H2)                            */}
        {/* ========================================================================= */}
        <section id="explore-thailand" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Specialized Planning from Delhi Desk</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Explore Thailand <span className="italic font-normal text-[#BFA13B]">Tour Packages</span>
              </h2>

              {/* VERBATIM TEXT FROM PROMPT */}
              <div className="space-y-3 text-base text-stone-600 leading-relaxed font-normal">
                <p>
                  Altitude Travel Co. specializes in thoughtfully planned Thailand tour packages for those interested in experiencing the country&apos;s beaches, cities, culture, nature, and exciting activities.
                </p>
                <p>
                  See Bangkok&apos;s famous landmarks, enjoy the beaches in Phuket, have fun in Pattaya, or discover the beautiful islands and natural attractions of Krabi.
                </p>
                <p className="font-serif font-semibold text-stone-900">
                  Whether you are planning a family holiday, honeymoon, friends&apos; group, or an exclusive getaway, we can help plan your itinerary according to your travel dates, budget, interests, and preferred style of travel.
                </p>
              </div>
            </div>

            {/* Inclusions Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
              <div className="p-3.5 bg-white rounded-xl border border-[#E5E0D5] text-center space-y-1 shadow-2xs">
                <span className="text-xl">✈️</span>
                <h4 className="text-xs font-serif font-bold text-stone-900">Direct Flights</h4>
                <p className="text-[11px] text-stone-500">Non-stop from Delhi</p>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-[#E5E0D5] text-center space-y-1 shadow-2xs">
                <span className="text-xl">🏨</span>
                <h4 className="text-xs font-serif font-bold text-stone-900">4 &amp; 5-Star Stays</h4>
                <p className="text-[11px] text-stone-500">Beachfront &amp; City Center</p>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-[#E5E0D5] text-center space-y-1 shadow-2xs">
                <span className="text-xl">🚤</span>
                <h4 className="text-xs font-serif font-bold text-stone-900">Speedboat Tours</h4>
                <p className="text-[11px] text-stone-500">Phi Phi &amp; Coral Island</p>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-[#E5E0D5] text-center space-y-1 shadow-2xs">
                <span className="text-xl">🛡️</span>
                <h4 className="text-xs font-serif font-bold text-stone-900">24/7 Delhi Care</h4>
                <p className="text-[11px] text-stone-500">Dedicated Support Desk</p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: PACKAGE CARDS / IMAGE SECTION (9 PACKAGE EXAMPLES)            */}
        {/* ========================================================================= */}
        <section id="thailand-packages-grid" className="py-10 sm:py-12 lg:py-14 bg-[#FBF7EE] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Gem className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Featured Itineraries</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Featured Thailand <span className="italic font-normal text-[#BFA13B]">Holiday Packages</span>
              </h2>

              <p className="text-base text-stone-600 leading-relaxed font-normal">
                Choose from our popular package examples below, or let us tailor your own itinerary.
              </p>

              {/* Slider / Filter Option (Requested in prompt) */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {[
                  { id: "all", label: "All Thailand Packages (9)" },
                  { id: "short", label: "4 to 5 Days Express" },
                  { id: "honeymoon", label: "Honeymoon & Romantic" },
                  { id: "family", label: "Family Holiday" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActivePackageFilter(tab.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activePackageFilter === tab.id
                        ? "bg-[#0C0A09] text-[#E8D08D] shadow-xs"
                        : "bg-white text-stone-600 border border-[#E5E0D5] hover:bg-[#FAF9F6]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 9 Package Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => {
                const numericPrice = parseInt(pkg.priceStarting.replace(/[^\d]/g, ""), 10);
                const originalPrice = numericPrice ? Math.round(numericPrice * 1.24) : null;

                return (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] hover:border-[#BFA13B] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20" />
                      
                      <span className="absolute top-3 left-3 bg-[#BFA13B] text-stone-950 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                        {pkg.tag}
                      </span>

                      <span className="absolute top-3 right-3 bg-[#0C0A09]/80 backdrop-blur-md text-[#E8D08D] text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#BFA13B]/20">
                        <Clock className="w-3 h-3 text-[#BFA13B]" />
                        <span>{pkg.duration}</span>
                      </span>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-xs text-[#E8D08D] block font-medium">{pkg.subtitle}</span>
                        <h3 className="text-lg font-serif font-bold text-white leading-snug">{pkg.cardTitle}</h3>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <p className="text-xs text-stone-600 leading-relaxed font-normal">
                          {pkg.shortDescription}
                        </p>

                        <div className="p-2.5 bg-[#FBF7EE] rounded-xl border border-[#BFA13B]/30 text-[11px] font-semibold text-stone-900 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                          <span>{pkg.freeDayNote}</span>
                        </div>

                        <div className="space-y-1.5 pt-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                            Key Inclusions:
                          </span>
                          {pkg.iconicLandmarks.slice(0, 3).map((lm, i) => (
                            <div key={i} className="text-xs text-stone-700 flex items-center gap-1.5 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                              <span className="truncate">{lm}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#E5E0D5] flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-stone-400 block font-semibold uppercase tracking-wider">Starting From</span>
                          <div className="flex items-baseline gap-2">
                            {originalPrice && (
                              <span className="text-xs text-stone-400 line-through">
                                ₹{originalPrice.toLocaleString("en-IN")}
                              </span>
                            )}
                            <span className="text-xl font-serif font-bold text-[#1C1917]">{pkg.priceStarting}</span>
                          </div>
                          <span className="text-[10.5px] text-stone-500 block">/ person (ex Delhi)</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleOpenPackageModal(pkg)}
                          className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0C0A09] hover:bg-stone-900 text-[#BFA13B] transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer border border-[#BFA13B]/30"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider / Show More Callout (Prompt: Slider Option – Show More Thailand Packages) */}
            <div className="mt-8 p-5 rounded-2xl bg-white border border-[#E5E0D5] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2.5 text-xs text-stone-800 font-medium">
                <Info className="w-4 h-4 text-[#BFA13B] shrink-0" />
                <span>Need a different duration or combined multi-country itinerary? We create bespoke itineraries for any dates.</span>
              </div>
              <button
                type="button"
                onClick={() => setIsCustomModalOpen(true)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#BFA13B] hover:bg-[#d4b54a] text-stone-950 transition-all shadow-xs shrink-0 cursor-pointer"
              >
                Customize My Thailand Package
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: BEST PLACES TO VISIT IN THAILAND (H2 & H3s)                    */}
        {/* ========================================================================= */}
        <section id="best-places-to-visit" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <MapPin className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Destination Guide</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Best Places to Visit in <span className="italic font-normal text-[#BFA13B]">Thailand</span>
              </h2>

              {/* VERBATIM INTRO TEXT FROM PROMPT */}
              <p className="text-base text-stone-600 leading-relaxed font-normal">
                Thailand offers a combination of vibrant cities, beautiful beaches, cultural attractions, islands, nature, and local experiences. From Bangkok&apos;s famous landmarks to Phuket and Krabi&apos;s beaches, there is plenty to explore during your Thailand trip.
              </p>
            </div>

            {/* 6 Elaborated Destination Cards (H3 Headings) */}
            <div className="space-y-8 max-w-5xl mx-auto">
              {placesToVisit.map((place, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={place.id}
                    className={`bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D5] shadow-xs flex flex-col md:flex-row gap-6 items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-full md:w-5/12 relative h-56 sm:h-64 rounded-xl overflow-hidden shrink-0 shadow-xs">
                      <Image
                        src={place.image}
                        alt={`${place.title} Thailand`}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-[#0C0A09] text-[#E8D08D] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs border border-[#BFA13B]/30">
                        {place.tag}
                      </span>
                    </div>

                    <div className="flex-1 space-y-3 text-left">
                      {/* EXACT H3 HEADING */}
                      <h3 className="text-2xl font-serif font-bold text-[#1C1917] flex items-center gap-2">
                        <span>{place.title}</span>
                      </h3>

                      {/* VERBATIM PROMPT COPY */}
                      <p className="text-sm text-stone-600 leading-relaxed font-normal">
                        {place.verbatimText}
                      </p>

                      {/* ELABORATED HIGHLIGHTS */}
                      <div className="pt-2 border-t border-[#E5E0D5] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                        {place.elaborations.map((item, i) => (
                          <div key={i} className="flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Option – Show More Places */}
            <div className="mt-8 text-center">
              <p className="text-xs text-stone-500 font-semibold mb-3">
                Also exploring Hua Hin, Koh Phangan, Pai, or Ayutthaya?
              </p>
              <button
                type="button"
                onClick={() => setIsCustomModalOpen(true)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-[#FAF9F6] text-stone-900 border border-[#E5E0D5] shadow-2xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Slider Option – Show More Places &amp; Offbeat Islands</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#BFA13B]" />
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: THINGS TO DO IN THAILAND (H2) - 14 ITEMS FROM PROMPT          */}
        {/* ========================================================================= */}
        <section id="things-to-do" className="py-10 sm:py-12 lg:py-14 bg-[#FBF7EE] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Compass className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Activities &amp; Highlights</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Things to Do in <span className="italic font-normal text-[#BFA13B]">Thailand</span>
              </h2>

              {/* VERBATIM PROMPT INTRO */}
              <div className="space-y-1 text-base text-stone-600 leading-relaxed font-normal">
                <p>
                  A Thailand holiday offers you the chance to combine sightseeing, cultural experiences, beach relaxation, shopping, food, and adventure.
                </p>
                <p className="font-serif font-semibold text-stone-900">
                  Here are just a few of the many experiences on offer:
                </p>
              </div>
            </div>

            {/* 14 Things to do Grid (Verbatim Items) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 max-w-6xl mx-auto">
              {thingsToDo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E5E0D5] hover:border-[#BFA13B] transition-all shadow-2xs group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#FBF7EE] border border-[#BFA13B]/30 text-[#BFA13B] flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-serif font-bold text-[#1C1917] leading-snug group-hover:text-[#BFA13B] transition-colors mb-1">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-stone-500 font-normal leading-relaxed pt-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: BEST THAILAND PACKAGES FOR EVERY TRAVELLER (H2 & H3s)          */}
        {/* ========================================================================= */}
        <section id="packages-for-every-traveller" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-[#E5E0D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Users className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Tailored for You</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                Best Thailand Tour Packages for <span className="italic font-normal text-[#BFA13B]">Every Traveller</span>
              </h2>

              {/* VERBATIM PROMPT INTRO */}
              <p className="text-base text-stone-600 leading-relaxed font-normal">
                Whether you are travelling with family, your partner, friends, or as a group, Altitude Travel Co. can help you choose a Thailand tour package that suits your holiday plans.
              </p>
            </div>

            {/* 6 Traveller Category Cards (H3s) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {travellerTypes.map((type, idx) => {
                const Icon = type.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-[#E5E0D5] hover:border-[#BFA13B] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-900 bg-[#FBF7EE] px-2.5 py-0.5 rounded-full border border-[#BFA13B]/30">
                          {type.tag}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-[#E5E0D5] flex items-center justify-center text-[#BFA13B]">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* EXACT H3 HEADING */}
                      <h3 className="text-lg font-serif font-bold text-[#1C1917] leading-snug">
                        {type.title}
                      </h3>

                      {/* VERBATIM COPY */}
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                        {type.desc}
                      </p>

                      <div className="pt-2 border-t border-[#E5E0D5] space-y-1.5">
                        {type.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-stone-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-[#E5E0D5]">
                      <button
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, packageType: type.title }));
                          const formElem = document.getElementById("thailand-inquiry-box");
                          if (formElem) {
                            formElem.scrollIntoView({ behavior: "smooth", block: "center" });
                          }
                        }}
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#0C0A09] hover:bg-stone-900 text-[#BFA13B] transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-[#BFA13B]/30"
                      >
                        <span>Enquire for {type.tag}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Option – Show More Packages */}
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setIsCustomModalOpen(true)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-[#FAF9F6] text-stone-900 border border-[#E5E0D5] shadow-2xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Slider Option – Show More Custom Thailand Packages</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#BFA13B]" />
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: WHY CHOOSE ALTITUDE TRAVEL CO. FOR YOUR THAILAND TRIP? (H2)    */}
        {/* ========================================================================= */}
        <section id="why-choose-altitude" className="py-12 sm:py-14 lg:py-16 bg-[#0C0A09] text-white border-b border-[#BFA13B]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#E8D08D]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>The Altitude Travel Standard</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-white tracking-tight leading-tight">
                Why Choose Altitude Travel Co. for Your{" "}
                <span className="italic font-normal text-[#E8D08D]">Thailand Trip?</span>
              </h2>

              {/* VERBATIM PROMPT INTRO */}
              <p className="text-base text-stone-300 leading-relaxed font-normal">
                Altitude Travel Co. helps travellers experience Thailand beyond a standard sightseeing itinerary. We combine popular attractions, beaches, local experiences, nature, activities, and free time to create a balanced Thailand holiday.
              </p>
            </div>

            {/* 7 Pillars (Verbatim Items from Prompt) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {whyChoosePillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#BFA13B]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#E8D08D]">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#BFA13B]" />
                      <h3 className="text-sm sm:text-base font-serif font-bold text-white">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13px] text-stone-300 leading-relaxed font-normal pl-6">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: WHAT OUR TRAVELLERS SAY ABOUT ALTITUDE TRAVEL CO. (H2)        */}
        {/* ========================================================================= */}
        <section id="what-travellers-say" className="py-10 sm:py-12 lg:py-14 bg-[#FBF7EE] border-b border-[#E5E0D5] relative overflow-hidden">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <Star className="w-3.5 h-3.5 fill-[#BFA13B] text-[#BFA13B]" />
                <span>Verified Client Reviews</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                What Our Travellers Say About{" "}
                <span className="italic font-normal text-[#BFA13B]">Altitude Travel Co.</span>
              </h2>

              <p className="text-base text-stone-600 leading-relaxed font-normal">
                Real feedback from Delhi families, couples, and friends who experienced Thailand with guaranteed free time.
              </p>
            </div>

            {/* Testimonials Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {TESTIMONIALS_DATA.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E0D5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-stone-200 shrink-0 shadow-xs">
                        {t.avatarImage ? (
                          <Image
                            src={t.avatarImage}
                            alt={t.clientName}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#FBF7EE] text-[#BFA13B] font-bold text-xs">
                            {t.avatarPlaceholderText}
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-base font-serif font-bold text-[#1C1917] truncate">{t.clientName}</h4>
                          <div className="flex items-center text-[#BFA13B] shrink-0">
                            {[...Array(t.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-[#BFA13B]" />
                            ))}
                          </div>
                        </div>
                        <div className="text-xs text-stone-500">{t.location}</div>
                        <div className="flex items-center gap-1 text-xs font-semibold text-stone-800 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#BFA13B] shrink-0" />
                          <span className="truncate">{t.tripName}</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative pt-1">
                      <Quote className="w-7 h-7 text-[#BFA13B]/20 absolute -top-2 -left-1 pointer-events-none" />
                      <p className="relative z-10 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal italic">
                        &ldquo;{t.review}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs text-stone-400">
                    <span className="font-medium">{t.date}</span>
                    <span className="text-[11px] font-semibold text-stone-900 bg-[#FBF7EE] px-2.5 py-0.5 rounded-full border border-[#BFA13B]/30 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#BFA13B]" /> Verified Booking • Delhi Desk
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: FAQ’S (H2) - 8 EXACT QUESTIONS & VERBATIM ANSWERS (H3s)         */}
        {/* ========================================================================= */}
        <section id="thailand-faqs" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-[#E5E0D5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center space-y-3 mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
                <HelpCircle className="w-3.5 h-3.5 text-[#BFA13B]" />
                <span>Frequently Asked Questions</span>
              </div>

              {/* EXACT H2 */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
                FAQ’S About <span className="italic font-normal text-[#BFA13B]">Thailand Tour Packages</span>
              </h2>

              <p className="text-base text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed">
                Clear answers for planning and booking your Thailand holiday from India with Altitude Travel Co.
              </p>
            </div>

            {/* Accordion with Exact H3 Headings */}
            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E5E0D5] shadow-xs overflow-hidden transition-all duration-200 hover:border-[#BFA13B]/50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      {/* EXACT H3 HEADING */}
                      <h3 className="text-base sm:text-[17px] font-serif font-bold text-[#1C1917] hover:text-[#BFA13B] transition-colors leading-snug">
                        {faq.q}
                      </h3>

                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? "bg-[#BFA13B] text-stone-950 rotate-180" : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-stone-600 text-sm sm:text-[15px] leading-relaxed border-t border-[#E5E0D5] font-normal">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: PLAN YOUR THAILAND TOUR WITH ALTITUDE TRAVEL CO. (CTA)         */}
        {/* ========================================================================= */}
        <section id="plan-thailand-tour-cta" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 self-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#BFA13B]">
              <Sparkles className="w-3.5 h-3.5 text-[#BFA13B]" />
              <span>Dedicated Thailand Travel Planning</span>
            </div>

            {/* EXACT SECTION TITLE */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
              Plan Your Thailand Tour with <span className="italic font-normal text-[#BFA13B]">Altitude Travel Co.</span>
            </h2>

            {/* VERBATIM COPY FROM PROMPT */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Start planning your Thailand holiday with Altitude Travel Co. Whether you are looking for a family vacation, honeymoon, beach holiday, adventure trip, or customised Thailand tour, we can help create an itinerary based on your travel preferences. Explore Thailand your way with comfortable stays, planned sightseeing, exciting experiences, and dedicated travel support.
            </p>

            {/* Concierge Action Box */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#0C0A09] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left border border-[#BFA13B]/30">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8D08D]">
                  Connaught Place, Delhi Planning Desk
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Get a Free Custom Thailand Quote
                </h3>
                <p className="text-xs sm:text-sm text-stone-300">
                  Custom dates, hotel categories, Indian food recommendations &amp; private fleet transfers.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsCustomModalOpen(true)}
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#BFA13B] hover:bg-[#d4b54a] text-stone-950 flex items-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Plan Your Thailand Trip / Get a Quote</span>
                </button>

                <a
                  href="tel:+919810024680"
                  className="px-4 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#BFA13B]" />
                  <span>Call +91 98100 24680</span>
                </a>

                <a
                  href="https://wa.me/919810024680?text=Hello%20Altitude%20Travel,%20I%20want%20to%20plan%20a%20Thailand%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Package Detail Modal */}
      <PackageModal
        pkg={selectedPackage}
        isOpen={isPackageModalOpen}
        onClose={() => {
          setIsPackageModalOpen(false);
          setSelectedPackage(null);
        }}
      />

      {/* Interactive Custom Trip Planner Modal */}
      <CustomTripModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      />

    </div>
  );
}
