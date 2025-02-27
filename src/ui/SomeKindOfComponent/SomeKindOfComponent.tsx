import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function SomeKindOfComponent(props: Props) {
  return <div {...props} />;
}
