import { createElement , reactDOM } from './react';
import { Layout } from './components/layout';

const App =()=>{
    const main =createElement('div',null);
    const layout = createElement ('div',null,Layout());

    main.appendChild(layout);
    return main;
};

reactDOM.render(App(),document.getElementById('root'));
