import { menuNavigation } from "../../utils.ts";
import SelectionMenuNavigation from "../../components/SelectionMenu/index.tsx";
import HeaderMenuNavigation from "../../components/HeaderMenu/index.tsx";

export const HeaderIndex = () => {
  return (
    <>
      <HeaderMenuNavigation navigationItems={menuNavigation} />
    </>
  );
};

export const MainContentIndex = () => {
  return (
    <>
      <SelectionMenuNavigation navigationItems={menuNavigation} />
    </>
  );
};
