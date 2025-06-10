// src/components/ProjectCard.tsx
import Image from "next/image";
import {ProjectProps} from "@/types/project";

export default function ProjectCard({
                                        title,
                                        description,
                                        stack,
                                        image,
                                        previewLink,
                                    }: ProjectProps) {
    return (
        <div
            className="keen-slider__slide bg-[#1E1E1E] rounded-xl overflow-hidden shadow-md flex flex-col min-h-[450px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
            <div className="min-h-[200px]">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48 rounded-t-xl"
                />
            </div>

            <div className="p-4 text-left flex flex-col justify-between h-full">
                <h3 className="text-[#cccccc] text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{description}</p>
                <p className="text-sm text-white mb-4 leading-relaxed">
                    <span className="font-semibold text-primary">Tech Stack:</span>{' '}
                    {Array.isArray(stack)
                        ? stack.map((tech, i) => (
                            <span key={i} className="text-muted-foreground font-medium">
                               {tech}
                                {i < stack.length - 1 ? ', ' : ''}
                    </span>
                        ))
                        : <span className="text-muted-foreground font-medium">{stack}</span>}
                </p>
                {previewLink && (
                    <a
                        href={previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary mt-auto hover:text-white transition-colors no-underline"
                    >
                        Live Preview
                    </a>
                )}

            </div>
        </div>
    );
}
