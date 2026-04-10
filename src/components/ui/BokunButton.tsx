"use client";

// Bokun booking widget button
// Script is loaded globally in layout.tsx via next/script
// Bokun JS finds this button by ID, enables it, and opens the booking overlay on click.

const BOKUN_BUTTON_ID = "bokun_ecbd4616_be79_47c1_838b_b02dff0715c5";
const BOKUN_DATA_SRC =
  "https://widgets.bokun.io/online-sales/be1dcd8e-b0e1-41cd-8e35-4401ac8ef091/experience/1071406?partialView=1";

interface BokunButtonProps {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BokunButton({
  label = "Book Now",
  className = "",
  size = "md",
}: BokunButtonProps) {
  const sizeClass =
    size === "sm"
      ? "px-6 py-2.5 text-sm"
      : size === "lg"
      ? "px-10 py-4 text-lg"
      : "px-8 py-3.5 text-base";

  return (
    <button
      className={`bokunButton btn-primary ${sizeClass} ${className}`}
      disabled
      id={BOKUN_BUTTON_ID}
      data-src={BOKUN_DATA_SRC}
      data-testid="widget-book-button"
    >
      {label}
    </button>
  );
}
