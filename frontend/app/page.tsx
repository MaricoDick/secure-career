import { ResumeManager } from "@/components/ResumeManager";

export default function Home() {
  return (
    <main className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-300/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-300/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="flex flex-col gap-8 items-center sm:items-start w-full px-3 md:px-0 relative z-10">
        <ResumeManager />
      </div>

      {/* Footer decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
    </main>
  );
}
