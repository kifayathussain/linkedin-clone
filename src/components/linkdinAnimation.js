import { createElement } from "../react";


export const linkdinAnimation =()=>{

    const img =createElement('img',{src:"https://image.flaticon.com/icons/svg/1409/1409945.svg",class:"logo"});
    const loadBar =createElement('div',{class:'loading-bar'})
    const loadAnimation = createElement('div',{class:'loading-animation'},img,loadBar)
    const loadScreen = createElement('div',{class:'loading-screen'},loadAnimation)

    return loadScreen;
}