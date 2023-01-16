const plugin = require('tailwindcss/plugin')

function generateSpacing(spacing) {
	const value = spacing.match(/[+-]?\d+(\.\d+)?/)[0]
	const unit = spacing.slice(spacing.indexOf(value) + value.length)

	return {
		'--gr-row-margin': -value / 2 + unit,
		'--gr-col-padding': value / 2 + unit,
	}
}

module.exports = plugin(
	({ addComponents, matchComponents, theme }) => {
		addComponents({
			'.row': {
				...generateSpacing('1.5rem'),
				flex: 1,
				display: 'flex',
				margin: 'var(--gr-row-margin)',
				flexWrap: 'wrap',
			},
		})

		matchComponents(
			{
				col: value => ({
					width: (value / 12) * 100 + '%',
					padding: 'var(--gr-col-padding)',
				}),
			},
			{ values: theme('col') }
		)

		matchComponents(
			{
				gutter: value => generateSpacing(value),
			},
			{ values: theme('gutter') }
		)
	},
	{
		theme: {
			col: Array.from(Array(12)).reduce(
				(pre, cur, i) => ({ ...pre, [i + 1]: i + 1 }),
				{}
			),
			gutter: {
				xs: '0.75rem',
				sm: '1rem',
				md: '1.25rem',
				nm: '1.5rem',
				lg: '1.75rem',
				xl: '2rem',
			},
		},
	}
)
