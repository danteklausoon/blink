const path = require('path');

module.exports = {
    i18n: {
		locales: ['pt_br', 'en', 'es'],
		defaultLocale: 'pt_br',
		localeDetection: false,
        localePath: path.resolve('./public/locales')
	},

    reloadOnPrerender: process.env.NODE_ENV === 'development'
}