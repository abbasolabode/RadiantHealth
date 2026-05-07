export default function Button({ inputValue, setInputValue, baseStyles, activeStyles }) {

    const filters = [
        { label: "All", value: "all" },
        { label: "Research", value: "research" },
        { label: "Wellness", value: "wellness" },
        { label: "Technology", value: "technology" },
        { label: "Community", value: "community" },
    ];

    return (
        <div className="inline-flex items-center gap-2 p-1.5 bg-gray-100/80 border border-gray-200 rounded-2xl flex-wrap">
            {filters.map(({ label, value }) => (
                <button
                    key={value}
                    onClick={() => setInputValue(value)}
                    className={`
                        relative px-4 py-2 text-sm font-semibold rounded-xl cursor-pointer
                        transition-all duration-200 active:scale-95
                        ${inputValue === value
                            ? "bg-white text-slate-800 shadow-sm shadow-black/10 border border-gray-200/80"
                            : "text-gray-400 hover:text-gray-600 hover:bg-white/50"
                        }
                        ${baseStyles}
                        ${inputValue === value ? activeStyles : ""}
                    `}
                >
                    {inputValue === value && (
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    )}
                    <span className={inputValue === value ? "pl-3" : ""}>{label}</span>
                </button>
            ))}
        </div>
    );
}