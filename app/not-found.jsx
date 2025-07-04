import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Soup } from "lucide-react";

export default function NotFound() {
  return (
    <section className="h-screen w-full flex items-center rounded-3xl justify-center bg-[#C4E5FC] font-body px-4">
      <div className="text-center max-w-lg bg-white p-8 rounded-3xl shadow-xl border border-[#B7D5EA]">
        <div className="flex justify-center mb-6">
          <Soup className="w-16 h-16 text-[#EE6352]" />
        </div>

        <h1 className="text-6xl font-extrabold text-[#EE6352]">404</h1>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4 uppercase font-title">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Looks like this recipe is still cooking... or maybe it doesn’t exist.
        </p>

        <Button asChild className="mt-6 bg-[#EE6352] hover:bg-[#d84b3e] text-white rounded-full px-6 py-2">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
}
