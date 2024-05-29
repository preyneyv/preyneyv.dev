import { Checkmark, ChevronDown, Close } from '@carbon/icons-react'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react'
import clsx from 'clsx'

export default function Multiselect({
  label,
  options,
  value,
  setValue,
}: {
  label: string
  options: string[]
  value: string[]
  setValue: (value: string[]) => void
}) {
  return (
    <Listbox multiple value={value} onChange={setValue}>
      <div className="w-full flex items-stretch h-9 relative">
        <div className="absolute left-0 h-9 w-9 -translate-x-full overflow-clip">
          <button
            className={clsx(
              'aspect-square h-9 border-y-[1px] border-l-[1px] border-dark hover:bg-dark flex justify-center items-center',
              'translate-x-0 disabled:translate-x-full transition-all duration-300',
              'opacity-100 disabled:opacity-0'
            )}
            disabled={value.length === 0}
            onClick={() => setValue([])}
          >
            <Close size={20} />
          </button>
        </div>
        <ListboxButton className="w-full">
          <div className="flex h-full justify-between items-center w-full bg-transparent border-y-[1px] border-r-[1px] border-dark px-2 py-1 relative">
            <div className="flex items-center gap-2">
              {value.length !== 0 && (
                <div className="text-xs bg-bloo block px-1 font-bold min-w-5">
                  {value.length}
                </div>
              )}
              <span className="block translate-y-[0.5px]">{label}</span>
            </div>
            <ChevronDown />
          </div>
        </ListboxButton>
      </div>
      <Transition
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 translate-y-1"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100"
      >
        <ListboxOptions
          className="cursor-default bg-neutral-900/80 backdrop-blur-sm w-[var(--button-width)] z-50"
          anchor={{
            to: 'bottom',
            padding: '0 32px',
          }}
        >
          {options.map((item) => (
            <ListboxOption
              key={item}
              value={item}
              className="data-[focus]:bg-white/10 flex items-center px-1 py-0.5 gap-1 group text-sm select-none"
            >
              <Checkmark
                className="opacity-0 size-4 fill-white group-data-[selected]:opacity-50 transition-opacity"
                size={20}
              />
              {item}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Transition>
    </Listbox>
  )
}
