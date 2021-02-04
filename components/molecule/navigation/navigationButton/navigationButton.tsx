import React from 'react';
import Button from '../../../atom/button/button';
import style from './navigationButton.module.scss';
import Children from '../../../util/propsType/children';
import ClassName from '../../../util/propsType/className';
import clsx from 'clsx';

type Props = Children &
	ClassName & {
		variant?: 'outline' | 'fullFilled';
	};

export default function NavigationButton(props: Props) {
	return (
		<Button className={clsx(style.base, props.className)} variant={props.variant}>
			{props.children}
		</Button>
	);
}
