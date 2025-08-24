import type { Block } from '@/types/block';

export const blocks: Block[] = [
	{
		id: '1',
		type: 'title',
		label: '标题',
		props: {
			align: 'left',
			content: '这是一个标题'
		}
	},
	{
		id: '2',
		type: 'image',
		label: '图片',
		props: {
			src: 'https://vuejs.org/images/logo.png',
			alt: 'Vue Logo'
		}
	}
];