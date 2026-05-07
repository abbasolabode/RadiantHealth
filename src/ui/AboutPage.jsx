import { Fragment, useEffect } from "react";

const contents = [
    {
        id: 1,
        title: "Precision Medicine",
        description: "Every diagnosis backed by evidence, every treatment plan calibrated to the individual."
    },
    {
        id: 2,
        title: "Compassion",
        description: "Clinical excellence is nothing without empathy. We treat people, not conditions."
    },
    {
        id: 3,
        title: "Innovation",
        description: "Continuous investment in technology and research to push the boundaries of modern care."
    },
    {
        id: 4,
        title: "Integrity",
        description: "Transparent communication and ethical practice at every level of our organization."
    },
]

const ourJourney = [
    {
        id: 1,
        year: 1994,
        description: "Founded as a 50-bed community clinic in downtown Boston."
    },
    {
        id: 2,
        year: 2003,
        description: "Opened the Center for Cardiac Innovation, a regional first."
    },
    {
        id: 3,
        year: 2012,
        description: "Expanded to a 400-bed facility with a dedicated research wing."
    },
    {
        id: 4,
        year: 2020,
        description: "Launched Aetheris Digital — telehealth and patient portal."
    },
    {
        id: 5,
        year: 2025,
        description: "Named #1 in Patient Satisfaction by National Healthcare Review."
    },
];

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="px-4 w-full min-h-screen">
            <div className="pt-8">
                <p className="text-primary text-xs tracking-widest uppercase font-medium text-blue-500">about us</p>
                <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground mt-2 mb-6">The facility as a healing space</h1>
                <figure>
                    <img src="" alt="" />
                </figure>
            </div>

            {/* Content */}
            <div className="py-12">
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-12">Our Principles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contents.map(content => (
                        <Fragment key={content.id}>
                            <div className="opacity-100 transform translate-y-0 transition duration-100 ease-in-out">
                                <div className="w-10 h-1 bg-primary rounded-full mb-6 bg-blue-600/50"></div>
                                <p className="font-display font-medium text-foreground text-lg mb-2">{content.title}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed text-gray-400">{content.description}</p>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>

            {/* Our Journey */}
            <div className="bg-zinc-100/50 px-1.5">
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-12">Our Journey</h2>
                <div className="space-y-0">
                    <div className="flex flex-col">
                        {ourJourney.map(journey => (
                            <Fragment key={journey.id}>
                                <div className="flex gap-8 py-6 last:border-none">
                                    <p className="text-2xl font-display font-semibold text-primary tabular-nums min-w-20 text-blue-700/70">{journey.year}</p>
                                    <p className="text-muted-foreground leading-relaxed text-gray-500">{journey.description}</p>
                                </div>
                                <hr className="border-gray-300" />
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}