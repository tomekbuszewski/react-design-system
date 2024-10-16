import { BoxWrapper, Button, Text } from "../../ui/atoms";
import { InputWithLabel, BoxHeader, Notification } from "../../ui/molecules";

import { postNewsletterEmail } from "../../api";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

const useNewsletter = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const email = useRef<string>();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    email.current = event.target.value;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.current) {
      return;
    }

    setStatus("loading");

    postNewsletterEmail({ email: email.current })
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  }

  return { status, handleChange, handleSubmit };
};

const Newsletter = () => {
  const { status, handleChange, handleSubmit } = useNewsletter();

  return (
    <BoxWrapper>
      {status === "success" ? (
        <Notification>You successfully signed up! Thanks!</Notification>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={status === "loading" ? "opacity-50" : ""}
        >
          <BoxHeader className="mb-1">Newsletter</BoxHeader>
          <Text color="grey-light" className="mb-1">
            Sign in to our newsletter to receive updates on our products!
          </Text>
          <InputWithLabel
            label="Email"
            type="email"
            placeholder="johndoe@company.com"
            required
            disabled={status === "loading"}
            onChange={handleChange}
          />

          <div className="flex justify-end">
            <Button variant="regular" type="submit">
              Sign me up!
            </Button>
          </div>
        </form>
      )}
    </BoxWrapper>
  );
};

export default Newsletter;
