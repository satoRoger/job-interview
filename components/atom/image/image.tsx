import clsx from 'clsx';
import React from 'react';
import style from './image.module.scss';

type Props = { className?: string };

export default function Image(props: Props) {
	return <img src="logo.PNG" className={clsx(style.base, props.className)} />;
}
