import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import logo from '../public/logo.png';

const theme = create({
    base: 'dark',
    brandTitle: 'Recordify',
    // brandUrl: 'https://example.com',
    brandImage: logo,
});

addons.setConfig({
    theme,
});
