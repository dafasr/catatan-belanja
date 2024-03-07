const Footer = ({ items }) => {
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage =
    totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

  return (
    <footer className="stats">
      {totalItems === 0 ? (
        <span>Daftar belanjaan masih kosong!</span>
      ) : (
        <span>
          Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang
          sudah dibeli ({percentage}%)
        </span>
      )}
    </footer>
  );
};

export default Footer;
