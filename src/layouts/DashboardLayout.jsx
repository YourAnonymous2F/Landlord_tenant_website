import { useState } from "react";
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { 
  Home, 
  LayoutDashboard, 
  Building2, 
  Users, 
  FileText, 
  CreditCard, 
  Wrench, 
  MessageSquare, 
  Settings,
  Menu,
  X,
  Bell,
  Search,
  LogOut
} from "lucide-react";

const LANDLORD_LINKS = [
  { name: "Dashboard", path: "/landlord/dashboard", icon: LayoutDashboard },
  { name: "Properties", path: "/landlord/properties", icon: Building2 },
  { name: "Tenants", path: "/landlord/tenants", icon: Users },
  { name: "Leases", path: "/landlord/leases", icon: FileText },
  { name: "Payments", path: "/landlord/payments", icon: CreditCard },
  { name: "Maintenance", path: "/landlord/maintenance", icon: Wrench },
  { name: "Messages", path: "/landlord/messages", icon: MessageSquare },
  { name: "Settings", path: "/landlord/settings", icon: Settings },
];

const TENANT_LINKS = [
  { name: "Dashboard", path: "/tenant/dashboard", icon: LayoutDashboard },
  { name: "Payments", path: "/tenant/payments", icon: CreditCard },
  { name: "Maintenance", path: "/tenant/maintenance", icon: Wrench },
  { name: "Documents", path: "/tenant/documents", icon: FileText },
  { name: "Messages", path: "/tenant/messages", icon: MessageSquare },
  { name: "Settings", path: "/tenant/settings", icon: Settings },
];

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Determine links based on mock user role
  const links = user?.role === "tenant" ? TENANT_LINKS : LANDLORD_LINKS;

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 h-[100dvh] w-64 bg-white border-r border-slate-200 z-50
        transform transition-transform duration-200 ease-in-out flex flex-col
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <Link to="/" className="flex items-center gap-2 text-indigo-600">
            <Home className="w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">RentEase</span>
          </Link>
          <button 
            className="ml-auto lg:hidden text-slate-500 hover:text-slate-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="w-5 h-5" />
                {link.name}
              </NavLink>
            );
          })}
        </nav>
        
        {/* User Profile Summary */}
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold uppercase">
              {user?.name ? user.name.substring(0, 2) : "JD"}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-slate-900 truncate">{user?.name || "John Doe"}</p>
              <p className="text-xs text-slate-500 capitalize">{user?.role || "Landlord"}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-red-600 w-full px-2 py-1.5 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <button 
            className="lg:hidden text-slate-500 hover:text-slate-700"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg w-96 ml-4 lg:ml-0">
            <Search className="w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none focus:outline-none text-sm w-full text-slate-700 placeholder-slate-400"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button className="relative p-2 text-slate-500 hover:text-slate-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
