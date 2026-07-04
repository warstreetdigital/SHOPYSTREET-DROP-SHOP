/**
 * Shopystreet Drop-Shop Core Script
 * Fully client-side, modular, highly polished vanilla JS.
 * No external dependencies required. Fits Stripe/Shopify/Apple branding guidelines.
 */

// Portals & Curated Editorial Products Data Store (Exactly 12 Permanent Portals)
const portalsData = {
  home_living: {
    title: "01 Home & Living",
    desc: "Sleek modern furniture, curated kitchenware, ambient lighting, storage, and home appliances.",
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    subcategories: ["Furniture", "Kitchen", "Storage", "Cleaning", "Lighting", "Decor", "Bathroom", "Appliances"],
    products: [
      {
        name: "Modular Nordic Sofa",
        subcat: "Furniture",
        spec: "High-density foam with minimalist linen fabric. Easy flatpack assembly.",
        price: "$340.00",
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Precision Ceramic Cookware Set",
        subcat: "Kitchen",
        spec: "Non-toxic ceramic coating, induction-ready base, stay-cool wood-look handles.",
        price: "$89.00",
        img: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Minimalist Vacuum Storage Cabinets",
        subcat: "Storage",
        spec: "Aesthetic modular organizing cabinets with compression seal.",
        price: "$45.00",
        img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Dimmable LED Pendant Light",
        subcat: "Lighting",
        spec: "Adjustable height brushed metal dome. Soft natural luminescence.",
        price: "$39.00",
        img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Aesthetic Ultrasonic Humidifier",
        subcat: "Appliances",
        spec: "Whisper-quiet ceramic mist plate, automatic shutoff, warm white ambient night light.",
        price: "$32.00",
        img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Minimalist Bamboo Drawer Dividers",
        subcat: "Storage",
        spec: "Eco-friendly natural bamboo wood dividers for clean organization.",
        price: "$18.00",
        img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  electronics_technology: {
    title: "02 Electronics & Technology",
    desc: "Factory-direct phones, workstation computers, gaming accessories, and high-fidelity smart devices.",
    coverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    subcategories: ["Phones", "Computers", "Gaming", "Networking", "Accessories", "Smart Devices"],
    products: [
      {
        name: "Pro-Grade Wireless Gaming Headset",
        subcat: "Gaming",
        spec: "Zero-latency 2.4GHz audio, spatial soundscapes, memory foam cushions.",
        price: "$59.00",
        img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Mechanical Typing Workstation Keyboard",
        subcat: "Accessories",
        spec: "Hot-swappable linear yellow switches, sleek aluminum frame, dual-mode Bluetooth.",
        price: "$45.00",
        img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "4K Ultra-Wide Workstation Monitor",
        subcat: "Computers",
        spec: "IPS panel with 99% sRGB color accuracy, USB-C video & charging power hub.",
        price: "$189.00",
        img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Ultra-Slim 10000mAh Power Bank",
        subcat: "Accessories",
        spec: "22.5W fast-charging delivery, dual USB-C, ultra compact metal alloy chassis.",
        price: "$22.00",
        img: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Smart Active Noise Cancelling Earbuds",
        subcat: "Smart Devices",
        spec: "Hybrid ANC, IPX7 sweatproof, high-fidelity dynamic drivers, 30h battery life.",
        price: "$48.00",
        img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  smart_home_energy: {
    title: "03 Smart Home & Energy",
    desc: "High-efficiency monocrystalline solar panels, secure automation systems, backup batteries, and smart lighting.",
    coverImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    subcategories: ["Solar", "Security", "Automation", "Power", "Smart Lighting", "CCTV"],
    products: [
      {
        name: "1000W Portable LiFePO4 Power Station",
        subcat: "Power",
        spec: "Backup solar-rechargeable generator. 3000+ lifecycle battery pack.",
        price: "$299.00",
        img: "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Smart WiFi Biometric Door Lock",
        subcat: "Security",
        spec: "Multiple access routes: fingerprint, app code, card, or backup physical key.",
        price: "$79.00",
        img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Solar Monocrystalline Panel 200W",
        subcat: "Solar",
        spec: "Weatherproof bypass diodes, extreme high conversion rate silicon.",
        price: "$120.00",
        img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Outdoor HD Solar Security Camera",
        subcat: "CCTV",
        spec: "100% wire-free, 2K color night vision, integrated solar recharging panel.",
        price: "$74.00",
        img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Smart WiFi Thermostat System",
        subcat: "Automation",
        spec: "Pre-programmable climate scheduling, energy consumption tracking dashboard.",
        price: "$85.00",
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  fashion_lifestyle: {
    title: "04 Fashion & Lifestyle",
    desc: "Curated contemporary apparel, reliable leather watches, utility bags, and minimal jewelry lines.",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    subcategories: ["Men", "Women", "Shoes", "Bags", "Watches", "Beauty", "Jewellery"],
    products: [
      {
        name: "Minimalist Sapphire Quartz Watch",
        subcat: "Watches",
        spec: "Genuine grain-leather strap, water-resistant sapphire crystal glass face.",
        price: "$38.00",
        img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Modular Waterproof Travel Backpack",
        subcat: "Bags",
        spec: "Anti-theft secure zipper layouts, dedicated 16-inch laptop slot, USB pass-through.",
        price: "$29.00",
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Classic White Premium Sneakers",
        subcat: "Shoes",
        spec: "Breathable canvas with non-slip vulcanized rubber soles.",
        price: "$34.00",
        img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Premium Polarized Classic Sunglasses",
        subcat: "Beauty",
        spec: "Acetate frame, 100% UV400 protective polarized lenses.",
        price: "$19.00",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Vegetable-Tanned Minimalist Wallet",
        subcat: "Bags",
        spec: "Slim front-pocket card sleeve, genuine Italian leather, RFID blocking.",
        price: "$24.00",
        img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  automotive: {
    title: "05 Automotive",
    desc: "High-grade replacement parts, GPS tracking assemblies, rugged tyres, and heavy-duty diagnostic tools.",
    coverImage: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
    subcategories: ["Car Parts", "Accessories", "Motorcycles", "Tyres", "Tools"],
    products: [
      {
        name: "Smart OBD2 Bluetooth Diagnostic Scanner",
        subcat: "Tools",
        spec: "Reads and clears engine trouble codes in real-time. Connects with any smartphone.",
        price: "$24.00",
        img: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "4K Ultra-HD Intelligent Dual Dashcam",
        subcat: "Accessories",
        spec: "Sony lens with perfect night vision, automatic loop recording, G-Sensor.",
        price: "$49.00",
        img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "High-Power Car Air Compressor",
        subcat: "Tools",
        spec: "Digital tire inflator, automatic auto-off, bright emergency LED torch.",
        price: "$29.00",
        img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Smart Wireless Car Charger Mount",
        subcat: "Accessories",
        spec: "15W fast charging, intelligent auto-clamping arms, air-vent attachment.",
        price: "$25.00",
        img: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  agriculture: {
    title: "06 Agriculture",
    desc: "High-yield farm tools, automated solar drip irrigation systems, high-durability seeding tools, and livestock management devices.",
    coverImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    subcategories: ["Machinery", "Seeds", "Irrigation", "Livestock", "Farm Tools"],
    products: [
      {
        name: "Solar-Powered Smart Chicken Coop Door",
        subcat: "Livestock",
        spec: "Fully automatic with light sensor control and aluminum build.",
        price: "$69.00",
        img: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Precision Micro-Drip Irrigation Controller",
        subcat: "Irrigation",
        spec: "Saves water up to 70% with automatic solar scheduling valves.",
        price: "$35.00",
        img: "https://images.unsplash.com/photo-1463121859909-0e3407c57400?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Intelligent Soil Moisture & Temp Sensor",
        subcat: "Farm Tools",
        spec: "Wireless transmission, industrial-grade stainless steel soil probes.",
        price: "$42.00",
        img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Solar Ultrasonic Garden Pest Repeller",
        subcat: "Farm Tools",
        spec: "Weatherproof IP66 design, multi-frequency sonic emissions for rodent deterrent.",
        price: "$18.00",
        img: "https://images.unsplash.com/photo-1463121859909-0e3407c57400?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  industrial_construction: {
    title: "07 Industrial & Construction",
    desc: "Heavy machinery components, commercial-grade plumbing tools, safety gear, and building materials.",
    coverImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    subcategories: ["Machinery", "Electrical", "Plumbing", "Building Materials", "Safety Equipment"],
    products: [
      {
        name: "Heavy-Duty Digital Laser Level 3D",
        subcat: "Machinery",
        spec: "Sourced for construction sites. Multi-axis leveling with absolute precision.",
        price: "$85.00",
        img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Steel Toe Puncture-Proof Safety Shoes",
        subcat: "Safety Equipment",
        spec: "Breathable woven mesh with military-grade steel caps.",
        price: "$32.00",
        img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Precision Digital Vernier Caliper",
        subcat: "Machinery",
        spec: "Hardened stainless steel, metric/inch conversion, extreme high resolution LCD.",
        price: "$22.00",
        img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Professional Airless Paint Sprayer",
        subcat: "Building Materials",
        spec: "High efficiency high-volume low-pressure commercial paint sprayer.",
        price: "$145.00",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  business_office: {
    title: "08 Business & Office",
    desc: "Bulk packaging materials, thermal receipt printing setups, POS cash systems, and ergonomic workspace furniture.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    subcategories: ["Office Supplies", "Packaging", "Printing", "POS Systems", "Commercial Equipment"],
    products: [
      {
        name: "Portable 58mm Bluetooth Thermal Receipt Printer",
        subcat: "POS Systems",
        spec: "Direct thermal printing, works with Android/iOS sales applications.",
        price: "$28.00",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Ergonomic Orthopedic Desk Memory Cushion",
        subcat: "Commercial Equipment",
        spec: "Relieves pressure on back nerves. High breathability linen mesh.",
        price: "$19.00",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Wireless 2D QR Barcode Scanner",
        subcat: "POS Systems",
        spec: "Dual-mode Bluetooth & 2.4G wireless, rapid continuous auto-scanning.",
        price: "$34.00",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Minimalist Dual-Sided Desk Pad",
        subcat: "Office Supplies",
        spec: "Waterproof premium vegan leather, large layout workspace protector.",
        price: "$16.00",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  hospitality_events: {
    title: "09 Hospitality & Events",
    desc: "Commercial-grade kitchen layouts, cordless elegant restaurant tables, custom catering units, and event decor.",
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    subcategories: ["Hotels", "Restaurants", "Commercial Kitchens", "Furniture", "Event Equipment"],
    products: [
      {
        name: "Rechargeable Cordless LED Restaurant Table Lamps",
        subcat: "Restaurants",
        spec: "Elegant touch dimmer metallic desk light, 40 hours battery life.",
        price: "$24.00",
        img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Stainless Steel Commercial Food Warmers",
        subcat: "Commercial Kitchens",
        spec: "Equipped with adjustable thermostats, multiple buffet pans.",
        price: "$110.00",
        img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Professional Cocktail Shaker Kit",
        subcat: "Event Equipment",
        spec: "12-piece stainless steel barware set with custom bamboo display stand.",
        price: "$28.00",
        img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Elegant Menu Stand with Acrylic Display",
        subcat: "Restaurants",
        spec: "Sleek heavy-duty brushed aluminum base, double-sided clear displays.",
        price: "$15.00",
        img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  health_wellness: {
    title: "10 Health & Wellness",
    desc: "Medical devices, fitness accessories, high-frequency massage kits, and personal care solutions.",
    coverImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    subcategories: ["Medical", "Healthcare", "Fitness", "Personal Care"],
    products: [
      {
        name: "High-Frequency Deep Muscle Massage Gun",
        subcat: "Personal Care",
        spec: "Equipped with 30 adjustable speeds and 6 therapeutic massage heads.",
        price: "$39.00",
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Portable Oxygen Concentrator Machine",
        subcat: "Medical",
        spec: "Medical-grade oxygen output with clear LED screen for settings.",
        price: "$180.00",
        img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Smart Bluetooth Body Fat Scale",
        subcat: "Healthcare",
        spec: "Tracks 13 essential metrics including muscle mass, bone density, and visceral fat.",
        price: "$25.00",
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Rechargeable Sonic Electric Toothbrush",
        subcat: "Personal Care",
        spec: "40,000 VPM motor, 5 cleaning modes, built-in smart quadrant timer.",
        price: "$22.00",
        img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  education: {
    title: "11 Education",
    desc: "Robust school supplies, custom laboratory apparatus, student study technology, and interactive tools.",
    coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    subcategories: ["School Supplies", "Laboratory Equipment", "Furniture", "Technology"],
    products: [
      {
        name: "High-Precision 1600X LED Digital Microscope",
        subcat: "Laboratory Equipment",
        spec: "Connects to PC or Android phones for crystal clear analysis.",
        price: "$29.00",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Smart Eye-Care Rechargeable Study Lamp",
        subcat: "School Supplies",
        spec: "Dimmable settings with zero blue-light technology to protect vision.",
        price: "$14.00",
        img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Portable Digital Drawing Pad",
        subcat: "Technology",
        spec: "8192 levels of battery-free pressure sensitivity stylus, 10x6 inch active space.",
        price: "$45.00",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Classic Solar Scientific Calculator",
        subcat: "School Supplies",
        spec: "240 functions, dual solar/battery power backups, crisp 2-line display.",
        price: "$12.00",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  wholesale_custom: {
    title: "12 Wholesale & Custom Orders",
    desc: "Custom OEM bulk manufacturing, direct enterprise supply lines, and dedicated factory sourcing.",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    subcategories: ["Bulk Orders", "OEM", "Factory Orders", "Business Procurement", "Custom Manufacturing"],
    products: [
      {
        name: "Custom Branding OEM Eco Cotton Tote Bags",
        subcat: "Custom Manufacturing",
        spec: "Sourced in bulk quantities of 500+ with customized branding.",
        price: "Contact for Quote",
        img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Factory Wholesale Solar Street Lights (Pack of 10)",
        subcat: "Bulk Orders",
        spec: "Industrial grade 300W high luminosity, dusk-to-dawn sensors.",
        price: "$390.00",
        img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Custom OEM Reusable Coffee Cups (Bulk)",
        subcat: "OEM",
        spec: "Double-wall eco insulation. Custom laser-engraving or pad-print logos.",
        price: "Contact for Quote",
        img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Wholesale Biodegradable Cardboard Mailing Boxes (500x)",
        subcat: "Bulk Orders",
        spec: "High rigidity flute structure, easy-fold assembly, custom sizes.",
        price: "$180.00",
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  }
};

// Tracking parcel databases (Locked Order with exact 8 Steps)
const trackingDatabase = {
  "SS-789-ZW": {
    status: "Out for Delivery",
    timeline: [
      { step: "Ordered", date: "June 28, 2026", desc: "Order confirmation received and mapped to local sourcing hubs.", done: true },
      { step: "Sourcing", date: "June 29, 2026", desc: "Item sourced directly from certified manufacturing lines.", done: true },
      { step: "Quality Check", date: "June 30, 2026", desc: "Thorough multi-point quality assurance check passed.", done: true },
      { step: "Shipping", date: "July 01, 2026", desc: "Consolidated freight shipped out of central sorting terminal.", done: true },
      { step: "Customs", date: "July 02, 2026", desc: "Local customs processed and cleared seamlessly.", done: true },
      { step: "Warehouse", date: "July 03, 2026", desc: "Arrived at primary municipal hub. Scanned into regional lockers.", done: true },
      { step: "Out for Delivery", date: "July 03, 2026", desc: "Dispatched with local Shopystreet courier. En route.", active: true },
      { step: "Delivered", date: "Pending", desc: "Awaiting final delivery signature verification." }
    ]
  },
  "SS-456-ZW": {
    status: "Quality Check",
    timeline: [
      { step: "Ordered", date: "July 01, 2026", desc: "Order parameters validated in sourcing databases.", done: true },
      { step: "Sourcing", date: "July 02, 2026", desc: "Direct factory matches finalized.", done: true },
      { step: "Quality Check", date: "July 03, 2026", desc: "Verifying tolerances, materials and premium calibration.", active: true },
      { step: "Shipping", date: "Estimated July 04", desc: "Air cargo allocation priority scheduling." },
      { step: "Customs", date: "Estimated July 05", desc: "Customs clearances forms pre-lodged." },
      { step: "Warehouse", date: "Estimated July 06", desc: "Municipal sorting facility allocation." },
      { step: "Out for Delivery", date: "Estimated July 07", desc: "Couriers assignment and localized routing." },
      { step: "Delivered", date: "Estimated July 08", desc: "Delivery arrival." }
    ]
  },
  "SS-123-ZW": {
    status: "Delivered",
    timeline: [
      { step: "Ordered", date: "June 20, 2026", desc: "Order logged successfully.", done: true },
      { step: "Sourcing", date: "June 21, 2026", desc: "Direct OEM manufacturer secured.", done: true },
      { step: "Quality Check", date: "June 22, 2026", desc: "Triple functional pass successfully recorded.", done: true },
      { step: "Shipping", date: "June 23, 2026", desc: "Transit cargo dispatched.", done: true },
      { step: "Customs", date: "June 24, 2026", desc: "Port customs clearance certified.", done: true },
      { step: "Warehouse", date: "June 25, 2026", desc: "Local warehouse logistics hub checkout.", done: true },
      { step: "Out for Delivery", date: "June 26, 2026", desc: "Outbound shipment driver dispatched.", done: true },
      { step: "Delivered", date: "June 26, 2026", desc: "Successfully delivered and signed.", done: true, active: true }
    ]
  }
};

const layerKeys = Object.keys(portalsData);

// Scroll Handler for Sticky Navigation Header (Slightly smaller, background more solid, subtle shadow)
function initHeaderScroll() {
  const header = document.getElementById("sticky-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Run initially
}

// Micro-interaction: Elegant Scroll Reveal with Intersection Observer (fade in + 20px up slide)
function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".main-action-card, .philosophy-step, .portal-card, .sourcing-card, .tracker-search-card"
  );

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -20px 0px",
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observerInstance.unobserve(entry.target);
      }
    });
  }, observerOptions);

  targets.forEach(target => {
    if (!target.classList.contains("scroll-reveal")) {
      target.classList.add("scroll-reveal");
    }
    observer.observe(target);
  });
}

// Fade in image elements naturally after binary data loads
function setupImageFadeIn(container = document) {
  const imgs = container.querySelectorAll("img");
  imgs.forEach(img => {
    if (img.dataset.fadeInSetup) return;
    img.dataset.fadeInSetup = "true";

    if (img.complete) {
      img.classList.add("img-loaded");
    } else {
      img.addEventListener("load", () => {
        img.classList.add("img-loaded");
      });
      img.addEventListener("error", () => {
        img.classList.add("img-loaded");
      });
    }
  });
}

// Initializer: On Document Ready
document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  renderPortals();
  setupFileUploadListeners();
  setupImageFadeIn(document);
  initScrollReveal();
});

// Smooth Scroll directly to sections
function go(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Toggle Mobile menu
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("active");
  }
}

// Render dynamic portals with cover image, name, description and button only (LOCKED DIRECTION)
function renderPortals() {
  const container = document.getElementById("layers");
  if (!container) return;

  container.innerHTML = "";

  layerKeys.forEach(key => {
    const portal = portalsData[key];
    const cardDiv = document.createElement("div");
    cardDiv.className = "portal-card";
    cardDiv.id = `portal-${key}`;

    cardDiv.innerHTML = `
      <div class="portal-media">
        <img src="${portal.coverImage}" alt="${portal.title}" loading="lazy">
      </div>
      <div class="portal-content">
        <h3>${portal.title}</h3>
        <p>${portal.desc}</p>
        <button class="portal-enter-btn" onclick="enterPortal('${key}')">
          ENTER PORTAL
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    `;

    container.appendChild(cardDiv);
  });

  // Re-initialize scroll reveal and image loading fade-ins for portals
  initScrollReveal();
  setupImageFadeIn(container);
}

// Portal View Manager
let currentActivePortalKey = null;
let selectedSubcategory = "All";

function enterPortal(portalKey) {
  const portal = portalsData[portalKey];
  if (!portal) return;

  currentActivePortalKey = portalKey;
  selectedSubcategory = "All";

  // Display the fixed Portal Viewer Dialog
  const viewer = document.getElementById("portalViewer");
  viewer.style.display = "block";
  document.body.style.overflow = "hidden"; // disable background scrolling

  // Update header text
  document.getElementById("portalViewerTitle").innerHTML = `${portal.title.toUpperCase()}`;

  // Populate sidebar subcategories
  const sidebar = document.getElementById("portalSidebar");
  sidebar.innerHTML = `<div class="portal-sidebar-title">Subcategories</div>`;
  
  // All button
  const allBtn = document.createElement("button");
  allBtn.className = "subcat-btn active";
  allBtn.textContent = "All";
  allBtn.onclick = () => filterSubcategory("All", allBtn);
  sidebar.appendChild(allBtn);

  portal.subcategories.forEach(sub => {
    const btn = document.createElement("button");
    btn.className = "subcat-btn";
    btn.textContent = sub;
    btn.onclick = () => filterSubcategory(sub, btn);
    sidebar.appendChild(btn);
  });

  // Render product grid inside this portal
  renderProductGrid();
}

function filterSubcategory(subcategoryName, buttonEl) {
  selectedSubcategory = subcategoryName;
  
  // Highlight active button in sidebar
  const buttons = document.querySelectorAll(".subcat-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  buttonEl.classList.add("active");

  renderProductGrid();
}

function renderProductGrid() {
  const grid = document.getElementById("portalProductGrid");
  grid.innerHTML = "";

  const portal = portalsData[currentActivePortalKey];
  if (!portal) return;

  // Filter products matching subcategory
  const filteredProducts = selectedSubcategory === "All" 
    ? portal.products 
    : portal.products.filter(p => p.subcat === selectedSubcategory);

  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: span 3; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 12px; color: var(--text-muted);">
          <circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <p style="font-family: var(--font-display); font-weight: 600; font-size: 16px; margin-bottom: 4px;">Direct Factory Sourcing Available</p>
        <p style="font-size: 13px; max-width: 320px; margin: 0 auto;">No specific stock items loaded in this category yet. We can source any item you need directly from the factory!</p>
        <button class="submit-sourcing-btn" style="width: auto; margin: 20px auto 0; padding: 10px 20px;" onclick="triggerCustomRequestFromPortal('${selectedSubcategory}')">Request Sourcing Now</button>
      </div>
    `;
    return;
  }

  filteredProducts.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";

    // Build beautifully pre-filled WhatsApp message link
    const waText = encodeURIComponent(
      `Hi Shopystreet! I want to source this product through the portal:\n\n` +
      `📦 *Product*: ${prod.name}\n` +
      `📁 *Portal*: ${portal.title} - ${prod.subcat}\n` +
      `💰 *Factory Price*: ${prod.price}\n\n` +
      `Please assist me in setting up the procurement timeline.`
    );
    const waLink = `https://wa.me/263779388560?text=${waText}`;

    card.innerHTML = `
      <div class="product-media">
        <span class="product-badge">Factory Direct</span>
        <img src="${prod.img}" alt="${prod.name}" loading="lazy">
      </div>
      <div class="product-details">
        <span class="product-subcat">${prod.subcat}</span>
        <h4 class="product-title">${prod.name}</h4>
        <p class="product-spec">${prod.spec}</p>
        <div class="product-footer">
          <div class="product-price">${prod.price}</div>
          <div class="product-actions">
            <button class="product-action-btn" onclick="openWaLink('${waLink}')">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24" style="margin-right: 2px;">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.09-3.477c1.664.988 3.324 1.503 5.21 1.504 5.485.002 9.947-4.463 9.95-9.953.003-2.659-1.029-5.159-2.906-7.039C16.522 3.155 14.027 2.12 11.373 2.12 5.89 2.12 1.428 6.586 1.424 12.078c-.001 1.938.513 3.633 1.498 5.234L1.921 21.6l4.226-1.077z"/>
              </svg>
              Source
            </button>
            <button class="product-custom-btn" onclick="triggerCustomRequestFromPortal('${prod.name}')" title="Customize product parameters">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Set up premium image fade-ins for loaded product cards
  setupImageFadeIn(grid);
}

function openWaLink(url) {
  window.open(url, "_blank");
}

function triggerCustomRequestFromPortal(itemName) {
  closePortal();
  go("request-product");
  const descField = document.getElementById("reqDesc");
  if (descField) {
    descField.value = `I am looking to custom-source the following product specification:\n"${itemName}"`;
    descField.focus();
  }
}

function closePortal() {
  const viewer = document.getElementById("portalViewer");
  if (viewer) {
    viewer.style.display = "none";
  }
  document.body.style.overflow = "auto"; // enable scrolling again
  currentActivePortalKey = null;
}


// Global Instant Search Logic
function handleGlobalSearch(query) {
  const dropdown = document.getElementById("searchResultsDropdown");
  const clearBtn = document.getElementById("clearSearchBtn");
  
  if (!dropdown || !clearBtn) return;
  
  if (!query || query.trim().length === 0) {
    dropdown.style.display = "none";
    clearBtn.style.display = "none";
    return;
  }
  
  clearBtn.style.display = "block";
  const normalizedQuery = query.toLowerCase().trim();
  const matches = [];
  
  Object.keys(portalsData).forEach(portalKey => {
    const portal = portalsData[portalKey];
    // Match Portal title or description
    if (portal.title.toLowerCase().includes(normalizedQuery) || portal.desc.toLowerCase().includes(normalizedQuery)) {
      matches.push({
        type: "portal",
        portalKey,
        name: portal.title,
        desc: portal.desc
      });
    }
    // Match Products
    portal.products.forEach(product => {
      if (product.name.toLowerCase().includes(normalizedQuery) || 
          product.spec.toLowerCase().includes(normalizedQuery) ||
          product.subcat.toLowerCase().includes(normalizedQuery)) {
        matches.push({
          type: "product",
          portalKey,
          productName: product.name,
          name: product.name,
          subcat: product.subcat,
          price: product.price,
          portalTitle: portal.title
        });
      }
    });
  });
  
  if (matches.length === 0) {
    dropdown.innerHTML = `
      <div class="search-no-results" style="padding: 20px; text-align: center;">
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">No standard matches found for "<strong>${escapeHtml(query)}</strong>"</p>
        <button class="submit-sourcing-btn" style="width: auto; margin: 0 auto; padding: 8px 16px; font-size: 12px;" onclick="triggerCustomRequestFromSearch('${escapeHtml(query)}')">
          Request Custom Sourcing &rarr;
        </button>
      </div>
    `;
  } else {
    dropdown.innerHTML = matches.map(match => {
      if (match.type === "portal") {
        return `
          <div class="search-result-item" style="padding: 12px 16px; cursor: pointer; border-bottom: 1px solid var(--border); transition: background 0.2s;" onclick="enterPortal('${match.portalKey}'); clearGlobalSearch();">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <strong style="font-size: 13px; color: var(--primary);">${match.name}</strong>
              <span style="font-size: 10px; font-family: var(--font-mono); background: var(--primary-light); color: var(--primary); padding: 2px 6px; border-radius: 4px;">Portal</span>
            </div>
            <p style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">${match.desc}</p>
          </div>
        `;
      } else {
        return `
          <div class="search-result-item" style="padding: 12px 16px; cursor: pointer; border-bottom: 1px solid var(--border); transition: background 0.2s;" onclick="enterPortal('${match.portalKey}'); filterSubcategoryFromSearch('${match.subcat}', '${match.productName}'); clearGlobalSearch();">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <strong style="font-size: 13px; color: var(--text);">${match.name}</strong>
              <span style="font-size: 10px; font-family: var(--font-mono); background: var(--accent-light); color: var(--accent); padding: 2px 6px; border-radius: 4px;">Item</span>
            </div>
            <p style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">In ${match.portalTitle} • ${match.subcat} • <strong>${match.price}</strong></p>
          </div>
        `;
      }
    }).join("");
  }
  
  dropdown.style.display = "block";
}

function clearGlobalSearch() {
  const input = document.getElementById("globalSearchInput");
  const dropdown = document.getElementById("searchResultsDropdown");
  const clearBtn = document.getElementById("clearSearchBtn");
  
  if (input) input.value = "";
  if (dropdown) dropdown.style.display = "none";
  if (clearBtn) clearBtn.style.display = "none";
}

function triggerCustomRequestFromSearch(query) {
  clearGlobalSearch();
  go("request-product");
  const descField = document.getElementById("reqDesc");
  if (descField) {
    descField.value = `I am looking to source the following product:\n"${query}"`;
    descField.focus();
  }
}

function filterSubcategoryFromSearch(subcategoryName, productName) {
  selectedSubcategory = subcategoryName;
  
  // Highlight subcategory in sidebar
  setTimeout(() => {
    const sidebarButtons = document.querySelectorAll(".subcat-btn");
    sidebarButtons.forEach(btn => {
      if (btn.textContent.trim().toLowerCase() === subcategoryName.toLowerCase()) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    renderProductGrid();

    // Scroll directly to the product card
    setTimeout(() => {
      const cards = document.querySelectorAll(".product-card");
      for (let card of cards) {
        const title = card.querySelector(".product-title");
        if (title && title.textContent.trim().toLowerCase() === productName.toLowerCase()) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.style.borderColor = "var(--primary)";
          card.style.boxShadow = "var(--shadow-lg)";
          card.style.transform = "scale(1.02)";
          setTimeout(() => {
            card.style.transform = "";
          }, 1500);
          break;
        }
      }
    }, 200);
  }, 100);
}

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}


// Sourcing Tabs Swithching
function switchSourcingTab(tabId, btnEl) {
  // Hide all tabs
  const tabContents = document.querySelectorAll(".sourcing-tab-content");
  tabContents.forEach(tab => tab.classList.remove("active"));

  // Deactivate all buttons
  const tabButtons = document.querySelectorAll(".sourcing-tab-btn");
  tabButtons.forEach(btn => btn.classList.remove("active"));

  // Show selected tab
  document.getElementById(tabId).classList.add("active");
  btnEl.classList.add("active");
}

// File uploads and Scanning
let uploadedFileBase64 = null;
let uploadedFileName = "";

function setupFileUploadListeners() {
  const dropzone = document.getElementById("fileDropzone");
  const fileInput = document.getElementById("photoUploadInput");

  if (!dropzone || !fileInput) return;

  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("dragover");
  });

  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("dragover");
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    if (e.dataTransfer.files.length > 0) {
      handleUploadedFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      handleUploadedFile(fileInput.files[0]);
    }
  });
}

function handleUploadedFile(file) {
  if (!file.type.startsWith("image/")) {
    alert("Please upload a valid image file.");
    return;
  }

  uploadedFileName = file.name;
  const reader = new FileReader();
  
  reader.onload = function(event) {
    uploadedFileBase64 = event.target.result;
    
    const preview = document.getElementById("filePreview");
    const previewImg = document.getElementById("filePreviewImg");
    const previewName = document.getElementById("filePreviewName");
    const previewSize = document.getElementById("filePreviewSize");

    if (preview && previewImg) {
      previewImg.src = uploadedFileBase64;
      previewName.textContent = file.name;
      previewSize.textContent = (file.size / 1024).toFixed(1) + " KB";
      preview.style.display = "flex";
    }

    runVisualPhotoScan(uploadedFileBase64);
  };

  reader.readAsDataURL(file);
}

function removePreview() {
  uploadedFileBase64 = null;
  uploadedFileName = "";
  const input = document.getElementById("photoUploadInput");
  if (input) input.value = "";
  document.getElementById("filePreview").style.display = "none";
  document.getElementById("photoScanUi").style.display = "none";
}

function runVisualPhotoScan(imgSrc) {
  const scanUi = document.getElementById("photoScanUi");
  const scanImg = document.getElementById("scanPreviewImg");
  const statusTicker = document.getElementById("scanStatusTicker");
  const progressFill = document.getElementById("scanProgressFill");

  if (!scanUi || !scanImg) return;

  scanImg.src = imgSrc;
  scanUi.style.display = "flex";
  
  const steps = [
    { progress: 15, msg: "Analyzing pixel boundaries..." },
    { progress: 35, msg: "Identifying geometric features..." },
    { progress: 55, msg: "Querying global factory-direct networks..." },
    { progress: 75, msg: "Comparing material properties and price points..." },
    { progress: 100, msg: "Sourcing analysis successful! Routing details compiled." }
  ];

  let currentStep = 0;
  progressFill.style.width = "0%";

  const interval = setInterval(() => {
    if (currentStep < steps.length) {
      const step = steps[currentStep];
      statusTicker.textContent = step.msg;
      progressFill.style.width = step.progress + "%";
      currentStep++;
    } else {
      clearInterval(interval);
      const descField = document.getElementById("reqDesc");
      if (descField && !descField.value) {
        descField.value = `Photo Sourcing Request [Ref File: ${uploadedFileName}]. Please source exact wholesale factory match or top-grade substitute.`;
      }
    }
  }, 400);
}

// Paste product link analyzer
function analyzeProductLink() {
  const urlInput = document.getElementById("reqLink");
  const resultDiv = document.getElementById("linkAnalyzeResult");
  if (!urlInput || !urlInput.value) {
    alert("Please paste a product link from Alibaba, AliExpress, Temu, Amazon, SHEIN or TikTok Shop first.");
    return;
  }

  const url = urlInput.value.toLowerCase();
  resultDiv.innerHTML = `<span style="font-family: var(--font-mono); font-size: 11px; color: var(--accent);">Inspecting link anchors...</span>`;

  setTimeout(() => {
    let matchedStore = "External Retail Platform";

    if (url.includes("alibaba")) matchedStore = "Alibaba Wholesale Network";
    else if (url.includes("aliexpress")) matchedStore = "AliExpress Direct Sourcing";
    else if (url.includes("temu")) matchedStore = "Temu Factory Direct Hub";
    else if (url.includes("amazon")) matchedStore = "Amazon Marketplace Vendor";
    else if (url.includes("shein")) matchedStore = "SHEIN Production Lines";
    else if (url.includes("tiktok")) matchedStore = "TikTok Shop Verified Supplier";
    else if (url.includes("facebook") || url.includes("fb")) matchedStore = "Facebook Marketplace Seller";
    else if (url.includes("instagram")) matchedStore = "Instagram Store Vendor";

    resultDiv.innerHTML = `
      <div style="font-size: 12px; margin-top: 8px; border: 1px solid var(--border); padding: 12px; border-radius: 8px; background-color: var(--white);">
        <p style="font-weight: 700; color: var(--success); margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Sourcing Channel Active
        </p>
        <p style="color: var(--text-muted); font-size: 11px;">Identified Platform: <strong>${matchedStore}</strong></p>
      </div>
    `;

    const descField = document.getElementById("reqDesc");
    if (descField) {
      let currentVal = descField.value;
      const refLine = `[Procuring from: ${matchedStore}]`;
      if (!currentVal.includes(refLine)) {
        descField.value = currentVal ? `${currentVal}\n${refLine}` : refLine;
      }
    }
  }, 1000);
}

// Submit sourcing form details to WhatsApp
function submitSourcingForm(event) {
  if (event) event.preventDefault();

  const desc = document.getElementById("reqDesc").value;
  const qty = document.getElementById("reqQty").value || "1";
  const budget = document.getElementById("reqBudget").value || "Open Budget";
  const phone = document.getElementById("reqPhone").value;
  const address = document.getElementById("reqAddress").value;
  const link = document.getElementById("reqLink").value || "None provided";

  if (!desc || !phone || !address) {
    alert("Please complete the required fields (* Description, Phone Number, Delivery Address) to submit.");
    return;
  }

  let waMessage = `*SHOPYSTREET SOURCING REQUEST*\n`;
  waMessage += `=====================================\n\n`;
  waMessage += `📋 *Description*: ${desc}\n`;
  waMessage += `🔢 *Quantity*: ${qty}\n`;
  waMessage += `💵 *Target Budget*: ${budget}\n`;
  waMessage += `🔗 *Product Link Reference*: ${link}\n\n`;
  waMessage += `-------------------------------------\n`;
  waMessage += `👤 *Client Contact*: ${phone}\n`;
  waMessage += `📍 *Delivery Address*: ${address}\n`;

  if (uploadedFileBase64) {
    waMessage += `🖼️ *Photo Reference Uploaded*: YES\n`;
  }
  
  waMessage += `\n=====================================\n`;
  waMessage += `_Submitted via Shopystreet Drop-Shop Sourcing Portal_`;

  const encodedMsg = encodeURIComponent(waMessage);
  const waUrl = `https://wa.me/263779388560?text=${encodedMsg}`;

  // Open WhatsApp in a new tab
  window.open(waUrl, "_blank");

  // Show customized Success Dialog Modal
  showSuccessDialog();
}

function showSuccessDialog() {
  const modal = document.getElementById("successOverlay");
  if (modal) modal.style.display = "flex";
}

function closeSuccessDialog() {
  const modal = document.getElementById("successOverlay");
  if (modal) modal.style.display = "none";
}


// Logistics Parcel Tracking Engine
function trackOrder() {
  const inputVal = document.getElementById("trackingIdInput").value.trim().toUpperCase();
  const resultsDiv = document.getElementById("trackerResults");

  if (!inputVal) {
    alert("Please enter your Order ID or Tracking Code.");
    return;
  }

  resultsDiv.style.display = "none";

  let parcel = trackingDatabase[inputVal];

  if (!parcel) {
    parcel = generateSimulatedTracking(inputVal);
  }

  document.getElementById("trackingIdDisplay").textContent = inputVal;
  document.getElementById("trackingStatusDisplay").textContent = parcel.status;

  const timelineContainer = document.getElementById("timelineContainer");
  timelineContainer.innerHTML = "";

  parcel.timeline.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = `timeline-item ${item.done ? "completed" : ""} ${item.active ? "active" : ""}`;

    itemDiv.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-text">
          <div class="timeline-title">${item.step}</div>
          <div class="timeline-desc">${item.desc}</div>
        </div>
        <div class="timeline-date">${item.date}</div>
      </div>
    `;

    timelineContainer.appendChild(itemDiv);
  });

  resultsDiv.style.display = "block";
  resultsDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function prefillTrackingAndSearch(code) {
  const input = document.getElementById("trackingIdInput");
  if (input) {
    input.value = code;
    trackOrder();
  }
}

// Generate a flawless 8-stage tracking layout based on user's input
function generateSimulatedTracking(id) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % 7; // Up to active stage 6
  const stages = [
    { status: "Ordered", stepIndex: 0 },
    { status: "Sourcing", stepIndex: 1 },
    { status: "Quality Check", stepIndex: 2 },
    { status: "Shipping", stepIndex: 3 },
    { status: "Customs", stepIndex: 4 },
    { status: "Warehouse", stepIndex: 5 },
    { status: "Out for Delivery", stepIndex: 6 }
  ];
  
  const currentStage = stages[index] || stages[0];
  const orderDate = "July 01, 2026";
  const todayDate = "July 03, 2026";

  const allTimelineSteps = [
    { step: "Ordered", date: orderDate, desc: "Order booked and assigned to manufacturer pipelines." },
    { step: "Sourcing", date: "July 02, 2026", desc: "Wholesale materials isolated and factory packing assigned." },
    { step: "Quality Check", date: todayDate, desc: "Double pass visual and operational inspection certified." },
    { step: "Shipping", date: "Estimated July 04", desc: "Assigned to air freight clearance locks." },
    { step: "Customs", date: "Estimated July 05", desc: "Pre-filed digital customs clearance forms logged." },
    { step: "Warehouse", date: "Estimated July 06", desc: "Assigned local delivery region hubs." },
    { step: "Out for Delivery", date: "Estimated July 07", desc: "Dispatched door-to-door with Shopystreet delivery." },
    { step: "Delivered", date: "Estimated July 08", desc: "Biometric sign-off complete upon receipt." }
  ];

  const timeline = allTimelineSteps.map((step, i) => {
    let done = i < currentStage.stepIndex;
    let active = i === currentStage.stepIndex;
    return {
      ...step,
      done,
      active
    };
  });

  return {
    status: currentStage.status,
    timeline
  };
}
