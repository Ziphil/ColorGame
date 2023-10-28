//

import {
  ReactElement
} from "react";
import {
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import {
  create
} from "/source/component/create";
import JisColorPage from "/source/component/page/jis-color-page";
import PccsColorPage from "/source/component/page/pccs-color-page";
import TopPage from "/source/component/page/top-page";


const router = createHashRouter([
  {path: "/", element: <TopPage/>},
  {path: "/jis", element: <JisColorPage/>},
  {path: "/pccs", element: <PccsColorPage/>}
]);


const Root = create(
  require("./root.scss"), "Root",
  function ({
  }: {
  }): ReactElement | null {

    const node = (
      <RouterProvider router={router}/>
    );
    return node;

  }
);


export default Root;