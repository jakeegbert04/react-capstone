import { useState } from 'react'
import Modal from 'react-modal'

import StarRating from './StarRating';
import ReviewItem from "./ReviewItem"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    marginRight: '-50%',
    height: '50%',
    width: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--grey)',
    overflow: "hidden",
  },
};


export default function Reviews() {
  const [modalIsOpen, SetModalIsOpen] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [description, setDescription] = useState("")
  const [reviews, setReviews] = useState([])
  
  
  function handleSubmit(e) {
    (e).preventDefault();

    setReviews((reviews) => {
      const newReview = {
        id: reviews.at(-1)?.id + 1 || 1,
        firstName: firstName,
        lastName: lastName,
        description: description
      };
      return [...reviews, newReview]
    })
    SetModalIsOpen(false)
    setDescription("")
    setFirstName("")
    setLastName("")
  }
  function handleDelete(id) {
    setReviews((reviews) => reviews.filter((review) => review.id !== id));
  }
  function handleOpen() {
    SetModalIsOpen(true)
  }
  function handleClose(e) {
    (e).preventDefault();
    SetModalIsOpen(false)
    
  }

  function renderReviews() {
    return reviews.map((review) => {
      return (
        <ReviewItem
          key={review.id}
          review={review}
          handleDelete={handleDelete}
        />
      )
    })
  }

  return (
    <>
    
    <div className="review-input-container">
        <button className='add-review' onClick={handleOpen}>Add Review</button>
      {renderReviews()}
    
    </div>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        contentLabel="Reviews?"
        style={customStyles}
      >
        <div className='modal'>
          <button onClick={handleClose}>Close</button>
          <div className='review-inputs'>
            <form onSubmit={handleSubmit}>
              <div className='input-names'>
                <input 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text" 
                  placeholder="First Name"
                />
                <input
                  type="text" 
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="description-submit">
                <textarea
                  className='description'  
                  placeholder='Leave a Review' 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                >
                </textarea>
                  
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  )
}