import { Link } from "react-router-dom";
import { Building2, Users, CreditCard, Wrench, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Property Management",
    description: "List and manage all your properties with ease.",
    icon: Building2,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Tenant Management",
    description: "Screen tenants, track leases, and keep organized.",
    icon: Users,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    title: "Online Payments",
    description: "Collect rent online securely and on-time.",
    icon: CreditCard,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Maintenance Requests",
    description: "Tenants can submit requests and track status.",
    icon: Wrench,
    color: "text-amber-600",
    bg: "bg-amber-50"
  }
];

const LandingPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4 transform">
          <div className="w-[600px] h-[600px] bg-indigo-50/80 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Manage Properties. <br className="hidden lg:block" />
              Tenants. Payments. <br className="hidden lg:block" />
              <span className="text-indigo-600">All in One Place.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              RentEase helps landlords and tenants connect and manage everything seamlessly. Say goodbye to spreadsheets and scattered communications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                to="/register" 
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-base font-semibold transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
              >
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Link>
              <button 
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-base font-semibold transition-all shadow-sm"
              >
                Book a Demo
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                ))}
              </div>
              <span className="ml-2">Trusted by 5,000+ landlords and tenants</span>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-2xl lg:max-w-none relative">
            {/* Hero Illustration Placeholder */}
            <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-tr from-slate-100 to-white border border-slate-200 shadow-2xl overflow-hidden flex items-center justify-center">
              <Building2 className="w-48 h-48 text-indigo-200" />
              
              {/* Decorative elements to simulate UI pieces */}
              <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-lg border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
                <p className="text-xs font-bold text-slate-900 mb-1">New Payment</p>
                <p className="text-sm font-bold text-emerald-600">+$1,850.00</p>
              </div>
              
              <div className="absolute bottom-12 left-8 bg-white p-4 rounded-xl shadow-lg border border-slate-100 animate-bounce" style={{ animationDuration: '4s' }}>
                <p className="text-xs font-bold text-slate-900 mb-1">Maintenance</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <p className="text-xs text-slate-600">Pending Request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Everything you need to manage rentals efficiently
            </h2>
            <p className="text-lg text-slate-500">
              Powerful tools designed to simplify property management for landlords and create a better experience for tenants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
