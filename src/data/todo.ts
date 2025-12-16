import type { TodoConfig } from "@/types/config";

export const todoConfig: TodoConfig = {
	enable: true,
	title: "待办事项",
	items: [
		{ content: "继续优化博客", completed: true },
		{ content: "博客背景", completed: true },
		{ content: "毛玻璃边框", completed: false },
		{ content: "修复浏览数", completed: true },
		{ content: "多写文章", completed: false },
	],
};
