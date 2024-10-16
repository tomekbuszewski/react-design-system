import NewsletterFeature from "./Newsletter/Newsletter";
import { ComponentType } from "react";
import { RouteObject } from "react-router-dom";
import signUpRouting, { Wrapper as SignUpComponent } from "./SignUp/SignUp.tsx";

interface FeatureWithComponent<Type = unknown> {
  component: ComponentType<Type>;
}

interface FeatureWithComponentAndRoutes<Type = unknown>
  extends FeatureWithComponent<Type> {
  routes: RouteObject[];
}

export const Newsletter: FeatureWithComponent = {
  component: NewsletterFeature,
};

export const SignUp: FeatureWithComponentAndRoutes = {
  component: SignUpComponent,
  routes: signUpRouting,
};
