import { QuickSendCardProps } from "./dashboard/components/QuickSendCard";

export const sections = {
  hero: {
    title: "Effortless Global Payments, Secured and Streamlined",
    description:
      "Experience seamless, secure, and reliable payment solutions that simplify cross-border finance, allowing you to focus on what matters most.",
    cta: "Contact Sales",
    secondaryCta: "Create Account",
    image: "/images/dashboard.png",
  },
  whyUs: {
    subtitle: "Why Choose Us",
    title:
      "Effortless, Secure, and Scalable Global Payment Solutions for Businesses Worldwide",
    description:
      "Unlock the power of seamless international transactions with our secure, intuitive SaaS solution. Here's why we're the preferred choice for businesses and individuals worldwide",
    cta: "Contact Sales",
  },
  whyPayments: {
    subtitle: "Why Payment",
    title: "We Offer The Best Stand Out Payment Solution",
    description:
      "Choose a payment platform designed to elevate your global transactions with unparalleled security, ease of use, and scalability",
    cta: "Learn More",
    checkboxes: [
      "Comprehensive Security",
      "User-Friendly Interface",
      "Real-Time Insights",
      "Scalable Solutions",
    ],
    image_left: true,
  },
  pricing: {
    subtitle: "Pricing",
    title: "Affordable pricing plans",
    description:
      "Simple Plans to Power Your Global Transactions—Choose the Right Fit for Your Business.",
    cta: "Get Started",
  },
  experience: {
    subtitle: "Payment Experience",
    title: "Unlock the Full Potential of Global Transactions",
    description:
      "Whether you're expanding your business internationally or optimizing your financial operations, our solution adapts to meet your unique needs with precision and efficiency.",
    cta: "Learn More",
    checkboxes: [
      "Seamless Integration",
      "Automated Processes",
      "Customizable Reporting",
    ],
    image_left: false,
  },
  customers: {
    subtitle: "Customers Stories",
    title: "Customers success is our success",
    cta: "Read Story",
  },
  cta: {
    subtitle: "Try Us Risk-Free",
    title: "Experience Zero Fees on Your First Transaction",
    description:
      "It’s our way of showing you how seamless and cost-effective our payment solution can be. No hidden fees, just a straightforward and risk-free introduction to our platform.",
    cta: "Start Your Free Trial",
  },
  faq: {
    subtitle: "Any Questions?",
    title: "Frequently Asked Questions",
    description:
      "Your questions, our answers. Everything you need to know in one place.",
    cta: "Explore All Features",
  },
  contact: {
    subtitle: "Contact Us",
    title: "Get in touch today",
    description:
      "Have questions or need assistance? We're here to help! Reach out to us today and let’s work together to find the best solutions for your business needs.",
    cta: "Send Message",
  },
};

// `${id}-icon.png`;
export const logoCards = [
  {
    id: "comprehensive-security",
    title: "Comprehensive Security",
    description:
      "Protect your transactions with advanced encryption and compliance, ensuring your data is always secure.",
  },
  {
    id: "user-friendly-interface",
    title: "User-Friendly Interface",
    description:
      "Easily manage payments with our intuitive platform, designed for seamless navigation and quick access.",
  },
  {
    id: "real-time-insights",
    title: "Real-Time Insights",
    description:
      "Gain instant access to essential analytics, empowering you to make informed financial decisions.",
  },
  {
    id: "simplified-payments",
    title: "Simplified Payments",
    description:
      "Effortlessly manage transactions with a user-friendly platform designed to make global payments straightforward and efficient.",
  },
  {
    id: "secure-transactions",
    title: "Secure Transactions",
    description:
      "Rest easy knowing your payments are protected by cutting-edge security measures, ensuring your data is always safe.",
  },
  {
    id: "fast-setup",
    title: "Fast Setup",
    description:
      "Set up your account and start processing payments in minutes. Our streamlined onboarding process ensures you’re up and running with minimal effort.",
  },
  {
    id: "easy-management",
    title: "Easy Management",
    description:
      "Manage your transactions with ease using our intuitive dashboard. Track, analyze, and control your payments all in one place.",
  },
  {
    id: "flexible-integration",
    title: "Flexible Integration",
    description:
      "Integrate with your existing systems effortlessly. Our platform supports various tools and applications to fit seamlessly into your workflow.",
  },
];

export const faqItems = [
  {
    question: "How do I get started with your payment platform?",
    answer:
      "Simply sign up for an account, follow our easy onboarding process, and start making transactions. You can explore our features and access support resources to help you get up and running quickly.",
  },
  {
    question: "Are there any fees for using the platform?",
    answer:
      "Our platform offers transparent pricing with no hidden fees. You can review our fee structure on our website or contact our support team for detailed information.",
  },
  {
    question: "Can I manage multiple currencies?",
    answer:
      "Yes, our platform supports multiple currencies, allowing you to manage international transactions seamlessly.",
  },
  {
    question: "How secure are my transactions?",
    answer:
      "We use advanced encryption and compliance measures to ensure your transactions are always secure.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 customer support to assist you with any questions or issues you may encounter.",
  },
  {
    question: "How do I integrate your platform with my existing systems?",
    answer:
      "Our platform offers flexible integration options, allowing you to connect with your existing systems seamlessly. You can use our APIs, SDKs, and pre-built connectors to ensure a smooth integration process.",
  },
];

export const pricing = {
  buttonText: "Get Started",
  products: [
    {
      name: "Silver",
      price: 99,
      features: [0, 1],
    },
    {
      name: "Gold",
      price: 199,
      features: [0, 1, 2, 3],
    },
    {
      name: "Platinum",
      price: 399,
      features: [0, 1, 2, 3, 4, 5, 6, 7],
    },
  ],
  features: [
    "User-Friendly Dashboard",
    "Secure Transactions",
    "Top-Tier Security",
    "Advanced Analytics",
    "Multi-Currency Support",
    "API Integration",
    "Customizable Dashboard",
    "Dedicated Account Manager",
  ],
};

export const testimonials = [
  {
    title: "Transformative Payment Management",
    description:
      "This platform has completely transformed how we manage our international payments. It's fast, secure, and incredibly easy to use!",
  },
  {
    title: "Smarter Business Decisions",
    description:
      "I love the real-time insights feature. It gives me the data I need to make smarter business decisions on the spot.",
  },
  {
    title: "Top-Notch Security",
    description:
      "The security measures are top-notch. I feel confident knowing our transactions are protected at all times.",
  },
];

// Colors
const colors = {
  primary: "#C3F53C",
  secondary: "#E1FA9D",
  bgDark: "#002C15",
  bgLight: "#F2F5F7",
  textDark: "#1E1E1E",
  textLight: "#FFFFFF",
};

export const quickSendOptions: QuickSendCardProps[] = [
  {
    emoji: "⚡️",
    title: "United Capital Money Market Fund",
    description: "United Capital Money Market Fund",
    annualReturns: 9.12,
    color: "purple",
  },
  {
    emoji: "🪢",
    title: "Growth Gains & Wealth Habor Fund",
    description: "Growth Gains & Wealth Habor Fund",
    annualReturns: 11.23,
    color: "blue",
  },
  {
    emoji: "⭕️",
    title: "Prosperity+Capitalclimb Portfolio",
    description: "United Capital Money Market Fund",
    annualReturns: 4.54,
    color: "green",
  },
];
