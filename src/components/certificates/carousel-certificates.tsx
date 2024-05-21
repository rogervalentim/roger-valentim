import { certificatesData } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel";
import { CardCertificates } from "./card-certificates";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

export function CarouselCertificates() {

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
        {certificatesData.map(item =>
          <CarouselItem key={item.id}>
            <CardCertificates
              image={item.image}
            />
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
