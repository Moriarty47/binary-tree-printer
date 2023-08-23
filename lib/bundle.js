(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bTreePrinter"] = factory();
	else
		root["bTreePrinter"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ src; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./src/utils.ts
var EMPTY_CHAR = ' ';
var HASH_CHAR = '#';
var NULL_CHAR = 'NULL';
var isType = function isType(thing, type) {
  return Object.prototype.toString.call(thing).slice(8, -1) === type;
};
var isNumber = function isNumber(thing) {
  return isType(thing, 'Number');
};
var isString = function isString(thing) {
  return isType(thing, 'String');
};
var isArray = function isArray(thing) {
  return isType(thing, 'Array');
};
var isObject = function isObject(thing) {
  return isType(thing, 'Object');
};
var isVoid = function isVoid(thing) {
  return isType(thing, 'Null') || isType(thing, 'Undefined');
};
function isAllSameChar(str, char) {
  return new RegExp("^(".concat(char, ")\\1*$")).test(str);
}
function getCharLength(str) {
  return str.replace(/[^\x00-\xff]/g, '  ').length;
}
function is32Bit(char, i) {
  return char.codePointAt(i) > 0xffff;
}
function getCodePointLength(str) {
  var len = 0;
  for (var i = 0, strLen = str.length; i < strLen; i += 1) {
    if (is32Bit(str, i)) i++;
    len++;
  }
  return len;
}
function padStart(str, length, char) {
  var strLen = getCodePointLength(str);
  var padding = char.repeat(Math.max(0, length - strLen));
  return padding + str;
}
function padEnd(str, length, char) {
  var strLen = getCodePointLength(str);
  var padding = char.repeat(Math.max(0, length - strLen));
  return str + padding;
}
function padStartEnd(str, length) {
  var char1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_CHAR;
  var char2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : char1;
  var strLen = getCodePointLength(str);
  var paddingLen = Math.max(0, length - strLen);
  var leftPadingLen = Math.floor(paddingLen / 2);
  var rightPadingLen = paddingLen - leftPadingLen;
  return char1.repeat(leftPadingLen) + str + char2.repeat(rightPadingLen);
}
function emptyPadStart(length) {
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var pad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_CHAR;
  return padStart(str, length, pad);
}
function getTreeDepth(tree) {
  if (!tree) return 0;
  return Math.max(getTreeDepth(tree.left), getTreeDepth(tree.right)) + 1;
}
function levelOrderTraversal(tree) {
  /** @type {string[][]} */
  var nodesArr = [];
  var queue = [tree];
  var treeDepth = getTreeDepth(tree);
  var nodesNum = Math.pow(2, treeDepth) - 1;
  var maxNumber = Number.MIN_SAFE_INTEGER;
  while (!queue.every(function (i) {
    return i === null;
  })) {
    var levelSize = queue.length;
    /** @type {string[]} */
    var levelNodes = [];
    for (var i = 0; i < levelSize; i += 1) {
      var _node$value;
      var node = queue.shift();
      var value = node ? (_node$value = node.value) !== null && _node$value !== void 0 ? _node$value : node.val : null;
      if (isNumber(value) && value > maxNumber) {
        maxNumber = value;
      } else if (isString(value)) {
        if (isNaN(value)) {
          var charLength = getCharLength(value);
          if (charLength > maxNumber) {
            maxNumber = charLength;
          }
        } else {
          value = Number(value);
          value > maxNumber && (maxNumber = value);
        }
      } else if (isVoid(value)) {
        value = NULL_CHAR;
      }
      levelNodes.push("".concat(value));
      queue.push((node === null || node === void 0 ? void 0 : node.left) || null);
      queue.push((node === null || node === void 0 ? void 0 : node.right) || null);
    }
    nodesArr.push(levelNodes);
  }
  return [nodesArr, treeDepth, nodesNum, maxNumber];
}
;// CONCATENATED MODULE: ./src/printer.ts


var defaults = {
  minLength: 2,
  marks: {
    dash: '━',
    lt: '┏',
    rt: '┓',
    lb: '┗',
    rb: '┛',
    joint: '┻'
  }
};
var simpleMerge = function simpleMerge(source) {
  var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var newObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.keys(source).forEach(function (key) {
    if (isObject(source[key])) {
      newObj[key] = simpleMerge(source[key], object[key], {});
      return;
    }
    newObj[key] = object[key] || source[key];
  });
  return newObj;
};
function binaryTreePrinter(tree) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = simpleMerge(defaults, options);
  var _levelOrderTraversal = levelOrderTraversal(tree),
    _levelOrderTraversal2 = _slicedToArray(_levelOrderTraversal, 4),
    nodesArr = _levelOrderTraversal2[0],
    treeDepth = _levelOrderTraversal2[1],
    nodesNum = _levelOrderTraversal2[2],
    maxNumber = _levelOrderTraversal2[3];
  if (nodesArr.length === 1 && nodesArr[0][0] === EMPTY_CHAR) return null;
  createMarksArr(nodesArr, config, treeDepth, nodesNum, maxNumber);
  return generateTreeStr(nodesArr, config);
}
function generateTreeStr(nodesArr, config) {
  var marks = config.marks;
  var treeStr = '';
  nodesArr.forEach(function (nodes, idx) {
    var branchStr = '';
    if (idx === 0) {
      branchStr += nodes.join('') + '\n';
    } else {
      var temp = '';
      var useBranch = false;
      nodes.forEach(function (node) {
        var strLength = getCodePointLength(node);
        var isSameEmptyChar = isAllSameChar(node, EMPTY_CHAR);
        var isSameHashChar = isAllSameChar(node, HASH_CHAR);
        if (!useBranch && isSameEmptyChar) {
          branchStr += emptyPadStart(strLength);
        } else if (!useBranch && isSameHashChar) {
          useBranch = true;
          branchStr += padStartEnd(marks.lb, strLength, EMPTY_CHAR, marks.dash);
        } else if (!useBranch && !isSameEmptyChar) {
          useBranch = true;
          branchStr += padStartEnd(marks.lt, strLength, EMPTY_CHAR, marks.dash);
        } else if (useBranch && isSameEmptyChar) {
          branchStr += padEnd(marks.dash, strLength, marks.dash);
        } else if (useBranch && isSameHashChar) {
          branchStr += strLength > 1 ? padStartEnd(marks.joint, strLength, marks.dash) : marks.joint;
        } else if (useBranch && !isSameEmptyChar && !isSameHashChar) {
          useBranch = false;
          branchStr += padStartEnd(marks.rt, strLength, marks.dash, EMPTY_CHAR);
        }
        // current level data
        temp += isSameHashChar ? emptyPadStart(strLength) : node;
      });
      if (branchStr.endsWith(marks.dash)) {
        //  deal with the right subtree is null
        var turnStrIndex = branchStr.lastIndexOf(marks.joint);
        var turnStr = branchStr.slice(0, turnStrIndex);
        branchStr = turnStr + marks.rb;
      }
      branchStr += '\n' + temp + '\n';
    }
    treeStr += branchStr;
  });
  return treeStr;
}
function createMarksArr(nodesArr, config, treeDepth, nodesNum, maxNumber) {
  var maxNumLen = Math.max(config.minLength, getCharLength(String(maxNumber)));
  var maxNumberLength = maxNumLen % 2 === 0 ? maxNumLen + 1 : maxNumLen;
  var emptySpace = emptyPadStart(maxNumberLength);
  var nodesLength = nodesNum;
  var uniqueHashes = [];
  nodesArr.forEach(function (nodes, level) {
    var lvGap = Math.pow(2, treeDepth - level);
    var lvNodes = Array(nodesNum).fill(emptySpace);
    var nodeIdx = nodesLength = (nodesLength - 1) / 2;
    nodes.forEach(function (node, idx) {
      if (idx !== 0) {
        var midIdx = nodeIdx + lvGap / 2;
        if (node.includes(NULL_CHAR)) {
          if (idx - 1 >= 0 && nodes[idx - 1].includes(NULL_CHAR)) {
            uniqueHashes[midIdx] = true;
          }
        }
        if (!uniqueHashes[midIdx]) {
          uniqueHashes[midIdx] = true;
          lvNodes[midIdx] = emptyPadStart(maxNumberLength, HASH_CHAR, HASH_CHAR);
        }
        nodeIdx += lvGap;
      }
      lvNodes[nodeIdx] = padStartEnd(node.includes(NULL_CHAR) ? EMPTY_CHAR : node, maxNumberLength);
    });
    console.log(lvNodes);
    nodesArr[level] = lvNodes;
  });
}
;// CONCATENATED MODULE: ./src/index.ts

/* harmony default export */ const src = (binaryTreePrinter);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});