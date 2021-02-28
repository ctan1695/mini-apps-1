/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      player_one: 1,\n      player_two: 2,\n      current_player: 1,\n      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],\n      game_over: false,\n      winner: 0,\n      game_over_message: ''\n    };\n    _this.startGame = _this.startGame.bind(_assertThisInitialized(_this));\n    _this.changePlayer = _this.changePlayer.bind(_assertThisInitialized(_this));\n    _this.play = _this.play.bind(_assertThisInitialized(_this));\n    _this.checkHorizontalWin = _this.checkHorizontalWin.bind(_assertThisInitialized(_this));\n    _this.checkVerticalWin = _this.checkVerticalWin.bind(_assertThisInitialized(_this));\n    _this.checkPositiveDiagonal = _this.checkPositiveDiagonal.bind(_assertThisInitialized(_this));\n    _this.checkNegativeDiagonal = _this.checkNegativeDiagonal.bind(_assertThisInitialized(_this));\n    _this.checkWinner = _this.checkWinner.bind(_assertThisInitialized(_this));\n    _this.checkAnyWin = _this.checkAnyWin.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"startGame\",\n    value: function startGame() {\n      this.setState({\n        game_over_message: '',\n        current_player: this.state.player_one,\n        board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]\n      });\n    }\n  }, {\n    key: \"changePlayer\",\n    value: function changePlayer() {\n      if (this.state.current_player === this.state.player_one) {\n        return this.state.player_two;\n      } else {\n        return this.state.player_one;\n      }\n    }\n  }, {\n    key: \"play\",\n    value: function play(colIndex) {\n      var _this2 = this;\n\n      if (!this.state.gameOver) {\n        var board = this.state.board;\n\n        for (var i = 5; i >= 0; i--) {\n          if (board[i][colIndex] === 0) {\n            board[i][colIndex] = this.state.current_player;\n            break;\n          }\n        }\n\n        var nextPlayer = this.changePlayer();\n        var winner = 0;\n\n        if (this.checkAnyWin(this.state.player_one)) {\n          winner = this.state.player_one;\n        } else if (this.checkAnyWin(this.state.player_two)) {\n          winner = this.state.player_two;\n        }\n\n        this.setState({\n          board: board,\n          current_player: nextPlayer,\n          winner: winner\n        }, function () {\n          if (_this2.checkWinner()) {\n            _this2.setState({\n              game_over_message: \"Game over, Player \".concat(_this2.state.winner, \" won!\"),\n              game_over: true\n            }, function () {\n              console.log('this.state: ', _this2.state);\n            });\n          } else if (_this2.state.game_over === true && _this2.state.winner === 0) {\n            _this2.setState({\n              game_over_message: \"Game over, there is a tie!\"\n            });\n          }\n        });\n      }\n    }\n  }, {\n    key: \"checkHorizontalWin\",\n    value: function checkHorizontalWin(player) {\n      var board = this.state.board;\n      var winner = false;\n\n      for (var r = 0; r < board.length; r++) {\n        if (!winner) {\n          var row = board[r];\n\n          if (row.includes(player)) {\n            for (var c = 0; c < row.length; c++) {\n              if (row[c] === player && row[c + 1] === player && row[c + 2] === player && row[c + 3] === player) {\n                winner = true;\n                return winner;\n              }\n            }\n          }\n        }\n      }\n\n      return winner;\n    }\n  }, {\n    key: \"checkVerticalWin\",\n    value: function checkVerticalWin(player) {\n      var board = this.state.board;\n      var winner = false;\n\n      for (var r = 3; r < board.length; r++) {\n        for (var c = 0; c < board[r].length; c++) {\n          if (board[r][c] === player && board[r - 1][c] === player && board[r - 2][c] === player && board[r - 3][c] === player) {\n            return true;\n          }\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"checkPositiveDiagonal\",\n    value: function checkPositiveDiagonal(player) {\n      var board = this.state.board;\n\n      for (var r = 3; r < board.length; r++) {\n        for (var c = 0; c < 4; c++) {\n          if (board[r][c] === player && board[r - 1][c + 1] === player && board[r - 2][c + 2] === player && board[r - 3][c + 3] === player) {\n            return true;\n          }\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"checkNegativeDiagonal\",\n    value: function checkNegativeDiagonal(player) {\n      var board = this.state.board;\n\n      for (var r = 3; r < board.length; r++) {\n        for (var c = 3; c < 7; c++) {\n          if (board[r][c] === player && board[r - 1][c - 1] === player && board[r - 2][c - 2] === player && board[r - 3][c - 3] === player) {\n            return true;\n          }\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"checkAnyWin\",\n    value: function checkAnyWin(player) {\n      if (this.checkHorizontalWin(player) || this.checkVerticalWin(player) || this.checkPositiveDiagonal(player) || this.checkNegativeDiagonal(player)) {\n        return true;\n      }\n\n      var board = this.state.board;\n\n      for (r = 0; r < board.length; r++) {\n        var row = board[r];\n\n        if (row.includes(0)) {\n          return false;\n        }\n      }\n\n      this.setState({\n        game_over: true\n      });\n    }\n  }, {\n    key: \"checkWinner\",\n    value: function checkWinner() {\n      console.log('check winner');\n      console.log('this.state.winner: ', this.state.winner);\n\n      if (this.state.winner !== 0) {\n        console.log('true');\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"button\", {\n        \"class\": \"new-game\",\n        onClick: this.startGame\n      }, \"New Game\"), /*#__PURE__*/React.createElement(\"div\", null, this.state.board.map(function (row, i) {\n        return /*#__PURE__*/React.createElement(Row, {\n          num: i,\n          row: row,\n          play: _this3.play\n        });\n      })), /*#__PURE__*/React.createElement(\"div\", {\n        id: \"message\"\n      }, this.state.game_over_message));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nvar Row = function Row(props) {\n  return /*#__PURE__*/React.createElement(\"div\", null, props.row.map(function (slot, i) {\n    return /*#__PURE__*/React.createElement(Slot, {\n      value: slot,\n      colIndex: i,\n      play: props.play\n    });\n  }));\n};\n\nvar Slot = function Slot(props) {\n  var slotValue = 0;\n\n  if (props.value === 1) {\n    slotValue = 1;\n  } else if (props.value === 2) {\n    slotValue = 2;\n  }\n\n  return /*#__PURE__*/React.createElement(\"p1\", {\n    \"class\": \"slot\",\n    onClick: function onClick() {\n      props.play(props.colIndex);\n    }\n  }, \"     \", slotValue, \"    \");\n};\n\nvar container = document.querySelector('#app');\nReactDOM.render( /*#__PURE__*/React.createElement(App, null), container);\n\n//# sourceURL=webpack://challenge_4/./client/app.jsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/app.jsx"]();
/******/ 	
/******/ })()
;