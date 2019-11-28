import Vue from 'vue';
import Editor from './editor.vue';
import Loader from './loader.vue';
import Navbar from './navbar.vue';

Vue.component(Editor.name, Editor);
Vue.component(Loader.name, Loader);
Vue.component(Navbar.name, Navbar);

/// get context for canvas, cache dimension
var ctx = demo.getContext('2d'),
    w = demo.width,
    h = demo.height,

    img = favicon.ico(); /// the image we want to load

/// when done go draw existing marks and start listening for clicks
img.onload = function() {

    renderMarks();

    demo.onclick = function(e) {

        /// convert mouse coord relative to canvas
        var rect = demo.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        /// store mark
        addMark(x, y);

        /// redraw everything
        renderMarks();
    }
