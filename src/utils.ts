export const EMPTY_CHAR = ' ';
export const HASH_CHAR = '#';
export const NULL_CHAR = 'NULL';

type ThingType = 'String' | 'Number' | 'Array' | 'Object' | 'Null' | 'Undefined';

export const isType = (thing: unknown, type: ThingType): boolean => Object.prototype.toString.call(thing).slice(8, -1) === type;

export const isNumber = (thing: unknown): thing is number => isType(thing, 'Number');
export const isString = (thing: unknown): thing is string => isType(thing, 'String');
export const isArray = (thing: unknown): thing is any[] => isType(thing, 'Array');
export const isObject = (thing: unknown): thing is {} => isType(thing, 'Object');
export const isVoid = (thing: unknown): thing is null | undefined => isType(thing, 'Null') || isType(thing, 'Undefined');

export function isAllSameChar(str: string, char: string): boolean {
  return new RegExp(`^(${char})\\1*$`).test(str);
}

export function getCharLength(str: string): number {
  return str.replace(/[^\x00-\xff]/g, '  ').length;
}

export function is32Bit(char: string, i: number): boolean {
  return char.codePointAt(i)! > 0xffff;
}

export function getCodePointLength(str: string): number {
  let len = 0;
  for (let i = 0, strLen = str.length; i < strLen; i += 1) {
    if (is32Bit(str, i)) i++;
    len++;
  }
  return len;
}

export function padStart(str: string, length: number, char: string): string {
  const strLen = getCodePointLength(str);
  const padding = char.repeat(Math.max(0, length - strLen));
  return padding + str;
}

export function padEnd(str: string, length: number, char: string): string {
  const strLen = getCodePointLength(str);
  const padding = char.repeat(Math.max(0, length - strLen));
  return str + padding;
}

export function padStartEnd(str: string, length: number, char1: string | undefined = EMPTY_CHAR, char2: string | undefined = char1): string {
  const strLen = getCodePointLength(str);
  const paddingLen = Math.max(0, length - strLen);
  const leftPadingLen = Math.floor(paddingLen / 2);
  const rightPadingLen = paddingLen - leftPadingLen;
  return char1.repeat(leftPadingLen) + str + char2.repeat(rightPadingLen);
}

export function emptyPadStart(length: number, str: string | undefined = '', pad: string | undefined = EMPTY_CHAR): string {
  return padStart(str, length, pad);
}

export type TreeNode = {
  val?: number | string;
  left: TreeNode;
  right: TreeNode;
} & {
  value?: number | string;
  left: TreeNode;
  right: TreeNode;
};

export function getTreeDepth(tree: TreeNode): number {
  if (!tree) return 0;
  return Math.max(
    getTreeDepth(tree.left),
    getTreeDepth(tree.right)
  ) + 1;
}

export function levelOrderTraversal(tree: TreeNode): [string[][], number, number, number] {
  /** @type {string[][]} */
  const nodesArr: string[][] = [];
  const queue: (TreeNode | null)[] = [tree];
  const treeDepth = getTreeDepth(tree);
  const nodesNum = 2 ** (treeDepth) - 1;
  let maxNumber = Number.MIN_SAFE_INTEGER;
  while (!queue.every(i => i === null)) {
    const levelSize = queue.length;
    /** @type {string[]} */
    const levelNodes: string[] = [];
    for (let i = 0; i < levelSize; i += 1) {
      const node = queue.shift();
      let value = node ? (node.value ?? node.val) : null;
      if (isNumber(value) && value > maxNumber) {
        maxNumber = value;
      } else if (isString(value)) {
        if (isNaN(value as unknown as number)) {
          const charLength = getCharLength(value);
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
      levelNodes.push(`${value}`);
      queue.push(node?.left || null);
      queue.push(node?.right || null);
    }
    nodesArr.push(levelNodes);
  }
  return [
    nodesArr,
    treeDepth,
    nodesNum,
    maxNumber,
  ];
}