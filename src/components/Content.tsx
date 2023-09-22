// отображение одной строки контента
import { IContent } from "./Topics"

interface ProgramProps {
  content: IContent,
}

export const Content = ({ content }: ProgramProps) => {
  return (
    <div>
      {content.time} 
      {content.icon && <img width="15px" src={content.icon} />}
      {<a href="#">{content.name}</a>} 
      <span style={{color: 'grey'}}> {content.chanal}</span>
      {content.text && ` - ${content.text}`}
    </div>
  )
}
  