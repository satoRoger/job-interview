import React from 'react';
import style from './indexPage.module.scss';
import NavigationContainer from '../../component/navigation/navigationContainer/navigationContainer';
import NavigationLinkText from '../../component/navigation/navigationLinkText/navigationLink';
import NavigationLogo from '../../component/navigation/navigationLogo/navigationLogo';
import NavigationLinkList from '../../component/navigation/navigationLinkList/navigationLinkList';
import FlexItem from '../../atom/flexItem/flexItem';
import ClassName from '../../util/propsType/className';

type Props = {};

const navigationLinks = [
	{
		text: 'Features',
	},
	{
		text: 'Pricing',
	},
	{
		text: 'Community',
	},
	{
		text: 'Support',
	},
];

const navigationButton = [
	{
		text: 'Log in',
	},
	{
		text: 'Register',
	},
];

export default function IndexPage(props: Props) {
	return (
		<>
			<NavigationContainer>
				<NavigationLogo className={style.logo} />
				<NavigationLinkList className={style.linkList}>
					{navigationLinks.map((link) => (
						<NavigationLinkText key={link.text} text={link.text} className={style.linkText} />
					))}
				</NavigationLinkList>
			</NavigationContainer>
		</>
	);
}
