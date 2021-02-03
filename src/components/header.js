import { createElement } from "../react";
import "../style.css";

export const Header = () => {
  let evt = (link) => ({
    onclick: () => {
      if (link && link !== "#") {
        window.location.pathname = link;
      }
    },
  });
  let navbar = [
    {
      link: "/home",
      props: {
        class: "icon home-icon fa fa-home",
      },
    },
    {
      link: "/messenger",
      props: {
        class: "icon fab fa-facebook-messenger",
      },
    },
    {
      link: "/explore",
      props: {
        class: "icon explore-icon fa fa-compass",
      },
    },
    {
      link: "#",
      props: {
        class: "icon explore-icon fa fa-heart",
        onclick: () => {
          var aa = document.querySelector(".notificationContainer");
          console.log(aa);
          if (!aa.style.display) {
            aa.style.display = "block";
          } else {
            aa.style.display = "";
          }
        },
      },
    },
    {
      link: "/profile",
      props: {
        src:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/134944844_232419798263042_7386018853170716323_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=O0YDkyDqpXkAX_PTbJs&tp=1&oh=f293b6eb1726c4b1f94f9665c46bd150&oe=60340AF0",
        class: "profile-img",
      },
    },
  ];
  let list = [];
  navbar.forEach((item) => {
    if (item.link === "/profile") {
      let img = createElement("img", { ...evt(item.link), ...item.props });
      list.push(img);
    } else {
      let li = createElement("i", { ...evt(item.link), ...item.props });
      list.push(li);
    }
  });
  ///// logo div start here /////////
  const img = createElement("img", {
    src: "https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png",
  });
  const logoDiv = createElement("div", { class: "logo-div" }, img);
  ///// logo div end here /////////
  ///// input div start here /////////
  const inputIcon = createElement("i", { class: "search-icon fa fa-search" });
  const inputIconDiv = createElement(
    "div",
    { class: "search-icon-div" },
    inputIcon
  );
  const input = createElement("input", {
    class: "nav-input",
    placeholder: "Search",
  });
  const inputDiv = createElement(
    "div",
    { class: "input-div" },
    input,
    inputIconDiv
  );
  ///// input div end here /////////
  //// header /////
  let iconsDiv = createElement("div", null, list);
  let ul = createElement("ul", null, logoDiv, inputDiv, iconsDiv);
  return createElement("header", null, ul);
};
