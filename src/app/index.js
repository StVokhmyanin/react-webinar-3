import { useCallback, useContext, useEffect, useState } from "react";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Main from "./main";
import Basket from "./basket";
import useStore from "../store/use-store";
import useSelector from "../store/use-selector";
import Item from "./item";

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {
  const activeModal = useSelector((state) => state.modals.name);

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/goods/:id"} element={<Item />} />
      </Routes>
      {activeModal === "basket" && <Basket />}
    </>
  );
}

export default App;
