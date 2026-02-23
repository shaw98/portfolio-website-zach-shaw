import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-900/5 bg-warm-white">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400 font-body">
          &copy; {year} Zach Shaw. Built with curiosity and a lot of coffee.
        </p>
        <div className="flex items-center gap-1.5 text-sm text-slate-400 font-body">
          <span>Made with</span>
          <Heart size={14} className="text-coral fill-coral" />
          <span>in Colorado</span>
        </div>
      </div>
    </footer>
  );
}
