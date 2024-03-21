import { LineDrawingWrapper, thin, dashed } from './shared.mjs'

const strokeScale = 0.5

export const Charlie = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 214 265" {...{ className, stroke }}>
      <Front stroke={stroke} />
      <Back stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the front
 */
export const CharlieFront = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 107 265" {...{ className, stroke }}>
      <Front stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the back
 */
export const CharlieBack = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="107 0 107 265" {...{ className, stroke }}>
      <Back stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * SVG elements for the front
 */
export const Front = ({ stroke }) => (
  <>
    <path
      key="stitches"
      {...dashed(stroke)}
      {...thin(stroke)}
      d="m 68.74,5.92
      c -7.78,0.73 -16.99,0.86 -22.67,0.73
      h -1.16
      c -5.37,0.12 -13.85,0.02 -21.33,-0.61 -0.46,-0.04 -0.91,-0.08 -1.35,-0.12
      
      m 46.98,5.72
      c -3.09,0.35 -6.98,0.7 -11.12,0.85 -2.58,0.1 -6.46,0.13 -11.46,0.08
      h -2.27
      c -5,0.06 -8.88,0.02 -11.46,-0.08 -4.16,-0.16 -8.07,-0.51 -11.17,-0.86
      
      M 84.05,254.01
      c -1.29,0.28 -2.61,0.54 -3.95,0.77 -11.57,2 -16.86,1.33 -26.19,-0.21
      
      M 7,254.11
      c 1.29,0.28 2.97,0.62 4.31,0.85 11.57,2 16.87,1.2 26.2,-0.34
      
      M 51.13,13.23
      c 0,0 0.36,33.16 0,34.48 -0.65,2.35 -2.77,4.11 -5.42,4.59
      
      M 80.12,4.33
      c -1.55,0.33 -3.34,0.5 -4.96,0.77 -1.27,0.22 -2.65,0.41 -4.11,0.58
      
      m -51.1,0.01
      C 18.49,5.52 17.1,5.33 15.83,5.11 14.2,4.83 12.42,4.66 10.87,4.34
      
      m 70.15,5.41
      c -1.61,0.34 -3.25,0.66 -4.93,0.96 0,0 -1.69,0.29 -4.43,0.65
      
      m -52.27,0
      C 16.61,10.99 14.9,10.7 14.9,10.7 13.22,10.41 11.58,10.09 9.97,9.74"
    />
    <path
      key="folds"
      opacity={0.3}
      d="m 37.2,67.73
      c 0.78,-0.32 1.57,-0.63 2.33,-1 0.77,-0.34 1.52,-0.72 2.26,-1.12 1.47,-0.8 2.91,-1.68 4.26,-2.67 1.36,-0.98 2.65,-2.05 3.89,-3.19 1.23,-1.14 2.39,-2.37 3.52,-3.63 -0.48,0.7 -1,1.37 -1.54,2.02 -0.55,0.65 -1.12,1.27 -1.71,1.88 -1.19,1.21 -2.49,2.32 -3.86,3.32 -1.38,1 -2.85,1.87 -4.38,2.6 -1.53,0.74 -3.12,1.35 -4.76,1.77
      z"
    />
    <path
      key="outline"
      d="m 40.72,9.49
      v -0.51
      l 2.88,0.25
      z
      
      m 4.8,3.99
      V 64.61
      
      M 43.39,3.56
      h 4.26 22.32 10.18
      c 0.34,2.64 0.87,6.68 1.55,11.61 2.2,16 3.13,20.55 3.87,27.08 1.38,12.23 0.93,11.02 0.77,16.97 -0.3,11.47 -0.29,33.26 -0.06,76.88 0.17,31.6 -2.58,78.5 -2.2,122.74 -2.18,0.6 -4.51,1.13 -6.96,1.55 -11.46,1.97 -15.55,0.92 -23.33,-0.77
      L 48.79,136.14 45.72,63.89
      H 45.33
      L 42.26,135.7 37.26,259.6
      c -7.78,1.69 -11.88,2.74 -23.33,0.77 -2.46,-0.42 -4.78,-0.95 -6.96,-1.55
      C 7.34,214.22 4.6,167.04 4.77,135.29 5,92.1 5.01,70.6 4.71,59.21 4.55,53.26 4.1,54.46 5.48,42.24 6.22,35.71 7.14,31.17 9.35,15.16 10.03,10.24 10.56,6.2 10.9,3.56
      h 32.49
      
      m 25.26,1.77 0.8,8.34 2.47,-0.37 -0.91,-8.32
      
      m 9.13,-1.42
      c -1.55,0.33 -3.34,0.5 -4.96,0.77 -8.43,1.45 -21.71,1.71 -29.08,1.55
      h -1.16
      c -7.37,0.17 -20.65,-0.1 -29.08,-1.55 -1.62,-0.28 -3.41,-0.44 -4.96,-0.77
      
      m 70.15,6.82
      c -1.61,0.34 -3.25,0.66 -4.93,0.96 0,0 -1.65,0.28 -4.34,0.63
      
      m -2.46,0.3
      c -3.1,0.35 -7.02,0.71 -11.2,0.86 -2.58,0.1 -6.46,0.13 -11.46,0.08
      h -2.27
      c -5,0.06 -8.88,0.02 -11.46,-0.08 -4.18,-0.16 -8.1,-0.51 -11.21,-0.86
      
      M 19.12,11.95
      C 16.52,11.61 14.93,11.33 14.93,11.33 13.25,11.04 11.61,10.72 10,10.37
      
      M 75.89,11.68 86.36,52.26
      
      M 40.54,9.36
      a 1.67,1.67 0 0 1 -1.67,1.67 1.67,1.67 0 0 1 -1.67,-1.67 1.67,1.67 0 0 1 1.67,-1.67 1.67,1.67 0 0 1 1.67,1.67
      z
      
      M 34.97,6.11
      V 13.18
      
      M 20.03,4.98 19.12,13.3 21.6,13.67 22.39,5.33
      
      M 15.15,11.68 4.68,52.26"
    />
  </>
)

/*
 * SVG elements for the back
 */
const Back = ({ stroke }) => (
  <>
    <path
      key="outline"
      d="m 147.72,32.96
      a 1.55,1.55 0 0 1 -1.55,1.55 1.55,1.55 0 0 1 -1.55,-1.55 1.55,1.55 0 0 1 1.55,-1.55 1.55,1.55 0 0 1 1.55,1.55
      z
      
      m 8.4,-1.89 -19.2,-1.32 0.2,-2.96 19.2,1.32
      z
      
      m 37.38,1.89
      a 1.55,1.55 0 0 1 -1.55,1.55 1.55,1.55 0 0 1 -1.55,-1.55 1.55,1.55 0 0 1 1.55,-1.55 1.55,1.55 0 0 1 1.55,1.55
      z
      
      m -11.7,-4.86 19.2,-1.32 0.2,2.96 -19.2,1.32
      z
      
      m -2.63,-22.06 0.37,8.13
      h 2.33
      l -0.38,-8.13
      
      m -25.16,0 -0.37,8.13
      h 2.32
      l 0.37,-8.13
      
      m 9.89,7.17
      V 64.61
      
      M 170.67,3.56
      h -4.26 -22.32 -10.18
      c -0.34,2.64 -0.87,6.68 -1.55,11.61 -2.2,16 -3.13,20.55 -3.87,27.08 -1.38,12.23 -0.93,11.02 -0.77,16.97 0.28,10.66 0.29,37.22 0.1,75.94 -0.16,33.12 2.57,75.14 2.16,123.69 2.18,0.6 4.51,1.13 6.96,1.55 11.46,1.97 15.55,0.92 23.33,-0.77
      l 5.22,-124.48 2.84,-71.24
      h 0.39
      l 2.84,71.28 5.22,124.44
      c 7.78,1.69 11.88,2.74 23.33,0.77 2.46,-0.42 4.78,-0.95 6.96,-1.55 -0.41,-48.34 2.32,-90.21 2.16,-123.27 -0.19,-38.94 -0.18,-65.66 0.1,-76.36 0.16,-5.95 0.6,-4.74 -0.77,-16.97 -0.74,-6.53 -1.66,-11.07 -3.87,-27.08 -0.68,-4.92 -1.21,-8.96 -1.55,-11.61
      h -10.18 -22.32
      
      m -27.61,1.42 -0.91,7.91 2.47,0.35 0.8,-7.93
      
      m -11.49,-1.75
      c 1.55,0.33 3.34,0.5 4.96,0.77 8.43,1.45 21.71,1.71 29.08,1.55
      h 1.16
      c 7.37,0.17 20.65,-0.1 29.08,-1.55 1.62,-0.28 3.41,-0.44 4.96,-0.77
      
      m -70.15,6.82
      c 1.61,0.34 3.25,0.66 4.93,0.96 0,0 1.59,0.27 4.19,0.61
      
      m 2.57,0.32
      c 3.11,0.35 7.04,0.71 11.24,0.87
      
      m 2.37,0.06
      c 2.39,0.05 5.44,0.06 9.09,0.02
      h 2.27
      c 4.04,0.05 7.34,0.03 9.83,-0.03
      
      m 2.36,-0.08
      c 3.92,-0.17 7.57,-0.51 10.51,-0.84
      
      m 2.46,-0.3
      c 0.87,-0.11 1.63,-0.22 2.26,-0.31 1.3,-0.19 2.04,-0.32 2.04,-0.32 1.68,-0.29 3.32,-0.61 4.93,-0.96
      
      m -12.39,-5.07 0.8,7.93 2.47,-0.35 -0.91,-7.91"
    />
    <path
      key="folds"
      opacity={0.3}
      d="m 167.16,59.13
      c -2.41,1.23 -4.94,2.24 -7.53,3.01 -2.59,0.79 -5.26,1.35 -7.95,1.7 -2.7,0.32 -5.41,0.47 -8.12,0.38 -1.36,-0.06 -2.71,-0.15 -4.05,-0.29 -1.35,-0.17 -2.69,-0.35 -4.01,-0.61 2.69,0.31 5.38,0.5 8.07,0.51 2.69,0.01 5.39,-0.14 8.05,-0.49 2.67,-0.31 5.31,-0.87 7.91,-1.57 1.3,-0.35 2.59,-0.74 3.86,-1.19 1.28,-0.43 2.53,-0.93 3.78,-1.45
      z
      
      m 3.73,0
      c 1.25,0.52 2.5,1.02 3.78,1.45 1.27,0.45 2.56,0.84 3.86,1.19 2.6,0.7 5.23,1.26 7.91,1.57 2.66,0.35 5.36,0.5 8.05,0.49 2.7,-0.02 5.39,-0.2 8.07,-0.51 -1.32,0.26 -2.66,0.45 -4.01,0.61 -1.35,0.14 -2.7,0.23 -4.05,0.29 -2.71,0.09 -5.43,-0.06 -8.12,-0.38 -2.69,-0.35 -5.36,-0.92 -7.95,-1.7 -2.6,-0.77 -5.12,-1.79 -7.53,-3.01
      z
      
      m 18.3,-46.25 0.51,-0.06 1.49,16.28
      z
      
      m -41.4,-0.06 0.5,0.06 -1.99,16.22
      z"
    />
    <path
      key="stitches"
      {...dashed(stroke)}
      {...thin(stroke)}
      d="m 158.62,6.64
      c 3.53,0.08 6.81,0.07 9.37,0.02
      h 1.16
      c 2.72,0.06 6.25,0.07 10.04,-0.03
      
      m -20.82,5.94
      c 2.38,0.05 5.43,0.06 9.07,0.02
      h 2.27
      c 3.99,0.05 7.27,0.03 9.74,-0.03
      
      M 130.02,253.98
      c 1.29,0.28 2.61,0.54 3.95,0.77 11.57,2 16.87,1.29 26.2,-0.25
      
      m 46.9,-0.52
      c -1.29,0.28 -2.61,0.54 -3.95,0.77 -11.57,2 -16.88,1.17 -26.21,-0.36
      
      M 133.95,4.33
      c 1.55,0.33 3.34,0.5 4.96,0.77 1.26,0.22 2.62,0.4 4.06,0.57
      
      m 2.46,0.26
      c 3.49,0.32 7.27,0.53 10.88,0.64
      
      m 25.21,-0.02
      c 3.48,-0.12 7.08,-0.32 10.42,-0.64
      
      m 2.26,-0.24
      c 1.43,-0.17 2.79,-0.35 4.04,-0.57 1.62,-0.28 3.41,-0.44 4.96,-0.77
      
      m -70.14,5.42
      c 1.61,0.34 3.25,0.66 4.93,0.96 0,0 1.01,0.17 2.72,0.41 0.5,0.07 1.06,0.15 1.67,0.23
      
      m 2.45,0.29
      c 3.1,0.35 7,0.7 11.16,0.86
      
      m 25.78,-0.03
      c 3.9,-0.17 7.55,-0.5 10.49,-0.83
      
      m 2.45,-0.3
      c 2.76,-0.35 4.45,-0.65 4.45,-0.65 1.68,-0.29 3.32,-0.61 4.93,-0.96"
    />
  </>
)
