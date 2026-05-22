import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Public Pages
import LandingPage from "../pages/public/LandingPage";

// Auth Pages
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

// Landlord Pages
import LandlordDashboard from "../pages/landlord/Dashboard";
import Properties from "../pages/landlord/Properties";
import Tenants from "../pages/landlord/Tenants";
import Payments from "../pages/landlord/Payments";
import Maintenance from "../pages/landlord/Maintenance";

// Tenant Pages
import TenantDashboard from "../pages/tenant/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>

      {/* Dashboard Routes (Protected later) */}
      <Route element={<DashboardLayout />}>
        {/* Landlord Routes */}
        <Route path="/landlord/dashboard" element={<LandlordDashboard />} />
        <Route path="/landlord/properties" element={<Properties />} />
        <Route path="/landlord/tenants" element={<Tenants />} />
        <Route path="/landlord/payments" element={<Payments />} />
        <Route path="/landlord/maintenance" element={<Maintenance />} />
        <Route path="/landlord/leases" element={<div className="p-4">Leases Page</div>} />
        <Route path="/landlord/messages" element={<div className="p-4">Messages Page</div>} />
        <Route path="/landlord/settings" element={<div className="p-4">Settings Page</div>} />

        {/* Tenant Routes */}
        <Route path="/tenant/dashboard" element={<TenantDashboard />} />
        <Route path="/tenant/payments" element={<div className="p-4">Payments Page</div>} />
        <Route path="/tenant/maintenance" element={<div className="p-4">Maintenance Page</div>} />
        <Route path="/tenant/documents" element={<div className="p-4">Documents Page</div>} />
        <Route path="/tenant/messages" element={<div className="p-4">Messages Page</div>} />
        <Route path="/tenant/settings" element={<div className="p-4">Settings Page</div>} />
      </Route>
      
      {/* Fallback */}
      <Route path="*" element={<div className="p-10 text-center text-red-500 font-bold">404 - Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
