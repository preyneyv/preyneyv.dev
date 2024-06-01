import { useMedia } from 'react-use'

/**
 * Determine whether the current device can hover
 */
export default function useCanHover() {
  return useMedia('(hover: hover)')
}
