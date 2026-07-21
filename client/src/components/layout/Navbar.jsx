import { CheckSquare } from "lucide-react";

const Navbar = () => {
  return (
    <header className="mb-10 flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
        <CheckSquare size={24} />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Todo Manager
        </h1>

        <p className="text-sm text-slate-500">
          Stay organized and get things done.
        </p>
      </div>
    </header>
  );
};

export default Navbar;