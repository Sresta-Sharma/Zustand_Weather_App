import { Skeleton } from "@/components/ui/skeleton"

export default function WeatherSkeleton() {
  return (
    <div className="text-center w-full max-w-md">

      <Skeleton className="h-8 w-40 mx-auto mb-4" />

      <Skeleton className="h-5 w-32 mx-auto mb-6" />

      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10">

        <Skeleton className="w-28 h-28 sm:w-40 sm:h-40 rounded-full mx-auto mb-4" />

        <Skeleton className="h-4 w-40 mx-auto mb-4" />

        <Skeleton className="h-10 w-24 mx-auto mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/10 p-4 rounded-xl">
              <Skeleton className="h-5 w-16 mx-auto mb-2" />
              <Skeleton className="h-4 w-12 mx-auto" />
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}