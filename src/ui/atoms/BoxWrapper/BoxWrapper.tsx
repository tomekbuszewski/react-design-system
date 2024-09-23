import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export default function BoxWrapper({ className, ...props }: Props) {
  const classNames = [className, "p-large", "bg-bg", "rounded", "shadow-card"];

  return <div className={classNames.join(" ")} {...props} />;
}
