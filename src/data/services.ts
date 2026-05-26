export type ServiceIconName =
  | "BookOpen"
  | "Building"
  | "Receipt"
  | "FileCheck"
  | "Briefcase"
  | "FileText"
  | "Users"
  | "CreditCard"
  | "ScrollText"
  | "Award";

export interface Service {
  slug: string;
  icon: ServiceIconName;
  title: string;
  desc: string;
  overview: string;
  offerings: string[];
  benefits: string[];
  whoItsFor: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "accounts-writing",
    icon: "BookOpen",
    title: "Accounts Writing",
    desc: "Comprehensive bookkeeping and financial record management for businesses of all sizes.",
    overview:
      "Accurate books are the foundation of every successful business. Our accounts writing services cover day-to-day bookkeeping, ledger maintenance, bank reconciliation, and financial statement preparation—so you always have a clear picture of your business health.",
    offerings: [
      "Daily bookkeeping and journal entries",
      "Accounts payable and receivable management",
      "Bank reconciliation and cash flow tracking",
      "Trial balance and financial statement preparation",
      "Month-end and year-end closing support",
      "MIS reports for management decision-making",
    ],
    benefits: [
      "Error-free records aligned with accounting standards",
      "Timely reports for tax and audit readiness",
      "Reduced admin burden for your internal team",
      "Better visibility into profitability and expenses",
    ],
    whoItsFor: [
      "Startups and sole proprietors",
      "Growing SMEs without in-house accountants",
      "Businesses preparing for audit or funding",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "bank-audit",
    icon: "Building",
    title: "Bank Audit",
    desc: "Thorough bank audit services ensuring compliance with regulatory standards.",
    overview:
      "Bank audits require specialized expertise and strict adherence to regulatory frameworks. We conduct independent bank audits with meticulous verification of transactions, controls, and compliance documentation to meet statutory and RBI requirements.",
    offerings: [
      "Statutory bank audit as per regulatory guidelines",
      "Verification of loans, advances, and NPA classifications",
      "Review of internal controls and risk management",
      "Compliance with RBI and banking regulations",
      "Audit report preparation and liaison support",
      "Follow-up on audit observations and rectifications",
    ],
    benefits: [
      "Regulatory compliance with confidence",
      "Identification of control gaps and risk areas",
      "Transparent reporting for stakeholders",
      "Experienced auditors familiar with banking norms",
    ],
    whoItsFor: [
      "Cooperative banks and credit societies",
      "NBFCs and financial institutions",
      "Branches requiring annual statutory audit",
    ],
    image:
      "https://images.unsplash.com/photo-1541354329998-f4d4f949a51d?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "gst-services",
    icon: "Receipt",
    title: "GST Services",
    desc: "Complete GST registration, filing, and compliance management solutions.",
    overview:
      "GST compliance can be complex, but it does not have to slow your business down. From registration to monthly and annual returns, we handle your entire GST lifecycle—keeping you compliant while optimizing input tax credit and avoiding penalties.",
    offerings: [
      "GST registration (regular and composition scheme)",
      "GSTR-1, GSTR-3B, and annual return filing",
      "Input tax credit reconciliation",
      "E-way bill and e-invoicing support",
      "GST audit and assessment assistance",
      "Advisory on rate classification and refunds",
    ],
    benefits: [
      "On-time filings to avoid late fees and notices",
      "Maximized legitimate ITC claims",
      "Expert handling of notices and reconciliations",
      "Single point of contact for all GST matters",
    ],
    whoItsFor: [
      "Manufacturers, traders, and service providers",
      "E-commerce and multi-state businesses",
      "Companies undergoing GST scrutiny or migration",
    ],
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "tds-compliance",
    icon: "FileCheck",
    title: "TDS Compliance",
    desc: "End-to-end TDS deduction, filing, and compliance advisory services.",
    overview:
      "TDS errors can lead to interest, penalties, and scrutiny from the tax department. We manage the complete TDS cycle—deduction, challan payment, quarterly returns, and Form 16/16A issuance—ensuring accuracy across all sections applicable to your business.",
    offerings: [
      "TDS deduction calculation across all sections",
      "Monthly challan payment and tracking",
      "Quarterly TDS return filing (24Q, 26Q, 27Q, etc.)",
      "Form 16 and Form 16A generation",
      "TDS reconciliation and correction statements",
      "Advisory on lower/nil deduction certificates",
    ],
    benefits: [
      "Full compliance with Income Tax TDS provisions",
      "Reduced risk of demand notices and defaults",
      "Accurate employee and vendor tax certificates",
      "Proactive updates on rate and threshold changes",
    ],
    whoItsFor: [
      "Companies with salary and vendor payments",
      "Property buyers and professional fee payers",
      "Trusts, societies, and institutions deducting TDS",
    ],
    image:
      "https://images.unsplash.com/photo-1634128222187-18eababc763d?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "professional-tax",
    icon: "Briefcase",
    title: "Professional Tax",
    desc: "Professional tax registration and timely payment management services.",
    overview:
      "Professional tax rules vary by state, making compliance challenging for multi-location businesses. We handle registration, slab-based calculations, monthly payments, and annual returns across applicable states so you stay compliant everywhere you operate.",
    offerings: [
      "State-wise professional tax registration",
      "Employee slab calculation and deductions",
      "Monthly payment and challan management",
      "Annual return filing and renewals",
      "Registration amendments for new branches",
      "Advisory on exemptions and compliance timelines",
    ],
    benefits: [
      "Correct state-specific compliance",
      "No missed deadlines or penalty accruals",
      "Streamlined payroll integration support",
      "Expert guidance for multi-state operations",
    ],
    whoItsFor: [
      "Employers with salaried staff",
      "Professionals and consultants",
      "Businesses expanding to new states",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "roc-filing",
    icon: "FileText",
    title: "ROC Filing",
    desc: "Annual return filing and compliance management with Registrar of Companies.",
    overview:
      "Companies Act compliance is non-negotiable for private and public limited companies. We manage ROC filings including annual returns, financial statements, director KYC, and event-based forms—keeping your company in good standing with the Registrar of Companies.",
    offerings: [
      "Annual return (MGT-7) and financial statements (AOC-4)",
      "Director DIN KYC and appointment filings",
      "Change in registered office, capital, or directors",
      "Board meeting and AGM compliance support",
      "LLP annual return and statement of accounts",
      "Strike-off and restoration advisory",
    ],
    benefits: [
      "Avoid penalties for delayed or missed filings",
      "Complete documentation and board resolution support",
      "Timely reminders for all statutory due dates",
      "Experienced handling of MCA portal filings",
    ],
    whoItsFor: [
      "Private and public limited companies",
      "LLPs and OPCs",
      "Startups post-incorporation compliance",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "provident-fund",
    icon: "Users",
    title: "Provident Fund",
    desc: "PF registration, monthly filing, and employee benefit management.",
    overview:
      "Provident Fund compliance protects your employees and your business. We handle EPFO registration, monthly ECR filing, contribution calculations, and employee onboarding/offboarding—ensuring seamless PF administration aligned with labour laws.",
    offerings: [
      "EPFO establishment registration",
      "Monthly ECR filing and payment coordination",
      "Employee UAN activation and KYC",
      "PF transfer and withdrawal claim assistance",
      "Inspection and notice response support",
      "ESIC registration and compliance (add-on)",
    ],
    benefits: [
      "Accurate contributions and timely deposits",
      "Happy employees with hassle-free PF accounts",
      "Reduced labour law compliance risk",
      "Dedicated support for EPFO portal issues",
    ],
    whoItsFor: [
      "Businesses with 20+ employees (mandatory PF)",
      "Growing companies adding new hires",
      "Organizations facing EPFO scrutiny",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "pan-tan-services",
    icon: "CreditCard",
    title: "PAN/TAN Services",
    desc: "Quick PAN and TAN application, correction, and management services.",
    overview:
      "PAN and TAN are essential identifiers for tax compliance. Whether you need new applications, corrections, duplicate cards, or TAN for TDS purposes, we process requests efficiently with proper documentation and follow-up until completion.",
    offerings: [
      "New PAN application for individuals and entities",
      "PAN correction and reprint services",
      "TAN application for businesses and deductors",
      "Linking Aadhaar with PAN verification",
      "Status tracking and resubmission support",
      "Bulk PAN/TAN for new employees or branches",
    ],
    benefits: [
      "Fast turnaround with correct documentation",
      "Avoid rejections due to form errors",
      "End-to-end tracking until card delivery",
      "Support for corporates with multiple applicants",
    ],
    whoItsFor: [
      "New businesses and startups",
      "Individuals requiring PAN correction",
      "Employers registering TAN for payroll TDS",
    ],
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0b07?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "gumasta-license",
    icon: "ScrollText",
    title: "Gumasta License",
    desc: "Shop and establishment license registration and renewal services.",
    overview:
      "The Shop and Establishment Act (Gumasta) license is mandatory for most commercial establishments in Maharashtra and similar states. We manage registration, renewals, amendments, and display compliance so your business operates legally from day one.",
    offerings: [
      "New Gumasta / shop act registration",
      "Annual renewal and fee payment",
      "Amendments for change in ownership or address",
      "Multi-establishment registration support",
      "Labour law display and record-keeping guidance",
      "Closure and transfer applications",
    ],
    benefits: [
      "Legal operation without municipal penalties",
      "Smooth renewals with deadline reminders",
      "Correct classification of establishment type",
      "Local expertise for state-specific rules",
    ],
    whoItsFor: [
      "Retail shops and showrooms",
      "Restaurants, hotels, and service outlets",
      "Offices and commercial establishments",
    ],
    image:
      "https://images.unsplash.com/photo-1556741533-411cf82e4e2c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    slug: "udyam-registration",
    icon: "Award",
    title: "Udyam Registration",
    desc: "MSME Udyam registration for small and medium enterprises.",
    overview:
      "Udyam registration unlocks government benefits, priority lending, subsidies, and tender preferences for MSMEs. We guide you through eligibility assessment, documentation, online registration, and certificate download—with clarity on the advantages for your business category.",
    offerings: [
      "Udyam registration for micro, small, and medium enterprises",
      "Classification advisory based on investment and turnover",
      "Update and amendment of registration details",
      "Guidance on MSME schemes and subsidies",
      "Integration support for tender and loan applications",
      "Renewal and re-validation assistance",
    ],
    benefits: [
      "Access to collateral-free loan schemes",
      "Preference in government procurement",
      "Subsidies on patent, ISO, and technology adoption",
      "Protection against delayed payments from buyers",
    ],
    whoItsFor: [
      "Manufacturing and service MSMEs",
      "Startups seeking government benefits",
      "Businesses upgrading from old Udyog Aadhaar",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
