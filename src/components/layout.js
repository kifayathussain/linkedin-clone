import { profile } from './profile';
import { login } from './login';
import { home } from './home';
import { messaging } from './messaging';
import { myNetwork } from './myNetwork';
import { job } from './job';
import { notifications } from './notifications';
import { work } from './work';
import { postAjob } from './postAjob';
import { error } from './error';
import { linkdinAnimation } from './linkdinAnimation';


let path = window.location.pathname;
export const Layout = () => {
  switch (path) {
    case "/":
      return login();
      break;
    case "/home":
      return home()
      break;
    case "/messaging":
      return messaging();
      break;
    case "/myNetwork":
      return myNetwork();
      break;
    case "/profile":
      return profile();
      break;
    case "/job":
      return job();
      break;
    case "/notifications":
      return notifications
      ();
      break;
    case "/work":
      return linkdinAnimation();
      break;
    case "/postAjob":
      return linkdinAnimation();
      break;
    default:
      return error();
  }
};
