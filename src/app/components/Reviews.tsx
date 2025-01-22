import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  username: string;
  rating: number;
  comment: string;
}

interface ReviewsProps {
  productTitle: string;
}

const Reviews: React.FC<ReviewsProps> = ({ productTitle }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const storedReviews = JSON.parse(
      localStorage.getItem(`reviews_${productTitle}`) || "[]"
    );
    setReviews(storedReviews);
  }, [productTitle]);

  // Handle rating change
  const handleRatingChange = (ratingValue: number) => {
    setRating(ratingValue);
  };

  // Handle comment change
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  // Handle username change
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // Submit the review and save it to localStorage
  const handleSubmitReview = () => {
    if (rating && username) {
      const newReview: Review = {
        username,
        rating,
        comment: comment || "No comment",
      };

      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      localStorage.setItem(`reviews_${productTitle}`, JSON.stringify(updatedReviews));

      // Reset form
      setRating(0);
      setComment("");
      setUsername("");
    }
  };

  // Calculate average rating
  const averageRating = reviews.length
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto mt-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Reviews & Ratings</h3>

      {/* Average Rating */}
      <div className="mb-4 flex items-center justify-start">
        <span className="text-lg font-medium text-gray-700 mr-2">Average Rating: </span>
        <span className="text-yellow-500 font-bold text-xl">{averageRating.toFixed(1)} / 5</span>
        <span className="ml-2 text-gray-500">({reviews.length} reviews)</span>
      </div>

      {/* Review Form */}
      <div className="mb-6 bg-gray-50 p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Submit a Review</h4>

        <div className="mb-4">
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Rating */}
        <div className="mb-4 flex items-center">
          <span className="text-gray-700 mr-2">Rating: </span>
          <div className="flex items-center cursor-pointer">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                onClick={() => handleRatingChange(star)}
                className="mr-2"
              >
                <FaStar
                  className={`text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            rows={4}
            placeholder="Your Comment"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <button
          onClick={handleSubmitReview}
          className="w-full py-3 bg-yellow-700 text-white font-bold rounded-lg"
        >
          Submit Review
        </button>
      </div>

      {/* Display Reviews */}
      {reviews.length ? (
        reviews.map((review, index) => (
          <div key={index} className="mb-6 border-b pb-6">
            <div className="flex items-center mb-2">
              <span className="font-semibold text-lg">{review.username}</span>
              <div className="flex ml-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`text-yellow-500 ${star <= review.rating ? "text-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">Be the first to review this product.</p>
      )}
    </div>
  );
};

export default Reviews;
