import { gorePlugin } from '@freesewing/plugin-gore'
import { base } from './base.mjs'

const pluginGore = (part) => {
  const { points, Point, options, macro } = part.shorthand()

  if (['gore', 'all'].indexOf(options.plugin) !== -1) {
    points.start = new Point(10, 10)
    macro('gore', {
      from: points.start,
      radius: options.goreRadius,
      gores: options.goreGoreNumber,
      extraLength: options.goreExtraLength,
      render: true,
    })
  }
  return part
}

export const gore = {
  name: 'plugintest.gore',
  plugins: gorePlugin,
  after: base,
  options: {
    goreRadius: { count: 20, min: 10, max: 30, menu: 'gore' },
    goreGoreNumber: { count: 6, min: 4, max: 8, menu: 'gore' },
    goreExtraLength: { count: 10, min: 0, max: 20, menu: 'gore' },
  },
  draft: pluginGore,
}
