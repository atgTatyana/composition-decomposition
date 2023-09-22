// подсветка выбрабнного фильтра, установка обработчика onClick на фильтры; и формирование даты и времени
interface NewsFilterProps {
  handleClick: (e: React.MouseEvent) => void,
  selected: string,
}

const filters = [
  "Cейчас в СМИ",
  "в Германии",
  "Рекомендуем",
]

const date = new Date();
const dateString = " " + date.getDate() + "." + (date.getMonth() + 1) + ", "
  + date.getHours() + ":" + date.getMinutes();

export const NewsFilter = ({ handleClick, selected }: NewsFilterProps) => {
  return (
    <div>
      {filters.map(filter => <a href="#" key={filter}
        style={{color: `${filter === selected ? 'red' : 'grey'}`, marginRight: "10px"}}
        onClick={handleClick}>{filter}</a>)}
      {dateString}
    </div>
  )
}
