// вывод одной строки новостей
import { INews } from "../App"

export const OneNews = ({ href, url, text }: INews) => {
  return (
    <div>
			<a href={href}>
				<img className="icon" src={url} />
				{text}
			</a>
    </div>
  )
}
