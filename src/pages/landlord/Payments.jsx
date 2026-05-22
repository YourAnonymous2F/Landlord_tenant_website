import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import Badge from "../../components/common/Badge";

// Mock Data
const paymentsData = [
  { id: 1, tenant: "Sarah Johnson", property: "Sunset Apts / 4B", dueDate: "May 1, 2024", amount: "$1,850", status: "Paid" },
  { id: 2, tenant: "Michael Brown", property: "Maple House / 2A", dueDate: "May 1, 2024", amount: "$1,850", status: "Paid" },
  { id: 3, tenant: "Emily Davis", property: "Maple House / 1B", dueDate: "May 1, 2024", amount: "$1,400", status: "Pending" },
  { id: 4, tenant: "James Wilson", property: "Oak Valley / 3C", dueDate: "May 1, 2024", amount: "$1,850", status: "Paid" },
  { id: 5, tenant: "David Lee", property: "Pine Heights / 1A", dueDate: "May 1, 2024", amount: "$1,600", status: "Paid" },
];

const Payments = () => {
  const [payments] = useState(paymentsData);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Payments</h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-between w-full sm:w-40 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
            All Properties <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          <button className="flex items-center justify-between w-full sm:w-32 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
            All Status <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-2">
        <Search className="w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search payments..." 
          className="bg-transparent border-none focus:outline-none text-sm w-full text-slate-700 placeholder-slate-400"
        />
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tenant</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Property / Unit</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-bold text-slate-900">{payment.tenant}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-slate-600">{payment.property}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-slate-600">{payment.dueDate}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-bold text-slate-900">{payment.amount}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <Badge variant={payment.status === 'Paid' ? 'success' : 'warning'}>
                    {payment.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Simple Paginator UI */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-medium">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 text-sm font-medium transition-colors">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 text-sm font-medium transition-colors">3</button>
          <span className="text-slate-400 mx-1">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 text-sm font-medium transition-colors">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
