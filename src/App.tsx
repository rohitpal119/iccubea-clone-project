import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
// import About from "./pages/About";
// import ICCUBEA from "./pages/ICCUBEA";
// import Registration from "./pages/Registration";
// import Committee from "./pages/Committee";
// import CallForPapers from "./pages/CallForPapers";
// import Submission from "./pages/Submission";
// import Contact from "./pages/Contact";
 import NotFound from "./pages/NotFound";
import RegistrationTable from "./pages/RegistrationTable";
import About from "./pages/About";
import Iccubea from "./pages/Iccubea";
import Committee from "./pages/Committee";
import CallForPapers from "./pages/CallForPapers";
import Submission from "./pages/Submission";
import { Contact } from "lucide-react";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About/>} />
          <Route path="/iccubea" element={<Iccubea />} />
          <Route path="/registration" element={<RegistrationTable />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Catch-all for unknown routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
