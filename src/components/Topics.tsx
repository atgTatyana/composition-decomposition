// формирование тематических блоков под баннером
import { Topic } from "./Topic"
import { Weather } from "./Weather"
import { TopicContent } from "./TopicContent"

export interface IContent {
  time?: string,
  name:string,
  chanal?: string,
  icon?: string,
  text?: string,
}

const visited: IContent[] = [
  {
    name: "Недвижимость",
    text: "о сталинках",
  },
  {
    name: "Маркет",
    text: "люстры и светильники",
  },
];

const program: IContent[] = [
  {
    time: "02:00",
    name: "THT.Best",
    chanal: "THT International",
  },
  {
    time: "02:15",
    name: "Джинглики",
    chanal: "Карусель INT",
  },
];

const broadcast: IContent[] = [
  {
    icon: "https://img.icons8.com/?size=80&id=41053&format=png",
    name: "Управление как искусство",
    chanal: "Успех",
  },
  {
    icon: "https://img.icons8.com/?size=80&id=41053&format=png",
    name: "Ночь. Мир в это время",
    chanal: "earthTV",
  },
];

export const Topics = () => {
  return (
    <>
      <div className="topic">
        <Topic title="Погода">
          <Weather />       
        </Topic>
      </div>

      <div className="topic">
        <Topic title="Посещаемое">
          <TopicContent content={visited}/>       
        </Topic>
      </div>

      <div className="topic">
        <Topic title="Карта Германии">
          <a href="#">Расписания</a>       
        </Topic>
      </div>

      <div className="topic">
        <Topic title="Телепрограмма"
          img="https://cdn2.iconfinder.com/data/icons/social-networks-7/128/Socialmedia_icons_Play_Youtube-1024.png">
          <TopicContent content={program}/>       
        </Topic>
      </div>

      <div className="topic">
        <Topic title="Эфир">
          <TopicContent content={broadcast}/>       
        </Topic>
      </div>
    </>
  )
}
