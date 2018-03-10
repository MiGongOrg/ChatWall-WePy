'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _chatItem = require('./chatItem.js');

var _chatItem2 = _interopRequireDefault(_chatItem);

var _common = require('./../common/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_wepy$component) {
  _inherits(Chat, _wepy$component);

  function Chat() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Chat);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Chat.__proto__ || Object.getPrototypeOf(Chat)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      scrollTop: 0,
      chat: []
    }, _this2.props = {
      // 动态传值
      chat: {
        type: String,
        default: 'null'
      }
      // 监听，消息
    }, _this2.watch = {
      chat: function chat() {
        var _this = this;
        _this.pageScrollToBottom();
      }
    }, _this2.$repeat = { "chat": { "com": "chatItem", "props": "item" } }, _this2.$props = { "chatItem": { "xmlns:v-bind": { "value": "", "for": "chat", "item": "item", "index": "index", "key": "key" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "chat", "item": "item", "index": "index", "key": "key" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "chat", "item": "item", "index": "index", "key": "key" } } }, _this2.$events = {}, _this2.components = {
      chatItem: _chatItem2.default
      // 获取容器内每个 Item 高度，后设置 scroll-top 使页面滚动到容器底部
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }
  // 模板初始绑定数据

  // 声明页面中将要使用到的组件


  _createClass(Chat, [{
    key: 'pageScrollToBottom',
    value: function pageScrollToBottom() {
      var _this = this;
      _wepy2.default.createSelectorQuery().selectAll('.chatItemContent').boundingClientRect(function (rects) {
        rects.forEach(function (rect) {
          _this.scrollTop += rect.height;
          _this.$apply();
        });
      }).exec();
    }
    // 请求数据

  }, {
    key: 'request',
    value: function request(options) {
      var _this = this;
      var url = _common.URLS.chats;

      _common.HTTP.get(url).then(function (data) {
        var chatArr = [];
        // 处理数据
        for (var item in data) {
          data[item].id = item;
          chatArr.push(data[item]);
        }
        _this.chat = chatArr;
        _this.$apply();
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      // let _this = this
      // _this.request()
    }
  }]);

  return Chat;
}(_wepy2.default.component);

exports.default = Chat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiQ2hhdCIsImRhdGEiLCJzY3JvbGxUb3AiLCJjaGF0IiwicHJvcHMiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsIndhdGNoIiwiX3RoaXMiLCJwYWdlU2Nyb2xsVG9Cb3R0b20iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjaGF0SXRlbSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3RBbGwiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0cyIsImZvckVhY2giLCJyZWN0IiwiaGVpZ2h0IiwiJGFwcGx5IiwiZXhlYyIsIm9wdGlvbnMiLCJ1cmwiLCJjaGF0cyIsImdldCIsInRoZW4iLCJjaGF0QXJyIiwiaXRlbSIsImlkIiwicHVzaCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztxTEFFbkJDLEksR0FBTztBQUNMQyxpQkFBVyxDQUROO0FBRUxDLFlBQU07QUFGRCxLLFNBS1BDLEssR0FBUTtBQUNOO0FBQ0FELFlBQU07QUFDSkUsY0FBTUMsTUFERjtBQUVKQyxpQkFBUztBQUZMO0FBS1I7QUFQUSxLLFNBUVJDLEssR0FBUTtBQUNOTCxVQURNLGtCQUNFO0FBQ04sWUFBTU0sUUFBUSxJQUFkO0FBQ0FBLGNBQU1DLGtCQUFOO0FBQ0Q7QUFKSyxLLFNBT1RDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLFVBQVAsRUFBa0IsU0FBUSxNQUExQixFQUFSLEUsU0FDYkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxNQUFsQixFQUF5QixRQUFPLE1BQWhDLEVBQXVDLFNBQVEsT0FBL0MsRUFBdUQsT0FBTSxLQUE3RCxFQUFoQixFQUFvRixvQkFBbUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLE1BQXBDLEVBQTJDLFFBQU8sTUFBbEQsRUFBeUQsU0FBUSxPQUFqRSxFQUF5RSxPQUFNLEtBQS9FLEVBQXZHLEVBQTZMLHFCQUFvQixFQUFDLFNBQVEsT0FBVCxFQUFpQixRQUFPLE9BQXhCLEVBQWdDLE9BQU0sTUFBdEMsRUFBNkMsUUFBTyxNQUFwRCxFQUEyRCxTQUFRLE9BQW5FLEVBQTJFLE9BQU0sS0FBakYsRUFBak4sRUFBWixFLFNBQ1RDLE8sR0FBVSxFLFNBQ1RDLFUsR0FBYTtBQUNSQztBQUVGO0FBSFUsSzs7QUF4QlY7O0FBb0JBOzs7Ozt5Q0FRc0I7QUFDcEIsVUFBTU4sUUFBUSxJQUFkO0FBQ0EscUJBQUtPLG1CQUFMLEdBQTJCQyxTQUEzQixDQUFxQyxrQkFBckMsRUFBeURDLGtCQUF6RCxDQUE0RSxVQUFTQyxLQUFULEVBQWdCO0FBQzFGQSxjQUFNQyxPQUFOLENBQWMsVUFBU0MsSUFBVCxFQUFlO0FBQzNCWixnQkFBTVAsU0FBTixJQUFtQm1CLEtBQUtDLE1BQXhCO0FBQ0FiLGdCQUFNYyxNQUFOO0FBQ0QsU0FIRDtBQUlELE9BTEQsRUFLR0MsSUFMSDtBQU1EO0FBQ0Q7Ozs7NEJBQ1NDLE8sRUFBUztBQUNoQixVQUFJaEIsUUFBUSxJQUFaO0FBQ0EsVUFBSWlCLE1BQU0sYUFBS0MsS0FBZjs7QUFFQSxtQkFBS0MsR0FBTCxDQUFTRixHQUFULEVBQWNHLElBQWQsQ0FBbUIsVUFBQzVCLElBQUQsRUFBVTtBQUMzQixZQUFJNkIsVUFBVSxFQUFkO0FBQ0E7QUFDQSxhQUFLLElBQUlDLElBQVQsSUFBaUI5QixJQUFqQixFQUF1QjtBQUNyQkEsZUFBSzhCLElBQUwsRUFBV0MsRUFBWCxHQUFnQkQsSUFBaEI7QUFDQUQsa0JBQVFHLElBQVIsQ0FBYWhDLEtBQUs4QixJQUFMLENBQWI7QUFDRDtBQUNEdEIsY0FBTU4sSUFBTixHQUFhMkIsT0FBYjtBQUNBckIsY0FBTWMsTUFBTjtBQUNELE9BVEQ7QUFVRDs7OzZCQUNRO0FBQ1A7QUFDQTtBQUNEOzs7O0VBekQrQixlQUFLVyxTOztrQkFBbEJsQyxJIiwiZmlsZSI6ImNoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IENoYXRJdGVtIGZyb20gJy4vY2hhdEl0ZW0nXG4gIGltcG9ydCB7IFVSTFMsIEhUVFAgfSBmcm9tICcuLi9jb21tb24nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgY2hhdDogW11cbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIC8vIOWKqOaAgeS8oOWAvFxuICAgICAgY2hhdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdudWxsJ1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDnm5HlkKzvvIzmtojmga9cbiAgICB3YXRjaCA9IHtcbiAgICAgIGNoYXQgKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXNcbiAgICAgICAgX3RoaXMucGFnZVNjcm9sbFRvQm90dG9tKClcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu2XG4gICAkcmVwZWF0ID0ge1wiY2hhdFwiOntcImNvbVwiOlwiY2hhdEl0ZW1cIixcInByb3BzXCI6XCJpdGVtXCJ9fTtcclxuJHByb3BzID0ge1wiY2hhdEl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImNoYXRcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiY2hhdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDppbmRleC5vbmNlXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJjaGF0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBjaGF0SXRlbTogQ2hhdEl0ZW1cbiAgICB9XG4gICAgLy8g6I635Y+W5a655Zmo5YaF5q+P5LiqIEl0ZW0g6auY5bqm77yM5ZCO6K6+572uIHNjcm9sbC10b3Ag5L2/6aG16Z2i5rua5Yqo5Yiw5a655Zmo5bqV6YOoXG4gICAgcGFnZVNjcm9sbFRvQm90dG9tICgpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpc1xuICAgICAgd2VweS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0QWxsKCcuY2hhdEl0ZW1Db250ZW50JykuYm91bmRpbmdDbGllbnRSZWN0KGZ1bmN0aW9uKHJlY3RzKSB7XG4gICAgICAgIHJlY3RzLmZvckVhY2goZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgIF90aGlzLnNjcm9sbFRvcCArPSByZWN0LmhlaWdodFxuICAgICAgICAgIF90aGlzLiRhcHBseSgpXG4gICAgICAgIH0pXG4gICAgICB9KS5leGVjKClcbiAgICB9XG4gICAgLy8g6K+35rGC5pWw5o2uXG4gICAgcmVxdWVzdCAob3B0aW9ucykge1xuICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgbGV0IHVybCA9IFVSTFMuY2hhdHNcblxuICAgICAgSFRUUC5nZXQodXJsKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGxldCBjaGF0QXJyID0gW11cbiAgICAgICAgLy8g5aSE55CG5pWw5o2uXG4gICAgICAgIGZvciAobGV0IGl0ZW0gaW4gZGF0YSkge1xuICAgICAgICAgIGRhdGFbaXRlbV0uaWQgPSBpdGVtXG4gICAgICAgICAgY2hhdEFyci5wdXNoKGRhdGFbaXRlbV0pXG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuY2hhdCA9IGNoYXRBcnJcbiAgICAgICAgX3RoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIC8vIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIC8vIF90aGlzLnJlcXVlc3QoKVxuICAgIH1cbiAgfVxuIl19