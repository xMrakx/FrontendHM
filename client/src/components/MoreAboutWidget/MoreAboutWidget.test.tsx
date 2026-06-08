import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MoreAboutWidget from "./MoreAboutWidget";
import { moreAboutWidgetMock } from "./MoreAboutWidgetMock";

describe("MoreAboutWidget", () => {
  it("корректное отображение данных", () => {
    render(<MoreAboutWidget {...moreAboutWidgetMock} />);

    expect(screen.getByText("PLN/JPY: about")).toBeInTheDocument();

    expect(screen.getByText("Polish Zloty - PLN - zł")).toBeInTheDocument();

    expect(screen.getByText("Japanese Yen - JPY - ¥")).toBeInTheDocument();

    expect(screen.getByText(moreAboutWidgetMock.fromDescription))
      .toBeInTheDocument;

    expect(screen.getByText(moreAboutWidgetMock.toDescription))
      .toBeInTheDocument;
  });
});
