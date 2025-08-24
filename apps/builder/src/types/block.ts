type BaseBlock = {
	id: string;
	type: string;
	label: string;
}

type Title = {
	props: {
		align: 'left' | 'center' | 'right';
		content: string;
	}
} & BaseBlock;

type Image = {
	props: {
		src: string;
		alt: string;
	}
} & BaseBlock;

export type Block = Title | Image;