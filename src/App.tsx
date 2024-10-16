import { Newsletter } from "./features";
import { LoginBox } from "./ui/organisms";

import { useNavigate } from "react-router-dom";
import { Text, Button } from "./ui/atoms";
import { ROUTES } from "./routing.tsx";

function App() {
  const navigate = useNavigate();
  return (
    <div className="grid gap-large md:grid-cols-[3fr_1fr] max-w-[800px] m-auto p-large">
      <main>
        <LoginBox onForgotPasswordClick={() => navigate("/404")} />

        <Text className="my-large text-center text-xs text-grey-light">
          - or -
        </Text>

        <div className="flex justify-center">
          <Button variant="regular" onClick={() => navigate(ROUTES.SIGN_UP)}>
            Create an account
          </Button>
        </div>
      </main>
      <aside className="max-w-[300px]">
        <Newsletter.component />
      </aside>
    </div>
  );
}

export default App;
