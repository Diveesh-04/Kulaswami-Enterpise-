import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Calendar,
  User,
  Clock,
  Tag,
  TrendingUp,
  FileText,
  Scale,
  Calculator,
  Briefcase,
  Building,
  DollarSign,
  BookOpen,
  ArrowRight,
  Filter,
  Eye,
  ThumbsUp,
  Share2,
  Sparkles,
  Mail,
  Send,
  Star,
  ChevronRight,
} from "lucide-react";

const KnowledgeCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Taxation",
    "GST",
    "Audit",
    "Company Law",
    "Income Tax",
    "Financial Planning",
  ];

  const articles = [
    {
      id: 1,
      title: "Latest Updates in Income Tax for FY 2025-26",
      excerpt: "Comprehensive guide on the new tax slabs, deductions, and filing requirements for the current financial year.",
      category: "Income Tax",
      author: "CA Rajesh Sharma",
      date: "March 15, 2026",
      readTime: "8 min read",
      views: 12450,
      likes: 342,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
      featured: true,
    },
    {
      id: 2,
      title: "GST Returns Filing: Due Dates and Penalties",
      excerpt: "Stay compliant with GST regulations. Learn about monthly and annual return filing deadlines and late fees.",
      category: "GST",
      author: "CA Priya Mehta",
      date: "March 10, 2026",
      readTime: "6 min read",
      views: 8920,
      likes: 234,
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 3,
      title: "Essential Audit Procedures for Small Businesses",
      excerpt: "A complete checklist for statutory audit, internal audit, and tax audit requirements.",
      category: "Audit",
      author: "CA Amit Kumar",
      date: "March 5, 2026",
      readTime: "10 min read",
      views: 5670,
      likes: 178,
      image: "https://images.unsplash.com/photo-1707902665498-a202981fb5ac?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 4,
      title: "ROC Filing Requirements for Private Limited Companies",
      excerpt: "Annual return, financial statements, and other compliance requirements under Companies Act.",
      category: "Company Law",
      author: "CA Sneha Patel",
      date: "February 28, 2026",
      readTime: "12 min read",
      views: 4350,
      likes: 129,
      image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 5,
      title: "TDS Deduction and Payment Guide 2026",
      excerpt: "Understanding TDS rates, thresholds, and due dates for different types of payments.",
      category: "Taxation",
      author: "CA Vikram Singh",
      date: "February 20, 2026",
      readTime: "7 min read",
      views: 7230,
      likes: 256,
      image: "https://images.unsplash.com/photo-1634128222187-18eababc763d?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 6,
      title: "MSME Registration Benefits and Process",
      excerpt: "How Udyam registration can help your business get subsidies, priority lending, and other benefits.",
      category: "Financial Planning",
      author: "CA Neha Gupta",
      date: "February 15, 2026",
      readTime: "5 min read",
      views: 9870,
      likes: 312,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 7,
      title: "Professional Tax Registration Across States",
      excerpt: "State-wise professional tax slab rates, registration process, and filing requirements.",
      category: "Taxation",
      author: "CA Rahul Verma",
      date: "February 10, 2026",
      readTime: "9 min read",
      views: 5430,
      likes: 167,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 8,
      title: "Understanding Section 44AD Presumptive Taxation",
      excerpt: "Benefits, eligibility, and compliance for small businesses under presumptive taxation scheme.",
      category: "Income Tax",
      author: "CA Divya Kulkarni",
      date: "February 5, 2026",
      readTime: "6 min read",
      views: 6540,
      likes: 198,
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const topics = [
    { icon: Scale, title: "Taxation", count: 24, color: "from-blue-500 to-cyan-500" },
    { icon: Calculator, title: "GST", count: 18, color: "from-green-500 to-emerald-500" },
    { icon: FileText, title: "Audit", count: 15, color: "from-purple-500 to-pink-500" },
    { icon: Building, title: "Company Law", count: 12, color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Background */}
      <section className="relative overflow-hidden py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-primary/90" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-white border-white/30">
              <BookOpen className="h-4 w-4" />
              Knowledge Center
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-7xl">
              Expert Insights &
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Financial Knowledge
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-200">
              Stay updated with latest tax laws, compliance requirements, and financial strategies
              from our team of experienced professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section - Enhanced */}
      <section className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur-md py-4 shadow-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles by title or topic..."
                className="pl-10 border-gray-200 focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full transition-all duration-300 ${
                    selectedCategory === category 
                      ? "bg-primary hover:bg-primary/90" 
                      : "hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Explore by <span className="text-primary">Topic</span>
            </h2>
            <p className="mt-2 text-gray-600">Browse articles by category</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map(({ icon: Icon, title, count, color }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedCategory(title)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${color} p-3 shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500">{count} Articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article - Enhanced */}
      {featuredArticles.length > 0 && searchTerm === "" && selectedCategory === "All" && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
              </div>
              <Badge variant="outline" className="gap-1 border-yellow-500 text-yellow-700">
                <TrendingUp className="h-3 w-3" />
                Editor's Pick
              </Badge>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredArticles[0].image}
                    alt={featuredArticles[0].title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-white border-0">
                    {featuredArticles[0].category}
                  </Badge>
                </div>
                <div className="p-8">
                  <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredArticles[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredArticles[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredArticles[0].readTime}
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-primary">
                    {featuredArticles[0].title}
                  </h3>
                  <p className="mb-6 text-gray-600 leading-relaxed">
                    {featuredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {featuredArticles[0].views.toLocaleString()} views
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        {featuredArticles[0].likes} likes
                      </span>
                    </div>
                    <Button className="group bg-primary hover:bg-primary/90 gap-2">
                      Read Article
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid - Enhanced */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchTerm || selectedCategory !== "All" ? "Search Results" : "Latest Articles"}
            </h2>
            <p className="text-sm text-gray-500">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <BookOpen className="mb-4 h-16 w-16 text-gray-300" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">No articles found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute bottom-4 left-4 bg-white/90 text-gray-900 border-0">
                      {article.category}
                    </Badge>
                    <Badge className="absolute top-4 right-4 bg-black/50 text-white border-0 gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author.split(" ")[1]}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mb-4 text-gray-600 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mb-4 flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {article.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          {article.likes}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                        Read more
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription - Enhanced */}
      <section className="relative overflow-hidden py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Mail className="h-12 w-12 text-white mx-auto mb-6 opacity-80" />
          <h2 className="mb-3 text-3xl font-bold text-white">
            Stay Updated with Our Newsletter
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Get the latest articles, tax updates, and compliance alerts directly in your inbox.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="max-w-md sm:w-96 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
            />
            <Button className="bg-white text-primary hover:bg-gray-100 gap-2">
              Subscribe Now
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/80">
            ✨ No spam, unsubscribe anytime. Join 5,000+ subscribers
          </p>
        </div>
      </section>

      {/* Footer Stats */}
      <section className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-600">Expert Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-gray-600">Expert Contributors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-gray-600">Reader Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeCenter;