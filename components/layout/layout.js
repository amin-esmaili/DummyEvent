import { Fragment } from "react";
import MainHeader from "./main_header";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
        <main>{props.children}</main>
    </Fragment>
  );
}
export default Layout;
