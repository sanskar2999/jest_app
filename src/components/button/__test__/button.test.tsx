import React from "react";
import ReactDOM from "react-dom";
import Button from "../button";
import { isTSAnyKeyword } from "@babel/types";
import {render,cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing",()=>{
    const div=document.createElement("div");
   ReactDOM.render(<Button label="CLICK ME"></Button>,div);
   ReactDOM.unmountComponentAtNode(div);
});

 it("render button correctly",()=>{
    const {getByTestId}= render(<Button label="CLICK ME"></Button>);
    expect(getByTestId('button')).toHaveTextContent("CLICK ME")
 });

 it("render button correctly",()=>{
    const {getByTestId}= render(<Button label="save"></Button>);
    expect(getByTestId('button')).toHaveTextContent("save")
 });



