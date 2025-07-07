
import { LoaderCircle, Soup } from "lucide-react";

export default function LoadingPage() {
    return (
        <section className="h-screen w-full flex items-center justify-center bg-[#C4E5FC] dark:bg-[#1f2937] font-body px-4">
            <div className="text-center max-w-sm bg-white dark:bg-[#111827] p-8 rounded-3xl shadow-xl border border-[#B7D5EA] dark:border-[#374151]">
                <div className="flex justify-center mb-4">
                    <Soup className="w-14 h-14 text-[#EE6352]" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white uppercase font-title">
                    Just a moment...
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                    Your delicious recipe is loading.
                </p>

                <div className="flex justify-center mt-6 animate-spin">
                    <LoaderCircle className="w-8 h-8 text-[#EE6352]" />
                </div>
            </div>
        </section>
    );
}
