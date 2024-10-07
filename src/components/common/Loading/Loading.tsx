import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex h-[75vh] w-full items-center justify-center">
      <MoonLoader color="#ca323d" />
    </div>
  );
}
