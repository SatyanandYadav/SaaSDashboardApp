import { MenuSection } from "../../interface";
import { componentMap } from "./componentMap";

const GroupedNav = ({ data, headerName }: { data: MenuSection[]; headerName: string }) => {
  return (
    <nav aria-label="Pages" data-testid="sidebar-pages">
      <h2 className="mb-2 text-sm font-semibold text-gray-600">{headerName}</h2>
      <ul>
        {data.map((page, idx) => (
          <li key={page.category} className="mb-2">
            <details>
              <summary
                className="flex cursor-pointer items-center rounded py-1 pl-2 text-gray-800 hover:bg-gray-100"
                data-testid={`page-category-${idx}`}
              >
                {page.key && componentMap[page.key]}
                <span>{page.category}</span>
              </summary>
              {page.items.length > 0 && (
                <ul className="ml-5">
                  {page.items.map((item, subIdx) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </details>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GroupedNav;
