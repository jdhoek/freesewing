import { box } from './shared.mjs'
import { pluginBundle } from '@freesewing/plugin-bundle'

function legendButtons(part) {
  const { points, Point, snippets, Snippet } = part.shorthand()

  points.a = new Point(30, 10)
  points.atxt = new Point(30, 20).attr('data-text', 'button').attr('data-text-class', 'center')
  snippets.a = new Snippet('button', points.a)

  points.b = new Point(80, 10)
  points.btxt = new Point(80, 20).attr('data-text', 'buttonhole').attr('data-text-class', 'center')
  snippets.b = new Snippet('buttonhole', points.b).attr('data-rotate', 90)

  return box(part, 120, 30)
}

export const buttons = {
  name: 'legend.buttons',
  plugins: pluginBundle,
  draft: legendButtons,
}
