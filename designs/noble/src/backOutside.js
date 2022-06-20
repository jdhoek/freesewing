export default function (part) {
  let {
    utils,
    store,
    sa,
    Point,
    points,
    Path,
    paths,
    Snippet,
    snippets,
    options,
    measurements,
    complete,
    paperless,
    macro,
  } = part.shorthand()

  
  paths.dart = new Path()
    .move(points.shoulderDart)
    .curve(points.shoulderDart, points.shoulderDartCpUp, points.dartTip)
    .curve(points.shoulderDartCpDown, points.dartRightCp, points.dartBottomRight)
    .setRender(false)
  
  paths.outsideSeam = new Path()
    .move(points.dartBottomRight)
    .line(points.waistSide)
    .curve_(points.waistSideCp2, points.armhole)
    .curve(points.armholeCp2, points.armholePitchCp1, points.armholePitch)
    .curve_(points.armholePitchCp2, points.shoulder)
    .line(points.shoulderDart)
    .join(paths.dart)
    .close()
    .attr('class', 'fabric')
  
  if (complete) {
    snippets.dartTip = new Snippet('notch', points.dartTip)
  
    points.titleAnchor = points.dartBottomRight.shiftFractionTowards( points.waistSide, .1 ).shiftFractionTowards( points.shoulder, .3 )
    macro('title', {
      at: points.titleAnchor,
      nr: 4,
      title: 'Outside Back',
    })
    points.grainlineFrom.x = points.shoulderDart.x
    points.grainlineTo.x = points.shoulderDart.x

    macro("grainline", {
      from: points.grainlineFrom,
      to: points.grainlineTo,
    })

    if (sa) paths.sa = paths.outsideSeam.offset(sa).attr('class', 'fabric sa')
    if( paperless ) {
      let pLeft = paths.dart.edge('left')
      macro('hd', {
        from: pLeft,
        to: points.waistSide,
        y: points.waistCenter.y +sa + 15,
      })
      macro('hd', {
        from: points.dartBottomRight,
        to: points.armhole,
        y: points.waistCenter.y +sa + 25,
      })
      macro('hd', {
        from: points.dartTip,
        to: points.waistSide,
        y: points.waistCenter.y +sa + 35,
      })
      macro('hd', {
        from: points.dartBottomRight,
        to: points.waistSide,
        y: points.waistCenter.y +sa + 45,
      })
      macro('hd', {
        from: pLeft,
        to: points.shoulder,
        y: points.shoulderDart.y -sa - 15,
      })
      macro('hd', {
        from: points.shoulderDart,
        to: points.shoulder,
        y: points.shoulderDart.y -sa - 25,
      })
      macro('hd', {
        from: points.shoulderDart,
        to: points.armhole,
        y: points.shoulderDart.y -sa - 35,
      })

      macro('vd', {
        from: points.shoulder,
        to: points.dartTip,
        x: points.armhole.x +sa + 15,
      })
      macro('vd', {
        from: points.armhole,
        to: points.waistSide,
        x: points.armhole.x +sa + 15,
      })
      macro('vd', {
        from: points.shoulder,
        to: points.waistSide,
        x: points.armhole.x +sa + 25,
      })
      macro('vd', {
        from: points.shoulder,
        to: points.dartBottomRight,
        x: points.armhole.x +sa + 35,
      })
      macro('vd', {
        from: points.shoulderDart,
        to: points.dartBottomRight,
        x: points.armhole.x +sa + 45,
      })
    }
  }
  
  return part
}
