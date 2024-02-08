function TabButton({ children, onSelect, isSelected }) {
  //often use handle and then whatever should be handled - here click

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
