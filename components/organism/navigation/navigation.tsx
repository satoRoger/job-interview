import React from 'react';
import style from './navigation.module.scss';
import NavigationContainer from '../../molecule/navigation/navigationContainer/navigationContainer';
import NavigationLinkText from '../../molecule/navigation/navigationLinkText/navigationLink';
import NavigationLogo from '../../molecule/navigation/navigationLogo/navigationLogo';
import NavigationLinkList from '../../molecule/navigation/navigationLinkList/navigationLinkList';
import ClassName from '../../util/propsType/className';
import NavigationButtonGroup from '../../molecule/navigation/navigationButtonGroup/navigationButtonGroup';
import NavigationButton from '../../molecule/navigation/navigationButton/navigationButton';

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

type ButtonVariant = 'outline' | 'fullFilled';
const navigationButton: { text: string; variant: ButtonVariant }[] = [
	{
		text: 'Log in',
		variant: 'outline',
	},
	{
		text: 'Register',
		variant: 'fullFilled',
	},
];

type Props = ClassName;

export default function Navigation(props: Props) {
	return (
		<>
			<NavigationContainer className={style.container}>
				<NavigationLogo className={style.logo} />
				<NavigationLinkList className={style.linkList}>
					{navigationLinks.map((link) => (
						<NavigationLinkText key={link.text} text={link.text} className={style.linkText} />
					))}
				</NavigationLinkList>
				<NavigationButtonGroup className={style.buttonGroup}>
					{navigationButton.map((button) => (
						<NavigationButton className={style.button} variant={button.variant}>
							{button.text}
						</NavigationButton>
					))}
				</NavigationButtonGroup>
			</NavigationContainer>
		</>
	);
}
