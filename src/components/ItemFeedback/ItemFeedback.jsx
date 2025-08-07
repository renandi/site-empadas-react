import "./ItemFeedback.css"

function ItemFeedback ({author, comment}) {
    return (
        <li className="item-feedback">
            <article>
              <h3>{author}</h3>
              <p>{comment}</p>
            </article>
          </li>
    )
}

export default ItemFeedback;