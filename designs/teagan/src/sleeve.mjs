import { sleevecap } from '@freesewing/brian'

function teaganSleeve(part) {
  const { sa, Point, points, Path, paths, options, complete, paperless, macro, measurements } =
    part.shorthand()

  let height = points.bicepsRight.x * options.sleeveLength
  let width = measurements.biceps * (1 + options.bicepsEase) * (1 + options.sleeveEase)
  if (width > points.bicepsRight.x * 2) width = points.bicepsRight.x * 2
  points.hemLeft = new Point(width / -2, height)
  points.hemRight = new Point(width / 2, height)

  // Find top for grainline/dimensions later
  points.top = new Path()
    .move(points.capQ2)
    .curve(points.capQ2Cp2, points.capQ3Cp1, points.capQ3)
    .edge('top')

  paths.hemBase = new Path().move(points.hemLeft).line(points.hemRight).setRender(false)
  paths.saBase = new Path()
    .move(points.hemRight)
    .line(points.bicepsRight)
    .curve(points.bicepsRight, points.capQ1Cp1, points.capQ1)
    .curve(points.capQ1Cp2, points.capQ2Cp1, points.capQ2)
    .curve(points.capQ2Cp2, points.capQ3Cp1, points.capQ3)
    .curve(points.capQ3Cp2, points.capQ4Cp1, points.capQ4)
    .curve(points.capQ4Cp2, points.bicepsLeft, points.bicepsLeft)
    .line(points.hemLeft)
    .setRender(false)
  paths.seam = new Path()
    .move(points.hemLeft)
    .join(paths.hemBase)
    .join(paths.saBase)
    .close()
    .attr('class', 'fabric')

  // Complete pattern?
  if (complete) {
    points.title = points.gridAnchor.clone()
    macro('title', { at: points.title, nr: 2, title: 'sleeve' })
    macro('grainline', {
      from: new Point(points.top.x, points.hemLeft.y),
      to: points.top,
    })

    if (sa) {
      paths.sa = new Path()
        .move(points.hemLeft.shift(-90, sa * 3))
        .join(paths.hemBase.offset(sa * 3))
        .join(paths.saBase.offset(sa))
        .line(points.hemLeft.shift(-90, sa * 3))
        .close()
        .attr('class', 'fabric sa')
    }
  }

  // Paperless?
  if (paperless) {
    macro('hd', {
      from: points.hemLeft,
      to: points.hemRight,
      y: points.hemLeft.y + sa * 3 + 15,
    })
    macro('hd', {
      from: points.bicepsLeft,
      to: points.bicepsRight,
      y: points.hemLeft.y + sa * 3 + 30,
    })
    macro('vd', {
      from: points.hemRight,
      to: points.bicepsRight,
      x: points.bicepsRight.x + sa + 15,
    })
    macro('vd', {
      from: points.hemRight,
      to: new Path()
        .move(points.capQ2)
        .curve(points.capQ2Cp2, points.capQ3Cp1, points.capQ3)
        .edge('top'),
      x: points.bicepsRight.x + sa + 30,
    })
  }

  return part
}

export const sleeve = {
  name: 'teagan.sleeve',
  from: sleevecap,
  hideDependencies: true,
  options: {
    sleeveEase: { pct: 15, min: 5, max: 35, menu: 'style' },
  },
  draft: teaganSleeve,
}
