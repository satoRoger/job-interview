import clsx from 'clsx';
import React from 'react';
import style from './container.module.scss';

type Props = { children?: React.ReactNode; className?: string };

export default function Container(props: Props) {
	return <div className={clsx(style.base, props.className)}>{props.children}</div>;
}
