import React from 'react';
import Button from '../../../atom/button/button';
import style from './navigationButton.module.scss';
import Children from '../../../util/propsType/children';
import ClassName from '../../../util/propsType/className';
import clsx from 'clsx';

type Props = Children & ClassName;

export default function NavigationContainer(props: Props) {
	return <Button className={clsx(style.base, props.className)}>{props.children}</Button>;
}
