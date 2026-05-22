import { useState } from "react";
import { ChevronDown, AlertTriangle, Droplet, Wind, Wrench } from "lucide-react";
import Badge from "../../components/common/Badge";

// Mock Data
const requestsData = [
  { id: 1, issue: "Leaky faucet in kitchen", property: "Sunset Apartments, Unit 4B", date: "May 10, 2024", status: "New", icon: Droplet, color: "text-blue-500", bg: "bg-blue-50" },
  { id: 2, issue: "AC not cooling properly", property: "Maple House, Unit 1B", date: "May 12, 2024", status: "In Progress", icon: Wind, color: "text-cyan-500", bg: "bg-cyan-50" },
  { id: 3, issue: "Broken window in bedroom", property: "Oak Valley Villas, Unit 3C", date: "May 14, 2024", status: "Pending", icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-50" },
  { id: 4, issue: "Toilet not flushing", property: "Pine Heights, Unit 2A", date: "May 15, 2024", status: "Completed", icon: Wrench, color: "text-emerald-500", bg: "bg-emerald-50" },
  { id: 5, issue: "Bathroom light not working", property: "Sunset Apartments, Unit 3A", date: "May 16, 2024", status: "Completed", icon: Wrench, color: "text-emerald-500", bg: "bg-emerald-50" },
];

const Maintenance = () => {
  const [requests] = useState(requestsData);

  const getBadgeVariant = (status) => {
    switch (status) {
      case 'New': return 'danger';
      case 'In Progress': return 'info';
      case 'Pending': return 'warning';
      case 'Completed': return 'success';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Maintenance Requests</h1>
        <button className="flex items-center justify-between w-32 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
          All Status <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-100">
          {requests.map((req) => {
            const Icon = req.icon;
            return (
              <div key={req.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="flex items-start sm:items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${req.bg} ${req.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">{req.issue}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-slate-500">
                      <span>{req.property}</span>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <span>{req.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-end sm:ml-auto">
                  <Badge variant={getBadgeVariant(req.status)}>
                    {req.status}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
