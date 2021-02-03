import React from 'react';
import Image from '../../../atom/image/image';
import style from './navigationLogo.module.scss';
import Container from '../../../atom/container/container';
import ClassName from '../../../util/propsType/className';
import clsx from 'clsx';

type Props = ClassName;

export default function NavigationLogo(props: Props) {
	return (
		<Container className={clsx(style.base, props.className)}>
			<Image />
		</Container>
	);
}
