import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Shield,
  Clock,
  CreditCard,
  Send,
  Heart
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleEmailClick = () => {
    // Open Gmail compose window
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=kulswamienterprisegdcaf@gmail.com&su=Inquiry from Website";
    window.open(gmailUrl, '_blank');
  };
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    { name: "About Us", href: "/about", type: "route" },
    { name: "Our Services", href: "/#services", type: "hash" },
    { name: "Knowledge Center", href: "/knowledge-center", type: "route" },
    { name: "Career", href: "/career", type: "route" },
    { name: "Contact Us", href: "/#contact", type: "hash" },
  ];

  const services = [
    "Accounts Writing",
    "GST Services",
    "TDS Compliance",
    "Audit Services",
    "ROC Filing",
    "Tax Consultation",
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#", color: "hover:bg-[#1877f2]" },
    { icon: Twitter, name: "Twitter", href: "#", color: "hover:bg-[#1da1f2]" },
    { icon: Instagram, name: "Instagram", href: "#", color: "hover:bg-[#e4405f]" },
    { icon: Linkedin, name: "LinkedIn", href: "#", color: "hover:bg-[#0a66c2]" },
    { icon: Youtube, name: "YouTube", href: "#", color: "hover:bg-[#ff0000]" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section - Enhanced */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                KULSWAMI ENTERPRISE
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Your trusted partner for comprehensive financial services, tax consultation, 
              and regulatory compliance solutions since 2009.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <Shield className="h-3 w-3 text-primary" />
                <span className="text-xs text-gray-300">ISO Certified</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <Clock className="h-3 w-3 text-primary" />
                <span className="text-xs text-gray-300">15+ Years</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map(({ name, href, type }) => (
                <li key={name}>
                  {type === "route" ? (
                    <Link 
                      to={href}
                      className="group flex items-center gap-2 text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                      {name}
                    </Link>
                  ) : (
                    <a 
                      href={href} 
                      className="group flex items-center gap-2 text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                      {name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="group flex items-center gap-2 text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                  >
                    <div className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Section */}
          <div className="space-y-6">
            <div>
              <h4 className="mb-5 text-lg font-semibold text-white relative inline-block">
                Contact Info
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full" />
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3 group">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span>Mumbai, Maharashtra, India</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <a  className="hover:text-primary transition-colors">
                    +91 88XXXXXX13
                  </a>
                </li>
    <li className="flex items-center gap-3 group">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 group-hover:bg-primary/20 transition-colors">
        <Mail className="h-4 w-4 text-primary" />
      </div>
      <a
        href="#"
        onClick={handleEmailClick}
        className="hover:text-primary transition-colors"
      >
        kulswamienterprisegdcaf@gmail.com
      </a>
    </li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-sm text-white placeholder:text-gray-400 border border-white/20 focus:border-primary focus:outline-none transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-3 py-2 text-white transition-all duration-300 hover:bg-primary/80 hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-xs text-green-400 animate-fade-in">
                  ✓ Subscribed successfully!
                </p>
              )}
              <p className="mt-2 text-xs text-gray-400">
                Get latest updates & offers
              </p>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, name, href, color }) => (
                <a
                  key={name}
                  href={href}
                  className={`group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 ${color} hover:text-white`}
                  aria-label={name}
                >
                  <Icon className="h-4 w-4 transition-colors group-hover:text-white" />
                </a>
              ))}
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-gray-400" />
              <span className="text-xs text-gray-400">Secure Payments</span>
              <div className="flex gap-1">
                <span className="text-xs text-gray-400">Visa</span>
                <span className="text-xs text-gray-400">Mastercard</span>
                <span className="text-xs text-gray-400">Razorpay</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-3 px-6 py-5 text-sm sm:flex-row">
          <span className="text-gray-400 flex items-center gap-1">
            © 2021 Kulswami Enterprise. 
            <span className="hidden sm:inline">All rights reserved.</span>
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 transition-colors hover:text-white text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 transition-colors hover:text-white text-xs">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 transition-colors hover:text-white text-xs">
              Cookie Policy
            </a>
          </div>
          
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;