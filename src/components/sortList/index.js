import React from "react";
import { List, arrayMove } from "react-movable";

import "./index.css";
import classNames from "classnames";

const mockData = [
  {
    chosen: false,
    dataIndex: "PremiumSum",
    key: "PremiumSum",
    select: false,
    selected: false,
    show: "extend",
    title: "累计保费",
  },
  {
    chosen: false,
    dataIndex: "PremiumSum2",
    key: "PremiumSum2",
    select: false,
    selected: false,
    show: "extend",
    title: "累计保费2",
  },
  {
    chosen: false,
    dataIndex: "PremiumSum3",
    key: "PremiumSum3",
    select: false,
    selected: false,
    show: "extend",
    title: "累计保费3",
  },
  {
    chosen: false,
    dataIndex: "PremiumSum4",
    key: "PremiumSum4",
    select: true,
    selected: false,
    show: "extend",
    title: "累计保费4",
  },
];

function SortList() {
  const [items, setItems] = React.useState(mockData);
  return (
    <div
      className="sort_list"
    >
      <List
        lockVertically
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props, isDragged }) => (
          <ul
            {...props}
            style={{ padding: 0, cursor: isDragged ? "grabbing" : undefined }}
          >
            {children}
          </ul>
        )}
        renderItem={({ value: item, props, isDragged, isSelected }) => {
          const cls = classNames({
            'sort_item': true,
            'sort_item_drag': isDragged,
            'sort_item_selected': isSelected
          });
          return (
            <li
              {...props}
              key={props.key}
              className={cls}
              style={{
                ...props.style,
              }}
            >
              <div
                className="sort_item_handle"
                data-movable-handle
                style={{
                  // ...buttonStyles,
                  cursor: isDragged ? "grabbing" : "grab",
                  marginRight: "3em",
                }}
                // tabIndex={-1}
              >
                123
                {/* <HandleIcon /> */}
              </div>
              {item.title}
            </li>
          );
        }}
      />
    </div>
  );
}

export default SortList;
