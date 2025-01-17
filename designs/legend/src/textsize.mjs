import { box } from './shared.mjs'
import { pluginBundle } from '@freesewing/plugin-bundle'

function legendTextSize(part) {
  const { points, Point, paths, Path } = part.shorthand()

  points.xxxs1 = new Point(0, 10)
  points.xxxs2 = new Point(10, 10)
  paths.xxxs = new Path()
    .move(points.xxxs1)
    .line(points.xxxs2)
    .attr('class', 'size-3XS')
    .attr('data-text', '3XS')
    .attr('data-text-class', 'center text-xs')

  points.xxs1 = new Point(12, 10)
  points.xxs2 = new Point(22, 10)
  paths.xxs = new Path()
    .move(points.xxs1)
    .line(points.xxs2)
    .attr('class', 'size-2XS')
    .attr('data-text', '2XS')
    .attr('data-text-class', 'center text-xs')

  points.xs1 = new Point(24, 10)
  points.xs2 = new Point(34, 10)
  paths.xs = new Path()
    .move(points.xs1)
    .line(points.xs2)
    .attr('class', 'size-XS')
    .attr('data-text', 'XS')
    .attr('data-text-class', 'center text-xs')

  points.s1 = new Point(36, 10)
  points.s2 = new Point(46, 10)
  paths.s = new Path()
    .move(points.s1)
    .line(points.s2)
    .attr('class', 'size-S')
    .attr('data-text', 'S')
    .attr('data-text-class', 'center text-xs')

  points.m1 = new Point(48, 10)
  points.m2 = new Point(58, 10)
  paths.m = new Path()
    .move(points.m1)
    .line(points.m2)
    .attr('class', 'size-M')
    .attr('data-text', 'M')
    .attr('data-text-class', 'center text-xs')

  points.l1 = new Point(60, 10)
  points.l2 = new Point(70, 10)
  paths.l = new Path()
    .move(points.l1)
    .line(points.l2)
    .attr('class', 'size-L')
    .attr('data-text', 'L')
    .attr('data-text-class', 'center text-xs')

  points.xl1 = new Point(72, 10)
  points.xl2 = new Point(82, 10)
  paths.xl = new Path()
    .move(points.xl1)
    .line(points.xl2)
    .attr('class', 'size-XL')
    .attr('data-text', 'XL')
    .attr('data-text-class', 'center text-xs')

  points.xxl1 = new Point(84, 10)
  points.xxl2 = new Point(96, 10)
  paths.xxl = new Path()
    .move(points.xxl1)
    .line(points.xxl2)
    .attr('class', 'size-2XL')
    .attr('data-text', '2XL')
    .attr('data-text-class', 'center text-xs')

  points.xxxl1 = new Point(98, 10)
  points.xxxl2 = new Point(108, 10)
  paths.xxxl = new Path()
    .move(points.xxxl1)
    .line(points.xxxl2)
    .attr('class', 'size-3XL')
    .attr('data-text', '3XL')
    .attr('data-text-class', 'center text-xs')

  points.xxxxl1 = new Point(110, 10)
  points.xxxxl2 = new Point(120, 10)
  paths.xxxxl = new Path()
    .move(points.xxxxl1)
    .line(points.xxxxl2)
    .attr('class', 'size-4XL')
    .attr('data-text', '4XL')
    .attr('data-text-class', 'center text-xs')

  points.m2m1 = new Point(0, 17)
  points.m2m2 = new Point(120, 17)
  paths.m2m = new Path()
    .move(points.m2m1)
    .line(points.m2m2)
    .attr('class', 'made-to-measure')
    .attr('data-text', 'madeToMeasure')
    .attr('data-text-class', 'center text-xs')

  return box(part, 120, 20)
}

export const textSize = {
  name: 'legend.textSize',
  plugins: pluginBundle,
  draft: legendTextSize,
}
