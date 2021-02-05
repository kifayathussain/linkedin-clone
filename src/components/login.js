import { createElement } from '../react';
import { footer } from './footer';

export const login =()=>{

const onClick=()=>{
        return window.location.pathname="/home"
    }
    const passwordShow = document.getElementsByTagName('span');
    let  passinput = document.getElementsByTagName('input');

    const showPassword=()=>{

        if (passinput[1].type === 'password'){
            passwordShow[0].innerHTML='Hide'
            passinput[1].type='text';
        }
        else{
            passwordShow[0].innerHTML='show'
            passinput[1].type='password';
        }
    }


    const logo = createElement('img',{src:"//upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/268px-LinkedIn_Logo_2013.svg.png" ,class:'Linkedin-logo'});
    const h2 =createElement('h2',{class:'form-h2'},'Sign in')
    const p = createElement('p',{class:'form-p'},'Stay updated on your professional world');
    const emailInput =createElement('input',{class:'Input',type:"Email" ,placeholder:"Email or Phone"});
    const inputDiv =createElement('div',{class:'inputDiv'},emailInput);
    const passwordInput =createElement('input',{class:'Input',id:'showpass',type:"password" ,placeholder:"Password"});
    const show =createElement('span',{class:'show',onclick:()=>showPassword()},'show')
    const inputDiv2 =createElement('div',{class:'inputDiv'},passwordInput,show);
    const forgotpass = createElement('a',{class:'forgotpass',href:"https://www.linkedin.com/checkpoint/rp/request-password-reset?trk=guest_homepage-basic_nav-header-signin"},'Forgot password?');
    const loginBtn = createElement('button',{onclick:()=>onClick(),class:'loginBtn'},'Sign in') ;
    const btnContainer =createElement ('div',{class:'btnContainer'},loginBtn);
    const formContainer = createElement('div',{class:'formContainer'},h2,p,inputDiv,inputDiv2,forgotpass,btnContainer);
    const joinNow =createElement('div',{class:'joinNow'},'New to LinkedIn? <a href="#">Join now</a>');
    const loginContainer = createElement('div',{class:'loginContainer'},logo,formContainer,joinNow);
    const container = createElement('div',{class:'container'},loginContainer,footer());
    
    return container;
}