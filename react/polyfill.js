(function anonymous() {
  'use strict';
  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var _get = function get(object, property, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);
      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ('value' in desc && desc.writable) {
      return desc.value;
    } else {
      var getter = desc.get;
      if (getter === undefined) {
        return undefined;
      }
      return getter.call(receiver);
    }
  };

  var _inherits = function (subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass,
      );
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    if (superClass) subClass.__proto__ = superClass;
  };

  var _classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  };

  debugger;
  var LikeButton = (function (_React$Component) {
    function LikeButton(props) {
      _classCallCheck(this, LikeButton);

      _get(
        Object.getPrototypeOf(LikeButton.prototype),
        'constructor',
        this,
      ).call(this, props);
      this.state = {
        liked: false,
      };
    }

    _inherits(LikeButton, _React$Component);

    _prototypeProperties(LikeButton, null, {
      render: {
        value: function render() {
          // if (this.state.liked) {
          //   return 'You liked this.';
          // }

          return React.createElement('a', null, '123');
        },
        writable: true,
        configurable: true,
      },
    });

    return LikeButton;
  })(React.Component);

  var domContainer = document.querySelector('#like_button_container');
  ReactDOM.render(React.createElement(LikeButton), domContainer);
});
