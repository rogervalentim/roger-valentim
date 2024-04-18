import { projectsData } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel";
import { CardProjects } from "./card-projects";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";

export function CarouselProjects() {
  const { t } = useTranslation();

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const translationData = t("projectDescriptions", { returnObjects: true });

  const getTranslatedDescription = (projectId: number) => {
    if (!translationData || !Array.isArray(translationData)) {
      console.error("Translation data is not in the expected format.");
      return "";
    }

    const project = translationData.find(item => item.id === projectId);
    return project ? project.description : "";
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {projectsData.map(item =>
          <CarouselItem>
            <CardProjects
              key={item.id}
              name={item.name}
              description={getTranslatedDescription(item.id)}
              image={item.image}
              technologies={item.technologies}
              deploy={item.deploy}
              repository={item.repository}
            />
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
