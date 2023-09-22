// отображение курсов валют (выводить по 3 виджета)
import { ICurrency } from "../App"
import { Widjet } from "./Widjet"

interface ExchangeRatesProps {
  currency: ICurrency[],
}

export const ExchangeRates = ({ currency }: ExchangeRatesProps ) => {
  return (
    <div>
      {currency.map(item => <Widjet key={item.currency}
        currency={item.currency} data={item.data} changes={item.changes} />)}
    </div>
  )
}
