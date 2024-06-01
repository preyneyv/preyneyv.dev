import { useMedia } from 'react-use'

/**
 * Determine whether the current device can hover
 */
export function useCanHover() {
  return useMedia('(hover: hover)', true)
}

export function isSizeSM() {
  // return useMedia('(min-width:')
}
