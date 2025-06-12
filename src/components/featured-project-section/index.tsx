// src/components/FeaturedProjectsSection.tsx
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/project-data";

export default function FeaturedProjectsSection() {
    return (
        <section
            id="projects"
            className="flex flex-col px-[10%] py-[5%] text-left md:px-[10rem]"
        >
            <h1 className="text-3xl md:text-4xl font-bold mb-12">Projetos em Destaque</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {projects.map((project, index) => (
                    <div key={index} className="text-left">
                        <Link
                            href={project.previewLink || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="block overflow-hidden rounded-md aspect-[16/9] transition-transform duration-200 hover:scale-105"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={640}
                                height={360}
                                className="w-full h-full object-cover"
                            />
                        </Link>

                        <Link
                            href={project.previewLink || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="block mt-4 text-lg font-semibold hover:underline transition-colors duration-150"
                        >
                            <h2 className="block my-6 font-semibold font-lato text-[1.75rem] hover:underline transition-colors duration-150"> {project.title} </h2>
                        </Link>

                        <p className=" mt-4 min-h-[80px] text-muted-foreground leading-[1.75rem]">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
