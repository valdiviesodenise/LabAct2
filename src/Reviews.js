import React, { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  const addReview = () => {
    // Add your logic to add a review
    const newReview = {
      /* New review object */
    };
    setReviews([...reviews, newReview]);
  };

  const removeReview = (index) => {
    // Add your logic to remove a review
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  return (
    <div>
      <button onClick={toggleReviews}>
        {showReviews ? "Hide Reviews" : "Show Reviews"}
      </button>
      {showReviews && (
        <div>
          <h2>Reviews</h2>
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>
                  {review.comment}
                  <button onClick={() => removeReview(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          <button onClick={addReview}>Add Review</button>
        </div>
      )}
    </div>
  );
}

export default Reviews;
