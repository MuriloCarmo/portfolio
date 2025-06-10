import {useEffect, useState} from 'react';
import 'keen-slider/keen-slider.min.css';
import {useKeenSlider} from 'keen-slider/react';
import {projects} from "@/data/project-data";
import ProjectCard from "@/components/project-card";

export default function ProjectSection() {
    const [isMobile, setIsMobile] = useState(false);

    const [sliderRef] = useKeenSlider({
        loop: false,
        breakpoints: {
            '(min-width: 768px)': {
                slides: {perView: 3, spacing: 16},
            },
        },
        slides: {perView: 1.2, spacing: 12},
    });

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // set on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <section id="projects" className="py-20 px-6 md:px-40 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Projetos</h2>
            <p className="text-muted-foreground mb-10">
                Alguns projetos que tive o prazer de desenvolver
            </p>

            {/* Slider para mobile */}
            {isMobile ? (
                <div ref={sliderRef} className="keen-slider block md:hidden">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            stack={project.stack}
                            image={project.image}
                            previewLink={project.previewLink}
                        />
                    ))}
                </div>
            ) : (
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            stack={project.stack}
                            image={project.image}
                            previewLink={project.previewLink}
                        />
                    ))}
                </div>
            )}

        </section>
    );
}
