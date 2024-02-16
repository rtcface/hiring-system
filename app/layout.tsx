import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./ui/globals.css";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema de información pública de contrataciones",
  description:
    "El Estándar de Datos de Contrataciones Abiertas (EDCA) es un referente global para la publicación estructurada de la información de una contratación — desde la planeación hasta la implementación — en datos abiertos.",
  authors: [
    {
      name: "Ramiro Tepehua",
      url: "https://www.linkedin.com/in/ramiro-tepehua-056ab4176",
    },
  ],
  keywords: ["Contrataciones", "Sistema de información", "Contratación"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.className}>{children}</body>
    </html>
  );
}
