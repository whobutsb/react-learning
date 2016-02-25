(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsGistBox = require('./components/GistBox');

var _componentsGistBox2 = _interopRequireDefault(_componentsGistBox);

React.render(React.createElement(_componentsGistBox2['default'], null), document.querySelector('#app'));

},{"./components/GistBox":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Gist = React.createClass({
    displayName: "Gist",

    render: function render() {
        return React.createElement(
            "div",
            null,
            this.props.username,
            " last gist is ",
            React.createElement(
                "a",
                { href: this.props.url },
                "here"
            )
        );
    }
});

exports["default"] = Gist;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var GistAddForm = React.createClass({
    displayName: 'GistAddForm',

    getInitialState: function getInitialState() {
        return {
            username: ''
        };
    },
    onChange: function onChange(e) {
        this.setState({ username: e.target.value });
    },
    addGist: function addGist(e) {
        e.preventDefault();
        this.props.onAdd(this.state.username);
        this.setState({ username: '' });
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { onSubmit: this.addGist },
                React.createElement('input', { onChange: this.onChange, type: 'text', value: this.state.username, placeholder: 'Type a Github username' }),
                React.createElement(
                    'button',
                    null,
                    'Fetch Latest Gist'
                )
            )
        );
    }
});

exports['default'] = GistAddForm;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Gist = require('./Gist');

var _Gist2 = _interopRequireDefault(_Gist);

var _GistAddForm = require('./GistAddForm');

var _GistAddForm2 = _interopRequireDefault(_GistAddForm);

var GistBox = React.createClass({
    displayName: 'GistBox',

    getInitialState: function getInitialState() {
        return {
            gists: []
        };
    },

    addGist: function addGist(username) {
        var url = 'https://api.github.com/users/' + username + '/gists';
        $.get(url, (function (data) {
            this.setState({ gists: data });
        }).bind(this));
    },

    render: function render() {
        var newGist = function newGist(gist) {
            return React.createElement(_Gist2['default'], { username: gist.owner.login, url: gist.html_url });
        };
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'GistBox'
            ),
            React.createElement(_GistAddForm2['default'], { onAdd: this.addGist }),
            this.state.gists.map(newGist)
        );
    }
});

exports['default'] = GistBox;
module.exports = exports['default'];

},{"./Gist":2,"./GistAddForm":3}]},{},[1]);
