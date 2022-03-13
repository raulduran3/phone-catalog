import React from "react";
import { mount } from "enzyme";
import FormComp from "./Form";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { reducers } from "../reducers/index";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

test("Form create component renders New Phone", () => {
  const phoneData = {
    _id: "62297f794117ef05628eb855",
    name: "Galaxy",
    manufacturer: "Google",
    description: "A very nice phone.",
    color: "Black",
    price: 999,
    screen: "10 x 10",
    processor: "A10",
    ram: "50GB",
    createdAt: "2022-03-10T02:19:39.317Z",
    __v: 0,
  };
  const wrapper = mount(
    <BrowserRouter>
      <Provider store={store}>
        <FormComp type="create" phoneData={phoneData} />
      </Provider>
    </BrowserRouter>
  );
  const p = wrapper.find("h1.MuiTypography-root");
  expect(p.text()).toBe("New Phone");
});

test("Form edit component renders Edit Phone", () => {
  const phoneData = {
    _id: "62297f794117ef05628eb855",
    name: "Galaxy",
    manufacturer: "Google",
    description: "A very nice phone.",
    color: "Black",
    price: 999,
    screen: "10 x 10",
    processor: "A10",
    ram: "50GB",
    createdAt: "2022-03-10T02:19:39.317Z",
    __v: 0,
  };
  const wrapper = mount(
    <BrowserRouter>
      <Provider store={store}>
        <FormComp type="edit" phoneData={phoneData} />
      </Provider>
    </BrowserRouter>
  );
  const p = wrapper.find("h1.MuiTypography-root");
  expect(p.text()).toBe("Edit Phone");
});
