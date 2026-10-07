export interface Feature {
  id: string;
  title: string;
  description?: string;
  icon?: string;
}

export interface AboutUsData {
  subtitle?: string;
  subtitle2?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  description?: string;
  features: Feature[];
  phone?: string;
  imageMain?: string;
  imageSmall1?: string;
  imageSmall2?: string;
  yearsOfService?: string;
  yearsText?: string;
  button?: {text: string, url: string};
}

export interface TopBarData {
  phoneLabel?: string;
  phoneValue?: string;
  emailValue?: string;
  addressValue?: string;
  followLabel?: string;
  socialLinks?: Array<{id: string, icon: string, url: string}>;
}

export interface HeaderData {
  logo?: string;
  logoAlt?: string;
  contactInfoLeft?: Array<{id: string, icon: string, label: string, value: string}>;
  contactInfoRight?: Array<{id: string, icon: string, label: string, value: string}>;
  navLinksLeft?: Array<{id: string, label: string, url: string, subLinks?: Array<{id: string, label: string, url: string}>}>;
  navLinksRight?: Array<{id: string, label: string, url: string, subLinks?: Array<{id: string, label: string, url: string}>}>;
  contactButton?: {text: string, url: string, icon: string};
}

export interface HeroData {
  badge?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  description?: string;
  imageMain?: string;
  button1?: {text: string, url: string, icon: string};
  button2?: {text: string, url: string, icon: string};
  features?: Array<{id: string, text: string, icon: string}>;
}

export interface ServicesData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  description?: string;
  button?: {text: string, url: string};
  services: Array<{id: string, title: string, description?: string, image: string, icon?: string, url: string}>;
}

export interface ProcessData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  description?: string;
  steps: Array<{id: string, number: string, title: string, description: string, image: string}>;
}

export interface BrandsData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  description?: string;
  brands: Array<{id: string, name: string, image: string}>;
}


export interface ServiceDetailData {
  id: string;
  subtitle?: string;
  title1?: string;
  title2?: string;
  images?: {main: string, small1: string, small2: string, small3?: string, small4?: string};
  descriptions?: string[];
  features?: Feature[];
  commonIssuesTitle?: string;
  commonIssuesTitleHighlight?: string;
  commonIssues?: string[];
  commonIssuesImage?: string;
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: Array<{id: string, number: string, title: string, description: string}>;
  sidebar?: any;
  typesTitle1?: string;
  typesTitle2?: string;
  types?: Array<{id: string, image: string, title: string, description: string}>;
  description?: string;
  imageMain?: string;
  overviewTitle?: string;
  overviewText?: string[];
  overviewImage?: string;
  faqTitle?: string;
  faqs?: Array<{id: string, question: string, answer: string}>;
}

export interface ThankYouData {
  title1: string;
  title2: string;
  subtitle: string;
  description: string;
  cards: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
    phone?: string;
  }>;
  buttonText: string;
  buttonUrl: string;
}

export interface ContactData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  description?: string;
  form: {
    title1: string;
    title2?: string;
    subtitle: string;
    buttonText: string;
  };
  image: {
    url: string;
    floatingTitle: string;
    floatingDesc: string;
  };
  contactInfo: {
    title1: string;
    title2?: string;
    phoneLabel: string;
    phone: string;
    phoneDesc: string;
    emailLabel: string;
    email: string;
    emailDesc: string;
    storeLabel: string;
    storeDesc: string;
    storeSub: string;
    hoursLabel: string;
    hoursDesc: string;
    hoursSub: string;
  };
  map: {
    title1: string;
    title2?: string;
    description: string;
    url: string;
  };
}

export interface PricingTable {
  id: string;
  title1: string;
  title2?: string;
  subtitle?: string;
  items: Array<{id: string, service: string, price: string}>;
}

export interface PricingData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  description?: string;
  features?: Feature[];
  image?: string;
  tables: PricingTable[];
  noteTitle?: string;
  noteItems?: string[];
}


export interface TestimonialsData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  description?: string;
  bgImage?: string;
  testimonials: Array<{id: string, name: string, role?: string, avatar: string, quote: string, location?: string, rating: number, productImage?: string}>;
}

export interface EnquiryData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  description?: string;
  features: Feature[];
  form: { title1?: string, title2?: string, description?: string, fields?: any[], buttonText: string, servicesList?: string[] };
}

export interface AchievementData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  title3?: string;
  description?: string;
  bgImage?: string;
  achievements: Array<{id: string, title?: string, count?: string, label?: string, value?: string, icon: string}>;
}
export interface FaqData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  description?: string;
  image?: string;
  faqs: Array<{id: string, question: string, answer: string}>;
}

export interface FaqCategory {
  id: string;
  title1: string;
  title2?: string;
  faqs: Array<{id: string, question: string, answer: string}>;
}

export interface FaqPageData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  description?: string;
  categories: FaqCategory[];
  supportBox?: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    phone: string;
    email: string;
    address: string;
    image: string;
  };
}

export interface BookRepairData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  description?: string;
  form: {
    title: string;
    subtitle: string;
    buttonText: string;
    privacyText: string;
  };
  image: string;
  floatingCard: {
    title: string;
    features: string[];
  };
  whyBook: {
    title1: string;
    title2?: string;
    features: Array<{
      id: string;
      title: string;
      description: string;
      icon: string;
    }>;
  };
  assistance: {
    title1: string;
    title2?: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
  };
}

export interface FooterData {
  logo?: string;
  logoAlt?: string;
  brandTitle?: string;
  copyrightText?: string;
  description?: string;
  hoursTitle?: string;
  hoursDays?: string;
  hours: string;
  socialLinks: Array<{id: string, icon: string, url: string}>;
  quickLinks: Array<{id: string, label: string, url: string}>;
  servicesLinks: Array<{id: string, label: string, url: string}>;
  contactInfo: {address: string, phone: string, email: string};
  instagram?: string[];
  satisfactionTitle?: string;
  satisfactionDesc?: string;
  quickLinksTitle?: string;
  getInTouchTitle?: string;
  callNowText?: string;
  emailReplyText?: string;
  servicesTitle?: string;
  stayConnectedTitle?: string;
  stayConnectedDesc?: string;
  newsletterTitle?: string;
  newsletterDesc?: string;
  badge1?: string;
  badge2?: string;
  badge3?: string;
}

export interface BreadcrumbData {
  title: string;
  paths: Array<{label: string, url?: string}>;
  bgImage?: string;
}

export interface WhyChooseUsData {
  subtitle?: string;
  title1: string;
  titleHighlight?: string;
  title2?: string;
  description?: string;
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon?: string;
  }>;
  button?: {
    text: string;
    url: string;
  };
  image: string;
  stats?: {
    count: string;
    label: string;
    icon?: string;
  };
}

export interface ComputerRepairTemplateData {
  common?: {
    globalUI?: Record<string, string>;
    Footer?: FooterData;
    aboutBreadcrumb?: BreadcrumbData;
    servicesBreadcrumb?: BreadcrumbData;
    serviceDetailBreadcrumb?: BreadcrumbData;
    contactBreadcrumb?: BreadcrumbData;
    enquiryBreadcrumb?: BreadcrumbData;
    pricingBreadcrumb?: BreadcrumbData;
    faqBreadcrumb?: BreadcrumbData;
    bookBreadcrumb?: BreadcrumbData;

  };
  categories?: {
    "Computer Repair"?: {
      sections?: {
        TopBar?: { variants: { [key: string]: TopBarData } };
        Header?: { variants: { [key: string]: HeaderData } };
        Hero?: { variants: { [key: string]: HeroData } };
        AboutUs?: { variants: { [key: string]: AboutUsData } };
        WhyChooseUs?: { variants: { [key: string]: WhyChooseUsData } };
        Services?: { variants: { [key: string]: ServicesData } };
        Process?: { variants: { [key: string]: ProcessData } };
        Brands?: { variants: { [key: string]: BrandsData } };
        ServiceDetail?: { variants: { [key: string]: ServiceDetailData } };
        Pricing?: { variants: { [key: string]: PricingData } };
        Achievement?: { variants: { [key: string]: AchievementData } };
        Testimonials?: { variants: { [key: string]: TestimonialsData } };
        Faq?: { variants: { [key: string]: FaqData } };
        FaqPage?: { variants: { [key: string]: FaqPageData } };
        BookRepair?: { variants: { [key: string]: BookRepairData } };
        ThankYou?: { variants: { [key: string]: ThankYouData } };
        Enquiry?: { variants: { [key: string]: EnquiryData } };
        Contact?: { variants: { [key: string]: ContactData } };
      }
    };
    Plumbing?: {
      sections?: {
        TopBar?: { variants: { [key: string]: TopBarData } };
        Header?: { variants: { [key: string]: HeaderData } };
        Hero?: { variants: { [key: string]: HeroData } };
        AboutUs?: { variants: { [key: string]: AboutUsData } };
        AboutFirm?: { variants: { [key: string]: AboutUsData } };
        Services?: { variants: { [key: string]: ServicesData } };
        Process?: { variants: { [key: string]: ProcessData } };
        Brands?: { variants: { [key: string]: BrandsData } };
        ServiceDetail?: { variants: { [key: string]: ServiceDetailData } };
        Achievement?: { variants: { [key: string]: AchievementData } };
        Testimonials?: { variants: { [key: string]: TestimonialsData } };

        Faq?: { variants: { [key: string]: FaqData } };
        FaqPage?: { variants: { [key: string]: FaqPageData } };
        BookRepair?: { variants: { [key: string]: BookRepairData } };
        ThankYou?: { variants: { [key: string]: ThankYouData } };
        Enquiry?: { variants: { [key: string]: EnquiryData } };
        Contact?: { variants: { [key: string]: ContactData } };
      }
    };
  }
}

export type PlumbingTemplateData = ComputerRepairTemplateData;
