import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import HomePage from "../pages/HomePage/HomePage";
import BlogsPage from "../pages/BlogsPage/BlogsPage";
import BlogDetailsPage from "../pages/BlogDetailsPage/BlogDetailsPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import TreatmentsPage from "../pages/TreatmentItem/TreatmentItem";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";

// --- Import your other pages here ---
// Assuming you have created these folders/files based on your request.
// If not, I'll reuse BlogsPage as a placeholder so the app doesn't crash.
// import AboutPage from "../pages/BlogsPage/BlogsPage"; // Placeholder: Replace with actual AboutPage
// import TreatmentsPage from "../pages/BlogsPage/BlogsPage"; // Placeholder: Replace with actual TreatmentsPage
// import GalleryPage from "../pages/BlogsPage/BlogsPage"; // Placeholder: Replace with actual GalleryPage
// import ContactPage from "../pages/BlogsPage/BlogsPage"; // Placeholder: Replace with actual ContactPage

// --- ScrollToTop Component ---
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Parent Route: The Layout */}
        <Route path="/" element={<DashboardLayout />}>
          {/* Child Route: The HomePage */}
          <Route index element={<HomePage />} />

          {/* Other Pages */}
          <Route path="about" element={<AboutPage />} />
          <Route path="treatments" element={<TreatmentsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactUsPage />} />

          {/* Blogs Routes */}
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/:id" element={<BlogDetailsPage />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
}
