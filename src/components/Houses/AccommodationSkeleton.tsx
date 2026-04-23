import { Card, CardContent } from "@/components/ui/card";

export function AccommodationSkeleton() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="max-w-6xl mx-auto">
        <div className="h-5 w-40 bg-gray-200 rounded mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="w-full h-96 bg-gray-200 rounded-xl" />

            <Card>
              <CardContent>
                <div className="h-6 w-24 bg-gray-200 rounded mb-4" />
                <div className="flex flex-col gap-2">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                  <div className="h-4 bg-gray-200 rounded w-4/6" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="h-6 w-32 bg-gray-200 rounded mb-4" />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent>
                <div className="h-7 w-3/4 bg-gray-200 rounded mb-3" />
                <div className="h-5 w-16 bg-gray-200 rounded mb-6" />
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-5 bg-gray-200 rounded" />
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 flex flex-col gap-4">
                  <div className="h-12 bg-gray-200 rounded" />
                  <div className="h-12 bg-gray-200 rounded" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
