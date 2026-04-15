import { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

type SortType = "text" | "timestamp";
type SortDirection = "asc" | "desc";

type Column<T> = {
  key: keyof T;
  label: string;
  sortType?: SortType;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type TableAction<T> = {
  label: string;
  icon?: React.ReactNode;
  onClick: (selectedRows: T[]) => void;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  actions?: TableAction<T>[];
  rowKey: keyof T;
  multiSelect?: boolean;
  pageSize?: number;
};

function getPaginationPages(
  current: number,
  total: number,
): (number | "...")[] {
  if (total <= 1) return [];
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "...")[] = [1];
  if (current > 3) pages.push("...");
  for (
    let i = Math.max(2, current - 1);
    i <= Math.min(total - 1, current + 1);
    i++
  )
    pages.push(i);
  if (current < total - 2) pages.push("...");
  pages.push(total);

  return pages;
}

const plural = (n: number, one: string, many: string) => (n === 1 ? one : many);

const toggleInSet = (set: Set<string>, key: string) => {
  const next = new Set(set);
  next.has(key) ? next.delete(key) : next.add(key);
  return next;
};

function DataTable<T>({
  data,
  columns,
  actions = [],
  rowKey,
  multiSelect = true,
  pageSize = 10,
}: DataTableProps<T>) {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState<keyof T>(columns[0]?.key);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const sortColumn = columns.find((c) => c.key === sortKey);

  const sortedData = useMemo(() => {
    if (!sortColumn?.sortType) return data;
    const isDate = sortColumn.sortType === "timestamp";

    return [...data].sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      const cmp = isDate
        ? new Date(String(va)).getTime() - new Date(String(vb)).getTime()
        : String(va).localeCompare(String(vb), "pt-BR");
      return sortDirection === "asc" ? cmp : -cmp;
    });
  }, [data, sortKey, sortDirection, sortColumn]);

  const handleSort = (col: Column<T>) => {
    if (!col.sortType) return;
    if (sortKey === col.key) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(col.key);
      setSortDirection("asc");
    }
    setCurrentPage(1);
  };

  const perPage = pageSize;
  const totalPages = Math.max(1, Math.ceil(sortedData.length / perPage));
  const page = Math.min(currentPage, totalPages);

  const paginatedData = useMemo(
    () => sortedData.slice((page - 1) * perPage, page * perPage),
    [sortedData, page, perPage],
  );

  const pageKeys = useMemo(
    () => paginatedData.map((row) => String(row[rowKey])),
    [paginatedData, rowKey],
  );

  const allPageSelected =
    pageKeys.length > 0 && pageKeys.every((k) => selectedKeys.has(k));
  const hasActions = actions.length > 0;
  const hasSelection = selectedKeys.size > 0;

  const handleToggleAll = () =>
    setSelectedKeys((prev) => {
      const next = new Set(prev);
      pageKeys.forEach((k) => (allPageSelected ? next.delete(k) : next.add(k)));
      return next;
    });

  const handleToggleRow = (key: string) =>
    setSelectedKeys((prev) =>
      multiSelect
        ? toggleInSet(prev, key)
        : prev.has(key)
          ? new Set()
          : new Set([key]),
    );

  const selectedRows = useMemo(
    () => data.filter((row) => selectedKeys.has(String(row[rowKey]))),
    [data, selectedKeys, rowKey],
  );

  const goToPage = (p: number) =>
    setCurrentPage(Math.max(1, Math.min(totalPages, p)));
  const pages = getPaginationPages(page, totalPages);
  const rangeStart = (page - 1) * perPage + 1;
  const rangeEnd = Math.min(page * perPage, sortedData.length);

  const renderCell = (col: Column<T>, row: T) =>
    col.render ? col.render(row[col.key], row) : String(row[col.key] ?? "");

  const sortIndicator = (col: Column<T>) =>
    !col.sortType ? null : sortKey === col.key ? (
      <FontAwesomeIcon
        icon={sortDirection === "asc" ? faCaretUp : faCaretDown}
        className="data-table-sort-icon"
      />
    ) : (
      <FontAwesomeIcon
        icon={faSort}
        className="data-table-sort-icon data-table-sort-icon-inactive"
      />
    );

  const footerInfo = `${rangeStart}–${rangeEnd} de ${sortedData.length} ${plural(sortedData.length, "item", "itens")} · ${perPage} por página`;

  return (
    <div className="data-table-wrapper">
      {hasActions && (
        <div
          className={`data-table-actions${hasSelection ? "" : " data-table-actions-hidden"}`}
        >
          <span className="data-table-actions-count">
            {selectedKeys.size}{" "}
            {plural(
              selectedKeys.size,
              "item selecionado",
              "itens selecionados",
            )}
          </span>
          <div className="data-table-actions-buttons">
            {actions.map((action) => (
              <button
                key={action.label}
                type="button"
                className="data-table-action-btn"
                onClick={() => action.onClick(selectedRows)}
              >
                {action.icon && (
                  <span className="data-table-action-icon">{action.icon}</span>
                )}
                {action.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="data-table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              {hasActions && (
                <th className="data-table-checkbox-col">
                  {multiSelect && (
                    <input
                      type="checkbox"
                      checked={allPageSelected}
                      onChange={handleToggleAll}
                    />
                  )}
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={col.sortType ? "data-table-sortable" : ""}
                  onClick={() => handleSort(col)}
                >
                  {col.label}
                  {sortIndicator(col)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (hasActions ? 1 : 0)}
                  className="data-table-empty"
                >
                  Nenhum registro encontrado
                </td>
              </tr>
            ) : (
              paginatedData.map((row) => {
                const key = String(row[rowKey]);
                const isSelected = selectedKeys.has(key);

                return (
                  <tr
                    key={key}
                    className={isSelected ? "data-table-row-selected" : ""}
                    onClick={
                      hasActions ? () => handleToggleRow(key) : undefined
                    }
                    style={hasActions ? undefined : { cursor: "default" }}
                  >
                    {hasActions && (
                      <td className="data-table-checkbox-col">
                        <input
                          type={multiSelect ? "checkbox" : "radio"}
                          checked={isSelected}
                          onChange={() => handleToggleRow(key)}
                          onClick={(e) => e.stopPropagation()}
                          name={multiSelect ? undefined : "data-table-select"}
                        />
                      </td>
                    )}
                    {columns.map((col) => (
                      <td key={String(col.key)}>{renderCell(col, row)}</td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="data-table-footer">
        <span className="data-table-footer-info">{footerInfo}</span>

        {totalPages > 1 && (
          <div className="data-table-pagination">
            <button
              className="data-table-page-btn"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
            >
              ‹
            </button>
            {pages.map((p, i) =>
              p === "..." ? (
                <span
                  key={`ellipsis-${i}`}
                  className="data-table-page-ellipsis"
                >
                  …
                </span>
              ) : (
                <button
                  key={p}
                  className={`data-table-page-btn${page === p ? " data-table-page-btn-active" : ""}`}
                  onClick={() => goToPage(p as number)}
                >
                  {p}
                </button>
              ),
            )}
            <button
              className="data-table-page-btn"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export { DataTable };
export type { Column, TableAction, DataTableProps };
