'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _chat = require('./../components/chat.js');

var _chat2 = _interopRequireDefault(_chat);

var _input = require('./../components/input.js');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      'navigationBarTitleText': 'ChatWall',
      'navigationBarTextStyle': 'white',
      'navigationBarBackgroundColor': '#372746'
    }, _this2.$repeat = {}, _this2.$props = { "chat": { "xmlns:v-bind": "", "v-bind:chat.sync": "chat" } }, _this2.$events = {}, _this2.components = {
      chat: _chat2.default,
      chatInput: _input2.default
      // 绑定数据
    }, _this2.data = {
      chat: []
      // 事件处理
    }, _this2.events = {
      addChat: function addChat(text) {
        var _this = _this2;
        _this.$parent.addChat(text);
      },
      delItem: function delItem(key) {
        var _this = _this2;
        _this.ref.child(key).remove();
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      // 获取聊天数据
      var _this = this;
      _this.ref = _this.$parent.getChat();

      // 绑定数据
      _this.ref.bindAsArray(this, 'chat', function (err) {
        if (err !== null) {
          console.log(err.message);
        } else {
          console.log('数据绑定成功');
        }
      });

      // 监听初始化数据与新增数据（最新10条数据）
      _this.ref.limitToLast(10).on('child_added', function (snapshot, prKey) {
        var key = snapshot.key();
        var val = snapshot.val();

        // 格式化加入时间
        var date = new Date(val.createTime * 1000);
        val.createTime = date.toLocaleString();

        var newChatItem = { key: key, data: val };
        _this.chat.push(newChatItem);
        _this.$apply();
      }, _this);
      // 监听删除同步数据
      _this.ref.on('child_removed', function (snapshot) {
        var key = snapshot.key();
        var index = _this.chat.findIndex(function (item, index) {
          if (item.key === key) {
            return true;
          }
          return false;
        });
        // 判断是否有这条数据
        if (index >= 0) {
          // 删除这条数据后同步
          _this.chat.splice(index, 1);
          _this.$apply();
        }
      }, _this);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY2hhdCIsImNoYXRJbnB1dCIsImRhdGEiLCJldmVudHMiLCJhZGRDaGF0IiwidGV4dCIsIl90aGlzIiwiJHBhcmVudCIsImRlbEl0ZW0iLCJrZXkiLCJyZWYiLCJjaGlsZCIsInJlbW92ZSIsImdldENoYXQiLCJiaW5kQXNBcnJheSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibGltaXRUb0xhc3QiLCJvbiIsInNuYXBzaG90IiwicHJLZXkiLCJ2YWwiLCJkYXRlIiwiRGF0ZSIsImNyZWF0ZVRpbWUiLCJ0b0xvY2FsZVN0cmluZyIsIm5ld0NoYXRJdGVtIiwicHVzaCIsIiRhcHBseSIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFGQTs7O0lBSXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt1TEFDbkJDLE0sR0FBUztBQUNQLGdDQUEwQixVQURuQjtBQUVQLGdDQUEwQixPQUZuQjtBQUdQLHNDQUFnQztBQUh6QixLLFNBS1ZDLE8sR0FBVSxFLFNBQ2JDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsTUFBdEMsRUFBUixFLFNBQ1RDLE8sR0FBVSxFLFNBQ1RDLFUsR0FBYTtBQUNSQywwQkFEUTtBQUVSQztBQUVGO0FBSlUsSyxTQUtWQyxJLEdBQU87QUFDTEYsWUFBTTtBQUVSO0FBSE8sSyxTQUlQRyxNLEdBQVM7QUFDUEMsZUFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCLFlBQUlDLGNBQUo7QUFDQUEsY0FBTUMsT0FBTixDQUFjSCxPQUFkLENBQXNCQyxJQUF0QjtBQUNELE9BSk07QUFLUEcsZUFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCLFlBQUlILGNBQUo7QUFDQUEsY0FBTUksR0FBTixDQUFVQyxLQUFWLENBQWdCRixHQUFoQixFQUFxQkcsTUFBckI7QUFDRDtBQVJNLEs7Ozs7OzZCQVVBO0FBQ1A7QUFDQSxVQUFJTixRQUFRLElBQVo7QUFDQUEsWUFBTUksR0FBTixHQUFZSixNQUFNQyxPQUFOLENBQWNNLE9BQWQsRUFBWjs7QUFFQTtBQUNBUCxZQUFNSSxHQUFOLENBQVVJLFdBQVYsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsVUFBU0MsR0FBVCxFQUFjO0FBQ2hELFlBQUlBLFFBQVEsSUFBWixFQUFrQjtBQUNoQkMsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBSUcsT0FBaEI7QUFDRCxTQUZELE1BRU87QUFDTEYsa0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRixPQU5EOztBQVFBO0FBQ0FYLFlBQU1JLEdBQU4sQ0FBVVMsV0FBVixDQUFzQixFQUF0QixFQUEwQkMsRUFBMUIsQ0FBNkIsYUFBN0IsRUFBNEMsVUFBU0MsUUFBVCxFQUFtQkMsS0FBbkIsRUFBMEI7QUFDcEUsWUFBSWIsTUFBTVksU0FBU1osR0FBVCxFQUFWO0FBQ0EsWUFBSWMsTUFBTUYsU0FBU0UsR0FBVCxFQUFWOztBQUVBO0FBQ0EsWUFBSUMsT0FBTyxJQUFJQyxJQUFKLENBQVNGLElBQUlHLFVBQUosR0FBaUIsSUFBMUIsQ0FBWDtBQUNBSCxZQUFJRyxVQUFKLEdBQWlCRixLQUFLRyxjQUFMLEVBQWpCOztBQUVBLFlBQUlDLGNBQWMsRUFBQ25CLEtBQUtBLEdBQU4sRUFBV1AsTUFBTXFCLEdBQWpCLEVBQWxCO0FBQ0FqQixjQUFNTixJQUFOLENBQVc2QixJQUFYLENBQWdCRCxXQUFoQjtBQUNBdEIsY0FBTXdCLE1BQU47QUFDRCxPQVhELEVBV0d4QixLQVhIO0FBWUE7QUFDQUEsWUFBTUksR0FBTixDQUFVVSxFQUFWLENBQWEsZUFBYixFQUE4QixVQUFTQyxRQUFULEVBQW1CO0FBQy9DLFlBQUlaLE1BQU1ZLFNBQVNaLEdBQVQsRUFBVjtBQUNBLFlBQUlzQixRQUFRekIsTUFBTU4sSUFBTixDQUFXZ0MsU0FBWCxDQUFxQixVQUFTQyxJQUFULEVBQWVGLEtBQWYsRUFBc0I7QUFDckQsY0FBSUUsS0FBS3hCLEdBQUwsS0FBYUEsR0FBakIsRUFBc0I7QUFDcEIsbUJBQU8sSUFBUDtBQUNEO0FBQ0QsaUJBQU8sS0FBUDtBQUNELFNBTFcsQ0FBWjtBQU1BO0FBQ0EsWUFBSXNCLFNBQVMsQ0FBYixFQUFnQjtBQUNkO0FBQ0F6QixnQkFBTU4sSUFBTixDQUFXa0MsTUFBWCxDQUFrQkgsS0FBbEIsRUFBeUIsQ0FBekI7QUFDQXpCLGdCQUFNd0IsTUFBTjtBQUNEO0FBQ0YsT0FkRCxFQWNHeEIsS0FkSDtBQWVEOzs7O0VBdkVnQyxlQUFLNkIsSTs7a0JBQW5CekMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyDlvJXlhaXnu4Tku7ZcbiAgaW1wb3J0IENoYXQgZnJvbSAnLi4vY29tcG9uZW50cy9jaGF0J1xuICBpbXBvcnQgQ2hhdElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ0NoYXRXYWxsJyxcbiAgICAgICduYXZpZ2F0aW9uQmFyVGV4dFN0eWxlJzogJ3doaXRlJyxcbiAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyMzNzI3NDYnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjaGF0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpjaGF0LnN5bmNcIjpcImNoYXRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgY2hhdDogQ2hhdCxcbiAgICAgIGNoYXRJbnB1dDogQ2hhdElucHV0XG4gICAgfVxuICAgIC8vIOe7keWumuaVsOaNrlxuICAgIGRhdGEgPSB7XG4gICAgICBjaGF0OiBbXVxuICAgIH1cbiAgICAvLyDkuovku7blpITnkIZcbiAgICBldmVudHMgPSB7XG4gICAgICBhZGRDaGF0OiAodGV4dCkgPT4ge1xuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgICAgIF90aGlzLiRwYXJlbnQuYWRkQ2hhdCh0ZXh0KVxuICAgICAgfSxcbiAgICAgIGRlbEl0ZW06IChrZXkpID0+IHtcbiAgICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgICBfdGhpcy5yZWYuY2hpbGQoa2V5KS5yZW1vdmUoKVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICAvLyDojrflj5bogYrlpKnmlbDmja5cbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIF90aGlzLnJlZiA9IF90aGlzLiRwYXJlbnQuZ2V0Q2hhdCgpXG5cbiAgICAgIC8vIOe7keWumuaVsOaNrlxuICAgICAgX3RoaXMucmVmLmJpbmRBc0FycmF5KHRoaXMsICdjaGF0JywgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGlmIChlcnIgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn5pWw5o2u57uR5a6a5oiQ5YqfJylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8g55uR5ZCs5Yid5aeL5YyW5pWw5o2u5LiO5paw5aKe5pWw5o2u77yI5pyA5pawMTDmnaHmlbDmja7vvIlcbiAgICAgIF90aGlzLnJlZi5saW1pdFRvTGFzdCgxMCkub24oJ2NoaWxkX2FkZGVkJywgZnVuY3Rpb24oc25hcHNob3QsIHByS2V5KSB7XG4gICAgICAgIGxldCBrZXkgPSBzbmFwc2hvdC5rZXkoKVxuICAgICAgICBsZXQgdmFsID0gc25hcHNob3QudmFsKClcblxuICAgICAgICAvLyDmoLzlvI/ljJbliqDlhaXml7bpl7RcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh2YWwuY3JlYXRlVGltZSAqIDEwMDApXG4gICAgICAgIHZhbC5jcmVhdGVUaW1lID0gZGF0ZS50b0xvY2FsZVN0cmluZygpXG5cbiAgICAgICAgbGV0IG5ld0NoYXRJdGVtID0ge2tleToga2V5LCBkYXRhOiB2YWx9XG4gICAgICAgIF90aGlzLmNoYXQucHVzaChuZXdDaGF0SXRlbSlcbiAgICAgICAgX3RoaXMuJGFwcGx5KClcbiAgICAgIH0sIF90aGlzKVxuICAgICAgLy8g55uR5ZCs5Yig6Zmk5ZCM5q2l5pWw5o2uXG4gICAgICBfdGhpcy5yZWYub24oJ2NoaWxkX3JlbW92ZWQnLCBmdW5jdGlvbihzbmFwc2hvdCkge1xuICAgICAgICBsZXQga2V5ID0gc25hcHNob3Qua2V5KClcbiAgICAgICAgbGV0IGluZGV4ID0gX3RoaXMuY2hhdC5maW5kSW5kZXgoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICBpZiAoaXRlbS5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpuaciei/meadoeaVsOaNrlxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIC8vIOWIoOmZpOi/meadoeaVsOaNruWQjuWQjOatpVxuICAgICAgICAgIF90aGlzLmNoYXQuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgIF90aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH0sIF90aGlzKVxuICAgIH1cbiAgfVxuIl19