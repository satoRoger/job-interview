import clsx from 'clsx';
import Children from '../../util/propsType/children';
import ClassName from '../../util/propsType/className';
import style from './typography.module.scss';

export type TypographyProps = {
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption';
};
type Props = Children & ClassName & TypographyProps;

export default function Typography(props: Props) {
    
	return (
		<>
			<p className={clsx(style.base, props.className)}>{props.children}</p>
		</>
	);
}
