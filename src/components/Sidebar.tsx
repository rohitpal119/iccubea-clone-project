import ImportantDates from "./ImportantDates";

const Sidebar = () => {
  return (
    <aside className="space-y-6">
      <div className="bg-muted/50 p-4 rounded-lg">
        <h3 className="font-bold text-secondary mb-2">SPOTLIGHT:</h3>
        <div className="space-y-2">
          <a href="#" className="block font-bold text-primary hover:text-primary-dark transition-colors">
            ICCUBEA 2025
          </a>
          <p className="text-sm text-muted-foreground">
            9th International Conference on Control Communication, Computing & Automation (ICCUBEA-2025)
          </p>
        </div>
      </div>
      
      <ImportantDates />
    </aside>
  );
};

export default Sidebar;