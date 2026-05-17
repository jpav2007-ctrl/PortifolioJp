import image_unnamed from '@/imports/unnamed.jpg'
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';
import profileImage from '../imports/jo_o_paulo.png';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Animated gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-40 blur-[120px]" />
        <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 to-pink-500 rounded-full opacity-40 blur-[120px]" />
        <div className="absolute bottom-20 left-1/3 w-[450px] h-[450px] bg-gradient-to-br from-purple-500 to-orange-500 rounded-full opacity-30 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Header Section */}
        <header className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-2">João Paulo de Araújo</h1>
          <p className="text-xl text-gray-300 mb-8">Desenvolvedor de Software</p>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all">
            Trabalhe comigo
          </button>
        </header>

        {/* About Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Sobre mim</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Olá, eu sou JOÃO, MTXV um programador.</h3>
              <p className="text-gray-300 leading-relaxed">
                Sou um desenvolvedor de software apaixonado por criar soluções inovadoras e eficientes.
                Com experiência em desenvolvimento web e mobile, trabalho com as mais modernas tecnologias
                do mercado. Meu foco está em entregar projetos de qualidade que fazem a diferença na vida
                das pessoas.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src={image_unnamed}
                  alt="João Paulo de Araújo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12">Meus serviços</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Habilidades</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Lógica de Programação</li>
                <li>• Desenvolvimento de sistemas web</li>
                <li>• React, TypeScript e JavaScript</li>
                <li>• Modelar tela, layout e Ux</li>
                <li>• Consumir API via backend</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Serviços</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Desenvolvimento de Software sob demanda</li>
                <li>• Criação de sites institucionais</li>
                <li>• Aplicações web responsivas</li>
                <li>• Manutenção e suporte em sites</li>
                <li>• Desenvolvimento de interfaces modernas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">ENTRE EM CONTATO</h2>
          <p className="text-gray-300 mb-2">Entre em contato:</p>
          <a
            href="mailto:dev.joaopaulo@outlook.com"
            className="text-xl text-white/90 hover:text-white transition-colors mb-8 inline-block"
          >jpav2007@gmail.com</a>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/joão-paulo-de-araújo-vieira-951a4a294"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/jottape._av/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://github.com/jpav2007-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:dev.joaopaulo@outlook.com"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}