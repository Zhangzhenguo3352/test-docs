import Message from './info.vue'
import Vue from 'vue'
import './style.scss';
function add (type, message, content) {
    var Profile = Vue.extend(Message);
    var div = document.createElement('div');
    var divBox = document.createElement('div');
    divBox.setAttribute('id', 't_divBox')
    document.getElementById('app').appendChild(divBox)
    div.className = 'dync mount';
    document.getElementById('t_divBox').appendChild(div)
    let VueComponent = new Profile()
    VueComponent.type = type
    VueComponent.message = message
    VueComponent.content = content
    // console.log('Profile', VueComponent.type = type)
    // 创建 Profile 实例，并挂载到一个元素上。
    VueComponent.$mount('.dync.mount');
}
export default {
    info: (message, content) => add('info', message, content),
    error: (message, content) => add('error', message, content),
    success: (message, content) => add('success', message, content),
    warning: (message, content) => add('warning', message, content)
}


// export var a = 1111;