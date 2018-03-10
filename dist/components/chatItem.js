'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatItem = function (_wepy$component) {
  _inherits(ChatItem, _wepy$component);

  function ChatItem() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, ChatItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = ChatItem.__proto__ || Object.getPrototypeOf(ChatItem)).call.apply(_ref, [this].concat(args))), _this2), _this2.methods = {
      deleteItem: function deleteItem(event) {
        var _this = this;
        var key = event.target.dataset.key;
        console.log(key);
        _this.$emit('delItem', key);
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }
  // 事件处理


  _createClass(ChatItem, [{
    key: 'onLoad',

    // 页面的生命周期函数
    value: function onLoad() {}
  }]);

  return ChatItem;
}(_wepy2.default.component);

exports.default = ChatItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRJdGVtLmpzIl0sIm5hbWVzIjpbIkNoYXRJdGVtIiwibWV0aG9kcyIsImRlbGV0ZUl0ZW0iLCJldmVudCIsIl90aGlzIiwia2V5IiwidGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7NkxBRW5CQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0lDLEtBREosRUFDVztBQUNqQixZQUFJQyxRQUFRLElBQVo7QUFDQSxZQUFJQyxNQUFNRixNQUFNRyxNQUFOLENBQWFDLE9BQWIsQ0FBcUJGLEdBQS9CO0FBQ0FHLGdCQUFRQyxHQUFSLENBQVlKLEdBQVo7QUFDQUQsY0FBTU0sS0FBTixDQUFZLFNBQVosRUFBdUJMLEdBQXZCO0FBQ0Q7QUFOTyxLOztBQURWOzs7Ozs7QUFTQTs2QkFDVSxDQUFFOzs7O0VBWHdCLGVBQUtNLFM7O2tCQUF0QlgsUSIsImZpbGUiOiJjaGF0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIC8vIOS6i+S7tuWkhOeQhlxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBkZWxldGVJdGVtIChldmVudCkge1xuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgICAgIGxldCBrZXkgPSBldmVudC50YXJnZXQuZGF0YXNldC5rZXlcbiAgICAgICAgY29uc29sZS5sb2coa2V5KVxuICAgICAgICBfdGhpcy4kZW1pdCgnZGVsSXRlbScsIGtleSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g6aG16Z2i55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG4gICAgb25Mb2FkICgpIHt9XG4gIH1cbiJdfQ==