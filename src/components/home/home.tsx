import avatar from "../../assets/avatar-programming.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SocialMedia } from "./social-media";

export function Home() {
  const { t } = useTranslation();

  return (
    <section
      className="lg:flex lg:items-center lg:justify-around pt-14 relative"
      id="Inicio"
    >
      <motion.div
        className="flex justify-center items-center flex-col lg:justify-start py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
      >
        <h1 className="text-4xl text-center w-72 lg:w-96 font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {t("home")}
        </h1>

        <p className="text-lg text-center text-muted-foreground pt-4">
          {`//`} {t("subtitle")}
        </p>

      <div className="mt-4">
      <SocialMedia />
      </div>
      
      </motion.div>
      <figure className="flex justify-center items-center pt-4 lg:flex-col lg:max-w-lg">
        <img
          className="h-80 max-w-sm w-72 lg:h-auto lg:w-full  rounded-lg"
          src={avatar}
          alt="avatar"
        />
      </figure>
    </section>
  );
}
