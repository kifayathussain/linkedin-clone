import { createElement } from '../react';
import { Header } from "../components/header";

export const home =()=>{
    return createElement('section',null,Header());
}