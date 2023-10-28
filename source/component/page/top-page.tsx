//


import {
  ReactElement
} from "react";
import LinkButton from "/source/component/atom/link-button";
import PageContainer from "/source/component/compound/page-container";
import {
  create
} from "/source/component/create";


const TopPage = create(
  require("./top-page.scss"), "TopPage",
  function ({
  }: {
  }): ReactElement {

    const node = (
      <PageContainer>
        <div styleName="main">
          <LinkButton to="/jis">JIS 慣用色</LinkButton>
          <LinkButton to="/pccs">PCCS トーン</LinkButton>
        </div>
      </PageContainer>
    );
    return node;

  }
);


export default TopPage;