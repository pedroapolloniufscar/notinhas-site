'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, X, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'; 

export function BlockPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 px-4 bg-white border-b border-[#C7EB8F]">
        <div className="container mx-auto flex justify-between items-center">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%204-HNIVNWQhuYjk0NPQDBnfuL3nvjvlFN.png" 
            width={120} 
            height={40} 
            alt="Notinhas Logo" 
          />
          {/* Hamburguer Button for Mobile */}
          <button
            className="text-[#333333] md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <nav className="hidden md:flex">
            <ul className="flex space-x-4">
              <li><Link href="#como-funciona" className="text-[#333333] hover:text-[#8FD6E1]">Como Funciona</Link></li>
              <li><Link href="#funcionalidades" className="text-[#333333] hover:text-[#8FD6E1]">Funcionalidades</Link></li>
              <li><Link href="#recursos-futuros" className="text-[#333333] hover:text-[#8FD6E1]">Recursos Futuros</Link></li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="bg-white border-t border-[#C7EB8F] md:hidden">
            <ul className="flex flex-col space-y-2 p-4">
              <li><Link href="#como-funciona" className="text-[#333333] hover:text-[#8FD6E1]" onClick={() => setIsMenuOpen(false)}>Como Funciona</Link></li>
              <li><Link href="#funcionalidades" className="text-[#333333] hover:text-[#8FD6E1]" onClick={() => setIsMenuOpen(false)}>Funcionalidades</Link></li>
              <li><Link href="#recursos-futuros" className="text-[#333333] hover:text-[#8FD6E1]" onClick={() => setIsMenuOpen(false)}>Recursos Futuros</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#C7EB8F] to-[#8FD6E1] text-[#333333] py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Envie suas notas fiscais pelo WhatsApp e organize tudo com facilidade.</h1>
              <p className="text-xl mb-8">Simplifique seu processo de reembolso com o Notinhas.</p>
              <Button size="lg" className="bg-[#333333] text-white hover:opacity-90 transition-opacity" onClick={() => setIsModalOpen(true)}>
                Quero acesso antecipado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-[#333333] mt-4 opacity-80">
                O Notinhas é gratuito para usuários viajantes. Organize suas despesas sem custos adicionais.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-xl w-[320px] h-[622px] bg-[#333333] p-1">
                <img
                  src="https://image.mux.com/lD8Bhofi02h00ERFjQUg1Pff9InzM8G8z802Yw2YlhvUws/animated.gif?width=320&start=6&end=16"
                  alt="Demonstração Notinhas"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

                {/* How It Works Section */}
                <section id="como-funciona" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">Como Funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🗓️</div>
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Crie um evento</h3>
                <p className="text-[#333333]">Apenas diga o destino e as datas da sua viagem que o Notinhas prepara tudo!</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📸</div>
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Envie as fotos das notas fiscais</h3>
                <p className="text-[#333333]">Nossa IA faz a mágica de reconhecimento de imagem, então você não precisa digitar nada.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Receba o relatório completo</h3>
                <p className="text-[#333333]">Quando a viagem terminar, é só pedir o relatório. O Notinhas te envia ele prontinho para encaminhar direto ao financeiro.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades Principais Section 
        <section id="funcionalidades" className="py-20 bg-[#C7EB8F]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">Funcionalidades Principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-[#333333]">Reconhecimento de Notas</h3>
                <p className="mb-4 text-[#333333]">Nossa IA avançada reconhece automaticamente os detalhes das suas notas fiscais, economizando seu tempo.</p>
                <div className="bg-[#8FD6E1] h-64 rounded-lg flex items-center justify-center">
                <Image 
                  src="https://i.imgur.com/h2fABxR.jpeg" 
                  width={120} 
                  height={40} 
                  alt="Print do reconhecimento de imagens de notas fiscais" 
                />
                  <p className="text-[#333333]">Imagem do reconhecimento de notas será adicionada aqui</p> 
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-[#333333]">Relatório Completo</h3>
                <p className="mb-4 text-[#333333]">Gere relatórios detalhados de suas despesas com apenas um clique. Basta encaminhar a mensagem diretamente para o financeiro.</p>
                <div className="bg-[#8FD6E1] h-64 rounded-lg flex items-center justify-center">
                  <p className="text-[#333333]">Imagem do relatório será adicionada aqui</p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl text-[#333333] mb-6">Simplifique seu processo de reembolso. Envie suas notas, receba o relatório e encaminhe diretamente para o financeiro.</p>
              <Button size="lg" className="bg-[#333333] text-white hover:opacity-90 transition-opacity">
                Comece a usar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section> */}

        <section id="funcionalidades" className="py-20 bg-gradient-to-br from-[#C7EB8F] to-[#8FD6E1] ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">Funcionalidades Principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/2 aspect-[9/16] bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="w-full h-full bg-[#333333] flex items-center justify-center">
                    <Image 
                    src="https://i.imgur.com/h2fABxR.jpeg" 
                    width={348} 
                    height={116} 
                    alt="Print do reconhecimento de imagens de notas fiscais" 
                  />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-[#333333]">Reconhecimento de Notas</h3>
                  <p className="text-[#333333]">Nossa IA avançada reconhece automaticamente os detalhes das suas notas fiscais, economizando seu tempo.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/2 aspect-[9/16] bg-white rounded-3xl shadow-lg overflow-hidden order-1 md:order-2">
                  <div className="w-full h-full bg-[#333333] flex items-center justify-center">
                  <Image 
                    src="https://i.imgur.com/KP1LYAZ.png" 
                    width={348} 
                    height={116} 
                    alt="Print do reconhecimento de imagens de notas fiscais" 
                  />
                  </div>
                </div>
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4 text-[#333333]">Relatório Completo</h3>
                  <p className="text-[#333333]">Gere relatórios detalhados de suas despesas com apenas um clique. Basta encaminhar a mensagem diretamente para o financeiro.</p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl text-[#333333] mb-6">Simplifique seu processo de reembolso. Envie suas notas, receba o relatório e encaminhe diretamente para o financeiro.</p>
              <Button size="lg" className="bg-[#333333] text-white hover:opacity-90 transition-opacity" onClick={() => setIsModalOpen(true)}>
                Comece a usar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        {/* Future Features Section */}
        <section id="recursos-futuros" className="py-20 bg-[#333]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#fff]">Recursos Futuros 👀</h2>
            <p className="text-center text-[#fff] mb-12 max-w-2xl mx-auto">
              Fique de olho no que está por vir! Nossa equipe está trabalhando duro para trazer ainda mais inovações, 
              usando IA avançada para tornar cada processo mais simples e inteligente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl mb-4">📧</div>
                <p className="text-[#fff]">Relatórios automáticos por e-mail com todos os anexos organizadinhos</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl mb-4">📊</div>
                <p className="text-[#fff]">Dashboard inteligente para gestão e aprovação de reembolsos em um clique</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl mb-4">🔗</div>
                <p className="text-[#fff]">Integração automática com seu ERP favorito para importação direta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-[90%] md:w-[600px] shadow-lg relative">
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex justify-center items-center w-full h-screen bg-gray-100">
                <iframe
                  src="https://1ncnl6d6p95.typeform.com/to/jbdlqWSc"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allow="camera; microphone; autoplay; encrypted-media;"
                  title="Typeform Survey"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-[#FFF] text-black py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%204-HNIVNWQhuYjk0NPQDBnfuL3nvjvlFN.png" 
              width={120} 
              height={40} 
              alt="Notinhas Logo" 
            />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/privacidade" className="hover:text-[#C7EB8F]">Política de Privacidade</Link></li>
              <li><Link href="/termos" className="hover:text-[#C7EB8F]">Termos de Serviço</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}
