import type { HTMLProps } from "react";

type Props = HTMLProps<HTMLInputElement>;

export default function Input({ className, ...props }: Props) {
  const classNames = [
    className,
    "px-large",
    "border",
    "border-1",
    "border-grey-light",
    "rounded",
    "lh-form-element",
    "h-form-element",
    "text-base",
  ];

  return <input className={classNames.join(" ")} {...props} />;
}
