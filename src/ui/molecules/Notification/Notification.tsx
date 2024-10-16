import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error";
}

export default function Notification({ variant, className, ...props }: Props) {
  const classNames = [className, "rounded", "p-medium", "text-xs"];

  switch (variant) {
    case "error": {
      classNames.push("bg-grey-light", "text-grey-dark");
      break;
    }

    case "success":
    default: {
      classNames.push("bg-green-light", "text-green-dark");
      break;
    }
  }

  return <div {...props} className={classNames.join(" ")} />;
}
