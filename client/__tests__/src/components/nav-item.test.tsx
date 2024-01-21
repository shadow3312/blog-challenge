import { render, fireEvent } from "@testing-library/react";
import NavItem from "@/components/nav-item";

describe("NavItem Component", () => {
  it("renders the NavItem component with a text link", () => {
    const { getByText } = render(
      <NavItem text="Home" link="/home" onClick={() => {}}>
        <p>children</p>
      </NavItem>
    );

    // Check if the link text is rendered
    const linkText = getByText("Home");
    expect(linkText).toBeInTheDocument();
  });

  it("triggers onClick when NavItem is clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <NavItem text="Home" link="/home" onClick={handleClick}>
        <p>children</p>
      </NavItem>
    );

    // Trigger a click on the NavItem
    fireEvent.click(getByRole("button"));

    // Check if onClick was called
    expect(handleClick).toHaveBeenCalled();
  });
});
