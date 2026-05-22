import { Building2, Users, DollarSign, Clock } from "lucide-react";
import StatCard from "../../components/common/StatCard";
import Badge from "../../components/common/Badge";

// Mock Data
const stats = [
  { title: "Total Properties", value: "12", trend: { value: 2, isPositive: true }, icon: Building2 },
  { title: "Total Tenants", value: "18", trend: { value: 4, isPositive: true }, icon: Users },
  { title: "Monthly Rent", value: "$24,500", trend: { value: 1.5, isPositive: true }, icon: DollarSign },
  { title: "Pending Payments", value: "$4,250", trend: { value: 10, isPositive: false }, icon: Clock },
];

const recentPayments = [
  { id: 1, tenant: "Sarah Johnson", unit: "Unit 4B", amount: "$1,850", date: "May 1, 2024", status: "Paid" },
  { id: 2, tenant: "Michael Brown", unit: "Unit 2A", amount: "$1,850", date: "May 1, 2024", status: "Paid" },
  { id: 3, tenant: "Emily Davis", unit: "Unit 1B", amount: "$1,400", date: "May 3, 2024", status: "Pending" },
  { id: 4, tenant: "James Wilson", unit: "Unit 3C", amount: "$1,850", date: "May 5, 2024", status: "Paid" },
];

const maintenanceRequests = [
  { id: 1, issue: "Leaky faucet in kitchen", property: "Sunset Apartments, Unit 4B", date: "May 10, 2024", status: "New" },
  { id: 2, issue: "AC not cooling properly", property: "Maple House, Unit 1B", date: "May 12, 2024", status: "In Progress" },
  { id: 3, issue: "Broken window in bedroom", property: "Oak Valley Villas, Unit 3C", date: "May 14, 2024", status: "Pending" },
];

const upcomingLeases = [
  { id: 1, tenant: "Sarah Johnson", unit: "Sunset Apartments, Unit 4B", text: "Lease ends in 30 days", date: "Jun 28, 2024", avatar: "SJ" }
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
          + Add Property
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            Icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Payments */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Recent Payments</h2>
            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</a>
          </div>
          <div className="divide-y divide-slate-100">
            {recentPayments.map((payment) => (
              <div key={payment.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">
                    {payment.tenant.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{payment.tenant}</p>
                    <p className="text-xs text-slate-500">{payment.unit} • {payment.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-slate-900">{payment.amount}</span>
                  <Badge variant={payment.status === 'Paid' ? 'success' : 'warning'}>
                    {payment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance & Leases */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Maintenance Requests</h2>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</a>
            </div>
            <div className="divide-y divide-slate-100">
              {maintenanceRequests.map((req) => (
                <div key={req.id} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-semibold text-slate-900 line-clamp-1">{req.issue}</p>
                    <Badge 
                      variant={req.status === 'New' ? 'danger' : req.status === 'In Progress' ? 'info' : 'warning'}
                      className="ml-2"
                    >
                      {req.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500">{req.property}</p>
                  <p className="text-xs text-slate-400 mt-1">{req.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Upcoming Leases</h2>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</a>
            </div>
            <div className="p-6">
              {upcomingLeases.map((lease) => (
                <div key={lease.id} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">
                    {lease.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{lease.tenant}</p>
                    <p className="text-xs text-slate-500">{lease.text}</p>
                    <p className="text-xs font-medium text-amber-600 mt-1">{lease.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
