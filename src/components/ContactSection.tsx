import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building2,
  User,
  MessageSquare,
  CheckCircle2,
  Headphones,
  Globe,
  Shield,
  ArrowRight,
  Sparkles,
  AlertCircle
} from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
  }, []);

  const contactInfo = [
    {
      icon: Building2,
      title: "Our Office",
      details: ["A Wing, Nootan Nagar CHS Ltd", "Guru Nanak Road, S.V. Road, Bandra West", "Mumbai, Maharashtra 400050"],
      color: "from-blue-500 to-cyan-500",
      action: null
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 888XXXXXX13"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["kulswamienterprisegdcaf@gmail.com"],
      action: "Open Email App",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM", "Sun: Closed"],
      color: "from-orange-500 to-red-500",
      action: null
    },
  ];

  const supportChannels = [
    { icon: Headphones, title: "24/7 Support", description: "Emergency assistance available" },
    { icon: Globe, title: "Pan India Service", description: "Clients across all states" },
    { icon: Shield, title: "100% Confidential", description: "Your data is safe with us" },
  ];

  // Function to open email based on device
  const openEmailApp = (to, subject, body) => {
    let emailUrl = '';
    
    if (isMobile) {
      // For mobile devices - use mailto to open native email app
      emailUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Try to open email app
      window.location.href = emailUrl;
      
      // Fallback for if mailto doesn't work
      setTimeout(() => {
        const gmailFallback = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailFallback, '_blank');
      }, 500);
    } else {
      // For desktop - use Gmail compose
      emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(emailUrl, '_blank');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const subject = `New Inquiry from ${formData.firstName} ${formData.lastName}`;
      const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
Submitted from: ${window.location.href}
Submitted on: ${new Date().toLocaleString()}
      `.trim();

      // Open email app with pre-filled content
      openEmailApp(
        'kulswamienterprisegdcaf@gmail.com',
        subject,
        body
      );

      // Store in localStorage for backup
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (err) {
      setError("Failed to open email app. Please try again or contact us directly.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+9188XXXXXX3";
  };

  const handleEmailClick = () => {
    const subject = "Inquiry from Website";
    const body = "Hello, I would like to inquire about your services.";

    openEmailApp('kulswamienterprisegdcaf@gmail.com', subject, body);
  };

  const handleGetDirections = () => {
    const address = "A Wing, Nootan Nagar CHS Ltd, Guru Nanak Road, S.V. Road, Bandra West, Mumbai";
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 sm:py-24">
      {/* Background Pattern - Hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-30 hidden sm:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header - Mobile Optimized */}
        <div className="mb-12 sm:mb-16 text-center">
          <Badge className="mb-4 gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-primary border-0">
            <Sparkles className="h-3 w-3" />
            GET IN TOUCH
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Contact Our 
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-gray-600 px-4">
            Have questions? We're here to help. Reach out to us and our team will 
            respond with expert guidance tailored to your needs.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Contact Form - Mobile Optimized */}
          <div>
            <div className="relative rounded-2xl bg-white p-5 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary/20 rounded-t-2xl" />
              
              <div className="flex items-center gap-2 mb-5 sm:mb-6">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Send us a Message</h3>
              </div>
              
              {isSubmitted && (
                <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-3 sm:p-4 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <p className="text-xs sm:text-sm text-green-700">
                      {isMobile ? "Opening email app..." : "Message prepared! Gmail will open for you to send."}
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-3 sm:p-4 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <p className="text-xs sm:text-sm text-red-700">{error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                      <User className="h-4 w-4 text-primary" />
                      First Name
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John" 
                      className="h-10 sm:h-11 rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20 text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                      <User className="h-4 w-4 text-primary" />
                      Last Name
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe" 
                      className="h-10 sm:h-11 rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20 text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address
                  </label>
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="h-10 sm:h-11 rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20 text-sm"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number
                  </label>
                  <Input 
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX" 
                    className="h-10 sm:h-11 rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20 text-sm"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..." 
                    className="min-h-[100px] sm:min-h-[120px] rounded-lg resize-none border-gray-200 focus:border-primary focus:ring-primary/20 text-sm"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-lg gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 h-11 sm:h-12 text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Preparing...
                    </>
                  ) : (
                    <>
                      {isMobile ? "Open Email App" : "Compose in Gmail"}
                      <Mail className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  By submitting, you agree to our privacy policy. {isMobile ? "Your email app will open" : "Gmail will open with your message ready to send."}
                </p>
              </div>

              {/* Support Channels - Mobile Optimized */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100">
                <div className="grid gap-2 sm:gap-3">
                  {supportChannels.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-gray-900">{title}</p>
                        <p className="text-xs text-gray-500">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information - Mobile Optimized */}
          <div className="space-y-5 sm:space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-3 sm:gap-4">
              {contactInfo.map(({ icon: Icon, title, details, action, color }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl bg-white p-4 sm:p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-x-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                  <div className="relative flex items-start gap-3 sm:gap-4">
                    <div className={`flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${
                      title === "Our Office" ? "bg-blue-100" :
                      title === "Phone" ? "bg-green-100" :
                      title === "Email" ? "bg-purple-100" : "bg-orange-100"
                    }`}>
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${
                        title === "Our Office" ? "text-blue-600" :
                        title === "Phone" ? "text-green-600" :
                        title === "Email" ? "text-purple-600" : "text-orange-600"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900">{title}</h4>
                      {details.map((detail, idx) => (
                        <p key={idx} className="mt-1 text-xs sm:text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                      {action && (
                        <Button 
                          variant="link" 
                          className="mt-2 h-auto p-0 text-primary gap-1 hover:gap-2 transition-all text-xs sm:text-sm"
                          onClick={() => {
                            if (title === "Phone") {
                              handlePhoneClick();
                            } else if (title === "Email") {
                              handleEmailClick();
                            }
                          }}
                        >
                          {action}
                          <ArrowRight className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Location - Mobile Optimized */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-64 sm:h-80 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24169.71918542271!2d72.818091!3d19.044747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644d13b%3A0x3bd74ca21a0cd0de!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  title="KULSWAMI ENTERPRISE Office Location"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 rounded-lg bg-white/95 p-3 sm:p-4 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900">Visit Our Office</p>
                      <p className="text-xs text-gray-600">A Wing, Nootan Nagar CHS Ltd, Bandra West, Mumbai</p>
                      <button 
                        onClick={handleGetDirections}
                        className="mt-1 inline-flex items-center gap-1 text-xs text-primary hover:gap-2 transition-all"
                      >
                        Get Directions
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 p-2.5 sm:p-3">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
              <p className="text-xs sm:text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Response Time:</span> Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;