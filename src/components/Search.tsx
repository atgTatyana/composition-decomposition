// блок поиска
import { SearchFilter } from "./SearchFilter"
import { SearchForm } from "./SearchForm"

export const Search = () => {

  return (
    <div className="search">
      <SearchFilter />
      <SearchForm />
      Найдется все. Например, <span style={{color: 'lightgrey'}}>фаза луны сегодня</span>
    </div>
  )
}
