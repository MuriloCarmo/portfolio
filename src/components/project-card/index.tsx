import Image from "next/image";
import { ProjectProps } from "@/types/project";

export default function ProjectCard({
                                        title,
                                        description,
                                        stack,
                                        image,
                                        previewLink,
                                    }: ProjectProps) {
    return (
        <div className="keen-slider__slide bg-[#1E1E1E] rounded-xl mt-5 overflow-hidden shadow-md flex flex-col max-w-[400px] min-h-[560px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Imagem */}
            <div className="w-full h-[250px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Conteúdo */}
            <div className="p-4 text-left flex flex-col flex-grow">
                <h3 className="text-[#cccccc] text-lg font-semibold mb-2 leading-[22px]">
                    {title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {description}
                </p>

                <div className="text-sm text-white mb-6 leading-relaxed">
                    <span className="font-semibold text-primary">Tech Stack:</span>{" "}
                    {Array.isArray(stack) ? (
                        stack.map((tech, i) => (
                            <span key={i} className="text-muted-foreground font-medium">
                {tech}
                                {i < stack.length - 1 ? ", " : ""}
              </span>
                        ))
                    ) : (
                        <span className="text-muted-foreground font-medium">{stack}</span>
                    )}
                </div>

                {/* Botão */}
                {previewLink && (
                    <a
                        href={previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-white transition-colors no-underline border border-primary px-3 py-1 rounded w-fit mt-auto"
                    >
                        🔗 Live Preview
                    </a>
                )}
            </div>
        </div>
    );
}
