import React, { useState, useEffect } from "react";

function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className="App min-h-screen flex flex-col justify-between">
      <div className="content">
        {/* Your page content goes here */}
      </div>
      {showScroll && (
        <button
          className="scroll-top-btn fixed bottom-4 right-4 z-10 p-2 rounded-full bg-blue-500 text-white"
          onClick={scrollTop}
        >
          Scroll To Top
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
