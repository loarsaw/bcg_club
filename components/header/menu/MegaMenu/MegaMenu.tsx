import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import { useLanguage } from "@/hooks/useLanguage";
import { GoGrabber } from "react-icons/go";
import MenusContainer from "./MenusContainer";
import { IMegaMenuRootState } from "@/lib/types/megaMenu";
import { megaMenuActions } from "@/store/megaMenu-slice";
function MegaMenu() {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const dispatch = useDispatch();
  function showMegaHandler() {
    dispatch(megaMenuActions.openMegaMenu());
  }
  function closeMegaMenuHandler() {
    dispatch(megaMenuActions.closeMegaMenu());
  }

  const isMegaMenuOpen = useSelector(
    (state: IMegaMenuRootState) => state.megaMenu.isMegaMenuOpen
  );

  return (
    <div
      className="flex items-center"
      onMouseOver={showMegaHandler}
      onMouseOut={closeMegaMenuHandler}
    ></div>
  );
}

export default MegaMenu;
