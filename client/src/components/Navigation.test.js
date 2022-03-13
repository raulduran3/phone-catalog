import React from "react";
import { mount } from "enzyme";
import NavigationComp from "./Navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { reducers } from "../reducers/index";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

test("Navigation component renders Phone Catalog", () => {
  const wrapper = mount(
    <BrowserRouter>
      <Provider store={store}>
        <NavigationComp />
      </Provider>
    </BrowserRouter>
  );
  const p = wrapper.find("h6.MuiTypography-root");
  expect(p.text()).toBe("Phone Catalog");
});
