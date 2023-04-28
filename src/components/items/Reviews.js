import { useEffect, useState } from 'react'
import Modal from 'react-modal'

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

Modal.setAppElement("#root")

export default function Reviews() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [description, setDescription] = useState("")
  const [reviews, setReviews] = useState([])
  const [reviewToEdit, setReviewToEdit] = useState(null)
  
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

    setModalIsOpen(false)
    setDescription("")
    setFirstName("")
    setLastName("")
    setReviewToEdit(null)
  }

  function handleDelete(id) {
    setReviews((reviews) => reviews.filter((review) => review.id !== id));
  }

  function handleOpen() {
    setModalIsOpen(true)
  }

  function handleClose() {
    setModalIsOpen(false)
    setReviewToEdit(null)
  }
  
  function renderReviews() {
    return reviews.map((review) => {
      return (
        <ReviewItem
          key={review.id}
          review={review}
          handleDelete={handleDelete}
          setReviewToEdit={setReviewToEdit}
          handleOpen={handleOpen}
        />
      )
    })
  }

  useEffect(() => {
    if(reviewToEdit) {
      setFirstName(reviewToEdit.firstName)

    } else {
      setFirstName(fName => fName)
    }
  }, [reviewToEdit])

  return (
    <>
    
    <div className="review-input-wrapper">
      <div className="add-review-buttton">
        <button className='add-review' onClick={handleOpen}>Add Review</button>
      </div>
      <div className="review-wrapper">
        {renderReviews()} 
      </div>
    </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className='modal'>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
          <div className='review-inputs'>
            <form onSubmit={handleSubmit}>
              <div className='input-names'>
                <input 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text" 
                  placeholder={reviewToEdit ? null : "First Name"}
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