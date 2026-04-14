import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarOptions } from "./options";
import type { SidebarOption } from "./options";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type SidebarProps = {
  isOpen: boolean;
  isAnimating: boolean;
};

function SidebarComponent({ isOpen, isAnimating }: SidebarProps) {
  const location = useLocation();

  const hasActivePath = (option: SidebarOption) =>
    option.navigationPaths.some((nav) => location.pathname === nav.path);

  const isSinglePath = (option: SidebarOption) =>
    option.navigationPaths.length === 1;

  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    sidebarOptions.forEach((option) => {
      if (!isSinglePath(option)) {
        initial[option.label] = hasActivePath(option);
      }
    });
    return initial;
  });

  const toggleExpand = (label: string) => {
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isActive = (path: string) => location.pathname === path;

  const classes = [
    "app-layout-sidebar",
    isOpen ? "sidebar-open" : "",
    isAnimating ? "sidebar-animating" : "",
  ].join(" ");

  return (
    <ul className={classes}>
      {sidebarOptions.map((option) => (
        <li key={option.label}>
          {isSinglePath(option) ? (
            <Link
              to={option.navigationPaths[0].path}
              className={
                isActive(option.navigationPaths[0].path) ? "active" : ""
              }
            >
              <FontAwesomeIcon icon={option.icon} />
              {option.label}
            </Link>
          ) : (
            <>
              <button
                className={`sidebar-parent${hasActivePath(option) ? " active" : ""}`}
                onClick={() => toggleExpand(option.label)}
              >
                <span className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={option.icon} />
                  {option.label}
                </span>
                <FontAwesomeIcon
                  icon={expanded[option.label] ? faChevronUp : faChevronDown}
                  className="sidebar-chevron"
                />
              </button>
              {expanded[option.label] && (
                <ul className="sidebar-suboptions">
                  {option.navigationPaths.map((nav) => (
                    <li key={nav.path}>
                      <Link
                        to={nav.path}
                        className={isActive(nav.path) ? "active" : ""}
                      >
                        {nav.icon && <FontAwesomeIcon icon={nav.icon} />}
                        {nav.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export { SidebarComponent };
