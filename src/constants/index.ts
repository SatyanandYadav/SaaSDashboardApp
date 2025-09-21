export const mockSidebarData = {
  user: {
    name: "ByeWind",
    role: "Administrator"
  },
  favorites: {
    items: ["Overview", "Projects"],
    isRecentlyViewed: true
  },
  dashboard: [
    {
      category: "Default",
      key: "default",
      items: []
    },
    {
      category: "eCommerce",
      key: "e-commerce",
      items: []
    },
    {
      category: "Projects",
      key: "projects",
      items: []
    },
    {
      category: "Online Courses",
      key: "online-courses",
      items: []
    }
  ],

  pages: [
    {
      category: "User Profile",
      key: "user-profile",
      items: ["Overview", "Projects", "Campaigns", "Documents", "Followers"]
    },
    {
      category: "Account",
      key: "account",
      items: []
    },
    {
      category: "Corporate",
      key: "corporate",
      items: []
    },
    {
      category: "Blog",
      key: "blog",
      items: []
    },
    {
      category: "Social",
      key: "social",
      items: []
    }
  ]
};

export const ecommerceMetrics = [
  {
    title: "Customers",
    value: 3781,
    change: "+11.01%",
    isPositive: true,
    background: "bg-blue-50", // Light blue
    testId: "customers-card"
  },
  {
    title: "Orders",
    value: 1219,
    change: "-0.03%",
    isPositive: false,
    background: "bg-gray-50",
    testId: "orders-card"
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    isPositive: true,
    background: "bg-gray-50",
    testId: "revenue-card"
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    isPositive: true,
    background: "bg-blue-50", // Light blue
    testId: "growth-card"
  }
];

export const mockChartData = [
  { month: "Jan", projected: 20, actual: 17 },
  { month: "Feb", projected: 25, actual: 21 },
  { month: "Mar", projected: 21, actual: 18 },
  { month: "Apr", projected: 25, actual: 22 },
  { month: "May", projected: 18, actual: 14 },
  { month: "Jun", projected: 23, actual: 19 }
];
