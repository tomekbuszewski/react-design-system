import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "regular" | "error" | "secondary";
}

export default function Button({
  className,
  variant = "regular",
  ...props
}: Props) {
  const classNames = [
    className,
    "rounded",
    "h-form-element",
    "lh-form-element",
    "px-large",
    "text-base",
  ];

  switch (variant) {
    case "error":
      classNames.push("bg-red-light", "text-red-dark", "font-bold");
      break;
    case "secondary":
      classNames.push("bg-transparent", "text-grey-minor", "px-0");
      break;
    case "regular":
    default:
      classNames.push("bg-blue-light", "text-blue-dark", "font-bold");
      break;
  }

  return <button className={classNames.join(" ")} {...props} />;
}
