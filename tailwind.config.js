module.exports = {
  purge: [],
  target: "relaxed",
  prefix: "",
  important: false,
  separator: "--",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      transparent: "transparent",
      // This is the preset used to generate the colors
      // https://javisperez.github.io/tailwindcolorshades/#/?blue=178bf4&gorse=FDE74C&flame-pea=E55934&conifer=9BC53D&ecstasy=FA7921&Minsk=4D3686&tv=1
      black: "#000",
      white: "#fff",
      primary: {
        "shade-10": "#4935b6",
        "shade-20": "#4130a2",
        "shade-30": "#39298d",
        "shade-40": "#312479",
        "shade-5": "#4d38c0",
        "shade-50": "#281d65",
        "shade-60": "#201851",
        "shade-70": "#18113c",
        "shade-80": "#100c28",
        "shade-90": "#080513",
        "shade-95": "#04030a",
        "tint-10": "#634fd0",
        "tint-20": "#8676da",
        "tint-30": "#8676da",
        "tint-40": "#a89de5",
        "tint-5": "#5a45cd",
        "tint-50": "#a89de5",
        "tint-60": "#b9b1ea",
        "tint-70": "#cbc4ef",
        "tint-80": "#dcd8f4",
        "tint-90": "#eeebf9",
        "tint-95": "#f6f5fc",
        base: "#523ccb",
        "tp-10": "rgba(82, 60, 203, 10)",
        "tp-20": "rgba(82, 60, 203, 20)",
        "tp-30": "rgba(82, 60, 203, 30)",
        "tp-40": "rgba(82, 60, 203, 40)",
        "tp-5": "rgba(82, 60, 203, 5)",
        "tp-50": "rgba(82, 60, 203, 50)",
        "tp-60": "rgba(82, 60, 203, 60)",
        "tp-70": "rgba(82, 60, 203, 70)",
        "tp-80": "rgba(82, 60, 203, 80)",
        "tp-90": "rgba(82, 60, 203, 90)",
        "tp-95": "rgba(82, 60, 203, 95)",
      },
      gray: {
        base: "#6a758d",
        "shade-10": "#5f697e",
        "shade-20": "#545d70",
        "shade-30": "#495162",
        "shade-40": "#3f4654",
        "shade-5": "#646f85",
        "shade-50": "#343a46",
        "shade-60": "#2a2e38",
        "shade-70": "#1f222a",
        "shade-80": "#15171c",
        "shade-90": "#0a0b0d",
        "shade-95": "#050507",
        "tint-10": "#798398",
        "tint-20": "#8790a3",
        "tint-30": "#969eaf",
        "tint-40": "#a5acba",
        "tint-5": "#717c92",
        "tint-50": "#b4bac6",
        "tint-60": "#c3c7d1",
        "tint-70": "#d2d5dd",
        "tint-80": "#e1e3e8",
        "tint-90": "#f0f1f3",
        "tint-95": "#f7f7f9",
        "tp-10": "#6a758d",
        "tp-20": "#6a758d",
        "tp-30": "#6a758d",
        "tp-40": "#6a758d",
        "tp-5": "#6a758d",
        "tp-50": "#6a758d",
        "tp-60": "#6a758d",
        "tp-70": "#6a758d",
        "tp-80": "#6a758d",
        "tp-90": "#6a758d",
        "tp-95": "#6a758d",
      },
      secondary: {
        base: "#0162ff",
        "shade-10": "#0158e6",
        "shade-20": "#014ecc",
        "shade-30": "#0145b3",
        "shade-40": "#013b99",
        "shade-5": "#015df2",
        "shade-50": "#003180",
        "shade-60": "#002766",
        "shade-70": "#001d4d",
        "shade-80": "#001433",
        "shade-90": "#000a1a",
        "shade-95": "#00050d",
        "tp-10": "#0162ff",
        "tp-20": "#0162ff",
        "tp-30": "#0162ff",
        "tp-40": "#0162ff",
        "tp-5": "#0162ff",
        "tp-50": "#0162ff",
        "tp-60": "#0162ff",
        "tp-70": "#0162ff",
        "tp-80": "#0162ff",
        "tp-90": "#0162ff",
        "tp-95": "#0162ff",
      },
      success: {
        base: "#3cd599",
        "shade-10": "#36c08a",
        "shade-20": "#30aa7a",
        "shade-30": "#2a956b",
        "shade-40": "#24805c",
        "shade-5": "#39ca91",
        "shade-50": "#1e6a4d",
        "shade-60": "#18553d",
        "shade-70": "#12402e",
        "shade-80": "#0c2b1f",
        "shade-90": "#06150f",
        "shade-95": "#030b08",
        "tint-10": "#4fd9a3",
        "tint-20": "#63ddad",
        "tint-30": "#76e2b8",
        "tint-40": "#9deacc",
        "tint-5": "#46d79e",
        "tint-50": "#9deacc",
        "tint-60": "#b1eed6",
        "tint-70": "#c4f2e0",
        "tint-80": "#d8f7eb",
        "tint-90": "#ebfbf5",
        "tint-95": "#f5fdfa",
      },
      blue: {
        100: "#E8F3FE",
        200: "#C5E2FC",
        300: "#A2D1FB",
        400: "#5DAEF7",
        500: "#178BF4",
        600: "#157DDC",
        700: "#0E5392",
        800: "#0A3F6E",
        900: "#072A49",
      },
      yellow: {
        100: "#FFFDED",
        200: "#FFF9D2",
        300: "#FEF5B7",
        400: "#FEEE82",
        500: "#FDE74C",
        600: "#E4D044",
        700: "#988B2E",
        800: "#726822",
        900: "#4C4517",
      },
      red: {
        100: "#FCEEEB",
        200: "#F9D6CC",
        300: "#F5BDAE",
        400: "#ED8B71",
        500: "#E55934",
        600: "#CE502F",
        700: "#89351F",
        800: "#672817",
        900: "#451B10",
      },
      green: {
        100: "#EEF9EC",
        200: "#D4EFD0",
        300: "#BBE5B4",
        400: "#87D27C",
        500: "#54BE44",
        600: "#4CAB3D",
        700: "#327229",
        800: "#26561F",
        900: "#193914",
        "tint-5": "#1d9e6f",
        "tint-10": "#29a377",
        "tint-20": "#40ad86",
        "tint-30": "#58b795",
        "tint-40": "#88ccb3",
        "tint-50": "#88ccb3",
        "tint-60": "#9fd6c2",
        "tint-70": "#b8e0d1",
        "tint-80": "#cfeae0",
        "tint-90": "#e7f5f0",
        "tint-95": "#f2f9f7",
      },
      orange: {
        100: "#FFF2E9",
        200: "#FEDEC8",
        300: "#FDC9A6",
        400: "#FCA164",
        500: "#FA7921",
        600: "#E16D1E",
        700: "#964914",
        800: "#71360F",
        900: "#4B240A",
      },
      purple: {
        100: "#F1EDFC",
        200: "#DBD3F8",
        300: "#C5B8F3",
        400: "#9A83EA",
        500: "#6F4EE1",
        600: "#6446CB",
        700: "#432F87",
        800: "#322365",
        900: "#211744",
      },
    },
    spacing: {
      px: "1px",
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "32": "8rem",
      "40": "10rem",
      "48": "12rem",
      "56": "14rem",
      "64": "16rem",
    },
    backgroundColor: (theme) => theme("colors"),
    backgroundOpacity: (theme) => theme("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      default: theme("colors.gray.300", "currentColor"),
    }),
    borderOpacity: (theme) => theme("opacity"),
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
      "8": "8px",
    },
    boxShadow: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
    container: {},
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
    },
    divideColor: (theme) => theme("borderColor"),
    divideOpacity: (theme) => theme("borderOpacity"),
    divideWidth: (theme) => theme("borderWidth"),
    fill: {
      current: "currentColor",
    },
    flex: {
      "1": "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexGrow: {
      "0": "0",
      default: "1",
    },
    flexShrink: {
      "0": "0",
      default: "1",
    },
    fontFamily: {
      sans: [
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
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    fontSize: {
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.3125rem",
      "2xl": "1.4375rem",
      "3xl": "1.625rem",
      "4xl": "2.0625rem",
      "5xl": "2.1875rem",
      "6xl": "2.625rem",
      "7xl": "3.125rem",
      "8xl": "4.0625rem",
      "9xl": "5rem",
      "10xl": "5.9375rem",
      "11xl": "6.875rem",
      "12xl": "7.8125rem",
      "13xl": "8.75rem",
    },
    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),
    inset: {
      "0": "0",
      auto: "auto",
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      "3": ".75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    maxHeight: {
      full: "100%",
      screen: "100vh",
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      full: "100%",
      ...breakpoints(theme("screens")),
    }),
    minHeight: {
      "0": "0",
      full: "100%",
      screen: "100vh",
    },
    minWidth: {
      "0": "0",
      full: "100%",
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    opacity: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "100": "1",
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
    },
    padding: (theme) => theme("spacing"),
    placeholderColor: (theme) => theme("colors"),
    placeholderOpacity: (theme) => theme("opacity"),
    space: (theme, { negative }) => ({
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    stroke: {
      current: "currentColor",
    },
    strokeWidth: {
      "0": "0",
      "1": "1",
      "2": "2",
    },
    textColor: (theme) => theme("colors"),
    textOpacity: (theme) => theme("opacity"),
    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
    }),
    zIndex: {
      auto: "auto",
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50",
    },
    gap: (theme) => theme("spacing"),
    gridTemplateColumns: {
      none: "none",
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(3, minmax(0, 1fr))",
      "4": "repeat(4, minmax(0, 1fr))",
      "5": "repeat(5, minmax(0, 1fr))",
      "6": "repeat(6, minmax(0, 1fr))",
      "7": "repeat(7, minmax(0, 1fr))",
      "8": "repeat(8, minmax(0, 1fr))",
      "9": "repeat(9, minmax(0, 1fr))",
      "10": "repeat(10, minmax(0, 1fr))",
      "11": "repeat(11, minmax(0, 1fr))",
      "12": "repeat(12, minmax(0, 1fr))",
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
    },
    gridColumnStart: {
      auto: "auto",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "13": "13",
    },
    gridColumnEnd: {
      auto: "auto",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "13": "13",
    },
    gridTemplateRows: {
      none: "none",
      "1": "repeat(1, minmax(0, 1fr))",
      "2": "repeat(2, minmax(0, 1fr))",
      "3": "repeat(3, minmax(0, 1fr))",
      "4": "repeat(4, minmax(0, 1fr))",
      "5": "repeat(5, minmax(0, 1fr))",
      "6": "repeat(6, minmax(0, 1fr))",
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
    },
    gridRowStart: {
      auto: "auto",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
    },
    gridRowEnd: {
      auto: "auto",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
    },
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left",
    },
    scale: {
      "0": "0",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5",
    },
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      "0": "0",
      "45": "45deg",
      "90": "90deg",
      "180": "180deg",
    },
    translate: (theme, { negative }) => ({
      ...theme("spacing"),
      ...negative(theme("spacing")),
      "-full": "-100%",
      "-1/2": "-50%",
      "1/2": "50%",
      full: "100%",
    }),
    skew: {
      "-12": "-12deg",
      "-6": "-6deg",
      "-3": "-3deg",
      "0": "0",
      "3": "3deg",
      "6": "6deg",
      "12": "12deg",
    },
    transitionProperty: {
      none: "none",
      all: "all",
      default:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
    },
    transitionTimingFunction: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    transitionDuration: {
      "75": "75ms",
      "100": "100ms",
      "150": "150ms",
      "200": "200ms",
      "300": "300ms",
      "500": "500ms",
      "700": "700ms",
      "1000": "1000ms",
    },
    transitionDelay: {
      "75": "75ms",
      "100": "100ms",
      "150": "150ms",
      "200": "200ms",
      "300": "300ms",
      "500": "500ms",
      "700": "700ms",
      "1000": "1000ms",
    },
    widths: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
    }),
  },
  variants: {
    accessibility: ["responsive", "focus"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColor: ["responsive", "hover", "focus"],
    backgroundOpacity: ["responsive", "hover", "focus"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    borderColor: ["responsive", "hover", "focus"],
    borderOpacity: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive"],
    boxShadow: ["responsive", "hover", "focus"],
    boxSizing: ["responsive"],
    container: ["responsive"],
    cursor: ["responsive"],
    display: ["responsive"],
    divideColor: ["responsive"],
    divideOpacity: ["responsive"],
    divideWidth: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    clear: ["responsive"],
    fontFamily: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontStyle: ["responsive"],
    fontWeight: ["responsive", "hover", "focus"],
    height: ["responsive"],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive", "hover", "focus"],
    order: ["responsive"],
    outline: ["responsive", "focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    placeholderColor: ["responsive", "focus"],
    placeholderOpacity: ["responsive", "focus"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    space: ["responsive"],
    stroke: ["responsive"],
    strokeWidth: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "focus"],
    textOpacity: ["responsive", "hover", "focus"],
    textDecoration: ["responsive", "hover", "focus"],
    textTransform: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive"],
    gap: ["responsive"],
    gridAutoFlow: ["responsive"],
    gridTemplateColumns: ["responsive"],
    gridColumn: ["responsive"],
    gridColumnStart: ["responsive"],
    gridColumnEnd: ["responsive"],
    gridTemplateRows: ["responsive"],
    gridRow: ["responsive"],
    gridRowStart: ["responsive"],
    gridRowEnd: ["responsive"],
    transform: ["responsive"],
    transformOrigin: ["responsive"],
    scale: ["responsive", "hover", "focus"],
    rotate: ["responsive", "hover", "focus"],
    translate: ["responsive", "hover", "focus"],
    skew: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive"],
    transitionTimingFunction: ["responsive"],
    transitionDuration: ["responsive"],
    transitionDelay: ["responsive"],
  },
  corePlugins: {},

  plugins: [
    require("./tailwindcss/widths"),
    require("@ky-is/tailwindcss-plugin-width-height")({
      variants: ["responsive"],
    }),
    require("./tailwindcss/css-grid")({
      grids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      gaps: {
        "0": "0",
        "4": "1rem",
        "8": "2rem",
      },
    }),
  ],
};
