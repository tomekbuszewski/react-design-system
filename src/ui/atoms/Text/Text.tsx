import type {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  JSX,
} from "react";

interface Props<T extends ElementType>
  extends HTMLAttributes<JSX.IntrinsicElements> {
  as?: T; //
  bold?: boolean;
  italic?: boolean;
  color?: string;
}

type ReturnProps<P extends ElementType> = Props<P> &
  Omit<ComponentPropsWithoutRef<P>, keyof Props<P>>;

export default function Text<T extends ElementType = "p">({
  bold,
  italic,
  className,
  as,
  ...rest
}: ReturnProps<T>) {
  const classNames = [className, "text-base"];
  let Tag: ElementType = "p";

  if (as) {
    Tag = as;
  }

  if (bold) {
    classNames.push("font-bold");
  }

  if (italic) {
    classNames.push("italic");
  }

  if (rest.color) {
    classNames.push(`text-${rest.color}`);
  }

  return <Tag className={classNames.join(" ")} {...rest} />;
}
