import React from 'react';
import style from './button.module.scss';
import Children from '../../util/propsType/children';
import ClassName from '../../util/propsType/className';
import clsx from 'clsx';

type Props = Children & ClassName;

export default function Button(props: Props) {
	return <button className={clsx(style.base, props.className)}>{props.children}</button>;
}
