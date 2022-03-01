import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";

const customRender = (ui) => {
  render(<Suspense fallback={<div>...Loading</div>}>ui</Suspense>, { wrapper: RecoilRoot });
};
export * from "@testing-library/react";

export { customRender as render };
