import Children from '../../util/propsType/children';

type Props = Children;

export default function SectionTitle(props: Props) {
	return (
		<>
			<h1>{props.children}</h1>
		</>
	);
}
