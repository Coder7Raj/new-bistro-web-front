import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

export default function Rating({ rating }) {
  const fullStars = Math.floor(rating); // full stars
  const hasHalfStar = rating % 1 !== 0; // check half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <AiFillStar key={`full-${i}`} size={40} />
      ))}

      {hasHalfStar && <BsStarHalf size={40} />}

      {[...Array(emptyStars)].map((_, i) => (
        <AiOutlineStar key={`empty-${i}`} size={40} />
      ))}
    </div>
  );
}
