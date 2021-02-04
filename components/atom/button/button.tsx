import React from 'react';
import style from './button.module.scss';
import Children from '../../util/propsType/children';
import ClassName from '../../util/propsType/className';
import clsx from 'clsx';

type Props = Children &
	ClassName & {
		variant?: 'outline' | 'fullFilled';
	};

export default function Button(props: Props) {
	const touchStyle = {
		[style[props.variant]]: true,
	};
	return <button className={clsx(style.base, props.className, touchStyle)}>{props.children}</button>;
}
