export default function SkeletonCard() {
  return (
    <div className="bg-gray-200 rounded-md p-1 shadow-lg flex  w-full justify-between animate-pulse sm:p-6 md:p-8">
      <div className="flex flex-col justify-between w-full">
        {/* Skeleton for the button */}
        <div className="bg-gray-300 rounded-md  h-4 sm:h-6 w-14 sm:w-24 md:w-32 mb-3"></div>
        
        {/* Skeleton for the price */}
        <div className="bg-gray-300 h-8 sm:h-10 w-20 sm:w-32 md:w-40 mb-5"></div>
        
        {/* Skeleton for the GST text */}
        <div className="bg-gray-300 h-2 sm:h-4 w-14 sm:w-20 md:w-24"></div>
      </div>

      {/* Skeleton for the image */}
      <div className="bg-gray-300 w-[50px] sm:w-[100px] md:w-[80px] h-[60px] sm:h-[100px] md:h-[120px] rounded-md"></div>
    </div>
  );
}
