export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Developers", href: "#developers" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
] as const;

export type FeatureIconName =
  | "checkout"
  | "card"
  | "tag"
  | "users"
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
      "Drop a sandboxed checkout into any page. The hosted form handles validation, 3-D Secure hand-offs, and responsive layout.",
  },
  {
    icon: "card",
    title: "Cards on file",
    description:
      "Register a card without charging it, then charge the same customer later. Saved payment methods belong to the customer, not the browser.",
  },
  {
    icon: "tag",
    title: "Products & prices",
    description:
      "Model your catalogue once — products, categories, and prices in the currency you actually sell in.",
  },
  {
    icon: "users",
    title: "Customers",
    description:
      "Keep profiles, billing addresses, and saved cards together, with a detail view that connects a person to their payment history.",
  },
  {
    icon: "activity",
    title: "Transactions",
    description:
      "Follow every attempt from processing to settled, with card brand, last four, ISO response codes, and the provider reference.",
  },
  {
    icon: "key",
    title: "API keys & permissions",
    description:
      "Mint publishable and secret keys with granular CRUD permissions, set an expiry, and revoke them instantly.",
  },
];

export const steps = [
  {
    title: "Create a key",
    description:
      "Open the dashboard and mint an API key. Give it only the permissions it needs — publishable keys are built for the browser.",
  },
  {
    title: "Create a session",
    description:
      "Send an amount in minor units and an ISO 4217 currency. Stream returns a checkout URL for a time-limited session.",
  },
  {
    title: "Mount and verify",
    description:
      "Attach the SDK to a container, listen for success, then confirm the attempt server-side before you fulfil the order.",
  },
];

export const endpoints = [
  { method: "POST", path: "/checkout", note: "Create a checkout session" },
  {
    method: "GET",
    path: "/api/payment-sessions",
    note: "List sessions",
  },
  {
    method: "GET",
    path: "/api/payment-attempts",
    note: "Inspect attempts",
  },
  { method: "POST", path: "/api/customers", note: "Create a customer" },
];

export const securityPoints = [
  {
    title: "Publishable keys only",
    description:
      "The browser SDK accepts pk_ keys and rejects secrets outright, so there is nothing sensitive to leak in client code.",
  },
  {
    title: "Isolated by default",
    description:
      "Checkout runs in a sandboxed iframe on Stream’s origin. Your page cannot read its contents, and card data never reaches your servers.",
  },
  {
    title: "Verified messages",
    description:
      "Every checkout event is checked against the iframe’s window and origin. Another tab cannot spoof a payment on your page.",
  },
  {
    title: "Verify before fulfilment",
    description:
      "A success event is a UX signal, not proof. Confirm the attempt on your server before releasing goods or services.",
  },
];

export const faqs = [
  {
    question: "What is Stream?",
    answer:
      "Stream is payments infrastructure: a hosted checkout page, a versioned REST API, a typed JavaScript SDK, and a dashboard for customers, products, transactions, and API keys.",
  },
  {
    question: "How much code does checkout take?",
    answer:
      "One mount. Create a Stream instance with a purpose, amount, and currency, attach it to a container, and the hosted page takes over from there.",
  },
  {
    question: "Does card data touch my servers?",
    answer:
      "No. The checkout form is served from Stream’s origin inside a sandboxed iframe. Your page and servers only see events and identifiers.",
  },
  {
    question: "Can I save a card and charge it later?",
    answer:
      "Yes. Use the registerCard purpose with a customerId to save a card without charging it, then create a payment for that customer when you are ready.",
  },
  {
    question: "How are amounts represented?",
    answer:
      "As positive integers in the currency’s minor units, paired with an ISO 4217 code. JMD 1,250.00 is 125000 JMD — no floating-point rounding to guess at.",
  },
  {
    question: "Do I still need a backend?",
    answer:
      "For fulfilment, yes. The SDK creates the checkout session from the browser, but payment confirmation belongs on your server, where you can verify the attempt before shipping anything.",
  },
];
