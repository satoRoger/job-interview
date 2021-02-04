import React from 'react';
import style from './navigationLinkList.module.scss';
import FlexContainer from '../../../atom/flexContainer/flexContainer';
import ClassName from '../../../util/propsType/className';
import Children from '../../../util/propsType/children';
import clsx from 'clsx';

type Props = ClassName & Children;

export default function NavigationLinkList(props: Props) {
	return <FlexContainer className={clsx(style.base, props.className)}>{props.children}</FlexContainer>;
}
