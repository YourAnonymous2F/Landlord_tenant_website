const StatCard = ({ title, value, trend, Icon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500 mb-2">{title}</p>
        <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
        {trend && (
          <p className="text-sm font-medium mt-2 flex items-center gap-1">
            <span className={trend.isPositive ? "text-emerald-600" : "text-red-600"}>
              {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
            </span>
            <span className="text-slate-400">from last month</span>
          </p>
        )}
      </div>
      {Icon && (
        <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
          <Icon className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default StatCard;
