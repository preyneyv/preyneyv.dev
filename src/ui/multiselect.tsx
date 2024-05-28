import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { useState } from 'react'

// export type MultiselectOption = {
//   value: string
//   name: string
// }
export default function Multiselect({
  options,
  ariaLabel,
}: {
  options: string[]
  ariaLabel?: string
}) {
  const [selected, setSelected] = useState<string[]>([])
  const [query, setQuery] = useState('')
  const filteredOptions =
    query === ''
      ? options
      : options.filter((opt) => opt.toLowerCase().includes(query.toLowerCase()))

  return (
    <Combobox
      multiple
      value={selected}
      onChange={setSelected}
      onClose={() => setQuery('')}
    >
      {selected.length > 0 && (
        <ul>
          {selected.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <ComboboxInput
        aria-label={ariaLabel}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ComboboxOptions anchor="bottom" className="empty:hidden">
        {filteredOptions.map((item) => (
          <ComboboxOption
            key={item}
            value={item}
            className="data-[focus]:bg-blue-100"
          >
            {item}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  )
}
