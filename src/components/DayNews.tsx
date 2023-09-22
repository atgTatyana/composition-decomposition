// вывод 5 последних новостей
import { OneNews } from "./OneNews"
import { INews } from "../App"

interface DayNewsProps {
  news: INews[];
}

export const DayNews = ({ news }: DayNewsProps) => {
  return (
    <div>
      {news.map(item => <OneNews key={item.text} href={item.href} url={item.url} text={item.text} />)}
    </div>
  )
}
