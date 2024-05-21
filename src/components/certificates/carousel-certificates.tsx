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
import { useTranslation } from "react-i18next";

export function CarouselCertificates() {
  const { t } = useTranslation();

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const translationData = t("certificateDescriptions", { returnObjects: true });

  const getTranslatedDescription = (certificateId: number) => {
    if (!translationData || !Array.isArray(translationData)) {
      console.error("Translation data is not in the expected format.");
      return "";
    }

    const certificate = translationData.find(item => item.id === certificateId);
    return certificate ? certificate.title : "";
  };

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
              title={getTranslatedDescription(item.id)}
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
