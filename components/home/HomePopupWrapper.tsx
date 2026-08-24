"use client";

import { useEffect, useState } from "react";
import BlogContactPopup from "../blog/BlogContactPopup";


export default function HomePopupWrapper() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const alreadySubmitted = localStorage.getItem(
      "homePopupSubmitted"
    );

    if (alreadySubmitted) return;

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleSuccess = () => {
    localStorage.setItem(
      "homePopupSubmitted",
      "true"
    );

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