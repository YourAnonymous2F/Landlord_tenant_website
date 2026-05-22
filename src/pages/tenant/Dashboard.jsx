import { Calendar, DollarSign, AlertCircle, Clock, Building2 } from "lucide-react";
import Badge from "../../components/common/Badge";
import Button from "../../components/common/Button";

// Mock Data
const stats = [
  { title: "Next Rent Due", value: "Jun 1, 2024", icon: Calendar },
  { title: "Amount Due", value: "$1,850", icon: DollarSign },
  { title: "Payment Status", value: "Unpaid", icon: AlertCircle, 
    customValue: <span className="text-red-500 font-bold">Unpaid</span> 
  },
  { title: "Lease End Date", value: "Dec 31, 2024", icon: Clock },
];

const recentPayments = [
  { id: 1, date: "May 1, 2024", amount: "$1,850", status: "Paid" },
  { id: 2, date: "Apr 1, 2024", amount: "$1,850", status: "Paid" },
  { id: 3, date: "Mar 1, 2024", amount: "$1,850", status: "Paid" },
  { id: 4, date: "Feb 1, 2024", amount: "$1,850", status: "Paid" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-2">{stat.title}</p>
              {stat.customValue ? (
                <h3 className="text-2xl font-bold">{stat.customValue}</h3>
              ) : (
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              )}
            </div>
            {stat.icon && (
              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                <stat.icon className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Payments */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Recent Payments</h2>
            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</a>
          </div>
          <div className="divide-y divide-slate-100">
            {recentPayments.map((payment) => (
              <div key={payment.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <p className="text-sm font-semibold text-slate-900">{payment.date}</p>
                <div className="flex items-center gap-6">
                  <span className="text-sm font-bold text-slate-900">{payment.amount}</span>
                  <Badge variant="success">{payment.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Property Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Property</h2>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Sunset Apartments, Unit 4B</h3>
                  <p className="text-sm text-slate-500 mt-1">123 Sunset Blvd, Austin, TX 78701</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
