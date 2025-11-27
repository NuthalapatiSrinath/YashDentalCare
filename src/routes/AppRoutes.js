import { Routes, Route } from "react-router-dom"; // Remove 'Navigate' if you aren't using it yet
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import HomePage from "../pages/HomePage/HomePage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Parent Route: The Layout */}
      <Route path="/" element={<DashboardLayout />}>
        {/* Child Route: The HomePage */}
        {/* index replaces path="/" for the default child route */}
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
