/**
 * Shared HeroUI visual patterns reusable across recipe base styles.
 * Note: `css` key is NOT valid inside recipe SystemStyleObject — use raw properties.
 */

/** Standard interactive transition: 250ms transform + 100ms bg/shadow */
export const heroUITransition = {
  WebkitTapHighlightColor: 'transparent',
  transitionProperty: 'transform, background-color, box-shadow',
  transitionDuration: '250ms, 100ms, 100ms',
  transitionTimingFunction:
    'var(--ease-smooth, ease), var(--ease-out, ease-out), var(--ease-out, ease-out)',
}

/** Focus-visible ring: 2px accent with 2px offset */
export const heroUIFocusRing = {
  _focusVisible: { ring: '2px', ringColor: 'accent', ringOffset: '2px' },
}

/** Disabled state: opacity 0.5, not-allowed cursor, no pointer events */
export const heroUIDisabled = {
  _disabled: { opacity: 0.5, cursor: 'not-allowed', pointerEvents: 'none' },
}

/** Press-scale effect on active */
export const heroUIPressScale = (scale = '0.97') => ({
  _active: { transform: `scale(${scale})` },
})
