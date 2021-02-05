import { createElement } from "../react";
import "../style.css";

export const Header = () => {
  console.log('header')
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
      name:'home',
      props: {
        class: "icon home-icon fa fa-home",
      },
    },
    {
      link: "/myNetwork",
      name:'My-Network',
      props: {
        class: "icon home-icon fa fa-users",
      },
    },
    {
      link: "/job",
      name:'Job',
      props: {
        class: "icon explore-icon fa fa-briefcase",
      },
    },
    {
      link: "/messaging",
      name:'Messaging',
      props: {
        class: "icon explore-icon fas fa-comment-alt",
      },
    },
    {
      link: "#",
      name:'Notifications',
      props: {
        class: "icon explore-icon fa fa-bell",
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
      name:'Me',
      props: {
        src:
          "https://media-exp1.licdn.com/dms/image/C4D03AQFX5hdHPXBF6A/profile-displayphoto-shrink_100_100/0/1611738958049?e=1617840000&v=beta&t=Zvug88KtjiRsnnZtwUnKn-GTz9K7o2TyzL5WHeGocAQ",
        class: "profile-img",
      },
    },
    {
      link: "/work",
      name:'Work',
      props: {
        class: "icon explore-icon fas fa-th",
      },
    },
    {
      link: "/postAjob",
      name:'Post a Job',
      name: "home",
      props: {
        class: "icon explore-icon fas fa-address-card",
      },
    },
  ];
  let list = [];
  navbar.forEach((item) => {
    if (item.link === "/profile") {
      let img = createElement("img", { ...evt(item.link), ...item.props }, item.name );
      list.push(img);
    } else {
      let li = createElement("i", { ...evt(item.link), ...item.props },createElement('p',{class:'iconName'}, item.name ) );
      list.push(li);
    }
  });
  ///// logo div start here /////////
  const img = createElement("img", {
    src: "https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
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
  let iconsDiv = createElement("div", {class:'iconsDiv'}, list);
  let ul = createElement("ul", null, logoDiv, inputDiv, iconsDiv);
  return createElement("header", null, ul);
};
