import s from "./menu-burger.module.scss";

interface MenuBurgerProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const MenuBurger = ({ toggleMenu, isMenuOpen }: MenuBurgerProps) => {
  return (
    <div className={s.burger} onClick={toggleMenu}>
      <div
        className={`${s.burger_line} ${isMenuOpen ? s.burger_line_open : ""}`}
      ></div>
      <div
        className={`${s.burger_line} ${isMenuOpen ? s.burger_line_open : ""}`}
      ></div>
      <div
        className={`${s.burger_line} ${isMenuOpen ? s.burger_line_open : ""}`}
      ></div>
    </div>
  );
};

export default MenuBurger;
