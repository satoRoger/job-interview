import React from 'react';
import style from './navigationContainer.module.scss';
import Container from '../../../atom/container/container';

type Props = { children?: React.ReactNode };

export default function NavigationContainer(props: Props) {
	return <Container className={style.base}>{props.children}</Container>;
}
