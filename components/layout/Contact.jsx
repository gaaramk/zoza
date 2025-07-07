'use client'
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast";

const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "84884203-29bd-4eb3-8010-ba80fceba65c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Message sent successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
        }
    };






    return (
        <section className="my-5 w-full flex justify-center py-16 px-4 bg-[#FD7C65] rounded-3xl text-white font-body">
            <div className="w-full max-w-[1312px] text-center space-y-6">
                <div className="flex flex-col items-center gap-4">
                    <h4 className="w-fit px-3 py-1 bg-white rounded-full uppercase text-[#EE6352] text-sm">
                        Contact
                    </h4>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        GET IN TOUCH <br /> WE'D LOVE TO HEAR FROM YOU!
                    </h2>

                    <p className="max-w-xl mx-auto text-white/90 text-sm md:text-base">
                        Send us a message with your questions, feedback, or suggestions — we’re always happy to connect.
                    </p>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-xl mx-auto mt-6 text-left">
                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        
                        placeholder="Your Name"
                        className="bg-white text-black placeholder:text-gray-400 font-medium px-6 py-4 rounded-full w-full shadow-md outline-none focus:ring-2 focus:ring-white/50 transition"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="bg-white text-black placeholder:text-gray-400 font-medium px-6 py-4 rounded-full w-full shadow-md outline-none focus:ring-2 focus:ring-white/50 transition"
                    />

                    {/* Message */}
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        name="message"
                        className="bg-white text-black placeholder:text-gray-400 font-medium px-6 py-4 rounded-2xl w-full shadow-md outline-none resize-none focus:ring-2 focus:ring-white/50 transition"
                    />

                    {/* Button */}
                    <Button
                        type="submit"
                        className="bg-white text-[#FD7C65] hover:bg-white/90 rounded-full px-6 py-3 text-sm font-semibold w-fit self-center shadow-md"
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default Contact
