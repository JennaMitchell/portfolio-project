import { useAppDispatch } from "../../library/store/typescript-hooks";
import { navStoreActions } from "../../library/store/nav-store";

const NavMenuButton = () => {
  const dispatch = useAppDispatch();

  const navButtonClickHandler = () => {
    dispatch(navStoreActions.setNavMenuAnimationDirection("in"));
  };
  return (
    <button className="nav-button" onClick={navButtonClickHandler}>
      <div data-nav-button-bar="one" className="nav-button-bar" />
      <div data-nav-button-bar="two" className="nav-button-bar" />
      <div data-nav-button-bar="three" className="nav-button-bar" />
    </button>
  );
};
export default NavMenuButton;