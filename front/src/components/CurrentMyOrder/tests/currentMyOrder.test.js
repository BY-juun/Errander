import { render, screen, waitFor } from "@testing-library/react";
import CurrentMyOrder from "../CurrentMyOrder";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";

describe("<CurrentMyOrder />", () => {
  it("is Render Correctly?", async () => {
    render(
      <RecoilRoot>
        <Suspense fallback={<div>...Loading</div>}>
          <CurrentMyOrder />
        </Suspense>
      </RecoilRoot>
    );
    expect(await screen.findByText("제한시간", { exact: false })).toBeInTheDocument();
    expect(await screen.findByText("분류")).toBeInTheDocument();
    expect(await screen.findByText("상세품목")).toBeInTheDocument();
    expect(await screen.findByText("배달비")).toBeInTheDocument();
    expect(await screen.findByText("추가요청사항")).toBeInTheDocument();
    expect(await screen.findByText("제한시간")).toBeInTheDocument();
    expect(await screen.findByText("픽업장소")).toBeInTheDocument();
  });
});
