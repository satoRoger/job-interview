import clsx from 'clsx';
import React from 'react';
import LinkText from '../../../atom/LinkText/linkText';
import ClassName from '../../../util/propsType/className';
import style from './navigationLink.module.scss';

type Props = ClassName & { text: string };

export default function NavigationLinkText(props: Props) {
	return <LinkText className={clsx(style.base, props.className)}>{props.text}</LinkText>;
}
