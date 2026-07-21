import { ClipboardList } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-14 text-center">
      <ClipboardList
        size={56}
        className="mx-auto text-slate-400"
      />

      <h3 className="mt-4 text-xl font-semibold text-slate-800">
        No Todos Yet
      </h3>

      <p className="mt-2 text-slate-500">
        Add your first todo to get started.
      </p>
    </div>
  );
};

export default EmptyState;