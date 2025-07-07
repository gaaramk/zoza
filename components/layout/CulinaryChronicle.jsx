'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

const CulinaryChronicle = () => {
    return (
        <section className="font-body my-5 border border-[#C4E5FC] rounded-3xl">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 grid-rows-[auto] gap-5 px-3 md:px-0">
                {/* النص */}
                <div className="flex flex-col justify-center p-6 bg-white border rounded-xl shadow-sm order-1 md:order-none">
                    <h4 className="w-fit px-3 py-1 bg-[#EE6352] rounded-full uppercase text-white text-sm">
                        explore
                    </h4>

                    <h2 className="font-title text-3xl font-bold mb-4 leading-snug">
                        Our Culinary Chronicle
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-md">
                        Our journey is crafted with dedication, creativity and a
                        burning commitment to delivering delightful culinary experiences.
                        Join us in savoring the essence of every dish and the art behind it.
                    </p>
                    <Button className="w-fit">
                        Read More
                    </Button>
                </div>

                {/* صورة بجانب النص */}
                <div className="order-3 md:order-none">
                    <Image
                        src="/images/pan-stove.jpg"
                        alt="Pan on Stove"
                        width={400}
                        height={300}
                        className="w-full h-auto max-h-[300px] object-cover rounded-xl"
                    />
                </div>

                {/* صورة طويلة */}
                <div className="md:row-span-2">
                    <Image
                        src="/images/soup.jpg"
                        alt="Soup"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                {/* صورة عريضة تحت */}
                <div className="col-span-1 md:col-span-2 order-2 md:order-none">
                    <Image
                        src="/images/chef.jpg"
                        alt="Chef Cooking"
                        width={800}
                        height={300}
                        className="w-full h-auto max-h-[300px] object-cover rounded-xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default CulinaryChronicle
