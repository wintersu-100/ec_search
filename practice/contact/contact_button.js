var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

var Contact_button = function (_React$Component) {
  _inherits(Contact_button, _React$Component);

  function Contact_button(props) {
    _classCallCheck(this, Contact_button);

    var _this = _possibleConstructorReturn(this, (Contact_button.__proto__ || Object.getPrototypeOf(Contact_button)).call(this, props));

    _this.state = { isModalOpen: false };
    return _this;
  }

  _createClass(Contact_button, [{
    key: 'handleClickLesson',
    value: function handleClickLesson() {
      this.setState({ isModalOpen: true });
    }
  }, {
    key: 'handleClickClose',
    value: function handleClickClose() {
      this.setState({ isModalOpen: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var modal = void 0;
      if (this.state.isModalOpen) {
        modal = React.createElement(
          'div',
          { className: 'modal' },
          React.createElement(
            'div',
            { className: 'modal-inner' },
            React.createElement(
              'div',
              { className: 'modal-introduction' },
              React.createElement(
                'h2',
                null,
                this.props.name
              ),
              React.createElement(
                'p',
                null,
                this.props.introduction
              )
            ),
            React.createElement(
              'button',
              {
                className: 'modal-close-btn',
                onClick: function onClick() {
                  _this2.handleClickClose();
                }
              },
              '\u3068\u3058\u308B'
            )
          )
        );
      }

      return React.createElement(
        'div',
        { className: 'lesson-card' },
        React.createElement(
          'div',
          {
            className: 'lesson-item',
            onClick: function onClick() {
              _this2.handleClickLesson();
            }
          },
          React.createElement(
            'p',
            null,
            this.props.name
          )
        ),
        modal
      );
    }
  }]);

  return Contact_button;
}(React.Component);

export default Contact_button;