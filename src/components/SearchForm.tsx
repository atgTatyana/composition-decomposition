// обработка пользовательского ввода, отправка запроса на сервер
import { useState } from "react";

export interface IForm {
  search: string,
}

export const SearchForm = () => {
  const [form, setForm] = useState<IForm>({
    search: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const { name, value } = e.target;
    console.log(name, value)
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  return (
    <div className="search-form">
      <img src="https://avatars.mds.yandex.net/get-direct-picture/994844/AeH4ZIQL553LfSdOCq1HfA/orig" alt="..." />
      <form onSubmit={handleSubmit}>
        <input type="search" name="search" style={{width: "500px"}} onChange={handleChange} />
        <button type="submit">Найти</button>
      </form>
    </div>  
  ) 
}
