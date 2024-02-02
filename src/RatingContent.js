function RatingContent(props) {
  return (
    <div class="rating">
      <div class="rating-header">⭐⭐⭐⭐⭐</div>
      <div class="rating-text">
        <div class="rating-title">{props.ratingtitle}</div>
        <div class="rating-description">{props.ratingdescription}</div>
        <div class="rating-username">{props.username}</div>
        <div class="rating-item">{props.item}</div>
        <div class="rating-date">{props.date}</div>
      </div>
    </div>
  );
}

export default RatingContent;
