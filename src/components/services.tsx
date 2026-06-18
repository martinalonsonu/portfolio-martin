import clsx from "clsx";

const services = [
  {
    title: "Diseño web personalizado",
    description:
      "Experiencias digitales únicas que reflejan tu marca y convierten visitantes en clientes.",
  },
  {
    title: "Estructura SEO friendly",
    description:
      "Construcción de sitios optimizados para buscadores, con una arquitectura clara y rendimiento ágil.",
  },
  {
    title: "Diseños responsivos",
    description:
      "Interfaces que se adaptan de forma fluida a cualquier pantalla, desde móvil hasta desktop.",
  },
  {
    title: "Soluciones ecommerce",
    description:
      "Tiendas online modernas y seguras con procesos de compra optimizados para vender más.",
  },
  {
    title: "Mantenimiento continuo",
    description:
      "Soporte constante y actualizaciones para mantener tu sitio rápido, estable y actualizado.",
  },
  {
    title: "Analítica y optimización",
    description:
      "Monitoreo de rendimiento y mejoras continuas para que tu sitio crezca con mejores resultados.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="max-w-[960px] mx-auto px-4 py-10 md:py-16 text-center"
    >
      <div className="mb-10">
        <h3 className={clsx("text-2xl font-bold", "md:text-3xl")}>
          Soluciones digitales a tu medida
        </h3>
        <p
          className={clsx(
            "text-lg font-semibold gradient-subtitle mb-10",
            "md:text-xl",
          )}
        >
          Mis servicios
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={index}
            className="group rounded-[28px] border border-[#292929] bg-card p-6 text-left transition-all duration-300 hover:border-[#4FC3F7] hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#393939] bg-[#ffffff]/5 text-lg font-semibold">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold leading-tight mb-3">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
