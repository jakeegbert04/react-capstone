export default function ReviewItem(props) {
  const { firstName, lastName, description, id} = props.review

  function handleOpenEdit() {
    props.setReviewToEdit(props.review)
    props.handleOpen()
  }

  return (
    <div className="review-item">
      <div className="review-button-container">
        <button onClick={() => props.handleDelete(id)}>X</button>
        <button onClick={handleOpenEdit}>Edit</button>
      </div>
      <div className="names">
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}