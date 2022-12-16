import './App.css';
import { data } from './data';
import { useState } from 'react'
import { GetSlider } from './GetSlider';
import { Reviews } from './GetReviews';

function App() {
  const [leisures, setLeisures] = useState(data);
  const [showMore, setShowMore] = useState(false)

  const toshowText = (item) => {
    item.showMore = !item.showMore;
    setShowMore(!showMore)
  }

  const isDeletePicture = (id) => {

    let newLeisuresList = leisures.filter(item => (
      
      item.id !== id));
    setLeisures(newLeisuresList)
  }

  return (
    <>
      <section className='container leisure'>
        <h1 className='leisure__title-main'>Идеи досуга во время Новогодних Каникул</h1>
        <div>        
          <ul className='leisure__list'>
            {
              leisures.map(leisure => {
                const {id, name, description, image, showMore} = leisure; 
                return (
                  <li key = {id} className='container leisure__item'>
                    <h2 className='leisure__title'>{ name }</h2>
                    <img src={ image } alt={ name } width="300" />
                    <p>{ showMore ?  description : description.substring(0, 150) + '...'} <button className='btn' type="button" onClick={()=>{toshowText(leisure)}}>{ showMore ? 'свернуть' : 'показать'}</button></p>
                    <button type="button" onClick={() => isDeletePicture(id)} className="leisure__button">Удалить событие</button>
                  </li>
                )
              })
            }
          </ul>
          <button type='button' className='leisure__button-remove' onClick={()=>leisures.length = 0}>Удалить все события</button>      
        </div>
        <GetSlider />        
      </section>
      <Reviews />
    </>
    
    
  );
}

export default App;
