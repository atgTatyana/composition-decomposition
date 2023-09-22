// новостной блок: фильтры, сами новости (выводить по 5 штук), виджеты с курсами
import { useState } from "react"
import { ExchangeRates } from "./ExchangeRates"
import { DayNews } from "./DayNews"
import { NewsFilter } from "./NewsFilter"
import { ICurrency, INews } from "../App"

interface NewsProps {
  news: INews[],
  currency: ICurrency[],
}

export const News = ({ news, currency }: NewsProps) => {
  const [selected, setSelected] = useState("Cейчас в СМИ");

  function handleSelectedFilter(e: React.MouseEvent) {
    const selectedFilter = (e.target as HTMLElement).textContent;
    if (selectedFilter) {
      setSelected(selectedFilter)
    }
  }

  return (
    <div className="news">
      <NewsFilter handleClick={handleSelectedFilter} selected={selected}/>
      <DayNews news={news.filter(item => item.type === selected)} />
      <ExchangeRates currency={currency} />
    </div>
  )
}
