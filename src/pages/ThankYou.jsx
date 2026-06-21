import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 20000);

        //Optional cleanup function
        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-lg">

                {/* Card */}
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8">

                    {/* Top Accent */}
                    <div className="w-12 h-1 bg-green-600 rounded-full mb-6"></div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                        {/* Icon */}
                        <div className="shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>

                        {/* Text */}
                        <div>
                            <h1 className="text-lg font-semibold text-gray-900">
                                Message sent successfully
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">
                                Thanks for reaching out. We’ve received your message and will get back to you shortly.
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 my-6"></div>

                    {/* Actions */}
                    <div className="flex items-center justify-between gap-4">

                        <button
                            onClick={() => navigate("/")}
                            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition"
                        >
                            Go back home
                        </button>

                        <span className="text-xs text-gray-400">
                            Redirecting in a few seconds…
                        </span>
                    </div>
                </div>

                {/* Navigate to the contact page  */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => navigate("/contact")}
                        className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 transition"
                    >
                        <span>Send another message</span>
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}