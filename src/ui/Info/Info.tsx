import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "warning" | "error";
}

export default function Info({ variant = "info", className, ...props }: Props) {
  const cls: string[] = [className || ""];

  switch (variant) {
    case "warning": {
      cls.push("bg-yellow-100 text-yellow-800 border-yellow-500");
      break;
    }

    case "error": {
      cls.push("bg-red-100 text-red-800 border-red-500");
      break;
    }

    default:
    case "info": {
      cls.push("bg-blue-100 text-blue-800 border-blue-500");
      break;
    }
  }

  return (
    <div
      role="alert"
      className={`border px-4 py-2 rounded-lg ${cls.join(" ")}`}
      {...props}
    />
  );
}
