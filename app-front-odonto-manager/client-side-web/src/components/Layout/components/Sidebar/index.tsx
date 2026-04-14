import { Link } from "react-router-dom";
import { sidebarOptions } from "./options";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SidebarProps = {
  isOpen: boolean;
  isAnimating: boolean;
};

function SidebarComponent({ isOpen, isAnimating }: SidebarProps) {
  const classes = [
    "app-layout-sidebar",
    isOpen ? "sidebar-open" : "",
    isAnimating ? "sidebar-animating" : "",
  ].join(" ");

  return (
    <ul className={classes}>
      {sidebarOptions.map((option) => (
        <li key={option.navigationPath}>
          <Link to={option.navigationPath}>
            <FontAwesomeIcon icon={option.icon} />
            {option.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { SidebarComponent };
