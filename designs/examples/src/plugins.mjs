import { box } from './shared.mjs'

export const plugin_banner = {
  name: 'examples.plugin_banner',
  draft: part => {
    const { points, Point, paths, Path, macro } = part.shorthand()

    points.from = new Point(0, 0)
    points.to = new Point(320, 0)

    paths.banner = new Path().move(points.from).line(points.to)

    macro('banner', {
      path: 'banner',
      text: 'banner plugin',
    })

    // Prevent clipping of text
    paths.box = new Path().move(new Point(0, -20)).line(new Point(0, 20)).attr('class', 'hidden')

    return part
  }
}


export const plugin_bartack = {
  name: 'examples.plugin_bartack',
  draft: part => {
    const { Point, points, macro } = part.shorthand()

    points.a = new Point(15, 15)

    macro('bartack', {
      anchor: points.a,
      angle: 30,
      length: 15,
    })

    return box(part, 60, 30)
  }
}

export const plugin_bartackalong = {
  name: 'examples.plugin_bartackalong',
  draft: part => {
    const { Point, Path, points, paths, macro } = part.shorthand()

    points.a = new Point(15, 15)
    points.b = new Point(20, 20)
    points.c = new Point(30, 20)
    points.d = new Point(35, 15)
    points.e = new Point(20, 10)
    points.f = new Point(30, 10)

    paths.a = new Path().move(points.a).curve(points.b, points.c, points.d).setRender(false)

    macro('bartackAlong', {
      path: paths.a,
    })

    macro('sprinkle', {
      snippet: 'notch',
      on: ['e', 'f'],
    })

    return box(part, 60, 30)
  }
}

export const plugin_bartackfractionalong = {
  name: 'examples.plugin_bartackfractionalong',
  draft: part => {
    const { Point, Path, points, paths, macro } = part.shorthand()

    points.a = new Point(15, 15)
    points.b = new Point(20, 20)
    points.c = new Point(30, 20)
    points.d = new Point(35, 15)
    points.e = new Point(20, 10)
    points.f = new Point(30, 10)

    paths.a = new Path().move(points.a).curve(points.b, points.c, points.d).setRender(false)

    macro('bartackFractionAlong', {
      path: paths.a,
      start: 0.2,
      end: 0.8,
    })

    macro('sprinkle', {
      snippet: 'notch',
      on: ['e', 'f'],
    })

    return box(part, 60, 30)
  }
}

export const plugin_buttons = {
  name: 'examples.plugin_buttons',
  draft: part => {
    const { Point, snippets, Snippet } = part.shorthand()

    snippets.button = new Snippet('button', new Point(20, 10))
    snippets.buttonhole = new Snippet('buttonhole', new Point(40, 10))
    snippets.buttonholeStart = new Snippet('buttonhole-start', new Point(60, 10))
    snippets.buttonholeEnd = new Snippet('buttonhole-end', new Point(80, 10))
    snippets.snapMale = new Snippet('snap-stud', new Point(100, 10))
    snippets.snapFemale = new Snippet('snap-socket', new Point(120, 10))

    return box(part, 140, 20)
  }
}

export const plugin_cutonfold = {
  name: 'examples.plugin_cutonfold',
  draft: part => {
    const { Point, points, Path, paths, macro } = part.shorthand()

    points.topLeft = new Point(0, 0)
    points.topRight = new Point(150, 0)
    points.bottomRight = new Point(150, 30)
    points.bottomLeft = new Point(0, 30)

    paths.box = new Path()
      .move(points.topLeft)
      .line(points.topRight)
      .line(points.bottomRight)
      .line(points.bottomLeft)
      .close()

    macro('cutonfold', {
      from: points.bottomLeft,
      to: points.bottomRight,
      grainline: true,
    })

    return part
  }
}

export const plugin_dimension = {
  name: 'examples.plugin_dimension',
  draft: part => {
    const { Point, points, Path, paths, macro } = part.shorthand()

    points.A = new Point(0, 0)
    points.B = new Point(0, 100)
    points.C = new Point(50, 100)
    points.D = new Point(100, 50)
    points.DCp1 = new Point(100, 0)

    paths.box = new Path()
      .move(points.A)
      .line(points.B)
      .line(points.C)
      .line(points.D)
      .curve(points.DCp1, points.A, points.A)
      .close()

    macro('vd', {
      from: points.A,
      to: points.B,
      x: points.A.x - 15,
    })

    macro('hd', {
      from: points.B,
      to: points.C,
      y: points.B.y + 15,
    })

    macro('ld', {
      from: points.C,
      to: points.D,
      d: -15,
    })

    macro('ld', {
      from: points.C,
      to: points.D,
      d: -30,
      text: 'Custom text',
    })

    macro('pd', {
      path: new Path().move(points.A).curve(points.A, points.DCp1, points.D),
      d: -15,
    })

    return part
  }
}

export const plugin_gore = {
  name: 'examples.plugin_gore',
  draft: part => {
    const { Point, points, macro } = part.shorthand()

    points.anchor = new Point(0, 0)

    macro('gore', {
      from: points.anchor,
      radius: 60,
      gores: 5,
      extraLength: 20,
      render: true,
    })

    return part
  }
}

export const plugin_grainline = {
  name: 'examples.plugin_grainline',
  draft: part => {
    const { Point, points, macro } = part.shorthand()

    points.grainlineFrom = new Point(10, 10)
    points.grainlineTo = new Point(100, 10)

    macro('grainline', {
      from: points.grainlineFrom,
      to: points.grainlineTo,
    })

    return box(part, 110, 15)
  }
}

export const plugin_logo = {
  name: 'examples.plugin_logo',
  draft: part => {
    const { points, Point, snippets, Snippet } = part.shorthand()
    points.anchor = new Point(50, 25)

    snippets.logo = new Snippet('logo', points.anchor).attr('data-scale', 0.666)

    return box(part, 100, 35)
  }
}

export const plugin_mirror = {
  name: 'examples.plugin_mirror',
  draft: part => {
    const { Point, Path, points, paths, macro } = part.shorthand()

    points.a = new Point(5, 5)
    points.b = new Point(45, 30)
    points.c = new Point(5, 30)
    points.d = new Point(45, 5)
    points.mid = new Point(25, 15)

    paths.a = new Path().move(points.a).curve(points.b, points.c, points.d)

    macro('mirror', {
      mirror: [points.b, points.d],
      points: [points.mid],
      paths: [paths.a],
    })

    macro('sprinkle', {
      snippet: 'notch',
      on: ['mid', 'mirroredMid'],
    })

    return box(part, 100, 40)
  }
}

export const plugin_notches = {
  name: 'examples.plugin_notches',
  draft: part => {
    const { Point, snippets, Snippet } = part.shorthand()

    snippets.notch = new Snippet('notch', new Point(60, 10))
    snippets.bnotch = new Snippet('bnotch', new Point(80, 10))

    return box(part, 140, 20)
  }
}

export const plugin_round = {
  name: 'examples.plugin_round',
  draft: part => {
    const { Point, points, Path, paths, macro } = part.shorthand()

    points.topLeft = new Point(0, 0)
    points.bottomLeft = new Point(0, 30)
    points.topRight = new Point(100, 0)
    points.bottomRight = new Point(100, 30)

    paths.demo = new Path()
      .move(points.topLeft)
      .line(points.bottomLeft)
      .line(points.bottomRight)
      .line(points.topRight)
      .close()
      .attr('class', 'note dashed')

    macro('round', {
      from: points.topLeft,
      to: points.bottomRight,
      via: points.bottomLeft,
      radius: 10,
      prefix: 'bl',
      render: true,
    })
    macro('round', {
      from: points.bottomRight,
      to: points.topLeft,
      via: points.topRight,
      radius: 20,
      prefix: 'tr',
      render: true,
    })

    return part
  }
}

export const plugin_scalebox = {
  name: 'examples.plugin_scalebox',
  draft: part => {
    const { Point, points, macro } = part.shorthand()

    points.anchor1 = new Point(0, 0)
    points.anchor2 = new Point(70, 0)

    macro('scalebox', { at: points.anchor1 })
    macro('miniscale', { at: points.anchor2 })

    return part
  }
}

export const plugin_sprinkle = {
  name: 'examples.plugin_sprinkle',
  draft: part => {
    const { Point, points, macro } = part.shorthand()

    points.a = new Point(10, 10)
    points.b = new Point(20, 15)
    points.c = new Point(30, 10)
    points.d = new Point(40, 15)
    points.e = new Point(50, 10)
    points.f = new Point(60, 15)
    points.g = new Point(70, 10)
    points.h = new Point(80, 15)
    points.i = new Point(90, 10)

    macro('sprinkle', {
      snippet: 'button',
      on: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
    })

    return box(part, 100, 25)
  }
}

export const plugin_title = {
  name: 'examples.plugin_title',
  draft: part => {
    const { Point, points, macro } = part.shorthand()

    points.title = new Point(90, 45)

    macro('title', {
      at: points.title,
      nr: 4,
      title: 'sleeve',
      prefix: 'test',
    })

    return box(part, 200, 70)
  }
}

