import { forwardRef } from "react";
import { cn } from "./Badge";

const Input = forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          "w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent transition-all",
          error 
            ? "border-red-300 focus:ring-red-500 text-red-900 placeholder-red-300"
            : "border-slate-200 focus:ring-indigo-600 text-slate-900 placeholder-slate-400",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
