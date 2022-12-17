import { useState } from "react";
let reviewsArray = [];

export function Reviews() {
  const [state, setState] = useState({name: "", review: "", reviews: []});

  const isNameChange = (valueName) => {
    setState({name: valueName, review: state.review, reviews: state.reviews})
  }

  const introductionOfReview = (valueReview) => {
    setState({review: valueReview, name: state.name, reviews: state.reviews})
  }
  
  const SendReview = () => { 
    if (state.name !== '' && state.review !== '') {
      reviewsArray.push(state);
      setState({name: "", review: "", reviews: reviewsArray, })
    } else {alert ("Заполните, пожалуйста, поля формы")}
  }

  return (
    <section className="reviews container">
      <h2 className="reviews__title">Здесь Вы можете оставить Ваш отзыв</h2>
      <form className="reviews__form" onSubmit={(e)=> e.preventDefault()}>
        <label className="reviews__desc-field" htmlFor="nameField">
          Введите Ваше имя:
        </label>
        <input className="reviews__field"  type="text" id="nameField" onChange={(e)=>{isNameChange(e.target.value)}} value= { state.name } />
        <label className="reviews__desc-field" htmlFor="reviewField">
          Введите Ваш отзыв:
        </label>
        <textarea className="reviews__field" id="reviewField" onChange={(e)=>{introductionOfReview(e.target.value)}} value = { state.review } rows = "7" />
        <button className="reviews__button" type="submit" onClick={ () => SendReview() }>Отправить отзыв</button>
      </form>
      <h3>{state.reviews.length === 0 ? "" : "Отзывы:"}</h3>      
      <ul className="reviews__list review">{state.reviews.map((item, id)=>(
        <li className="review__item" key={ id }>
          <h2 className="review__title">{item.name}</h2>
          <p className="review__description">{item.review}</p>
        </li>))}
      </ul>
    </section>    
  )
}