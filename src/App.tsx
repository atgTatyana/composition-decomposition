import './App.css'
import { News } from './components/News'
import { ContentOnTheRight } from './components/ContentOnTheRight'
import { Search } from './components/Search'
import { Banner } from './components/Banner'
import { Topics } from './components/Topics'

export interface INews {
  type?: string,
	href: string,
	url: string,
	text: string,
}

export interface ICurrency {
  currency: string,
  data: number,
  changes: string,
}

export interface IRightData {
  img: string,
  title: string,
  text: string,
}

const newsData: INews[] = [
  {
    type: "Cейчас в СМИ",
    href: "#",
    url: "https://avatars.dzeninfra.ru/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
    text: "Путин упростил получение автомобильных номеров",
  },
  {
    type: "в Германии",
    href: "#",
    url: "https://avatars.dzeninfra.ru/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
    text: "В команде Зеленского раскрыли план реформ на Украине",
  }
];

const currencyData: ICurrency[] = [
  {
    currency: "USD MOEX",
    data: 63.52,
    changes: "+0,09",
  },
  {
    currency: "EUR MOEX",
    data: 70.86,
    changes: "+0,14",
  },
];

const rightData: IRightData = {
  img: "https://avatars.dzeninfra.ru/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
  title: "Работа над ошибками",
  text: "Смотрите на Яндексе и запоминайте",
}

function App() {
  return (
    <div className='container'>
      <div className='top-block'>
        <News news={newsData} currency={currencyData} />
        <ContentOnTheRight data={rightData} />
      </div>
      <Search />
      <Banner />
      <div className='down-block'>
        <Topics />
      </div>
    </div>
  )
}

export default App
