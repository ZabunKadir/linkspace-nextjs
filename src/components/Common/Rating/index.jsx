import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { cn } from "@/utils/cn";

export default function Rating({
  max = 5,
  value = 0,
  onChange = null,
  size = 24,
  className = "",
  readOnly = false,
}) {
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (index) => {
    if (!readOnly && typeof onChange === "function") {
      onChange(index + 1);
    }
  };

  const handleMouseEnter = (index) => {
    if (!readOnly) {
      setHoverValue(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverValue(undefined);
    }
  };

  return (
    <div className={cn("flex gap-1", className)}>
      {Array.from({ length: max }).map((_, index) => {
        const isFilled =
          hoverValue !== undefined ? index < hoverValue : index < value;

        return (
          <FaStar
            key={index}
            size={size}
            className={cn(
              "transition-colors",
              isFilled ? "text-yellow-400" : "text-gray-400",
              !readOnly ? "cursor-pointer hover:scale-110" : "cursor-default"
            )}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
}
