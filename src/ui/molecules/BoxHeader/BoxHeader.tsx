import { Text } from "../../atoms";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function BoxHeader({ className, ...props }: Props) {
  const classNames = [
    className,
    "text-lg",
    "text-blue-dark",
    "font-bold",
    "pb-1",
    "border-b",
  ].join(" ");

  return <Text {...props} as="h3" className={classNames} />;
}
