export const projectsData = [
  {
    id: "eduspare",
    title: "EduSpare",
    subtitle: "Academic & Educational Collaboration System",
    category: "Full Stack",
    isFlagship: true,
    tagline: "An intuitive academic hub for course material exchange, student collaboration, and resource distribution.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    thumbnailGradient: "from-indigo-600/30 via-purple-600/20 to-cyan-500/10",
    bannerAccent: "#6366f1",
    githubUrl: "https://github.com/",
    liveUrl: "https://eduspare-demo.com",
    keyHighlights: [
      "Role-based access control (Students, Instructors, Admins)",
      "Instant resource upload & categorize filtering by semester/course",
      "Real-time notifications for new assignment updates & peer discussion",
      "Secure JWT token authentication & session persistence"
    ],
    caseStudy: {
      overview: "EduSpare is an academic resource and student collaboration portal designed specifically for university environments like NSTU. It streamlines assignment sharing, course materials archive, and peer technical discussions in one centralized platform.",
      problem: "In many academic departments, study materials, previous exam questions, and lab notes are scattered across various social groups, drive links, and messaging apps. This leads to lost resources, redundant requests, and inefficient communication during exam preparations.",
      solution: "EduSpare centralizes all course assets into a searchable, structured repository with semester-wise tagging, verified upload moderation, and interactive discussion threads tied to specific courses.",
      features: [
        { title: "Smart Resource Filtering", desc: "Filter course materials by semester, course code, instructor, and file type." },
        { title: "Role-Based Permissions", desc: "Admin moderation for uploaded content, verified instructor tags, and student contributor badges." },
        { title: "Discussion & Doubt Resolution", desc: "Course-specific Q&A threads with code snippet formatting and solution upvoting." },
        { title: "Bookmark & Offline Saved List", desc: "Quick access to frequently referenced lecture notes and lab routines." }
      ],
      architecture: {
        nodes: [
          { label: "React Frontend", role: "UI & State Management (Vite + Context API)" },
          { label: "Express API Gateway", role: "REST Controllers & Validation Middleware" },
          { label: "JWT Auth Service", role: "Token Verification & Role RBAC Guard" },
          { label: "MongoDB Database", role: "Document Collections (Users, Materials, Courses)" }
        ],
        flow: "Client (React) ➔ HTTPS Request ➔ Express API Middleware ➔ JWT Guard ➔ MongoDB Driver ➔ JSON Response"
      },
      databaseDesign: [
        { collection: "Users", fields: "id, name, email, passwordHash, role (student/admin), semester, department" },
        { collection: "Courses", fields: "id, courseCode, title, semester, creditHours" },
        { collection: "Resources", fields: "id, courseId, uploaderId, fileUrl, fileType, tags, downloadCount, createdAt" },
        { collection: "Discussions", fields: "id, courseId, authorId, title, content, upvotes, repliesCount" }
      ],
      challenges: [
        {
          challenge: "Managing efficient search across nested course categories and large file metadata.",
          solution: "Implemented text indices on MongoDB collections combined with debounced query execution on the React frontend to minimize database load."
        },
        {
          challenge: "Preventing unauthorized resource downloads and uploads.",
          solution: "Built granular JWT RBAC middleware that validates student credentials and checks semester permissions before authorizing API endpoints."
        }
      ],
      learnings: [
        "Architecting clean RESTful API contracts for resource management.",
        "Optimizing MongoDB document indexes for multi-field filtering.",
        "Structuring scalable React component hierarchies with reusable modal dialogs."
      ]
    }
  },
  {
    id: "supershop",
    title: "Supershop",
    subtitle: "E-Commerce & Inventory Management Platform",
    category: "Full Stack",
    isFlagship: false,
    tagline: "Comprehensive inventory management & online shopping platform with real-time stock updating and order workflows.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
    thumbnailGradient: "from-cyan-600/30 via-blue-600/20 to-indigo-500/10",
    bannerAccent: "#06b6d4",
    githubUrl: "https://github.com/",
    liveUrl: "https://supershop-demo.com",
    keyHighlights: [
      "Dynamic product catalog with multi-facet category filters",
      "Real-time inventory deduction & low-stock warning triggers",
      "Comprehensive admin dashboard for sales analytics & stock control",
      "Cart management with persistent local state & discount voucher processing"
    ],
    caseStudy: {
      overview: "Supershop is a full-stack e-commerce management system designed to handle both customer store fronts and back-office inventory monitoring.",
      problem: "Retailers often struggle to keep online store fronts synchronized with backend inventory levels, leading to over-selling and manual stock check errors.",
      solution: "Supershop integrates inventory status directly with the checkout pipeline using atomic database updates to guarantee stock accuracy across concurrent user checkouts.",
      features: [
        { title: "Atomic Order Processing", desc: "Ensures stock is updated transactionally when orders are placed." },
        { title: "Admin Sales Dashboard", desc: "Visual analytics showing revenue trends, top-selling items, and stock alerts." },
        { title: "Advanced Search & Sort", desc: "Filter products by price range, brand, rating, and availability status." },
        { title: "Cart & Checkout Flow", desc: "Multi-step checkout with address validation and order summary previews." }
      ],
      architecture: {
        nodes: [
          { label: "React Store Front", role: "Product Display & Cart State" },
          { label: "Admin Dashboard", role: "Stock Control & Order Fulfillments" },
          { label: "Node/Express Backend", role: "REST Endpoints & Transaction Logic" },
          { label: "MongoDB Cluster", role: "Products, Orders, Customers Data" }
        ],
        flow: "React Client ➔ REST API ➔ Stock Validation Middleware ➔ Mongo Transaction ➔ Invoice Generation"
      },
      databaseDesign: [
        { collection: "Products", fields: "id, name, sku, price, stockQuantity, category, images, rating" },
        { collection: "Orders", fields: "id, customerId, items [{productId, quantity, unitPrice}], totalPrice, status, createdAt" },
        { collection: "Categories", fields: "id, name, slug, description" }
      ],
      challenges: [
        {
          challenge: "Handling concurrent checkouts for items with limited inventory.",
          solution: "Leveraged Mongoose schema pre-hooks and conditional update operators (`$inc` with `$gte` stock checks) to prevent negative stock balances."
        }
      ],
      learnings: [
        "State management using Redux Toolkit for complex cart operations.",
        "Building resilient checkout payment flows and backend error handling."
      ]
    }
  },
  {
    id: "quickbite",
    title: "QuickBite",
    subtitle: "Food Ordering & Delivery Management System",
    category: "Full Stack",
    isFlagship: false,
    tagline: "Seamless food ordering platform featuring restaurant menus, order status tracking, and multi-tier user role management.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    thumbnailGradient: "from-amber-600/30 via-orange-600/20 to-red-500/10",
    bannerAccent: "#f59e0b",
    githubUrl: "https://github.com/",
    liveUrl: "https://quickbite-demo.com",
    keyHighlights: [
      "Interactive restaurant menu with customizable food item options",
      "Real-time order stage updates (Placed ➔ Preparing ➔ Out for Delivery ➔ Delivered)",
      "Multi-role user authentication (Customer, Restaurant Owner, Delivery Agent)",
      "Responsive mobile-first layout optimized for quick ordering"
    ],
    caseStudy: {
      overview: "QuickBite connects hungry users with local eateries. It handles the entire lifecycle of a food order from menu browsing to live status updates.",
      problem: "Traditional restaurant delivery apps often lack real-time transparency for customers regarding order preparation progress.",
      solution: "QuickBite uses WebSockets (Socket.io) to instantly push status change events from restaurant kitchens to customer screens without manual refreshes.",
      features: [
        { title: "Live Order Status Tracking", desc: "Visual timeline showing real-time updates pushed from restaurant staff." },
        { title: "Restaurant Portal", desc: "Kitchen dashboard to accept, prepare, or dispatch pending incoming orders." },
        { title: "Role-Based Authorization", desc: "Distinct views and endpoints for customers, kitchen staff, and admins." },
        { title: "Custom Add-ons & Notes", desc: "Special instructions and topping options per dish item." }
      ],
      architecture: {
        nodes: [
          { label: "Customer Web App", role: "Menu Browsing & Order Status Page" },
          { label: "Restaurant Dashboard", role: "Order Acceptance & Stage Updater" },
          { label: "Express + Socket.io Server", role: "Real-time Event Dispatcher & REST API" },
          { label: "MongoDB Database", role: "Restaurants, Menus, Active Orders" }
        ],
        flow: "Customer Order ➔ Express API ➔ Socket.io Event Broadcast ➔ Kitchen Screen Update"
      },
      databaseDesign: [
        { collection: "Restaurants", fields: "id, name, cuisine, openingHours, rating, location" },
        { collection: "MenuItems", fields: "id, restaurantId, name, price, description, isAvailable, addons" },
        { collection: "Orders", fields: "id, userId, restaurantId, items, status, totalAmount, deliveryAddress, timestamp" }
      ],
      challenges: [
        {
          challenge: "Maintaining reliable WebSocket connections across unstable mobile networks.",
          solution: "Implemented automatic socket reconnection handlers and state syncing on client focus regain."
        }
      ],
      learnings: [
        "Real-time bidirectional event handling with Socket.io.",
        "Designing complex multi-role REST APIs with Express middleware validation."
      ]
    }
  }
];
