import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

/* ============================
   App Routes
============================ */
function AppRoutes() {
  return (
    <Switch>
      {/* Home page */}
      <Route path="/" component={Home} />
       
      <Route path="/home" component={Home} />

      {/* Explicit 404 route (used by GH Pages redirect) */}
      <Route path="/404" component={NotFound} />

      {/* Catch-all fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRoutes />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
