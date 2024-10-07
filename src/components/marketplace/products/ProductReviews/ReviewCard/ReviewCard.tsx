import { ReviewType } from "../../../../../../data/reviews";
import Ratings from "@/components/common/Ratings/Ratings";

type ReviewCardProps = {
  review: ReviewType;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="text-sm">
      {review.id % 3 === 0 && (
        <p className="text-xs text-text-gray opacity-75">
          Received product for free
        </p>
      )}
      <p className="text-text-white">{review.comment}</p>
      <Ratings ratings={review.ratings} />
      <p className="text-text-gray">{review.name}</p>
    </div>
  );
}
