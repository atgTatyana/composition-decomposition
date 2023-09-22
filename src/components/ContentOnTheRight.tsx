// отображение контента справа от новостей
import { IRightData } from "../App"

interface ContentOnTheRightProps {
  data: IRightData,
}

export const ContentOnTheRight = ({ data }: ContentOnTheRightProps) => {
  return (
    <div className="content-right">
      <img src={data.img} alt="..." />
      <h4>{data.title}</h4>
      <div>{data.text}</div>
    </div>
  )
}
