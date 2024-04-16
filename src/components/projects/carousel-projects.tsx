import { projectsaData } from "@/constants";
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

export function CarouselProjects() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {projectsaData.map(item =>
          <CarouselItem>
            <CardProjects
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              technologies={item.technologies}
              deploy={item.deploy}
              repository={item.repository}
            />
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
