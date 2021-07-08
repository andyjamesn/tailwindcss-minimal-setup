module.exports = {
  // purge: ["./assets/**/*.css", "./**/*.html"],
  prefix: "",
  separator: "--",
  variants: {
    margin: [],
    padding: [],
    inset: [],
  },
  corePlugins: {
    accessibility: false,
    alignContent: true,
    alignItems: true,
    alignSelf: true,
    animation: false,
    appearance: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropDropShadow: false,
    backdropFilter: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropSaturate: false,
    backdropSepia: false,
    backgroundAttachment: false,
    backgroundBlendMode: false,
    backgroundClip: false,
    backgroundColor: false,
    backgroundImage: false,
    backgroundOpacity: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    blur: false,
    borderCollapse: false,
    borderColor: false,
    borderOpacity: false,
    borderRadius: false,
    borderStyle: false,
    borderWidth: false,
    boxDecorationBreak: false,
    boxShadow: false,
    boxSizing: false,
    brightness: false,
    clear: false,
    container: false,
    contrast: false,
    cursor: false,
    display: true,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false,
    dropShadow: false,
    fill: false,
    filter: false,
    flex: true,
    flexDirection: true,
    flexGrow: true,
    flexShrink: true,
    flexWrap: true,
    float: false,
    fontFamily: false,
    fontSize: true,
    fontSmoothing: false,
    fontStyle: false,
    fontVariantNumeric: false,
    fontWeight: false,
    gap: false,
    gradientColorStops: false,
    grayscale: false,
    gridAutoColumns: false,
    gridAutoFlow: false,
    gridAutoRows: false,
    gridColumn: false,
    gridColumnEnd: false,
    gridColumnStart: false,
    gridRow: false,
    gridRowEnd: false,
    gridRowStart: false,
    gridTemplateColumns: false,
    gridTemplateRows: false,
    height: false,
    hueRotate: false,
    inset: true,
    invert: false,
    isolation: false,
    justifyContent: true,
    justifyItems: true,
    justifySelf: true,
    letterSpacing: false,
    lineHeight: false,
    listStylePosition: false,
    listStyleType: false,
    maxHeight: false,
    maxWidth: false,
    minHeight: false,
    minWidth: false,
    mixBlendMode: false,
    objectFit: false,
    objectPosition: false,
    opacity: false,
    order: false,
    outline: false,
    overflow: false,
    overscrollBehavior: false,
    placeContent: false,
    placeItems: false,
    placeSelf: false,
    placeholderColor: false,
    placeholderOpacity: false,
    pointerEvents: false,
    position: false,
    resize: false,
    ringColor: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
    rotate: false,
    saturate: false,
    scale: false,
    sepia: false,
    skew: false,
    space: true,
    stroke: false,
    strokeWidth: false,
    tableLayout: false,
    textAlign: false,
    textColor: false,
    textDecoration: false,
    textOpacity: false,
    textOverflow: false,
    textTransform: false,
    transform: false,
    transformOrigin: false,
    transitionDelay: false,
    transitionDuration: false,
    transitionProperty: false,
    transitionTimingFunction: false,
    translate: false,
    userSelect: false,
    verticalAlign: false,
    visibility: false,
    whitespace: false,
    width: false,
    wordBreak: false,
    zIndex: false,
  },
  theme: {
    screens: {
      'sm': '478px',
      // => @media (min-width: 640px) { ... }

      'md': '767px',
      // => @media (min-width: 768px) { ... }

      'lg': '991px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
    },
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        gray: {
          50: "#F5F5F6",
          100: "#EEEFF1",
          200: "#DDDFE3",
          300: "#C2C5CC",
          400: "#9A9EAA",
          500: "#787E8D",
          600: "#5D616E",
          700: "#50545F",
          800: "#3F424A",
          900: "#24262A",
        },
        primary: {
          50: "#F2F0FB",
          100: "#E9E7F9",
          200: "#D4CEF2",
          300: "#B1A7E8",
          400: "#7D6DD8",
          500: "#523CCB",
          600: "#3D2BA1",
          700: "#35258B",
          800: "#291D6D",
          900: "#201653",
        },
        success: {
          50: "#F0FCF7",
          100: "#E7FAF2",
          200: "#CEF5E6",
          300: "#A7ECD1",
          400: "#6DE0B3",
          500: "#3CD599",
          600: "#25AE79",
          700: "#209668",
          800: "#197652",
          900: "#135A3E",
        },
        secondary: {
          50: "#FFFBF1",
          100: "#FFF8E7",
          200: "#FFF0D0",
          300: "#FFE5AA",
          400: "#FFD371",
          500: "#FFC542",
          600: "#F9AC00",
          700: "#D79500",
          800: "#A97500",
          900: "#805900",
        },
        warning: {
          50: "#FFF7F1",
          100: "#FFF2E8",
          200: "#FFE5D2",
          300: "#FFD0AE",
          400: "#FFB177",
          500: "#FF974A",
          600: "#FF6C00",
          700: "#DC5E00",
          800: "#AD4900",
          900: "#843800",
        },
        danger: {
          50: "#FFF3F3",
          100: "#FFEAEA",
          200: "#FFD6D6",
          300: "#FEB5B5",
          400: "#FE8383",
          500: "#FD5A5A",
          600: "#FC0E0E",
          700: "#E30303",
          800: "#B20202",
          900: "#880202",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.533rem",
      },
    },
  },

  plugins: [
    // require("./tailwindcss/extend"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};
