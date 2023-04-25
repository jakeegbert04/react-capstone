export default function reviewItem(props) {
  const { firstName, lastName, description, id} = props.review
  console.log(firstName)
  return (
    <div className="review-item">
      <div className="names">
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}