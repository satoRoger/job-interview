import React from 'react';
import Container from '../container/container';
import style from './flexContainer.module.scss';
import Children from '../../util/propsType/children';
import ClassName from '../../util/propsType/className';
import clsx from 'clsx';

type Props = Children & ClassName;

export default function FlexContainer(props: Props) {
	return <Container className={clsx(style.base, props.className)}>{props.children}</Container>;
}
