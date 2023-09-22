// отображение одной темы (заголовок и наполнение)
import React from "react";

interface TopicProps {
  title: string,
  img?: string,
  children: React.ReactNode,
}

export const Topic = ({ title, img, children }: TopicProps) => {
  return (
    <div>
      {img ? (
        <div className="topic-title">
          <h4>{title}</h4>
          <img width="45px" src={img} />
        </div>
      ) : <h4>{title}</h4>}
      {children}
    </div>
  )
}
