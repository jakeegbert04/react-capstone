import { useState } from 'react'
import Modal from 'react-modal'

import StarRating from './StarRating';

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
  },
};


export default function Reviews() {
  const [modalIsOpen, SetModalIsOpen] = useState(false)

  function handleOpen() {
    SetModalIsOpen(true)
  }
  function handleClose() {
    SetModalIsOpen(false)
  }

  return (
    <div className="review-container">
      <button onClick={handleOpen}>Review?</button>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Reviews?"
        style={customStyles}
      >
        <button onClick={handleClose}>Close</button>
        <div className='review-inputs'>
          <form>
            <input type="text"></input>
            <StarRating />
            <input type="submit"/>
          </form>
        </div>
      </Modal>
      

    </div>
  )
}