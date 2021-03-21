import React from "react";
import { Route, Switch } from "react-router-dom";

import message from "../components/message/message";
import ImageGallery from "../components/imageGallery/imageGallery";

const MainRouter = () => (
  <>
    <Switch>
      <Route exact path="/" component={message}></Route>
      <Route exact path="/message" component={message}></Route>
      <Route exact path="/gallary" component={ImageGallery}></Route>
    </Switch>
  </>
);

export default MainRouter;