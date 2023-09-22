// переходы по линкам
const filters = ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик"];

export const SearchFilter = () => {
  return (
    <>
      {filters.map(filter => <a href="#" key={filter}
        style={{marginRight: "10px"}}>{filter}</a>)} 
    </>         
  )
}
