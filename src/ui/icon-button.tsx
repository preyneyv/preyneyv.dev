import clsx from 'clsx'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const IconButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, disabled, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      disabled={disabled ? true : undefined}
      className={clsx('disabled:opacity-20 transition-opacity', className)}
    >
      {children}
    </button>
  )
})
IconButton.displayName = 'IconButton'

export default IconButton
