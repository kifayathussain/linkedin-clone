import { createElement } from "../react/index";



export const footer = () => {


   let a = [

         {
            name:"User Agreement",
            salman:"/home"
         },
         {
            name:"Privacy Policy",
            salman: "/about"
         },
         {
            name:"Community Guidelines"
         },
         {
            name:"Cookie Policy"
         },
         {
            name:"Copyright Policy"
         },
         {
            name:"Send Feedback"
         },
         {
            name:"Language."
         }


   ];


   let b = [];
   
   a.forEach((e) => {
      const links = createElement('a',{href:e.salman},e.name)


     b.push(links)


   })
   
   const footerMain = createElement('div', {class:'footer-links'},b)


  const footerPara = createElement(
    "img",
    { class: "footer-img",src:'https://www.multiplicalia.com/wp-content/uploads/2019/02/LinkedIn-Logo.png'});
  const foote = createElement(
    "footer",
    null,
    createElement(
      "div",
      { class: "footer-main" },
      // container,
    
      footerPara, footerMain
    )
  );
  return foote;
};
