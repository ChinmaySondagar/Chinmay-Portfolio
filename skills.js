
/* ==========================================================
   skills.js — Skills Page Only
   Animate skill bars using their data-level values
   ========================================================== */

(function () {
  "use strict";

  const bars = document.querySelectorAll(".bar i[data-level]");

  // Set the progress bar width
  function fill(bar) {
    const level = Number(bar.getAttribute("data-level"));

    // Ignore invalid percentage values
    if (!Number.isFinite(level)) {
      return;
    }

    const percentage = Math.min(100, Math.max(0, level));

    bar.style.width = `${percentage}%`;
  }

  // Fallback for browsers without IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    bars.forEach(fill);
    return;
  }

  // Animate bars when they become visible
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          fill(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  bars.forEach(function (bar) {
    observer.observe(bar);
  });
})();
