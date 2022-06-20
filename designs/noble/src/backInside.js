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

  // Hide Bella paths
  for (let key of Object.keys(paths)) paths[key].render = false
  for (let i in snippets) delete snippets[i]
    
  paths.insideSeam = new Path()
    .move(points.cbNeck)
    .curve_(points.cbNeckCp2, points.waistCenter)
    .line(points.dartBottomLeft)
    .curve(points.dartLeftCp, points.shoulderDartCpDown, points.dartTip)
    .curve(points.shoulderDartCpUp, points.shoulderDart, points.shoulderDart)
    .line(points.hps)
    ._curve(points.cbNeckCp1, points.cbNeck)
    .close()
    .attr('class', 'fabric')
  
  if (complete) {
    snippets.dartTip = new Snippet('notch', points.dartTip)

    macro('title', {
      at: points.titleAnchor,
      nr: 3,
      title: 'Inside Back',
    })
    macro("grainline", {
      from: points.grainlineFrom,
      to: points.grainlineTo,
    })

    if (sa) paths.sa = paths.insideSeam.offset(sa).attr('class', 'fabric sa')

    if( paperless ) {
      macro('hd', {
        from: points.waistCenter,
        to: points.shoulderDart,
        y: points.waistCenter.y +sa + 15,
      })
      macro('hd', {
        from: points.waistCenter,
        to: points.dartTip,
        y: points.waistCenter.y +sa + 25,
      })
      macro('hd', {
        from: points.waistCenter,
        to: points.dartBottomLeft,
        y: points.waistCenter.y +sa + 35,
      })
      macro('hd', {
        from: points.cbNeck,
        to: points.dartBottomLeft,
        y: points.waistCenter.y +sa + 45,
      })
      macro('hd', {
        from: points.cbNeck,
        to: points.hps,
        y: points.hps.y -sa - 15,
      })
      macro('hd', {
        from: points.hps,
        to: points.shoulderDart,
        y: points.hps.y -sa - 15,
      })

      macro('vd', {
        from: points.shoulderDart,
        to: points.dartTip,
        x: points.shoulderDart.x +sa + 15,
      })
      macro('vd', {
        from: points.shoulderDart,
        to: points.dartBottomLeft,
        x: points.shoulderDart.x +sa + 25,
      })
      macro('vd', {
        from: points.shoulderDart,
        to: points.waistCenter,
        x: points.shoulderDart.x +sa + 35,
      })
      macro('vd', {
        from: points.hps,
        to: points.waistCenter,
        x: points.shoulderDart.x +sa + 45,
      })
      macro('vd', {
        from: points.waistCenter,
        to: points.cbNeck,
        x: points.cbNeck.x -sa - 15,
      })
      macro('vd', {
        from: points.waistCenter,
        to: points.hps,
        x: points.cbNeck.x -sa - 25,
      })
    }
  }
  
  return part
}
