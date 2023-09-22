// отображение контента одной темы (children)
import { Content } from "./Content"
import { IContent } from "./Topics"

interface TopicContentProps {
  content: IContent[],
}

export const TopicContent = ({ content }: TopicContentProps) => {
  return (
    <div>
      {content.map(item => <Content key={crypto.randomUUID()} content={item} />)}
    </div>
  )
}
