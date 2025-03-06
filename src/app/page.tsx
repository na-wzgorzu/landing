import { Clock, Construction } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center mb-8">
            <Construction className="w-16 h-16 text-indigo-600 animate-bounce" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center text-balance text-gray-900 mb-4">
            Tu powstaje www.na-wzgorzu.pl
          </h1>

          <p className="text-xl text-center text-gray-600 mb-8 text-balance">
            Tworzymy coś niesamowitego dla Ciebie. Nasza nowa strona internetowa
            jest w budowie i wkrótce będzie dostępna.
          </p>

          <div className="flex items-center justify-center gap-4 text-indigo-600 mb-8">
            <Clock className="w-6 h-6 animate-pulse" />
            <span className="text-lg font-medium">Juz wkrótce</span>
          </div>
        </div>
      </div>
    </div>
  );
}
