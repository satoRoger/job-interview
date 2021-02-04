import React from 'react';
import style from './navigationButtonGroup.module.scss';
import Container from '../../../atom/container/container';
import Children from '../../../util/propsType/children';
import ClassName from '../../../util/propsType/className';
import clsx from 'clsx';
import FlexContainer from '../../../atom/flexContainer/flexContainer';

type Props = Children & ClassName;

export default function NavigationButtonGroup(props: Props) {
	return <FlexContainer className={clsx(style.base, props.className)}>{props.children}</FlexContainer>;
}
