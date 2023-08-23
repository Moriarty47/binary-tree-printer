declare function binaryTreePrinter(tree: TreeNode, options?: Partial<PrinterOptions>): string | null;
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
export type TreeNode = {
	val?: number | string;
	left: TreeNode;
	right: TreeNode;
} & {
	value?: number | string;
	left: TreeNode;
	right: TreeNode;
};

export {
	binaryTreePrinter as default,
};

