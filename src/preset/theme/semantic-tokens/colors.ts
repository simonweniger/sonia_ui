import {defineSemanticTokens} from "@chakra-ui/react";

/**
 * Semantic color tokens for the SoniaUI design system.
 *
 * Updated to match the custom theme with hue 253.83 for neutral tones.
 *
 * Calculated colors (hover, soft, etc.) use `color-mix()` matching the original
 * shared theme (packages/styles/themes/shared/theme.css).
 */

/* ── Primitive constants (not exposed as tokens, referenced below) ──── */
const SNOW = "oklch(0.9911 0 0)";

/* ── Light theme base variables ────────────────────────────────────── */
const L_BACKGROUND = "oklch(0.9702 0.0036 253.83)";
const L_FOREGROUND = "oklch(0.2103 0.0036 253.83)";
const L_SURFACE = "oklch(1.0 0.0018 253.83)";
const L_SURFACE_SECONDARY = "oklch(0.9524 0.0029 253.83)";
const L_SURFACE_TERTIARY = "oklch(0.9373 0.0029 253.83)";
const L_DEFAULT = "oklch(0.94 0.0036 253.83)";
const L_DEFAULT_FG = "oklch(0.2103 0.0059 253.83)";
const L_ACCENT = "oklch(0.6204 0.195 253.83)";
const L_ACCENT_FG = SNOW;
const L_MUTED = "oklch(0.5517 0.0072 253.83)";
const L_BORDER = "oklch(0.90 0.0036 253.83)";
const L_SEPARATOR = "oklch(0.92 0.0036 253.83)";
const L_SUCCESS = "oklch(0.7329 0.1949 150.81)";
const L_SUCCESS_FG = "oklch(0.2103 0.0059 150.81)";
const L_WARNING = "oklch(0.7819 0.1596 72.33)";
const L_WARNING_FG = "oklch(0.2103 0.0059 72.33)";
const L_DANGER = "oklch(0.6532 0.2345 25.74)";
const L_DANGER_FG = SNOW;
const L_FIELD = "oklch(1.0 0.0018 253.83)";
const L_OVERLAY = "oklch(1.0 0.0011 253.83)";
const L_SEGMENT = "oklch(1.0 0.0036 253.83)";

/* ── Dark theme base variables ─────────────────────────────────────── */
const D_BACKGROUND = "oklch(0.12 0.0036 253.83)";
const D_FOREGROUND = "oklch(0.9911 0.0036 253.83)";
const D_SURFACE = "oklch(0.2103 0.0072 253.83)";
const D_SURFACE_SECONDARY = "oklch(0.257 0.0054 253.83)";
const D_SURFACE_TERTIARY = "oklch(0.2721 0.0054 253.83)";
const D_DEFAULT = "oklch(0.274 0.0036 253.83)";
const D_DEFAULT_FG = SNOW;
const D_ACCENT = "oklch(0.6204 0.195 253.83)";
const D_MUTED = "oklch(0.705 0.0072 253.83)";
const D_BORDER = "oklch(0.28 0.0036 253.83)";
const D_SEPARATOR = "oklch(0.25 0.0036 253.83)";
const D_WARNING = "oklch(0.8203 0.1398 76.34)";
const D_WARNING_FG = "oklch(0.2103 0.0059 76.34)";
const D_DANGER = "oklch(0.594 0.1981 24.63)";
const D_FIELD = "oklch(0.2103 0.0072 253.83)";
const D_SEGMENT = "oklch(0.3964 0.0036 253.83)";

/* ── Calculated color-mix helpers ──────────────────────────────────── */
/* hover = 96% base + 4% foreground for default, 90% + 10% for accent/status */
const L_DEFAULT_HOVER = `color-mix(in oklab, ${L_DEFAULT} 96%, ${L_DEFAULT_FG} 4%)`;
const D_DEFAULT_HOVER = `color-mix(in oklab, ${D_DEFAULT} 96%, ${D_DEFAULT_FG} 4%)`;
const L_SURFACE_HOVER = `color-mix(in oklab, ${L_SURFACE} 92%, ${L_FOREGROUND} 8%)`;
const D_SURFACE_HOVER = `color-mix(in oklab, ${D_SURFACE} 92%, ${D_FOREGROUND} 8%)`;

/* accent-soft = 15% accent over transparent (the original uses color-mix) */
const L_ACCENT_SOFT = `color-mix(in oklab, ${L_ACCENT} 15%, transparent)`;
const L_ACCENT_SOFT_HOVER = `color-mix(in oklab, ${L_ACCENT} 20%, transparent)`;
const D_ACCENT_SOFT = `color-mix(in oklab, ${D_ACCENT} 15%, transparent)`;
const D_ACCENT_SOFT_HOVER = `color-mix(in oklab, ${D_ACCENT} 20%, transparent)`;

/* background shades */
const L_BG_SECONDARY = `color-mix(in oklab, ${L_BACKGROUND} 96%, ${L_FOREGROUND} 4%)`;
const L_BG_TERTIARY = `color-mix(in oklab, ${L_BACKGROUND} 92%, ${L_FOREGROUND} 8%)`;
const D_BG_SECONDARY = `color-mix(in oklab, ${D_BACKGROUND} 96%, ${D_FOREGROUND} 4%)`;
const D_BG_TERTIARY = `color-mix(in oklab, ${D_BACKGROUND} 92%, ${D_FOREGROUND} 8%)`;

/* border levels */
const L_BORDER_SECONDARY = `color-mix(in oklab, ${L_SURFACE} 78%, ${L_FOREGROUND} 22%)`;
const L_BORDER_TERTIARY = `color-mix(in oklab, ${L_SURFACE} 66%, ${L_FOREGROUND} 34%)`;
const D_BORDER_SECONDARY = `color-mix(in oklab, ${D_SURFACE} 78%, ${D_FOREGROUND} 22%)`;
const D_BORDER_TERTIARY = `color-mix(in oklab, ${D_SURFACE} 66%, ${D_FOREGROUND} 34%)`;

/* separator levels */
const L_SEPARATOR_SECONDARY = `color-mix(in oklab, ${L_SURFACE} 85%, ${L_FOREGROUND} 15%)`;
const L_SEPARATOR_TERTIARY = `color-mix(in oklab, ${L_SURFACE} 81%, ${L_FOREGROUND} 19%)`;
const D_SEPARATOR_SECONDARY = `color-mix(in oklab, ${D_SURFACE} 85%, ${D_FOREGROUND} 15%)`;
const D_SEPARATOR_TERTIARY = `color-mix(in oklab, ${D_SURFACE} 81%, ${D_FOREGROUND} 19%)`;

/* status hover states */
const L_ACCENT_HOVER = `color-mix(in oklab, ${L_ACCENT} 90%, ${L_ACCENT_FG} 10%)`;
const D_ACCENT_HOVER = `color-mix(in oklab, ${D_ACCENT} 90%, ${SNOW} 10%)`;
const L_SUCCESS_HOVER = `color-mix(in oklab, ${L_SUCCESS} 90%, ${L_SUCCESS_FG} 10%)`;
const D_SUCCESS_HOVER = `color-mix(in oklab, ${L_SUCCESS} 90%, ${L_SUCCESS_FG} 10%)`;
const L_WARNING_HOVER = `color-mix(in oklab, ${L_WARNING} 90%, ${L_WARNING_FG} 10%)`;
const D_WARNING_HOVER = `color-mix(in oklab, ${D_WARNING} 90%, ${D_WARNING_FG} 10%)`;
const L_DANGER_HOVER = `color-mix(in oklab, ${L_DANGER} 90%, ${SNOW} 10%)`;
const D_DANGER_HOVER = `color-mix(in oklab, ${D_DANGER} 90%, ${SNOW} 10%)`;

/* status soft colors */
const L_SUCCESS_SOFT = `color-mix(in oklab, ${L_SUCCESS} 15%, transparent)`;
const D_SUCCESS_SOFT = `color-mix(in oklab, ${L_SUCCESS} 15%, transparent)`;
const L_WARNING_SOFT = `color-mix(in oklab, ${L_WARNING} 15%, transparent)`;
const D_WARNING_SOFT = `color-mix(in oklab, ${D_WARNING} 15%, transparent)`;
const L_DANGER_SOFT = `color-mix(in oklab, ${L_DANGER} 15%, transparent)`;
const D_DANGER_SOFT = `color-mix(in oklab, ${D_DANGER} 15%, transparent)`;

/* field hover/focus */
const L_FIELD_HOVER = `color-mix(in oklab, ${L_FIELD} 90%, ${L_FOREGROUND} 2%)`;
const D_FIELD_HOVER = `color-mix(in oklab, ${D_FIELD} 90%, ${D_FOREGROUND} 2%)`;

export const semanticColors = defineSemanticTokens.colors({
  /* -----------------------------------------------------------------------
   * Background
   * ----------------------------------------------------------------------- */
  bg: {
    DEFAULT: {
      value: {_light: L_BACKGROUND, _dark: D_BACKGROUND},
    },
    secondary: {
      value: {_light: L_BG_SECONDARY, _dark: D_BG_SECONDARY},
    },
    tertiary: {
      value: {_light: L_BG_TERTIARY, _dark: D_BG_TERTIARY},
    },
    muted: {
      value: {_light: L_BACKGROUND, _dark: D_BACKGROUND},
    },
    subtle: {
      value: {_light: L_BG_SECONDARY, _dark: D_BG_SECONDARY},
    },
    emphasized: {
      value: {_light: L_BG_TERTIARY, _dark: D_BG_TERTIARY},
    },
    inverted: {
      value: {_light: L_FOREGROUND, _dark: D_FOREGROUND},
    },
    content: {
      value: {_light: L_BACKGROUND, _dark: D_BACKGROUND},
    },
    panel: {
      value: {_light: L_SURFACE, _dark: D_SURFACE},
    },
    overlay: {
      value: {
        _light: `color-mix(in oklch, ${L_OVERLAY} 95%, transparent)`,
        _dark: `color-mix(in oklch, ${D_SURFACE} 85%, transparent)`,
      },
    },
    backdrop: {
      value: {_light: "oklch(0 0 0 / 0.3)", _dark: "oklch(0 0 0 / 0.3)"},
    },
    error: {
      value: {_light: L_DANGER_SOFT, _dark: D_DANGER_SOFT},
    },
    warning: {
      value: {_light: L_WARNING_SOFT, _dark: D_WARNING_SOFT},
    },
    success: {
      value: {_light: L_SUCCESS_SOFT, _dark: D_SUCCESS_SOFT},
    },
    info: {
      value: {_light: L_ACCENT_SOFT, _dark: D_ACCENT_SOFT},
    },
  },

  /* -----------------------------------------------------------------------
   * Foreground
   * ----------------------------------------------------------------------- */
  fg: {
    DEFAULT: {
      value: {_light: L_FOREGROUND, _dark: D_FOREGROUND},
    },
    muted: {
      value: {_light: L_MUTED, _dark: D_MUTED},
    },
    subtle: {
      value: {
        _light: `color-mix(in oklab, ${L_FOREGROUND} 70%, ${L_BACKGROUND} 30%)`,
        _dark: `color-mix(in oklab, ${D_FOREGROUND} 70%, ${D_BACKGROUND} 30%)`,
      },
    },
    emphasized: {
      value: {
        _light: `color-mix(in oklab, ${L_FOREGROUND} 90%, ${L_BACKGROUND} 10%)`,
        _dark: `color-mix(in oklab, ${D_FOREGROUND} 90%, ${D_BACKGROUND} 10%)`,
      },
    },
    inverted: {
      value: {_light: D_FOREGROUND, _dark: L_FOREGROUND},
    },
    error: {
      value: {_light: L_DANGER, _dark: D_DANGER},
    },
    warning: {
      value: {_light: L_WARNING, _dark: D_WARNING},
    },
    success: {
      value: {_light: L_SUCCESS, _dark: L_SUCCESS},
    },
    info: {
      value: {_light: L_ACCENT, _dark: D_ACCENT},
    },
  },

  /* -----------------------------------------------------------------------
   * Border
   * ----------------------------------------------------------------------- */
  border: {
    DEFAULT: {
      value: {_light: L_BORDER, _dark: D_BORDER},
    },
    muted: {
      value: {_light: L_SEPARATOR, _dark: D_SEPARATOR},
    },
    subtle: {
      value: {_light: L_SEPARATOR, _dark: D_SEPARATOR},
    },
    emphasized: {
      value: {_light: L_BORDER_SECONDARY, _dark: D_BORDER_SECONDARY},
    },
    secondary: {
      value: {_light: L_BORDER_SECONDARY, _dark: D_BORDER_SECONDARY},
    },
    tertiary: {
      value: {_light: L_BORDER_TERTIARY, _dark: D_BORDER_TERTIARY},
    },
    inverted: {
      value: {_light: D_BORDER, _dark: L_BORDER},
    },
    error: {
      value: {_light: L_DANGER, _dark: D_DANGER},
    },
    warning: {
      value: {_light: L_WARNING, _dark: D_WARNING},
    },
    success: {
      value: {_light: L_SUCCESS, _dark: L_SUCCESS},
    },
    info: {
      value: {_light: L_ACCENT, _dark: D_ACCENT},
    },
  },

  /* -----------------------------------------------------------------------
   * Separator
   * ----------------------------------------------------------------------- */
  separator: {
    DEFAULT: {
      value: {_light: L_SEPARATOR, _dark: D_SEPARATOR},
    },
    secondary: {
      value: {_light: L_SEPARATOR_SECONDARY, _dark: D_SEPARATOR_SECONDARY},
    },
    tertiary: {
      value: {_light: L_SEPARATOR_TERTIARY, _dark: D_SEPARATOR_TERTIARY},
    },
  },

  /* -----------------------------------------------------------------------
   * Accent (primary brand color)
   * ----------------------------------------------------------------------- */
  accent: {
    DEFAULT: {
      value: {_light: L_ACCENT, _dark: D_ACCENT},
    },
    contrast: {
      value: {_light: L_ACCENT_FG, _dark: SNOW},
    },
    fg: {
      value: {_light: L_ACCENT, _dark: D_ACCENT},
    },
    muted: {
      value: {_light: L_ACCENT_SOFT, _dark: D_ACCENT_SOFT},
    },
    subtle: {
      value: {_light: L_ACCENT_SOFT, _dark: D_ACCENT_SOFT},
    },
    emphasized: {
      value: {_light: L_ACCENT_SOFT_HOVER, _dark: D_ACCENT_SOFT_HOVER},
    },
    solid: {
      value: {_light: L_ACCENT, _dark: D_ACCENT},
    },
    focusRing: {
      value: {_light: L_ACCENT, _dark: D_ACCENT},
    },
    border: {
      value: {
        _light: `color-mix(in oklab, ${L_ACCENT} 40%, transparent)`,
        _dark: `color-mix(in oklab, ${D_ACCENT} 40%, transparent)`,
      },
    },
    hover: {
      value: {_light: L_ACCENT_HOVER, _dark: D_ACCENT_HOVER},
    },
    soft: {
      value: {_light: L_ACCENT_SOFT, _dark: D_ACCENT_SOFT},
    },
  },

  /* -----------------------------------------------------------------------
   * Neutral (default colorPalette — used by tags, buttons, inputs, etc.)
   *
   * Maps to the original SoniaUI `--default` / `--default-foreground` tokens
   * which are distinct from Tailwind's gray scale.
   * ----------------------------------------------------------------------- */
  neutral: {
    contrast: {
      value: {_light: L_SURFACE, _dark: D_SURFACE},
    },
    fg: {
      value: {_light: L_DEFAULT_FG, _dark: D_DEFAULT_FG},
    },
    muted: {
      value: {_light: L_DEFAULT, _dark: D_DEFAULT},
    },
    subtle: {
      value: {_light: L_DEFAULT, _dark: D_DEFAULT},
    },
    emphasized: {
      value: {_light: L_DEFAULT_HOVER, _dark: D_DEFAULT_HOVER},
    },
    solid: {
      value: {_light: L_FOREGROUND, _dark: D_FOREGROUND},
    },
    focusRing: {
      value: {_light: L_ACCENT, _dark: D_ACCENT},
    },
    border: {
      value: {_light: L_BORDER, _dark: D_BORDER},
    },
  },

  /* -----------------------------------------------------------------------
   * Surface & Overlay
   * ----------------------------------------------------------------------- */
  surface: {
    DEFAULT: {
      value: {_light: L_SURFACE, _dark: D_SURFACE},
    },
    fg: {
      value: {_light: L_FOREGROUND, _dark: D_FOREGROUND},
    },
    secondary: {
      value: {_light: L_SURFACE_SECONDARY, _dark: D_SURFACE_SECONDARY},
    },
    tertiary: {
      value: {_light: L_SURFACE_TERTIARY, _dark: D_SURFACE_TERTIARY},
    },
    hover: {
      value: {_light: L_SURFACE_HOVER, _dark: D_SURFACE_HOVER},
    },
  },
  overlay: {
    DEFAULT: {
      value: {
        _light: `color-mix(in oklch, ${L_OVERLAY} 95%, transparent)`,
        _dark: `color-mix(in oklch, ${D_SURFACE} 85%, transparent)`,
      },
    },
    fg: {
      value: {_light: L_FOREGROUND, _dark: D_FOREGROUND},
    },
  },

  /* -----------------------------------------------------------------------
   * Default (explicit alias for the --default token)
   * Used by components that reference `default` directly.
   * ----------------------------------------------------------------------- */
  default: {
    DEFAULT: {
      value: {_light: L_DEFAULT, _dark: D_DEFAULT},
    },
    fg: {
      value: {_light: L_DEFAULT_FG, _dark: D_DEFAULT_FG},
    },
    hover: {
      value: {_light: L_DEFAULT_HOVER, _dark: D_DEFAULT_HOVER},
    },
  },

  /* -----------------------------------------------------------------------
   * Muted
   * ----------------------------------------------------------------------- */
  muted: {
    DEFAULT: {
      value: {_light: L_MUTED, _dark: D_MUTED},
    },
  },

  /* -----------------------------------------------------------------------
   * Focus & Link
   * ----------------------------------------------------------------------- */
  focus: {
    DEFAULT: {
      value: {_light: L_ACCENT, _dark: D_ACCENT},
    },
  },
  link: {
    DEFAULT: {
      value: {_light: L_FOREGROUND, _dark: D_FOREGROUND},
    },
  },

  /* -----------------------------------------------------------------------
   * Field tokens (form inputs)
   * ----------------------------------------------------------------------- */
  field: {
    DEFAULT: {
      value: {_light: L_FIELD, _dark: D_FIELD},
    },
    fg: {
      value: {_light: L_FOREGROUND, _dark: D_FOREGROUND},
    },
    hover: {
      value: {_light: L_FIELD_HOVER, _dark: D_FIELD_HOVER},
    },
    placeholder: {
      value: {_light: L_MUTED, _dark: D_MUTED},
    },
    border: {
      value: {_light: "transparent", _dark: "transparent"},
    },
  },

  /* -----------------------------------------------------------------------
   * Segment (segmented control)
   * ----------------------------------------------------------------------- */
  segment: {
    DEFAULT: {
      value: {_light: L_SEGMENT, _dark: D_SEGMENT},
    },
    fg: {
      value: {_light: L_FOREGROUND, _dark: D_FOREGROUND},
    },
  },

  /* -----------------------------------------------------------------------
   * Presence indicators
   * ----------------------------------------------------------------------- */
  presence: {
    online: {
      value: {_light: L_SUCCESS, _dark: L_SUCCESS},
    },
    offline: {
      value: {_light: L_MUTED, _dark: D_MUTED},
    },
    busy: {
      value: {_light: L_WARNING, _dark: D_WARNING},
    },
    dnd: {
      value: {_light: L_DANGER, _dark: D_DANGER},
    },
    away: {
      value: {_light: L_MUTED, _dark: D_MUTED},
    },
  },

  /* -----------------------------------------------------------------------
   * Status indicators
   * ----------------------------------------------------------------------- */
  status: {
    success: {
      value: {_light: L_SUCCESS, _dark: L_SUCCESS},
    },
    error: {
      value: {_light: L_DANGER, _dark: D_DANGER},
    },
    warning: {
      value: {_light: L_WARNING, _dark: D_WARNING},
    },
    info: {
      value: {_light: L_ACCENT, _dark: D_ACCENT},
    },
  },

  /* -----------------------------------------------------------------------
   * Sidebar
   * ----------------------------------------------------------------------- */
  sidebar: {
    bg: {
      value: {_light: L_SURFACE_TERTIARY, _dark: D_BACKGROUND},
    },
    fg: {
      value: {_light: L_FOREGROUND, _dark: D_FOREGROUND},
    },
    border: {
      value: {_light: L_BORDER, _dark: D_BORDER},
    },
    accent: {
      bg: {
        value: {_light: L_DEFAULT, _dark: D_DEFAULT},
      },
      fg: {
        value: {_light: L_FOREGROUND, _dark: D_FOREGROUND},
      },
    },
  },

  /* -----------------------------------------------------------------------
   * Semantic role aliases (danger, success, warning)
   * ----------------------------------------------------------------------- */
  danger: {
    DEFAULT: {
      value: {_light: L_DANGER, _dark: D_DANGER},
    },
    fg: {
      value: {_light: L_DANGER_FG, _dark: SNOW},
    },
    hover: {
      value: {_light: L_DANGER_HOVER, _dark: D_DANGER_HOVER},
    },
    soft: {
      value: {_light: L_DANGER_SOFT, _dark: D_DANGER_SOFT},
    },
    contrast: {
      value: {_light: L_DANGER_FG, _dark: SNOW},
    },
    muted: {
      value: {_light: L_DANGER_SOFT, _dark: D_DANGER_SOFT},
    },
    subtle: {
      value: {
        _light: `color-mix(in oklab, ${L_DANGER} 10%, transparent)`,
        _dark: `color-mix(in oklab, ${D_DANGER} 10%, transparent)`,
      },
    },
    emphasized: {
      value: {
        _light: `color-mix(in oklab, ${L_DANGER} 25%, transparent)`,
        _dark: `color-mix(in oklab, ${D_DANGER} 25%, transparent)`,
      },
    },
    solid: {
      value: {_light: L_DANGER, _dark: D_DANGER},
    },
    focusRing: {
      value: {_light: L_DANGER, _dark: D_DANGER},
    },
    border: {
      value: {
        _light: `color-mix(in oklab, ${L_DANGER} 40%, transparent)`,
        _dark: `color-mix(in oklab, ${D_DANGER} 40%, transparent)`,
      },
    },
  },
  success: {
    DEFAULT: {
      value: {_light: L_SUCCESS, _dark: L_SUCCESS},
    },
    fg: {
      value: {_light: L_SUCCESS_FG, _dark: L_SUCCESS_FG},
    },
    hover: {
      value: {_light: L_SUCCESS_HOVER, _dark: D_SUCCESS_HOVER},
    },
    soft: {
      value: {_light: L_SUCCESS_SOFT, _dark: D_SUCCESS_SOFT},
    },
    contrast: {
      value: {_light: L_SUCCESS_FG, _dark: L_SUCCESS_FG},
    },
    muted: {
      value: {_light: L_SUCCESS_SOFT, _dark: D_SUCCESS_SOFT},
    },
    subtle: {
      value: {
        _light: `color-mix(in oklab, ${L_SUCCESS} 10%, transparent)`,
        _dark: `color-mix(in oklab, ${L_SUCCESS} 10%, transparent)`,
      },
    },
    emphasized: {
      value: {
        _light: `color-mix(in oklab, ${L_SUCCESS} 25%, transparent)`,
        _dark: `color-mix(in oklab, ${L_SUCCESS} 25%, transparent)`,
      },
    },
    solid: {
      value: {_light: L_SUCCESS, _dark: L_SUCCESS},
    },
    focusRing: {
      value: {_light: L_SUCCESS, _dark: L_SUCCESS},
    },
    border: {
      value: {
        _light: `color-mix(in oklab, ${L_SUCCESS} 40%, transparent)`,
        _dark: `color-mix(in oklab, ${L_SUCCESS} 40%, transparent)`,
      },
    },
  },
  warning: {
    DEFAULT: {
      value: {_light: L_WARNING, _dark: D_WARNING},
    },
    fg: {
      value: {_light: L_WARNING_FG, _dark: D_WARNING_FG},
    },
    hover: {
      value: {_light: L_WARNING_HOVER, _dark: D_WARNING_HOVER},
    },
    soft: {
      value: {_light: L_WARNING_SOFT, _dark: D_WARNING_SOFT},
    },
    contrast: {
      value: {_light: L_WARNING_FG, _dark: D_WARNING_FG},
    },
    muted: {
      value: {_light: L_WARNING_SOFT, _dark: D_WARNING_SOFT},
    },
    subtle: {
      value: {
        _light: `color-mix(in oklab, ${L_WARNING} 10%, transparent)`,
        _dark: `color-mix(in oklab, ${D_WARNING} 10%, transparent)`,
      },
    },
    emphasized: {
      value: {
        _light: `color-mix(in oklab, ${L_WARNING} 25%, transparent)`,
        _dark: `color-mix(in oklab, ${D_WARNING} 25%, transparent)`,
      },
    },
    solid: {
      value: {_light: L_WARNING, _dark: D_WARNING},
    },
    focusRing: {
      value: {_light: L_WARNING, _dark: D_WARNING},
    },
    border: {
      value: {
        _light: `color-mix(in oklab, ${L_WARNING} 40%, transparent)`,
        _dark: `color-mix(in oklab, ${D_WARNING} 40%, transparent)`,
      },
    },
  },

  /* -----------------------------------------------------------------------
   * Color Palettes (for colorPalette usage in recipes)
   *
   * These use exact OKLCH values from the theme. Each palette provides
   * the standard Chakra slots: contrast, fg, muted, subtle, emphasized,
   * solid, focusRing, border.
   * ----------------------------------------------------------------------- */
  red: {
    contrast: {value: {_light: SNOW, _dark: SNOW}},
    fg: {value: {_light: L_DANGER, _dark: D_DANGER}},
    muted: {value: {_light: L_DANGER_SOFT, _dark: D_DANGER_SOFT}},
    subtle: {
      value: {
        _light: `color-mix(in oklab, ${L_DANGER} 10%, transparent)`,
        _dark: `color-mix(in oklab, ${D_DANGER} 10%, transparent)`,
      },
    },
    emphasized: {
      value: {
        _light: `color-mix(in oklab, ${L_DANGER} 25%, transparent)`,
        _dark: `color-mix(in oklab, ${D_DANGER} 25%, transparent)`,
      },
    },
    solid: {value: {_light: L_DANGER, _dark: D_DANGER}},
    focusRing: {value: {_light: L_DANGER, _dark: D_DANGER}},
    border: {
      value: {
        _light: `color-mix(in oklab, ${L_DANGER} 40%, transparent)`,
        _dark: `color-mix(in oklab, ${D_DANGER} 40%, transparent)`,
      },
    },
  },

  orange: {
    contrast: {value: {_light: L_WARNING_FG, _dark: D_WARNING_FG}},
    fg: {value: {_light: L_WARNING, _dark: D_WARNING}},
    muted: {value: {_light: L_WARNING_SOFT, _dark: D_WARNING_SOFT}},
    subtle: {
      value: {
        _light: `color-mix(in oklab, ${L_WARNING} 10%, transparent)`,
        _dark: `color-mix(in oklab, ${D_WARNING} 10%, transparent)`,
      },
    },
    emphasized: {
      value: {
        _light: `color-mix(in oklab, ${L_WARNING} 25%, transparent)`,
        _dark: `color-mix(in oklab, ${D_WARNING} 25%, transparent)`,
      },
    },
    solid: {value: {_light: L_WARNING, _dark: D_WARNING}},
    focusRing: {value: {_light: L_WARNING, _dark: D_WARNING}},
    border: {
      value: {
        _light: `color-mix(in oklab, ${L_WARNING} 40%, transparent)`,
        _dark: `color-mix(in oklab, ${D_WARNING} 40%, transparent)`,
      },
    },
  },

  green: {
    contrast: {value: {_light: L_SUCCESS_FG, _dark: L_SUCCESS_FG}},
    fg: {value: {_light: L_SUCCESS, _dark: L_SUCCESS}},
    muted: {value: {_light: L_SUCCESS_SOFT, _dark: D_SUCCESS_SOFT}},
    subtle: {
      value: {
        _light: `color-mix(in oklab, ${L_SUCCESS} 10%, transparent)`,
        _dark: `color-mix(in oklab, ${L_SUCCESS} 10%, transparent)`,
      },
    },
    emphasized: {
      value: {
        _light: `color-mix(in oklab, ${L_SUCCESS} 25%, transparent)`,
        _dark: `color-mix(in oklab, ${L_SUCCESS} 25%, transparent)`,
      },
    },
    solid: {value: {_light: L_SUCCESS, _dark: L_SUCCESS}},
    focusRing: {value: {_light: L_SUCCESS, _dark: L_SUCCESS}},
    border: {
      value: {
        _light: `color-mix(in oklab, ${L_SUCCESS} 40%, transparent)`,
        _dark: `color-mix(in oklab, ${L_SUCCESS} 40%, transparent)`,
      },
    },
  },

  blue: {
    contrast: {value: {_light: SNOW, _dark: SNOW}},
    fg: {value: {_light: L_ACCENT, _dark: D_ACCENT}},
    muted: {value: {_light: L_ACCENT_SOFT, _dark: D_ACCENT_SOFT}},
    subtle: {value: {_light: L_ACCENT_SOFT, _dark: D_ACCENT_SOFT}},
    emphasized: {value: {_light: L_ACCENT_SOFT_HOVER, _dark: D_ACCENT_SOFT_HOVER}},
    solid: {value: {_light: L_ACCENT, _dark: D_ACCENT}},
    focusRing: {value: {_light: L_ACCENT, _dark: D_ACCENT}},
    border: {
      value: {
        _light: `color-mix(in oklab, ${L_ACCENT} 40%, transparent)`,
        _dark: `color-mix(in oklab, ${D_ACCENT} 40%, transparent)`,
      },
    },
  },

  /* Keep gray/slate/zinc referencing neutral for consistency */
  gray: {
    contrast: {value: {_light: L_SURFACE, _dark: D_SURFACE}},
    fg: {value: {_light: L_DEFAULT_FG, _dark: D_DEFAULT_FG}},
    muted: {value: {_light: L_DEFAULT, _dark: D_DEFAULT}},
    subtle: {value: {_light: L_DEFAULT, _dark: D_DEFAULT}},
    emphasized: {value: {_light: L_DEFAULT_HOVER, _dark: D_DEFAULT_HOVER}},
    solid: {value: {_light: L_FOREGROUND, _dark: D_FOREGROUND}},
    focusRing: {value: {_light: L_ACCENT, _dark: D_ACCENT}},
    border: {value: {_light: L_BORDER, _dark: D_BORDER}},
  },

  /* -----------------------------------------------------------------------
   * Shadows (semantic token-based)
   * ----------------------------------------------------------------------- */
  shadow: {
    surface: {
      value: {
        _light:
          "0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 0 1px 0 rgba(0, 0, 0, 0.06)",
        _dark: "0 0 0 0 transparent",
      },
    },
    overlay: {
      value: {
        _light:
          "0 2px 8px 0 rgba(0, 0, 0, 0.06), 0 -6px 12px 0 rgba(0, 0, 0, 0.03), 0 14px 28px 0 rgba(0, 0, 0, 0.08)",
        _dark: "0 0 1px 0 rgba(255, 255, 255, 0.3)",
      },
    },
    field: {
      value: {
        _light:
          "0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 0 1px 0 rgba(0, 0, 0, 0.06)",
        _dark: "0 0 0 0 transparent",
      },
    },
  },
});
