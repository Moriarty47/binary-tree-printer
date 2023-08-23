import { type TreeNode } from './utils';
export type PrinterOptionMarks = {
    dash: string;
    lt: string;
    rt: string;
    lb: string;
    rb: string;
    joint: string;
};
export type PrinterOptions = {
    minLength: number;
    marks: PrinterOptionMarks;
};
export default function binaryTreePrinter(tree: TreeNode, options?: Partial<PrinterOptions>): string | null;
