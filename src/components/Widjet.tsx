// отображение одного виджета валюты
import { ICurrency } from "../App"

export const Widjet = ({ currency, data, changes }: ICurrency) => {
  return (
    <>
      <span>{currency} </span>
      <span>{data} </span>
      <span style={{color: 'grey'}}>{changes} </span>
    </>
  ) 
}
