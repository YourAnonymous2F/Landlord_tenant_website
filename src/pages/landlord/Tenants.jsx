import { useState } from "react";
import { Search, Plus, MoreVertical, Mail } from "lucide-react";
import Modal from "../../components/common/Modal";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import toast from "react-hot-toast";

// Mock Data
const initialTenants = [
  { id: 1, name: "Sarah Johnson", email: "sarah.johnson@email.com", unit: "Unit 4B", leaseEnd: "Dec 31, 2024" },
  { id: 2, name: "Michael Brown", email: "michael.brown@email.com", unit: "Unit 2A", leaseEnd: "Nov 30, 2024" },
  { id: 3, name: "Emily Davis", email: "emily.davis@email.com", unit: "Unit 1B", leaseEnd: "Oct 31, 2024" },
  { id: 4, name: "James Wilson", email: "james.wilson@email.com", unit: "Unit 3C", leaseEnd: "Dec 31, 2024" },
];

const Tenants = () => {
  const [tenants, setTenants] = useState(initialTenants);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", property: "", unit: "", leaseStart: "", leaseEnd: "" });

  const handleAddTenant = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.unit) {
      toast.error("Please fill all required fields");
      return;
    }
    
    const newTenant = {
      id: tenants.length + 1,
      name: formData.name,
      email: formData.email,
      unit: formData.unit,
      leaseEnd: formData.leaseEnd || "N/A"
    };
    
    setTenants([...tenants, newTenant]);
    setFormData({ name: "", email: "", phone: "", property: "", unit: "", leaseStart: "", leaseEnd: "" });
    setIsAddModalOpen(false);
    toast.success("Tenant added successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Tenants</h1>
        <Button onClick={() => setIsAddModalOpen(true)} className="w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" /> Add Tenant
        </Button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-2">
        <Search className="w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search tenants..." 
          className="bg-transparent border-none focus:outline-none text-sm w-full text-slate-700 placeholder-slate-400"
        />
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-100">
          {tenants.map((tenant) => (
            <div key={tenant.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold shrink-0">
                  {tenant.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{tenant.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-slate-500 mt-0.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{tenant.email}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 sm:ml-auto pl-16 sm:pl-0">
                <div className="w-24">
                  <p className="text-sm font-semibold text-slate-900">{tenant.unit}</p>
                </div>
                <div className="w-32 hidden md:block">
                  <p className="text-sm text-slate-900">{tenant.leaseEnd}</p>
                </div>
                <button className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Tenant Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add Tenant">
        <form onSubmit={handleAddTenant} className="space-y-4">
          <Input 
            label="Full Name" 
            placeholder="Enter full name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input 
              label="Email Address" 
              type="email"
              placeholder="Enter email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <Input 
              label="Phone Number" 
              placeholder="Enter phone number" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Select Property</label>
              <select 
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all bg-white"
                value={formData.property}
                onChange={(e) => setFormData({...formData, property: e.target.value})}
              >
                <option value="">Select property</option>
                <option value="1">Sunset Apartments</option>
                <option value="2">Maple House</option>
              </select>
            </div>
            <Input 
              label="Unit Number" 
              placeholder="Enter unit number" 
              value={formData.unit}
              onChange={(e) => setFormData({...formData, unit: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input 
              label="Lease Start Date" 
              type="date"
              value={formData.leaseStart}
              onChange={(e) => setFormData({...formData, leaseStart: e.target.value})}
            />
            <Input 
              label="Lease End Date" 
              type="date"
              value={formData.leaseEnd}
              onChange={(e) => setFormData({...formData, leaseEnd: e.target.value})}
            />
          </div>

          <div className="pt-4 flex gap-3">
            <Button type="button" variant="outline" className="w-full" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="w-full">
              Save Tenant
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Tenants;
