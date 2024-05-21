import { motion } from "framer-motion";

interface CardCertificateProps {
  image: string;
}

export function CardCertificates({
  image
}: CardCertificateProps) {

  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      className="max-w-full   rounded overflow-hidden border border-border mt-10"
      variants={childVariant}
    >
      <img
        src={image}
        alt="imagem do certificado"
        className="w-full object-cover h-52"
      />
     
    </motion.div>
  );
}
