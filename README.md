# `@nebula/binary-tree-printer`

### A tool used for printing a binary tree structure in a visualizing way.

## Install

```sh
npm install @n3bula/binary-tree-printer
# or
yarn add @n3bula/binary-tree-printer
# or
pnpm add @n3bula/binary-tree-printer
```

## Use

### ESModule / CommonJS

```js
import bTreePrinter from '@nebula/binary-tree-printer';
// const bTreePrinter = require('@nebula/binary-tree-printer');

console.log(
  bTreePrinter({
    value: 1,
    left: null,
    right: {
      value: 2,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
  }),
);
//          1
//          ┗━━━━━┓
//                2
//             ┏━━┻━━┓
//             3     4
console.log(
  bTreePrinter({
    value: 1,
    left: {
      value: 2,
      left: {
        value: 4,
        left: {
          value: 8,
          left: null,
          right: null,
        },
        right: {
          value: 9,
          left: null,
          right: null,
        },
      },
      right: {
        value: 5,
        left: {
          value: 10,
          left: null,
          right: null,
        },
        right: {
          value: 11,
          left: null,
          right: null,
        },
      },
    },
    right: {
      value: 3,
      left: {
        value: 6,
        left: {
          value: 12,
          left: null,
          right: null,
        },
        right: {
          value: 13,
          left: null,
          right: null,
        },
      },
      right: {
        value: 7,
        left: {
          value: 14,
          left: null,
          right: null,
        },
        right: {
          value: 15,
          left: null,
          right: null,
        },
      },
    },
  }),
);
//                      1
//          ┏━━━━━━━━━━━┻━━━━━━━━━━━┓
//          2                       3
//    ┏━━━━━┻━━━━━┓           ┏━━━━━┻━━━━━┓
//    4           5           6           7
// ┏━━┻━━┓     ┏━━┻━━┓     ┏━━┻━━┓     ┏━━┻━━┓
// 8     9    10    11    12    13    14    15
```

### CDN

```html
<body>
  <script src="../lib/bundle.min.js"></script>
  <script>
    console.log(
      bTreePrinter(
        {
          value: 1,
          left: null,
          right: {
            value: '😀',
            left: {
              value: 3,
              left: null,
              right: null,
            },
            right: {
              value: 4,
              left: null,
              right: null,
            },
          },
        },
        {
          minLength: 5,
          marks: {
            dash: '-',
            lb: '^',
            joint: '^',
          },
        },
      ),
    );
  </script>
</body>
```

## Options

| option      | value  | description                 |
| :---------- | :----- | :-------------------------- |
| minLength   | number | padding length (default: 2) |
| marks       | object | tree branches placeholder   |
| marks.dash  | string | (default: '━')              |
| marks.lt    | string | (default: '┏')              |
| marks.rt    | string | (default: '┓')              |
| marks.lb    | string | (default: '┗')              |
| marks.rb    | string | (default: '┛')              |
| marks.joint | string | (default: '┻')              |

## Author

- [Morairty47](https://github.com/Moriarty47)

## License

[The MIT License(MIT)](https://github.com/Moriarty47/binary-tree-printer/blob/main/LICENSE)

<style>
  .highlight pre span.pl-c {
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace !important;
  }
</style>
