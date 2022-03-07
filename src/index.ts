import * as _ from 'lodash';
import './scss/main.scss'
function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', 'MTF.IN.TH'], ' ');
    console.log(_.keys(["Banana", "Orange", "Apple", "Mango"]))
    return element;
}

document.body.appendChild(component());
(function (app) {
    app.appendChild(component())
})(document.getElementById("rootApp"))
