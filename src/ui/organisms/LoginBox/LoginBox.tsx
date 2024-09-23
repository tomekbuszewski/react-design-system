import type { HTMLAttributes } from "react";
import { Button, BoxWrapper } from "../../atoms";
import { InputWithLabel } from "../../molecules";

interface Props extends HTMLAttributes<HTMLFormElement> {
  onForgotPasswordClick: () => void;
}

export default function LoginBox({
  onForgotPasswordClick,
  className,
  ...props
}: Props) {
  return (
    <BoxWrapper className={className}>
      <form {...props}>
        <InputWithLabel label="Your email" placeholder="myname@email.com" />
        <InputWithLabel
          label="Your password"
          placeholder="••••••••"
          type="password"
        />
        <div className="flex justify-between">
          <Button
            variant="secondary"
            type="button"
            onClick={onForgotPasswordClick}
          >
            Forgot password?
          </Button>
          <Button variant="regular" type="submit">
            Sign in
          </Button>
        </div>
      </form>
    </BoxWrapper>
  );
}
