import { FILTERS_BUTONS } from "../../consts/consts"
import { FilterValue } from "../../types/types"

interface Props {
  filterSelected: FilterValue,
  onFilterChange: (filter: FilterValue)=> void
}

export const Filters: React.FC<Props> = ({filterSelected, onFilterChange}) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTONS).map(([key, {href, literal}])=> {

        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''

        return (
          <li key={key}>
            <a className={className}
             href={href}
             onClick={(event)=> {
              event.preventDefault()
              onFilterChange(key as FilterValue)
             }}
             >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
