export default function reviewItem(props) {
  const { firstName, lastName, description, id} = props.review
  console.log(firstName)
  return (
    <div className="review-item">
      <div className="review-button-container">
        <button onClick={() => props.handleDelete(id)}>X</button>
      </div>
      <div className="names">
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}