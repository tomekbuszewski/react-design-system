import { Text, Button } from "../../../ui/atoms";
import { BoxHeader, InputWithLabel } from "../../../ui/molecules";

import { postNewUserCreation } from "../../../api";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIGN_UP_ROUTES } from "../routing.ts";

const useRegister = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const data = useRef<{ email?: string; username?: string; password?: string }>(
    {},
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    data.current = {
      ...data.current,
      [e.target.name]: e.target.value,
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    postNewUserCreation(data.current).then((response) => {
      if (response.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    });
  }

  useEffect(() => {
    if (status === "success") {
      navigate(SIGN_UP_ROUTES.SIGN_UP_SUCCESS);
    }
  }, [status]);

  return { status, handleChange, handleSubmit };
};

export default function Register() {
  const { status, handleChange, handleSubmit } = useRegister();

  return (
    <form
      onSubmit={handleSubmit}
      className={status === "loading" ? "opacity-50" : ""}
    >
      <BoxHeader className="mb-small">Sign up</BoxHeader>

      <InputWithLabel
        label="Username"
        type="text"
        placeholder="johndoe"
        name="username"
        id="username"
        onChange={handleChange}
      />
      <InputWithLabel
        label="Password"
        type="password"
        placeholder="•••••••"
        name="password"
        id="password"
        onChange={handleChange}
      />
      <InputWithLabel
        label="Repeat password"
        type="password"
        placeholder="•••••••"
        name="repeat-password"
        id="repeat-password"
      />
      <InputWithLabel
        label="Email"
        type="email"
        placeholder="johndoe@company.domain"
        name="email"
        id="email"
        onChange={handleChange}
      />

      <Text color="grey-minor" className="text-xs my-small">
        By registering I accept the fact that my data will be sold to whoever
        pays the most and my account might, and most likely will, get
        compromised quickly.
      </Text>

      <div className="flex justify-end">
        <Button variant="regular" type="submit" disabled={status === "loading"}>
          Sign up
        </Button>
      </div>
    </form>
  );
}
