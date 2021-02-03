import React from 'react';
import style from './linkText.module.scss';
import ClassName from '../../util/propsType/className';
import Children from '../../util/propsType/children';
import clsx from 'clsx';

type Props = ClassName & Children;

export default function LinkText(props: Props) {
	return <a className={clsx(style.base,props.className)}>{props.children}</a>;
}
