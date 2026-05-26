import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Infinity, 
  Award, 
  BarChart3, 
  MapPin, 
  Clock, 
  ArrowRight,
  CheckCircle2,
  Heart,
  Sparkles,
  Globe,
  Coffee,
  Target,
  Zap,
  Mail,
  Upload,
  Phone,
  Building2,
  Calendar,
  UserCheck,
  Rocket,
  Shield,
  Star,
  X,
  FileText,
  ChevronDown
} from "lucide-react";
import { useState, useRef } from "react";

const CareerPage = () => {
  const [hoveredJob, setHoveredJob] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    coverLetter: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadFormData, setUploadFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    position: "",
    message: ""
  });
  const [uploadFile, setUploadFile] = useState(null);
  
  // Create refs for file inputs
  const fileInputRef = useRef(null);
  const uploadFileInputRef = useRef(null);

  const openings = [
    {
      title: "Manager Finance-CA",
      locations: ["Pune", "Gujarat", "Delhi", "Mumbai", "Rajasthan", "Kerala"],
      experience: "3–4 yrs",
      type: "Full-time",
      category: "Finance",
      urgency: "Urgent",
    },
    {
      title: "Sr Executive Finance",
      locations: ["Mumbai"],
      experience: "1 year",
      type: "Full-time",
      category: "Finance",
    },
    {
      title: "Assistant Manager",
      locations: ["Mumbai"],
      experience: "1–2 yrs",
      type: "Full-time",
      category: "Management",
    },
    {
      title: "Tax Consultant",
      locations: ["Mumbai", "Delhi", "Pune"],
      experience: "2–4 yrs",
      type: "Full-time",
      category: "Taxation",
      urgency: "Urgent",
    },
    {
      title: "Audit Associate",
      locations: ["Mumbai", "Bangalore"],
      experience: "1–3 yrs",
      type: "Full-time",
      category: "Audit",
    },
    {
      title: "GST Specialist",
      locations: ["Mumbai", "Pune", "Ahmedabad"],
      experience: "2–5 yrs",
      type: "Full-time",
      category: "GST",
    },
  ];

  const reasons = [
    { icon: Award, title: "Industry Reputation", desc: "15+ years of excellence in financial services", color: "from-amber-500 to-orange-500", stat: "500+" },
    { icon: TrendingUp, title: "Career Growth", desc: "Fast-track promotions and skill development", color: "from-emerald-500 to-teal-500", stat: "200+" },
    { icon: Users, title: "Expert Team", desc: "Work alongside industry veterans", color: "from-blue-500 to-cyan-500", stat: "50+" },
    { icon: Infinity, title: "Global Opportunities", desc: "International client exposure", color: "from-purple-500 to-pink-500", stat: "10+" },
  ];

  const benefits = [
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical coverage and wellness programs" },
    { icon: Coffee, title: "Work-Life Balance", desc: "Flexible hours, remote work, and paid time off" },
    { icon: TrendingUp, title: "Learning & Development", desc: "Annual training budget and certification support" },
    { icon: Globe, title: "Global Exposure", desc: "Work with international clients and teams" },
    { icon: Target, title: "Performance Bonuses", desc: "Competitive bonus structure and incentives" },
    { icon: Zap, title: "Fast-Track Growth", desc: "Clear promotion path for high performers" },
    { icon: Shield, title: "Job Security", desc: "Stable career with long-term opportunities" },
    { icon: Star, title: "Recognition Programs", desc: "Monthly awards and appreciation events" },
  ];

  const values = [
    { icon: UserCheck, title: "Integrity First", desc: "We uphold the highest ethical standards" },
    { icon: Rocket, title: "Innovation Driven", desc: "Embracing new technologies and ideas" },
    { icon: Users, title: "Collaborative Spirit", desc: "Team success over individual glory" },
    { icon: Target, title: "Client Centric", desc: "Delivering excellence beyond expectations" },
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setFormData({ name: "", email: "", phone: "", countryCode: "+91", coverLetter: "" });
    setSelectedFile(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
      setSelectedFile(file);
    } else {
      alert("Please upload PDF or DOC file only");
      e.target.value = "";
    }
  };

  const handleUploadFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
      setUploadFile(file);
    } else {
      alert("Please upload PDF or DOC file only");
      e.target.value = "";
    }
  };

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUploadFileButtonClick = () => {
    if (uploadFileInputRef.current) {
      uploadFileInputRef.current.click();
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUploadFormChange = (e) => {
    setUploadFormData({ ...uploadFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedFile) {
      alert("Please upload your resume");
      return;
    }
    
    setIsSubmitting(true);

    // Prepare email content
    const emailContent = `
Job Application for: ${selectedJob?.title}

Applicant Details:
------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.countryCode} ${formData.phone}

Cover Letter:
${formData.coverLetter || "No cover letter provided"}

Resume: ${selectedFile ? selectedFile.name : "No file uploaded"}

Applied for: ${selectedJob?.title}
Application Date: ${new Date().toLocaleString()}
    `;

    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=careers@jaca.in&su=Job Application for ${selectedJob?.title} - ${formData.name}&body=${encodeURIComponent(emailContent)}`;
    
    // Open Gmail in new tab
    window.open(gmailUrl, '_blank');

    // Store in localStorage
    const applications = JSON.parse(localStorage.getItem('jobApplications') || '[]');
    applications.push({
      job: selectedJob,
      applicant: formData,
      resume: selectedFile?.name,
      timestamp: new Date().toISOString(),
      id: Date.now()
    });
    localStorage.setItem('jobApplications', JSON.stringify(applications));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };

  const handleGeneralUploadSubmit = async (e) => {
    e.preventDefault();
    
    if (!uploadFile) {
      alert("Please upload your resume");
      return;
    }
    
    setIsSubmitting(true);

    // Prepare email content for general application
    const emailContent = `
General Job Application

Applicant Details:
------------------
Name: ${uploadFormData.name}
Email: ${uploadFormData.email}
Phone: ${uploadFormData.countryCode} ${uploadFormData.phone}
Position Interested in: ${uploadFormData.position || "Not specified"}

Additional Message:
${uploadFormData.message || "No additional message"}

Resume: ${uploadFile ? uploadFile.name : "No file uploaded"}

Application Date: ${new Date().toLocaleString()}
    `;

    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=careers@jaca.in&su=General Job Application - ${uploadFormData.name}&body=${encodeURIComponent(emailContent)}`;
    
    // Open Gmail in new tab
    window.open(gmailUrl, '_blank');

    // Store in localStorage
    const applications = JSON.parse(localStorage.getItem('generalApplications') || '[]');
    applications.push({
      applicant: uploadFormData,
      resume: uploadFile?.name,
      timestamp: new Date().toISOString(),
      id: Date.now()
    });
    localStorage.setItem('generalApplications', JSON.stringify(applications));

    setIsSubmitting(false);
    
    // Show success message
    alert("Resume submitted successfully! Gmail will open for you to send your resume.");
    
    // Reset form and close modal
    setUploadFormData({ name: "", email: "", phone: "", countryCode: "+91", position: "", message: "" });
    setUploadFile(null);
    setShowUploadModal(false);
  };

  const handleOpenUploadModal = () => {
    setShowUploadModal(true);
    setUploadFormData({ name: "", email: "", phone: "", countryCode: "+91", position: "", message: "" });
    setUploadFile(null);
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-primary/90" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Badge className="mb-6 gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-white border-white/30">
              <Briefcase className="h-4 w-4" />
              Join Our Team
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-7xl">
              Build Your Legacy
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                With Excellence
              </span>
            </h1>
            <p className="mb-8 text-lg text-gray-200 max-w-2xl">
              At  KulswamiEnterprise, we're not just building careers — we're shaping the future of finance. 
              Join a team where your potential meets endless opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 gap-2"
                onClick={handleOpenUploadModal}
              >
                <Upload className="h-4 w-4" />
                Upload Resume
              </Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-10 z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, stat, color }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${color} p-3 shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat}+</div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-primary/10 text-primary">Why Join Us</Badge>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              More Than Just a{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Job
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Discover what makes our firm the perfect place to advance your career and achieve your professional goals
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              {values.map(({ icon: Icon, title, desc }, index) => (
                <div
                  key={title}
                  className="group flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-x-1"
                >
                  <div className="flex-shrink-0">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="relative p-8 min-h-[400px] flex items-end">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Collaborative Culture</h3>
                  <p className="text-gray-200">Work in an environment that celebrates teamwork, innovation, and mutual success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-green-100 text-green-700">Perks & Benefits</Badge>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              What We{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We believe in taking care of our team with comprehensive benefits and perks
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="mb-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 w-fit shadow-lg group-hover:shadow-xl transition-all">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Career Opportunities</Badge>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Current{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Openings
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Find your perfect role and take the next step in your career journey
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {openings.map((job, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                onMouseEnter={() => setHoveredJob(index)}
                onMouseLeave={() => setHoveredJob(null)}
              >
                {job.urgency && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white border-2 border-white">
                    {job.urgency}
                  </Badge>
                )}
                
                <div className="mb-4">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{job.locations.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Experience: {job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>{job.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {job.type}
                  </Badge>
                  <Button 
                    size="sm" 
                    className="gap-2 group-hover:gap-3 transition-all bg-primary hover:bg-primary/90"
                    onClick={() => handleApplyClick(job)}
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Don't see the right fit?</p>
            <Button 
              variant="outline" 
              className="gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={handleOpenUploadModal}
            >
              <Mail className="h-4 w-4" />
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gradient-to-r from-primary/5 to-transparent py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Employee Stories</Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Team Says
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Rahul Sharma", role: "Senior Manager", text: "Best decision I ever made. The growth opportunities here are unparalleled.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
              { name: "Priya Patel", role: "Tax Consultant", text: "Supportive environment and amazing mentors. Love working here!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
              { name: "Amit Kumar", role: "Audit Associate", text: "Work-life balance is great and the team is incredibly collaborative.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Resume Upload Modal */}
      {showUploadModal && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
            onClick={() => setShowUploadModal(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-50 animate-slide-up overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Upload Resume</h2>
                <p className="text-white/80 text-sm mt-1">Submit your application for general consideration</p>
              </div>
              <button 
                onClick={() => setShowUploadModal(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <form onSubmit={handleGeneralUploadSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="name"
                    value={uploadFormData.name}
                    onChange={handleUploadFormChange}
                    placeholder="John Doe"
                    className="h-11 rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    value={uploadFormData.email}
                    onChange={handleUploadFormChange}
                    placeholder="john@example.com"
                    className="h-11 rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>

                {/* Phone Field with Country Code */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-3">
                    <div className="relative">
                      <select 
                        name="countryCode"
                        value={uploadFormData.countryCode}
                        onChange={handleUploadFormChange}
                        className="h-11 rounded-lg border border-gray-200 bg-white px-3 pr-8 appearance-none cursor-pointer focus:border-primary focus:ring-primary/20"
                      >
                        <option value="+91">+91 (IND)</option>
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+61">+61 (AUS)</option>
                        <option value="+971">+971 (UAE)</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                    <Input
                      name="phone"
                      type="tel"
                      value={uploadFormData.phone}
                      onChange={handleUploadFormChange}
                      placeholder="Enter Phone Number"
                      className="flex-1 h-11 rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>

                {/* Position Interested In */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Position Interested In (Optional)
                  </Label>
                  <select
                    name="position"
                    value={uploadFormData.position}
                    onChange={handleUploadFormChange}
                    className="w-full h-11 rounded-lg border border-gray-200 bg-white px-3 focus:border-primary focus:ring-primary/20"
                  >
                    <option value="">Select a position</option>
                    <option value="Manager Finance-CA">Manager Finance-CA</option>
                    <option value="Sr Executive Finance">Sr Executive Finance</option>
                    <option value="Assistant Manager">Assistant Manager</option>
                    <option value="Tax Consultant">Tax Consultant</option>
                    <option value="Audit Associate">Audit Associate</option>
                    <option value="GST Specialist">GST Specialist</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Additional Message */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Additional Message (Optional)
                  </Label>
                  <Textarea
                    name="message"
                    value={uploadFormData.message}
                    onChange={handleUploadFormChange}
                    placeholder="Tell us why you'd like to join our team..."
                    className="min-h-[100px] rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Upload Resume <span className="text-red-500">*</span>
                  </Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <input
                      ref={uploadFileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleUploadFileChange}
                      className="hidden"
                    />
                    <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-1">
                      {uploadFile ? uploadFile.name : "No file selected"}
                    </p>
                    <p className="text-xs text-gray-400 mb-3">
                      Supported formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      onClick={handleUploadFileButtonClick}
                      className="cursor-pointer"
                    >
                      Choose File
                    </Button>
                  </div>
                </div>

                {/* reCAPTCHA Placeholder */}
                <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded border border-gray-300 flex items-center justify-center">
                    <input type="checkbox" className="w-4 h-4" required />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">I'm not a robot</p>
                    <p className="text-xs text-gray-500">reCAPTCHA</p>
                  </div>
                  <img 
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                    alt="reCAPTCHA" 
                    className="ml-auto h-8"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 gap-2 h-12 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application →
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </>
      )}

      {/* Job Application Modal */}
      {isModalOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-50 animate-slide-up overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Apply For Job</h2>
                <p className="text-white/80 text-sm mt-1">{selectedJob?.title}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Submitted!</h3>
                  <p className="text-gray-600">Your application for {selectedJob?.title} has been sent successfully.</p>
                  <p className="text-gray-500 text-sm mt-2">Gmail will open for you to send your resume.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <Label className="text-gray-700 font-medium mb-2 block">
                      Enter Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="John Doe"
                      className="h-11 rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label className="text-gray-700 font-medium mb-2 block">
                      Enter Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="john@example.com"
                      className="h-11 rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>

                  {/* Phone Field with Country Code */}
                  <div>
                    <Label className="text-gray-700 font-medium mb-2 block">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex gap-3">
                      <div className="relative">
                        <select 
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleFormChange}
                          className="h-11 rounded-lg border border-gray-200 bg-white px-3 pr-8 appearance-none cursor-pointer focus:border-primary focus:ring-primary/20"
                        >
                          <option value="+91">+91 (IND)</option>
                          <option value="+1">+1 (USA)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+61">+61 (AUS)</option>
                          <option value="+971">+971 (UAE)</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                      </div>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="Enter Phone Number"
                        className="flex-1 h-11 rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <Label className="text-gray-700 font-medium mb-2 block">
                      Cover Letter (Optional)
                    </Label>
                    <Textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleFormChange}
                      placeholder="Tell us why you're interested in this position..."
                      className="min-h-[100px] rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20 resize-none"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <Label className="text-gray-700 font-medium mb-2 block">
                      Upload Resume <span className="text-red-500">*</span>
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-1">
                        {selectedFile ? selectedFile.name : "No file selected"}
                      </p>
                      <p className="text-xs text-gray-400 mb-3">
                        Supported formats: PDF, DOC, DOCX (Max 5MB)
                      </p>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        onClick={handleFileButtonClick}
                        className="cursor-pointer"
                      >
                        Choose File
                      </Button>
                    </div>
                  </div>

                  {/* reCAPTCHA Placeholder */}
                  <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded border border-gray-300 flex items-center justify-center">
                      <input type="checkbox" className="w-4 h-4" required />
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 font-medium">I'm not a robot</p>
                      <p className="text-xs text-gray-500">reCAPTCHA</p>
                    </div>
                    <img 
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                      alt="reCAPTCHA" 
                      className="ml-auto h-8"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 gap-2 h-12 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit →
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default CareerPage;