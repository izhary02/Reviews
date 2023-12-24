import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const getRandomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length)
    if (randomNum === index) {
      randomNum = index + 1
    }
    const newIndex = randomNum % people.length
    setIndex(newIndex)
  }

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length
      return newIndex
    })
  }

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length
      return newIndex
    })
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button type="button" className="next-btn" onClick={nextPerson}>
            <FaChevronLeft />
          </button>
          <button type="button" className="prev-btn" onClick={prevPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={getRandomPerson}
        >
          surprise me
        </button>
      </article>
    </main>
  )
}
export default App
