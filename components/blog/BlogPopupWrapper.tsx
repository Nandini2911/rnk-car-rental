"use client";

import { useEffect, useState } from "react";
import BlogContactPopup from "./BlogContactPopup";

export default function BlogPopupWrapper() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {

    // REMOVE THIS LATER (FOR TESTING ONLY)
    localStorage.removeItem("blogPopupSubmitted");

    const alreadySubmitted =
      localStorage.getItem("blogPopupSubmitted");

    if (!alreadySubmitted) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleSuccess = () => {
    localStorage.setItem("blogPopupSubmitted", "true");

    setShowPopup(false);
  };

  return (
    <BlogContactPopup
      isOpen={showPopup}
      onClose={handleClose}
      onSuccess={handleSuccess}
    />
  );
}