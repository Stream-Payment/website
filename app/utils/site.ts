export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Developers", href: "#developers" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
] as const;

export type FeatureIconName =
  | "checkout"
  | "repeat"
  | "bank"
  | "users"
  | "tag"
  | "dashboard"
  | "card"
  | "activity"
  | "key";

export const features: {
  icon: FeatureIconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "checkout",
    title: "Hosted checkout",
    description:
      "Drop a mobile-first checkout into any site, with the payment methods your customers expect.",
  },
  {
    icon: "repeat",
    title: "Recurring payments",
    description:
      "Subscriptions and repeat charges without building and maintaining a billing engine.",
  },
  {
    icon: "bank",
    title: "Fast payouts",
    description:
      "We remit what you collect to your business account, with no manual follow-up.",
  },
  {
    icon: "users",
    title: "Customers & saved cards",
    description:
      "Keep customer profiles, saved payment methods, and payment history together.",
  },
  {
    icon: "tag",
    title: "Products & prices",
    description:
      "Model what you sell, in the currencies your customers use.",
  },
  {
    icon: "dashboard",
    title: "One dashboard",
    description:
      "Payments, customers, and products in one clear view of your business.",
  },
];

export const steps = [
  {
    title: "Create your account",
    description:
      "Sign up, add your business details, and get access to the Stream dashboard.",
  },
  {
    title: "Add the SDK",
    description:
      "Drop Stream’s hosted checkout into your site with a few lines of code. No separate gateway to integrate.",
  },
  {
    title: "Start accepting payments",
    description:
      "Take one-off or recurring payments, track them in the dashboard, and get paid out.",
  },
];

export const endpoints = [
  { method: "POST", path: "/checkout", note: "Create a checkout session" },
  {
    method: "GET",
    path: "/api/payment-sessions",
    note: "List payment sessions",
  },
  { method: "POST", path: "/api/customers", note: "Create a customer" },
];

export const securityPoints = [
  {
    title: "Hosted, isolated checkout",
    description:
      "Card details are handled by Stream’s hosted checkout and never stored on your site.",
  },
  {
    title: "Secure saved payments",
    description:
      "Recurring billing uses payment methods stored securely by Stream, not in your codebase.",
  },
  {
    title: "Recorded end to end",
    description:
      "Every attempt, status, and reference is kept with the payment for reconciliation.",
  },
  {
    title: "A versioned API",
    description:
      "Your integration is versioned, so improvements do not break your checkout.",
  },
];

export const faqs = [
  {
    question: "What is Stream?",
    answer:
      "Stream is payment infrastructure for Caribbean businesses. Create an account, add the SDK, and start accepting payments online.",
  },
  {
    question: "Do I need a separate payment gateway?",
    answer:
      "No. Stream provides the checkout and payment infrastructure, so you do not need a separate gateway contract or a bank-by-bank integration.",
  },
  {
    question: "Are recurring payments supported?",
    answer:
      "Yes. Recurring billing is built in, so you do not have to build and maintain a subscription engine.",
  },
  {
    question: "How do payouts work?",
    answer:
      "We remit what you collect to your business account, with no manual follow-up.",
  },
  {
    question: "Do I need a developer?",
    answer:
      "No. The hosted checkout is designed to be easy to add. Developers can use the SDK and API when they want more control.",
  },
  {
    question: "Does card data touch my servers?",
    answer:
      "No. Sensitive payment details are handled by Stream’s hosted checkout and never stored on your site.",
  },
  {
    question: "Which currencies are supported?",
    answer:
      "Stream supports local currencies in the markets we serve, so prices and payments feel local to your customers.",
  },
];
