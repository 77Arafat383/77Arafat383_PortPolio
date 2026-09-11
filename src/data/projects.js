export const projectsData = [
  {
    id: "quickbite",
    title: "QuickBite",
    subtitle: "Enterprise Online Food Ordering System",
    category: "Full Stack",
    isFlagship: true,
    tagline: "High-performance multi-portal food ordering platform with dedicated Customer, Kitchen Manager, Delivery Rider, and Admin portals.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Supabase"],
    thumbnailGradient: "from-amber-600/30 via-orange-600/20 to-red-500/10",
    bannerAccent: "#f59e0b",
    githubUrl: "https://github.com/77Arafat383/QuickBite",
    liveUrl: "https://github.com/77Arafat383/QuickBite",
    keyHighlights: [
      "Dedicated 4-Role Portals (Customer, Kitchen Manager, Delivery Rider, System Admin)",
      "PostgreSQL Database hosted on Supabase Cloud with Prisma ORM data modeling",
      "Unified Auto-complete Search across Restaurants & Dishes simultaneously",
      "Real-time Rider assignment requests & transit delivery status stepper"
    ],
    caseStudy: {
      overview: "QuickBite is an enterprise-grade food ordering platform built using Next.js 14 (App Router), TypeScript, Prisma ORM, and PostgreSQL database hosted on Supabase. It features 4 distinct, role-tailored portals for Customers, Restaurant Managers, Delivery Riders, and System Admins.",
      problem: "Traditional food ordering platforms often lack seamless communication between kitchen staff, delivery riders, and customers, creating delays in order assignment and status updates.",
      solution: "QuickBite provides dedicated dashboards for each stakeholder: an interactive Customer portal with instant search, a Kitchen Manager board for live order approvals and rider assignments, a Delivery Rider job queue, and an Admin GMV analytics dashboard.",
      features: [
        { title: "Unified Auto-complete Search", desc: "Searches both Restaurants and Dishes simultaneously with deep-link navigation and item visual highlight glow." },
        { title: "Kitchen Manager Portal (/restaurant)", desc: "Menu creation with Base64 image uploader, comma-separated tags, incoming order queue, and rider request approvals." },
        { title: "Delivery Rider Portal (/delivery)", desc: "Divided into 'My Runs' and 'Available Jobs' with a 3-step transit stepper (Pick Up ➔ In Transit ➔ Confirm Handover)." },
        { title: "Admin Console (/admin)", desc: "Live KPI metrics (GMV, Total Orders, Active Kitchens), user directory management, and merchant verification." }
      ],
      architecture: {
        nodes: [
          { label: "Next.js 14 App Router", role: "Server Components & Client Portal Routes" },
          { label: "Prisma ORM", role: "Type-safe Database Access & Migration Engine" },
          { label: "PostgreSQL on Supabase", role: "Cloud Relational Database & Connection Pooling" },
          { label: "Tailwind CSS & Lucide Icons", role: "Responsive UI & Animated Feedback" }
        ],
        flow: "Customer Order Submission ➔ Prisma API Route ➔ PostgreSQL (Supabase) ➔ Kitchen Manager Approval Board ➔ Rider Assignment Queue"
      },
      databaseDesign: [
        { collection: "User Accounts (Table)", fields: "id, name, email, passwordHash, role (CUSTOMER, MANAGER, RIDER, ADMIN)" },
        { collection: "Restaurants (Table)", fields: "id, ownerId, name, cuisine, rating, deliveryTime, isVerified, address" },
        { collection: "Dishes / Menu (Table)", fields: "id, restaurantId, name, price, categories, imageBase64, isVeg" },
        { collection: "Orders (Table)", fields: "id, customerId, restaurantId, riderId, items, totalPrice, status (PENDING, PREPARING, IN_TRANSIT, DELIVERED)" }
      ],
      challenges: [
        {
          challenge: "Designing seamless rider assignment approvals between Kitchen Managers and Delivery Riders.",
          solution: "Built a dual-approval queue where riders request jobs from unassigned listings and managers confirm rider assignments on their dashboard."
        },
        {
          challenge: "Optimizing database search queries across thousands of dishes and restaurant names.",
          solution: "Leveraged PostgreSQL B-tree indices on Supabase with debounced client-side auto-complete suggestions and keyboard event shortcuts."
        }
      ],
      learnings: [
        "Architecting complex multi-tenant portals using Next.js 14 App Router and TypeScript.",
        "Connecting Next.js server actions to cloud PostgreSQL databases hosted on Supabase using Prisma ORM.",
        "Designing robust role-based routing and permissions across server actions."
      ]
    }
  },
  {
    id: "supershop",
    title: "SuperShop",
    subtitle: "Sales & Inventory Tracking System (RBMS)",
    category: "Full Stack",
    isFlagship: true,
    tagline: "Enterprise-grade sales & inventory tracking platform with a sub-50ms POS terminal, 4-role RBAC, barcode generation, and supplier dues ledger.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Supabase"],
    thumbnailGradient: "from-cyan-600/30 via-blue-600/20 to-indigo-500/10",
    bannerAccent: "#06b6d4",
    githubUrl: "https://github.com/77Arafat383/SuperShop",
    liveUrl: "https://github.com/77Arafat383/SuperShop",
    keyHighlights: [
      "Ultra-Fast POS Terminal with sub-50ms interactions & laser barcode scanning",
      "PostgreSQL Cloud Database hosted on Supabase with Prisma Schema migrations",
      "Multi-Role RBAC (Administrator, Inventory Manager, Purchase Manager, Cashier)",
      "Printable 80mm thermal receipts & A4 tax invoices with barcode generation"
    ],
    caseStudy: {
      overview: "SuperShop is an advanced Sales & Inventory Tracking System built for CSTE 3208 at NSTU. It uses Next.js, Prisma ORM, and PostgreSQL hosted on Supabase to automate point-of-sale transactions, inventory adjustments, purchase orders, supplier ledgers, and financial auditing.",
      problem: "Retail supershops struggle with slow billing terminals, inaccurate inventory counts, unrecorded supplier dues, and lack of real-time role-based access control.",
      solution: "SuperShop provides an ultra-fast sub-50ms POS terminal with barcode scanning, automated stock deduction, supplier purchase order management with partial/credit dues, and 80mm thermal receipt generation.",
      features: [
        { title: "Ultra-Fast POS Terminal", desc: "Supports sub-50ms response times, barcode scanning, item discounts, cash change calculation, and split payments." },
        { title: "4-Role RBAC Governance", desc: "Administrator approval flow, Inventory Manager stock corrections, Purchase Manager supplier ledgers, and Cashier billing." },
        { title: "Supplier & Purchase Orders", desc: "Multi-product PO generation with Full Payment, Partial Advance, or Credit/Due terms, plus money receipt history." },
        { title: "Software Architecture Tab", desc: "Interactive showcase for Use Case diagrams, DFDs (Level 0, 1, 2), ERD, Class Diagrams, CPM Network Schedule, and COCOMO metrics." }
      ],
      architecture: {
        nodes: [
          { label: "Next.js Frontend", role: "POS Terminal UI & Role Dashboards" },
          { label: "Prisma Data Layer", role: "Transactional Query Execution & Relational Models" },
          { label: "PostgreSQL on Supabase", role: "Cloud Database Persistence for Products, Orders, Suppliers" },
          { label: "Barcode & Receipt Engine", role: "Thermal 80mm & A4 Invoice Generation" }
        ],
        flow: "POS Item Scan ➔ Client State Calculation ➔ Multi-Payment Auth ➔ PostgreSQL (Supabase) Transaction ➔ Thermal Receipt Print"
      },
      databaseDesign: [
        { collection: "Users & Roles (Table)", fields: "id, name, email, passwordHash, role (ADMIN, INVENTORY_MGR, PURCHASE_MGR, CASHIER), status" },
        { collection: "Products & Barcodes (Table)", fields: "id, title, sku, barcode, costPrice, sellingPrice, stockQuantity, minStockThreshold" },
        { collection: "Purchase Orders (Table)", fields: "id, supplierId, items [{productId, qty, unitPrice}], paymentType (FULL, PARTIAL, CREDIT), dueBalance" },
        { collection: "Sales Transactions (Table)", fields: "id, cashierId, items, paymentMethod (CASH, BKASH, NAGAD, CARD, SPLIT), total, tax, discount" }
      ],
      challenges: [
        {
          challenge: "Ensuring instant sub-50ms billing interactions without UI lag during heavy item scanning.",
          solution: "Optimized client-side state caching with React hooks and keyboard event listeners for immediate barcode detection."
        },
        {
          challenge: "Tracking partial advance and remaining supplier credit balances accurately over time.",
          solution: "Designed a supplier ledger system in PostgreSQL on Supabase that logs money receipts with previous balance history, payment date, and updated dues."
        }
      ],
      learnings: [
        "Building production-ready Point of Sale (POS) terminals with keyboard shortcuts and laser barcode support.",
        "Deploying relational database schemas with Prisma ORM to Supabase cloud PostgreSQL.",
        "Designing complete software engineering documentation artifacts (DFDs, ERD, COCOMO estimation)."
      ]
    }
  },
  {
    id: "eduspare",
    title: "EduSpare",
    subtitle: "Academic Resource & Student Collaboration Hub",
    category: "Full Stack",
    isFlagship: false,
    tagline: "Centralized academic collaboration portal for course material exchange, semester note filtering, and student discussion threads.",
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Supabase", "JWT"],
    thumbnailGradient: "from-indigo-600/30 via-purple-600/20 to-cyan-500/10",
    bannerAccent: "#6366f1",
    githubUrl: "https://github.com/77Arafat383/EduSpare",
    liveUrl: "https://github.com/77Arafat383/EduSpare",
    keyHighlights: [
      "Role-based access control (Students, Course Instructors, Admins)",
      "PostgreSQL relational database hosted on Supabase Cloud",
      "Semester & course-wise resource filtering for lecture notes & lab archives",
      "Course-specific discussion threads with code snippet formatting & upvoting"
    ],
    caseStudy: {
      overview: "EduSpare is an academic resource and student collaboration portal designed specifically for university environments like NSTU. Built with React, Node/Express, and PostgreSQL hosted on Supabase, it streamlines assignment sharing, course material archives, and peer technical discussions.",
      problem: "Academic materials, previous exam questions, and lab notes are often scattered across social media groups, leading to lost resources and inefficient communication during exam preparation.",
      solution: "EduSpare centralizes all course assets into a searchable, structured PostgreSQL repository hosted on Supabase with semester-wise tagging, verified upload moderation, and interactive discussion threads.",
      features: [
        { title: "Semester Resource Archive", desc: "Filter lecture notes, past questions, and lab routines by semester, course code, and instructor." },
        { title: "Role-Based Moderation", desc: "Admin approval for uploaded content, verified instructor tags, and student contributor badges." },
        { title: "Technical Doubt Resolution", desc: "Course-specific Q&A threads with syntax highlighting, code snippet formatting, and answer upvoting." },
        { title: "Bookmark & Quick Saved List", desc: "Instant access to frequently referenced course materials and lab routines." }
      ],
      architecture: {
        nodes: [
          { label: "React Frontend", role: "Vite SPA & Responsive UI Components" },
          { label: "Express API Gateway", role: "REST Endpoints & Validation Controllers" },
          { label: "JWT Auth Guard", role: "Bearer Token Verification & RBAC Middleware" },
          { label: "PostgreSQL on Supabase", role: "Cloud Database Persistence for Users, Courses, & Materials" }
        ],
        flow: "Client Request ➔ Express Router ➔ JWT RBAC Guard ➔ PostgreSQL (Supabase) Query ➔ JSON Payload Response"
      },
      databaseDesign: [
        { collection: "Users (Table)", fields: "id, name, email, passwordHash, role (student/admin), semester, department" },
        { collection: "Courses (Table)", fields: "id, courseCode, title, semester, creditHours" },
        { collection: "Resources (Table)", fields: "id, courseId, uploaderId, fileUrl, fileType, tags, downloadCount, createdAt" },
        { collection: "Discussions (Table)", fields: "id, courseId, authorId, title, content, upvotes, repliesCount" }
      ],
      challenges: [
        {
          challenge: "Managing fast search queries across nested course categories and material metadata.",
          solution: "Created B-tree indices on PostgreSQL relational tables in Supabase combined with debounced query execution on the frontend to minimize database load."
        }
      ],
      learnings: [
        "Architecting RESTful API contracts with Express and PostgreSQL databases hosted on Supabase.",
        "Optimizing PostgreSQL database queries and table indexing on Supabase.",
        "Structuring scalable React component hierarchies with reusable modal dialogs."
      ]
    }
  }
];
