import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { useTranslation } from "react-i18next";

export function SocialMedia() {
  const { t } = useTranslation();

    return (
        <div className="flex gap-1">
        <a
          href="https://www.linkedin.com/in/rogervalentim33/"
          target="_blank"
          aria-label="Veja o meu LinkedIn"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  size="icon"
                  variant="link"
                  aria-label="Veja o meu LinkedIn"
                >
                  <FaLinkedin className="h-7 w-7 lg:h-8 lg:w-8  fill-royal-blue-500 hover:fill-royal-blue-600" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {t("linkedin")}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </a>
        <a
          href="https://www.github.com/rogervalentim/"
          target="_blank"
          aria-label="veja o meu github"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  size="icon"
                  variant="link"
                  aria-label="veja o meu github"
                >
                  <FaGithub className="h-7 w-7 lg:h-8 lg:w-8  fill-royal-blue-500 hover:fill-royal-blue-600" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {t("github")}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=11970506367&text&type=phone_number&app_absent=0"
          target="_blank"
          aria-label="Entre em contato pelo whatsApp"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  size="icon"
                  variant="link"
                  aria-label="Entre em contato pelo whatsApp"
                >
                  <FaWhatsapp className="h-7 w-7 lg:h-8 lg:w-8  fill-royal-blue-500 hover:fill-royal-blue-600" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {" "}{t("whatsapp")}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </a>
      </div>
    )
}