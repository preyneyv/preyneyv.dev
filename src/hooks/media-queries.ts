import { useMedia } from 'react-use'

/**
 * Determine whether the current device can hover
 */
export function useCanHover() {
  return useMedia('(hover: hover)', true)
}

/**
 * Determines whether the current screen is large.
 */
export function useIsSizeLG() {
  return useMedia('(min-width: 1024px)', true)
}
