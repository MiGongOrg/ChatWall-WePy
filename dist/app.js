'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wilddogWeappAll = require('./common/wilddog-weapp-all.js');

var _wilddogWeappAll2 = _interopRequireDefault(_wilddogWeappAll);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this2 = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this2.config = {
      pages: ['pages/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#372746',
        navigationBarTitleText: 'ChatWall',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: false
      }
      // 全局数据对象
    };
    _this2.globalData = {
      userInfo: null
    };

    _this2.use('requestfix');
    return _this2;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      var _this = this;

      // 获取用户信息
      _this.getUserInfo();

      // 野狗云
      var config = {
        syncURL: 'https://wd5619279824ctzdha.wilddogio.com',
        authDomain: 'wd5619279824ctzdha.wilddog.com'
        // wilddog 初始化
      };_wilddogWeappAll2.default.initializeApp(config);
      // Promise 处理用户登陆
      _wilddogWeappAll2.default.auth().signInWeapp().then(function (user) {
        console.log(user);
      }).catch(function (err) {
        console.log(err);
      });
      // 绑定数据
      _this.ref = _wilddogWeappAll2.default.sync().ref('chats');

      // _this.testAsync()
    }

    // 添加聊天数据

  }, {
    key: 'addChat',
    value: function addChat(text) {
      this.ref.push(text);
    }

    // 获取聊天数据

  }, {
    key: 'getChat',
    value: function getChat() {
      return this.ref;
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
    // 获取用户信息

  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var _this = this;
      if (_this.globalData.userInfo) {
        return _this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          // 性别 0：未知、1：男、2：女
          _this.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      var _this = this;
      _wilddogWeappAll2.default.sync().goOffline();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var _this = this;
      _wilddogWeappAll2.default.sync().goOnline();
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJfdGhpcyIsImdldFVzZXJJbmZvIiwic3luY1VSTCIsImF1dGhEb21haW4iLCJpbml0aWFsaXplQXBwIiwiYXV0aCIsInNpZ25JbldlYXBwIiwidGhlbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJyZWYiLCJzeW5jIiwidGV4dCIsInB1c2giLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY2IiLCJzdWNjZXNzIiwicmVzIiwiZ29PZmZsaW5lIiwiZ29PbmxpbmUiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBb0JFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsV0FqQmZBLE1BaUJlLEdBakJOO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLENBREE7QUFJUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFVBSGxCO0FBSU5DLGdDQUF3QixPQUpsQjtBQUtOQywrQkFBdUI7QUFMakI7QUFRVjtBQVpTLEtBaUJNO0FBQUEsV0FKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixXQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7Ozs7K0JBRVU7QUFDVCxVQUFJQyxRQUFRLElBQVo7O0FBRUE7QUFDQUEsWUFBTUMsV0FBTjs7QUFFQTtBQUNBLFVBQUlaLFNBQVM7QUFDWGEsaUJBQVMsMENBREU7QUFFWEMsb0JBQVk7QUFFZDtBQUphLE9BQWIsQ0FLQSwwQkFBUUMsYUFBUixDQUFzQmYsTUFBdEI7QUFDQTtBQUNBLGdDQUFRZ0IsSUFBUixHQUFlQyxXQUFmLEdBQTZCQyxJQUE3QixDQUFrQyxVQUFTQyxJQUFULEVBQWU7QUFDL0NDLGdCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDRCxPQUZELEVBRUdHLEtBRkgsQ0FFUyxVQUFTQyxHQUFULEVBQWM7QUFDckJILGdCQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDRCxPQUpEO0FBS0E7QUFDQVosWUFBTWEsR0FBTixHQUFZLDBCQUFRQyxJQUFSLEdBQWVELEdBQWYsQ0FBbUIsT0FBbkIsQ0FBWjs7QUFFQTtBQUNEOztBQUVEOzs7OzRCQUNTRSxJLEVBQU07QUFDYixXQUFLRixHQUFMLENBQVNHLElBQVQsQ0FBY0QsSUFBZDtBQUNEOztBQUVEOzs7OzhCQUNXO0FBQ1QsYUFBTyxLQUFLRixHQUFaO0FBQ0Q7OzswQkFFTUksQyxFQUFHO0FBQ1IsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTmQsd0JBQVFDLEdBQVIsQ0FBWWEsSUFBWjs7Ozs7Ozs7Ozs7Ozs7OztBQUVGOzs7O2dDQUNhQyxFLEVBQUk7QUFDZixVQUFJeEIsUUFBUSxJQUFaO0FBQ0EsVUFBSUEsTUFBTUgsVUFBTixDQUFpQkMsUUFBckIsRUFBK0I7QUFDN0IsZUFBT0UsTUFBTUgsVUFBTixDQUFpQkMsUUFBeEI7QUFDRDtBQUNELHFCQUFLRyxXQUFMLENBQWlCO0FBQ2Z3QixlQURlLG1CQUNOQyxHQURNLEVBQ0Q7QUFDWjtBQUNBMUIsZ0JBQU1ILFVBQU4sQ0FBaUJDLFFBQWpCLEdBQTRCNEIsSUFBSTVCLFFBQWhDO0FBQ0EwQixnQkFBTUEsR0FBR0UsSUFBSTVCLFFBQVAsQ0FBTjtBQUNEO0FBTGMsT0FBakI7QUFPRDs7OzZCQUVTO0FBQ1IsVUFBSUUsUUFBUSxJQUFaO0FBQ0EsZ0NBQVFjLElBQVIsR0FBZWEsU0FBZjtBQUNEOzs7NkJBRVM7QUFDUixVQUFJM0IsUUFBUSxJQUFaO0FBQ0EsZ0NBQVFjLElBQVIsR0FBZWMsUUFBZjtBQUNEOzs7O0VBN0YwQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgd2lsZGRvZyBmcm9tICcuL2NvbW1vbi93aWxkZG9nLXdlYXBwLWFsbCdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2luZGV4J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzM3Mjc0NicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdDaGF0V2FsbCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXHJcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgLy8g5YWo5bGA5pWw5o2u5a+56LGhXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG5cclxuICBvbkxhdW5jaCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXNcclxuXHJcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuICAgIF90aGlzLmdldFVzZXJJbmZvKClcclxuXHJcbiAgICAvLyDph47ni5fkupFcclxuICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgIHN5bmNVUkw6ICdodHRwczovL3dkNTYxOTI3OTgyNGN0emRoYS53aWxkZG9naW8uY29tJyxcclxuICAgICAgYXV0aERvbWFpbjogJ3dkNTYxOTI3OTgyNGN0emRoYS53aWxkZG9nLmNvbSdcclxuICAgIH1cclxuICAgIC8vIHdpbGRkb2cg5Yid5aeL5YyWXHJcbiAgICB3aWxkZG9nLmluaXRpYWxpemVBcHAoY29uZmlnKVxyXG4gICAgLy8gUHJvbWlzZSDlpITnkIbnlKjmiLfnmbvpmYZcclxuICAgIHdpbGRkb2cuYXV0aCgpLnNpZ25JbldlYXBwKCkudGhlbihmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSlcclxuICAgIC8vIOe7keWumuaVsOaNrlxyXG4gICAgX3RoaXMucmVmID0gd2lsZGRvZy5zeW5jKCkucmVmKCdjaGF0cycpXHJcblxyXG4gICAgLy8gX3RoaXMudGVzdEFzeW5jKClcclxuICB9XHJcblxyXG4gIC8vIOa3u+WKoOiBiuWkqeaVsOaNrlxyXG4gIGFkZENoYXQgKHRleHQpIHtcclxuICAgIHRoaXMucmVmLnB1c2godGV4dClcclxuICB9XHJcblxyXG4gIC8vIOiOt+WPluiBiuWkqeaVsOaNrlxyXG4gIGdldENoYXQgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVmXHJcbiAgfVxyXG5cclxuICBzbGVlcCAocykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgICAgIH0sIHMgKiAxMDAwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHRlc3RBc3luYyAoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICB9XHJcbiAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbiAgZ2V0VXNlckluZm8gKGNiKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICBpZiAoX3RoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICByZXR1cm4gX3RoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgIC8vIOaAp+WIqyAw77ya5pyq55+l44CBMe+8mueUt+OAgTLvvJrlpbNcclxuICAgICAgICBfdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25IaWRlICgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgIHdpbGRkb2cuc3luYygpLmdvT2ZmbGluZSgpXHJcbiAgfVxyXG5cclxuICBvblNob3cgKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgd2lsZGRvZy5zeW5jKCkuZ29PbmxpbmUoKVxyXG4gIH1cclxufVxyXG4iXX0=