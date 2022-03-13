import React from "react";
import { mount } from "enzyme";
import CardTextComp from "./CardText";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { reducers } from "../reducers/index";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

test("Card text component renders Test Title", () => {
  const wrapper = mount(
    <BrowserRouter>
      <Provider store={store}>
        <CardTextComp title={"Test Title"} content={"Test Content"} />
      </Provider>
    </BrowserRouter>
  );
  const p = wrapper.find("div.MuiTypography-root");
  expect(p.text()).toBe("Test Title");
});
