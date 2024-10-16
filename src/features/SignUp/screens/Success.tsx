import { BoxHeader, Notification } from "../../../ui/molecules";
import { Button } from "../../../ui/atoms";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  return (
    <>
      <BoxHeader>Sign up successful!</BoxHeader>

      <Notification className="my-small">
        Congratulations! Your registration is complete. You can now log in.
      </Notification>

      <div className="flex justify-end">
        <Button onClick={() => navigate("/")}>Proceed to login</Button>
      </div>
    </>
  );
}
