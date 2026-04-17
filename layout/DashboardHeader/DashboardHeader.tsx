import CommonInput from "@/ui/CommonInput/CommonInput";

interface DashboardHeaderProps {
  title: string;
}

function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-md border-b border-border px-8 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* 1. Page Title */}
        <div className="flex-shrink-0">
          <h2 className="font-heading text-2xl font-bold text-foreground capitalize">
            {title}
          </h2>
        </div>

        {/* 2. Search Bar - Using your CommonInput but smaller */}
        <div className="hidden md:block w-full max-w-md">
          <div className="relative group">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors">
              🔍
            </span>

            <CommonInput label=""
              type="text"
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-xl font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* 3. Action Icons */}
        <div className="flex items-center gap-3">
          {/* Notification Button */}
          <button className="p-2.5 rounded-xl bg-surface border border-border text-secondary hover:text-primary hover:border-primary transition-all relative">
            🔔
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-surface"></span>
          </button>

          {/* Settings / Profile Quick Link */}
          <button className="p-2.5 rounded-xl bg-surface border border-border text-secondary hover:text-primary hover:border-primary transition-all">
            ⚙️
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
