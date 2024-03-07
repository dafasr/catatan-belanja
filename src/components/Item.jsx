const Item = ({ item, onDeleteItem, onToggleItem }) => {
  const handleToggle = () => {
    onToggleItem(item.id);
  };

  const handleDelete = () => {
    onDeleteItem(item.id);
  };

  return (
    <li>
      <input type="checkbox" checked={item.checked} onChange={handleToggle} />
      <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
        {item.quantity} {item.name}
      </span>
      <button onClick={handleDelete}>&times;</button>
    </li>
  );
};

export default Item;
