import { useState } from "react";
import { Search, Plus, MoreVertical, Building2, MapPin } from "lucide-react";
import Modal from "../../components/common/Modal";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import toast from "react-hot-toast";

// Mock Data
const initialProperties = [
  { id: 1, name: "Sunset Apartments", address: "123 Sunset Blvd, Austin, TX 78701", units: 12 },
  { id: 2, name: "Maple House", address: "456 Maple St, Austin, TX 78702", units: 8 },
  { id: 3, name: "Oak Valley Villas", address: "789 Oak Valley Dr, Austin, TX 78703", units: 6 },
  { id: 4, name: "Pine Heights", address: "101 Pine St, Austin, TX 78704", units: 10 },
];

const Properties = () => {
  const [properties, setProperties] = useState(initialProperties);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: "", address: "", units: "" });

  const handleAddProperty = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.units) {
      toast.error("Please fill all fields");
      return;
    }
    
    const newProperty = {
      id: properties.length + 1,
      name: formData.name,
      address: formData.address,
      units: parseInt(formData.units, 10)
    };
    
    setProperties([...properties, newProperty]);
    setFormData({ name: "", address: "", units: "" });
    setIsAddModalOpen(false);
    toast.success("Property added successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Properties</h1>
        <Button onClick={() => setIsAddModalOpen(true)} className="w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" /> Add Property
        </Button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-2">
        <Search className="w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search properties..." 
          className="bg-transparent border-none focus:outline-none text-sm w-full text-slate-700 placeholder-slate-400"
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {properties.map((property) => (
          <div key={property.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{property.name}</h3>
                <div className="flex items-center gap-1 text-sm text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{property.address}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-900">{property.units}</p>
                <p className="text-xs text-slate-500">Units</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-50">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Property Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add Property">
        <form onSubmit={handleAddProperty} className="space-y-4">
          <Input 
            label="Property Name" 
            placeholder="e.g. Sunset Apartments" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <Input 
            label="Address" 
            placeholder="e.g. 123 Main St, City, ST 12345" 
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
          <Input 
            label="Number of Units" 
            type="number" 
            placeholder="e.g. 12" 
            value={formData.units}
            onChange={(e) => setFormData({...formData, units: e.target.value})}
          />
          <div className="pt-4 flex gap-3">
            <Button type="button" variant="outline" className="w-full" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="w-full">
              Save Property
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Properties;
