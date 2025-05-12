import Link from "next/link";

const Contact = () => {
  return (
    <section
      className="flex justify-between items-center max-sm:flex-col flex-row max-w-[1224px] m-auto px-4 max-lg:py-16 py-20"
      id="contact"
    >
      <div className="min-sm:max-w-[600px] min-sm:min-h-[495px] w-full h-auto flex flex-col justify-between items-start py-6">
        <div>
          <h3 className="max-lg:text-[43px]/[100%] text-[76px]/[100%] font-bebas text-white">
            CONECTA CONMIGO
          </h3>
          <p className="max-lg:text-base/[160%] text-[18px]/[150%] font-manrope text-[#C7C7C7] mt-4 mb-2">
            Puedes escribirme a{" "}
            <span className="underline underline-offset-2 decoration-[#D3E97A]">
              <Link href="mailto:martin99huacho@gmail.com">
                martin99huacho@gmail.com
              </Link>
            </span>
            .
          </p>
          <p className="max-lg:text-base/[160%] text-[18px]/[150%] font-manrope text-[#C7C7C7]">
            Para más información, aquí está mi{" "}
            <span className="underline underline-offset-2 decoration-[#D3E97A]">
              <Link
                href="/cv-martin-nunez.pdf"
                target="_blank"
                download="cv-martin-nunez"
              >
                currículum vitae
              </Link>
            </span>
            .
          </p>
          <div className="flex gap-6 mt-10">
            <Link
              href="https://www.linkedin.com/in/martinalonsonu/"
              target="_blank"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.644 9.596a2.917 2.917 0 1 0 0-5.835 2.917 2.917 0 0 0 0 5.835m5.672 2.211v16.185h5.025v-8.004c0-2.112.398-4.157 3.016-4.157 2.583 0 2.615 2.414 2.615 4.29v7.872H28v-8.876c0-4.36-.939-7.71-6.035-7.71-2.446 0-4.086 1.342-4.757 2.613h-.068v-2.213zm-8.19 0H9.16v16.185H4.127z"
                  fill="#D3E97A"
                />
              </svg>
            </Link>
            <Link href="https://github.com/martinalonsonu" target="_blank">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.035 2.667c-7.346 0-13.299 5.953-13.299 13.298 0 5.875 3.81 10.86 9.095 12.62.665.12.905-.289.905-.641 0-.316-.01-1.153-.015-2.261-3.7.802-4.481-1.784-4.481-1.784-.603-1.536-1.476-1.946-1.476-1.946-1.207-.825.092-.806.092-.806 1.336.093 2.036 1.37 2.036 1.37 1.187 2.032 3.115 1.446 3.87 1.106.12-.86.467-1.447.846-1.779-2.952-.335-6.056-1.476-6.056-6.573 0-1.45.519-2.639 1.365-3.567-.134-.337-.594-1.69.132-3.52 0 0 1.116-.359 3.656 1.361a12.8 12.8 0 0 1 3.328-.448 12.8 12.8 0 0 1 3.328.448c2.542-1.721 3.656-1.361 3.656-1.361.727 1.83.271 3.183.132 3.52.854.928 1.366 2.116 1.366 3.567 0 5.11-3.107 6.233-6.07 6.562.474.411.9 1.222.9 2.462 0 1.778-.016 3.213-.016 3.649 0 .356.238.77.916.639 5.283-1.763 9.088-6.744 9.088-12.618 0-7.345-5.953-13.298-13.298-13.298"
                  fill="#D3E97A"
                />
              </svg>
            </Link>
            <Link href="https://x.com/martinalonsonu" target="_blank">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.04 4.667h4.273l-9.333 9.62L30 27.333h-8.659l-6.747-7.908-7.759 7.908H2.562L12.57 17.058 2 4.667h8.884l6.128 7.253zm-1.518 20.35h2.362L9.59 6.832H7.004z"
                  fill="#D3E97A"
                />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/martinalonsonu/"
              target="_blank"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.999 9.836a6.165 6.165 0 1 0 0 12.33 6.165 6.165 0 0 0 0-12.33m0 10.17a4.005 4.005 0 1 1 0-8.011 4.005 4.005 0 0 1 0 8.01m6.409-8.958a1.437 1.437 0 1 0 0-2.875 1.437 1.437 0 0 0 0 2.875"
                  fill="#D3E97A"
                />
                <path
                  d="M27.377 8.148a6.14 6.14 0 0 0-3.51-3.51 8.8 8.8 0 0 0-2.915-.56c-1.284-.055-1.69-.071-4.947-.071-3.256 0-3.673 0-4.946.072-.996.02-1.98.208-2.912.56a6.13 6.13 0 0 0-3.511 3.509 8.8 8.8 0 0 0-.559 2.915c-.057 1.282-.074 1.689-.074 4.946s0 3.671.074 4.947a8.8 8.8 0 0 0 .559 2.916 6.15 6.15 0 0 0 3.512 3.51c.93.364 1.915.566 2.913.6 1.284.055 1.691.073 4.947.073s3.673 0 4.947-.074a8.8 8.8 0 0 0 2.914-.558 6.15 6.15 0 0 0 3.511-3.511c.35-.933.539-1.917.559-2.915.057-1.282.074-1.689.074-4.946 0-3.258 0-3.671-.074-4.947a8.8 8.8 0 0 0-.562-2.956m-1.624 12.71a6.7 6.7 0 0 1-.414 2.25 3.98 3.98 0 0 1-2.283 2.281 6.7 6.7 0 0 1-2.227.415c-1.266.059-1.624.073-4.872.073-3.25 0-3.582 0-4.873-.073a6.6 6.6 0 0 1-2.225-.415 3.98 3.98 0 0 1-2.292-2.281 6.8 6.8 0 0 1-.415-2.225c-.057-1.267-.07-1.624-.07-4.872 0-3.25 0-3.582.07-4.874a6.7 6.7 0 0 1 .415-2.249 3.98 3.98 0 0 1 2.292-2.283 6.7 6.7 0 0 1 2.225-.414c1.268-.058 1.624-.074 4.873-.074s3.583 0 4.872.074c.76.009 1.514.15 2.227.414a4 4 0 0 1 2.283 2.283c.262.713.402 1.466.414 2.225.058 1.268.072 1.624.072 4.874 0 3.248 0 3.597-.057 4.872z"
                  fill="#D3E97A"
                />
              </svg>
            </Link>
          </div>
        </div>
        <p className="max-sm:hidden text-base/[160%] font-manrope text-[#C7C7C7]">
          © 2025 / Hecho con ❤️ por @martinalonsonu
        </p>
      </div>
      <div className="w-full">
        <form className="w-full text-white">
          <div className="mb-4">
            <label className="block mb-1 text-sm" htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ingresa tu nombre"
              className="w-full p-2 bg-[#484848] text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Ingresa tu email"
              className="w-full p-2 bg-[#484848] text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm" htmlFor="subject">
              Asunto
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Ingresa el asunto"
              className="w-full p-2 bg-[#484848] text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 bg-[#484848] text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-black font-manrope text-base font-bold bg-[#D3E97A] rounded-3xl hover:bg-lime-400 transition"
          >
            ENVIAR
          </button>
        </form>
        <p className="min-sm:hidden text-base/[160%] font-manrope text-[#C7C7C7] mt-8 text-center">
          © 2025 / Hecho con ❤️ por @martinalonsonu
        </p>
      </div>
    </section>
  );
};

export default Contact;
