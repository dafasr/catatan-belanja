import { useState } from 'react';
import Item from './Item';

export default function GroceryList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState('input');

  const sortItems = (sortType) => {
    switch (sortType) {
      case 'name':
        return [...items].sort((a, b) => a.name.localeCompare(b.name));
      case 'checked':
        return [...items].sort((a, b) => a.checked - b.checked);
      default:
        return items;
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <div className="list">
        <ul>
          {sortItems(sortBy).map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={handleSortChange}>
          <option value="input">Sort by Input Order</option>
          <option value="name">Sort by Name</option>
          <option value="checked">Sort by Checked</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </>
  );
}
