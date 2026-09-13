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
    subtitle: "Modern Sales & Inventory Tracking System (RBMS)",
    category: "Full Stack",
    isFlagship: true,
    tagline: "Enterprise-grade Sales, POS, and Inventory Management Platform (RBMS) featuring a sub-50ms POS terminal, 4-role RBAC, printable barcode label generator, supplier AP ledger, and software architecture diagrams.",
    techStack: ["Next.js 14", "TypeScript", "React 18", "Tailwind CSS", "PostgreSQL", "Supabase", "JWT", "Recharts"],
    thumbnailGradient: "from-cyan-600/30 via-blue-600/20 to-indigo-500/10",
    bannerAccent: "#06b6d4",
    githubUrl: "https://github.com/77Arafat383/SuperShop",
    liveUrl: "https://github.com/77Arafat383/SuperShop",
    keyHighlights: [
      "Sub-50ms POS Terminal with laser barcode scanning & multi-payment engine (bKash/Nagad OTP, Cash, Split)",
      "4-Role RBAC (Admin, Inventory Mgr, Purchase Mgr, Cashier) with account approval queue & 1-click demo login",
      "Printable 80mm thermal receipts & formal A4 tax invoices with barcode generation & itemized tax breakdown",
      "Supplier AP Ledger with multi-item PO workflow (Draft ➔ Received), partial payment tracking & money receipts",
      "Executive Analytics dashboard with Recharts revenue charts, Gross Margins, COGS, & 1-click CSV exports",
      "Integrated Software Architecture tab featuring DFDs (L0-L2), ERD, Class Diagram, CPM & COCOMO II metrics"
    ],
    caseStudy: {
      overview: "SuperShop is a full-stack, enterprise-grade Sales, Point-of-Sale (POS), and Inventory Management Platform (RBMS) built using Next.js 14 (App Router), TypeScript, React 18, Tailwind CSS, and PostgreSQL hosted on Supabase Cloud. Designed to streamline retail operations, it automates stock workflows, sub-50ms POS billing, multi-channel payment authorization, supplier accounts payable ledgers, customer returns, and executive analytics. Developed for Software Engineering & Information System Design Lab (CSTE 3208) at NSTU under the supervision of Dr. Nazia Majadi.",
      problem: "Retail supershops face severe operational pain points: slow billing terminals causing checkout queues, manual stock tracking causing stockouts, untracked supplier dues/credit balances, insecure multi-user access, and lack of real-time financial auditing.",
      solution: "SuperShop resolves retail bottlenecks with an ultra-fast sub-50ms POS terminal featuring barcode simulation, dual thermal/A4 receipt generation, 4-role RBAC security with admin approval queues, automated low-stock threshold triggers, multi-item purchase orders with supplier AP ledgers, and interactive executive financial dashboards.",
      features: [
        { title: "Sub-50ms POS Terminal & Multi-Payment", desc: "Laser scanning simulation, real-time product filtering, dual receipt engine (80mm thermal receipts & A4 tax invoices with barcodes), and payment support for Cash, bKash & Nagad OTP/PIN modal, Card authorization simulator, and Split payments." },
        { title: "4-Role RBAC Governance & Demo Switcher", desc: "4 operational roles (Administrator, Inventory Manager, Purchase Manager, Cashier) with registration approval queue, user promotion/demotion, and a 1-click interactive demo login switcher." },
        { title: "Advanced Inventory & Barcode Labels", desc: "Catalog control with SKUs, category hierarchies, low-stock visual alerts (min_stock_level), printable barcode sticker sheets, and detailed stock adjustment audit logs (Stock In/Out/Correction)." },
        { title: "Supplier AP & Purchase Orders", desc: "Supplier directory mapping with wholesale pricing and MOQ, multi-item PO workflow (Draft ➔ Requested ➔ Accepted ➔ Received), partial/credit payment tracking, and automated money receipt generation." },
        { title: "Customer Returns & Automated Restocking", desc: "Invoice-linked product return logging, automated inventory restocking upon approval, refund payout tracking, and product-level return rate metrics." },
        { title: "Executive Analytics & Architecture Tab", desc: "Recharts sales velocity charts, Gross Profit Margins, COGS calculations, 1-click CSV data export, and built-in Software Engineering diagrams (DFDs L0-L2, ERD, Class Diagram, CPM, COCOMO II metrics)." }
      ],
      architecture: {
        nodes: [
          { label: "Next.js 14 App Router", role: "Server Components, API Routing, and optimized layout streaming" },
          { label: "TypeScript (Strict Mode)", role: "End-to-end interface contracts, type safety, and maintainability" },
          { label: "PostgreSQL on Supabase", role: "12 core relational tables with foreign key constraints and indexed lookup paths" },
          { label: "Auth & Security (JWT / bcrypt)", role: "Password hashing, JSON Web Token auth, and role-based middleware guards" },
          { label: "Thermal & Invoice Printing Engine", role: "Sub-50ms receipt calculation, barcode generation, and printable CSS layouts" }
        ],
        flow: "POS Laser Item Scan ➔ Sub-50ms Cart State Update ➔ Multi-Payment Auth Modal ➔ PostgreSQL (Supabase) Transaction ➔ Stock Deduction & Audit Log ➔ Thermal 80mm / A4 Invoice Render"
      },
      databaseDesign: [
        { collection: "users (Table)", fields: "id (PK), name, email, password_hash, role (ADMIN, INVENTORY_MGR, PURCHASE_MGR, CASHIER), status (PENDING, APPROVED)" },
        { collection: "products & categories (Tables)", fields: "id (PK), title, sku, barcode, category_id (FK), cost_price, selling_price, discount, stock_quantity, min_stock_level" },
        { collection: "sales & sale_items (Tables)", fields: "id (PK), invoice_number, cashier_id (FK), total_amount, payment_method (CASH, BKASH, NAGAD, CARD, SPLIT), product_id (FK), cost_price, quantity" },
        { collection: "suppliers & purchase_orders (Tables)", fields: "id (PK), name, phone, total_due, purchase_id (PK), supplier_id (FK), status (DRAFT, REQUESTED, ACCEPTED, RECEIVED), total_amount, paid_amount, due_amount" },
        { collection: "purchase_payments & returns (Tables)", fields: "id (PK), purchase_id (FK), amount_paid, remaining_due, return_id (PK), sale_id (FK), product_id (FK), refund_amount, restock_flag, return_reason" }
      ],
      challenges: [
        {
          challenge: "Ensuring instant sub-50ms billing terminal response times without UI lag during heavy item scanning.",
          solution: "Optimized client-side state hooks with keyboard barcode event listeners, local product lookup caching, and debounced inventory query updates."
        },
        {
          challenge: "Managing multi-item supplier accounts payable (AP) ledgers with partial advance payments and dynamic due balances.",
          solution: "Built an immutable payment ledger schema linking purchase orders to purchase_payments, automatically recalculating supplier total_due upon each transaction."
        },
        {
          challenge: "Securing multi-role operations and preventing unauthorized access across 4 distinct user personas.",
          solution: "Implemented JWT token authentication with role-based middleware guards, self-registration approval queues, and granular permission enforcement."
        }
      ],
      learnings: [
        "Designing enterprise Point of Sale (POS) terminals with sub-50ms responsiveness, multi-channel payment authorization, and barcode label generation.",
        "Structuring scalable PostgreSQL relational schemas on Supabase with foreign key constraints across 12 core tables.",
        "Implementing strict Role-Based Access Control (RBAC) and admin approval workflows in Next.js 14 App Router.",
        "Building software engineering design artifacts including DFD levels 0-2, ERD schemas, Class Diagrams, COCOMO II cost estimation, and CPM scheduling."
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
