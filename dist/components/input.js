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

var Input = function (_wepy$component) {
  _inherits(Input, _wepy$component);

  function Input() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      focusFlag: false,
      sendVal: {
        createTime: null,
        message: null,
        messageType: 'TEXT',
        user: {}
      }
      // 事件处理
    }, _this2.methods = {
      input: function input(event) {
        var _this = this;
        _this.sendVal.message = event.detail.value;
      },
      send: function send() {
        var _this = this;
        // 判断输入框中是非有内容
        if (_this.sendVal.message !== null) {
          // 创建时间
          _this.sendVal.createTime = parseInt(new Date().getTime() / 1000);
          _this.$emit('addChat', _this.sendVal);

          // 清空输入框
          _this.sendVal.message = null;
          _this.$apply();
        } else {
          _wepy2.default.showToast({
            title: '发送内容不能为空',
            icon: 'none',
            duration: 2000
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Input, [{
    key: 'onLoad',

    // onLoad
    value: function onLoad() {
      var _this = this;
      _this.sendVal.user = _this.$root.$parent.globalData.userInfo;
      _this.$apply();
      // 同步用户数据
      var againFtech = setInterval(function () {
        if (!_this.sendVal.user) {
          _this.sendVal.user = _this.$root.$parent.globalData.userInfo;
          _this.$apply();
        } else {
          clearInterval(againFtech);
        }
      }, 500);
    }
  }]);

  return Input;
}(_wepy2.default.component);

exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0IiwiZGF0YSIsImZvY3VzRmxhZyIsInNlbmRWYWwiLCJjcmVhdGVUaW1lIiwibWVzc2FnZSIsIm1lc3NhZ2VUeXBlIiwidXNlciIsIm1ldGhvZHMiLCJpbnB1dCIsImV2ZW50IiwiX3RoaXMiLCJkZXRhaWwiLCJ2YWx1ZSIsInNlbmQiLCJwYXJzZUludCIsIkRhdGUiLCJnZXRUaW1lIiwiJGVtaXQiLCIkYXBwbHkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIiRyb290IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImFnYWluRnRlY2giLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3VMQUNuQkMsSSxHQUFPO0FBQ0xDLGlCQUFXLEtBRE47QUFFTEMsZUFBUztBQUNQQyxvQkFBWSxJQURMO0FBRVBDLGlCQUFTLElBRkY7QUFHUEMscUJBQWEsTUFITjtBQUlQQyxjQUFNO0FBSkM7QUFPWDtBQVRPLEssU0FVUEMsTyxHQUFVO0FBQ1JDLFdBRFEsaUJBQ0RDLEtBREMsRUFDTTtBQUNaLFlBQUlDLFFBQVEsSUFBWjtBQUNBQSxjQUFNUixPQUFOLENBQWNFLE9BQWQsR0FBd0JLLE1BQU1FLE1BQU4sQ0FBYUMsS0FBckM7QUFDRCxPQUpPO0FBS1JDLFVBTFEsa0JBS0E7QUFDTixZQUFJSCxRQUFRLElBQVo7QUFDQTtBQUNBLFlBQUlBLE1BQU1SLE9BQU4sQ0FBY0UsT0FBZCxLQUEwQixJQUE5QixFQUFvQztBQUNsQztBQUNBTSxnQkFBTVIsT0FBTixDQUFjQyxVQUFkLEdBQTJCVyxTQUFTLElBQUlDLElBQUosR0FBV0MsT0FBWCxLQUF1QixJQUFoQyxDQUEzQjtBQUNBTixnQkFBTU8sS0FBTixDQUFZLFNBQVosRUFBdUJQLE1BQU1SLE9BQTdCOztBQUVBO0FBQ0FRLGdCQUFNUixPQUFOLENBQWNFLE9BQWQsR0FBd0IsSUFBeEI7QUFDQU0sZ0JBQU1RLE1BQU47QUFDRCxTQVJELE1BUU87QUFDTCx5QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLG1CQUFPLFVBRE07QUFFYkMsa0JBQU0sTUFGTztBQUdiQyxzQkFBVTtBQUhHLFdBQWY7QUFLRDtBQUNGO0FBdkJPLEs7Ozs7OztBQXlCVjs2QkFDUztBQUNQLFVBQUlaLFFBQVEsSUFBWjtBQUNBQSxZQUFNUixPQUFOLENBQWNJLElBQWQsR0FBcUJJLE1BQU1hLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkMsVUFBcEIsQ0FBK0JDLFFBQXBEO0FBQ0FoQixZQUFNUSxNQUFOO0FBQ0E7QUFDQSxVQUFJUyxhQUFhQyxZQUFZLFlBQVc7QUFDdEMsWUFBSSxDQUFDbEIsTUFBTVIsT0FBTixDQUFjSSxJQUFuQixFQUF5QjtBQUN2QkksZ0JBQU1SLE9BQU4sQ0FBY0ksSUFBZCxHQUFxQkksTUFBTWEsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxVQUFwQixDQUErQkMsUUFBcEQ7QUFDQWhCLGdCQUFNUSxNQUFOO0FBQ0QsU0FIRCxNQUdPO0FBQ0xXLHdCQUFjRixVQUFkO0FBQ0Q7QUFDRixPQVBnQixFQU9kLEdBUGMsQ0FBakI7QUFRRDs7OztFQWxEZ0MsZUFBS0csUzs7a0JBQW5CL0IsSyIsImZpbGUiOiJpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgICBmb2N1c0ZsYWc6IGZhbHNlLFxuICAgICAgc2VuZFZhbDoge1xuICAgICAgICBjcmVhdGVUaW1lOiBudWxsLFxuICAgICAgICBtZXNzYWdlOiBudWxsLFxuICAgICAgICBtZXNzYWdlVHlwZTogJ1RFWFQnLFxuICAgICAgICB1c2VyOiB7fVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDkuovku7blpITnkIZcbiAgICBtZXRob2RzID0ge1xuICAgICAgaW5wdXQgKGV2ZW50KSB7XG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgICAgX3RoaXMuc2VuZFZhbC5tZXNzYWdlID0gZXZlbnQuZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgc2VuZCAoKSB7XG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgICAgLy8g5Yik5pat6L6T5YWl5qGG5Lit5piv6Z2e5pyJ5YaF5a65XG4gICAgICAgIGlmIChfdGhpcy5zZW5kVmFsLm1lc3NhZ2UgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyDliJvlu7rml7bpl7RcbiAgICAgICAgICBfdGhpcy5zZW5kVmFsLmNyZWF0ZVRpbWUgPSBwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApXG4gICAgICAgICAgX3RoaXMuJGVtaXQoJ2FkZENoYXQnLCBfdGhpcy5zZW5kVmFsKVxuXG4gICAgICAgICAgLy8g5riF56m66L6T5YWl5qGGXG4gICAgICAgICAgX3RoaXMuc2VuZFZhbC5tZXNzYWdlID0gbnVsbFxuICAgICAgICAgIF90aGlzLiRhcHBseSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHlhoXlrrnkuI3og73kuLrnqbonLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG9uTG9hZFxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIF90aGlzLnNlbmRWYWwudXNlciA9IF90aGlzLiRyb290LiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgICAgX3RoaXMuJGFwcGx5KClcbiAgICAgIC8vIOWQjOatpeeUqOaIt+aVsOaNrlxuICAgICAgbGV0IGFnYWluRnRlY2ggPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFfdGhpcy5zZW5kVmFsLnVzZXIpIHtcbiAgICAgICAgICBfdGhpcy5zZW5kVmFsLnVzZXIgPSBfdGhpcy4kcm9vdC4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm9cbiAgICAgICAgICBfdGhpcy4kYXBwbHkoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYWdhaW5GdGVjaClcbiAgICAgICAgfVxuICAgICAgfSwgNTAwKVxuICAgIH1cbiAgfVxuIl19