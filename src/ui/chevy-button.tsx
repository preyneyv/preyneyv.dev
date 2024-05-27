import { ChevronRight } from '@carbon/icons-react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ComponentProps, ReactNode, forwardRef } from 'react'

const ChevyButton = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<typeof motion.button>, 'children'> & {
    children: ReactNode
  }
>(({ className, disabled, children, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      {...props}
      disabled={disabled ? true : undefined}
      className={clsx(
        'disabled:opacity-20 transition-opacity text-sm uppercase flex items-center gap-2 text-bloo font-bold px-2',
        className
      )}
      initial="initial"
      whileHover={'hover'}
    >
      {children}
      <div className="overflow-visible w-4 h-4 relative">
        <motion.div
          className="flex w-8 absolute right-0"
          variants={{
            initial: {
              translateX: 0,
            },
            hover: {
              translateX: '12px',
            },
          }}
        >
          <motion.div
            className="translate-x-1"
            variants={{
              initial: {
                opacity: 0,
              },
              hover: {
                opacity: 1,
              },
            }}
          >
            <ChevronRight size={16} />
          </motion.div>
          <motion.div
            variants={{
              initial: {
                opacity: 1,
              },
              hover: {
                opacity: 0,
              },
            }}
          >
            <ChevronRight size={16} />
          </motion.div>
        </motion.div>
      </div>
    </motion.button>
  )
})
ChevyButton.displayName = 'ChevyButton'

export default ChevyButton
