import type { HTMLProps } from "react";
import { Text, Input } from "../../atoms";

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
}

export default function InputWithLabel({ label, ...props }: Props) {
  if (!props.id) {
    console.error("InputWithLabel component requires an id prop");
  }

  return (
    <div className="mb-medium grid gap-small">
      <Text as="label" htmlFor={props.id} className="cursor-pointer">
        {label}
      </Text>
      <Input {...props} />
    </div>
  );
}
