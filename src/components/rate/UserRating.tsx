import React, { useState } from "react";
import StarRating from "./StarRating";

const UserRating: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  const handleRate = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="bg-transparent">
      <div className="flex bg-transparent">
        <StarRating totalStars={5} selectedStars={rating} onRate={handleRate} />
      </div>
      <p className="bg-transparent">
        You rated this user {rating} out of 5 stars.
      </p>
    </div>
  );
};

export default UserRating;
