import {
  TbStarFilled as FilledStarIcon,
  TbStarHalfFilled as HalfStarIcon,
  TbStar as EmptyStarIcon,
} from "react-icons/tb";

export default function Ratings({ ratings }: { ratings: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(Math.floor(ratings))].map((_, index) => (
        <FilledStarIcon key={index} />
      ))}
      {ratings % 1 !== 0 && <HalfStarIcon />}
      {[...Array(5 - Math.ceil(ratings))].map((_, index) => (
        <EmptyStarIcon key={index} />
      ))}
      {ratings.toFixed(1)}
    </div>
  );
}
