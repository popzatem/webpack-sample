import * as _ from 'lodash';
import './sass/main.scss'
function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', 'MTF.IN.TH'], ' ');

    return element;
}

document.body.appendChild(component());