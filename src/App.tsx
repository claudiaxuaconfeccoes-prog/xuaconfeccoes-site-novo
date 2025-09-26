import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Menu, X, Phone, Mail, MapPin, MessageCircle, ChevronDown, Star, Shield, Users, Truck } from 'lucide-react';
import './App.css';

// Importar imagens
import logoXua from './assets/logo-xua.jpg';
import calcaLogoVertical from './assets/calca_brim_logo_vertical.png';
import calcaJeansLogo from './assets/calca_jeans_logo_bolso.png';
import calcaFaixaRefletiva from './assets/calca_brim_faixa_refletiva.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('construcao');

  const segments = {
    construcao: {
      title: 'Construcao Civil',
      description: 'Uniformes resistentes e seguros para o ambiente de construcao',
      products: ['Macacoes de Brim', 'Calcas com Faixa Refletiva', 'Blusoes Reforcados', 'Coletes de Seguranca'],
      image: '/src/assets/ArInClIEgIBp.jpg'
    },
    saude: {
      title: 'Saude e Hotelaria',
      description: 'Uniformes profissionais para hospitais, clinicas e hoteis',
      products: ['Jalecos Medicos', 'Pijamas Cirurgicos', 'Uniformes de Hotelaria', 'Aventais e Batas'],
      image: '/src/assets/Y2KdPkkjaayZ.png'
    },
    empresas: {
      title: 'Empresas e Industrias',
      description: 'Uniformes corporativos que transmitem profissionalismo',
      products: ['Camisas Polo', 'Camisetas Personalizadas', 'Uniformes Administrativos', 'Linha Social'],
      image: '/src/assets/Mf21WcrCZCEi.jpg'
    }
  };

  const whatsappNumber = '+5511997068829';
  const whatsappMessage = 'Ola! Gostaria de solicitar um orcamento para uniformes.';

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logoXua} alt="Xua Confeccoes" className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-900 hover:text-amber-700 font-medium">Home</a>
              <a href="#sobre" className="text-gray-900 hover:text-amber-700 font-medium">Sobre Nos</a>
              <div className="relative group">
                <button className="text-gray-900 hover:text-amber-700 font-medium flex items-center">
                  Segmentos <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <a href="#construcao" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Construcao Civil</a>
                  <a href="#saude" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Saude e Hotelaria</a>
                  <a href="#empresas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Empresas e Industrias</a>
                </div>
              </div>
              <a href="#produtos" className="text-gray-900 hover:text-amber-700 font-medium">Produtos</a>
              <a href="#contato" className="text-gray-900 hover:text-amber-700 font-medium">Contato</a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-amber-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-amber-700">Home</a>
              <a href="#sobre" className="block px-3 py-2 text-gray-900 hover:text-amber-700">Sobre Nos</a>
              <a href="#construcao" className="block px-3 py-2 text-gray-900 hover:text-amber-700">Construcao Civil</a>
              <a href="#saude" className="block px-3 py-2 text-gray-900 hover:text-amber-700">Saude e Hotelaria</a>
              <a href="#empresas" className="block px-3 py-2 text-gray-900 hover:text-amber-700">Empresas e Industrias</a>
              <a href="#produtos" className="block px-3 py-2 text-gray-900 hover:text-amber-700">Produtos</a>
              <a href="#contato" className="block px-3 py-2 text-gray-900 hover:text-amber-700">Contato</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Moda e uma coisa, mas o <span className="text-amber-700">estilo</span> e outro
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ha mais de duas decadas criando uniformes profissionais que combinam qualidade, 
              durabilidade e estilo para diversos segmentos do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openWhatsApp}
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar Orcamento
              </Button>
              <Button 
                variant="outline" 
                className="border-amber-700 text-amber-700 hover:bg-amber-50 px-8 py-3 text-lg"
              >
                Conheca Nossos Produtos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nos */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre a Xua Confeccoes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma empresa familiar com mais de 20 anos de experiencia no mercado de uniformes profissionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossa Historia</h3>
              <p className="text-gray-600 mb-6">
                A Xua Confeccoes nasceu do sonho de uma familia em oferecer uniformes de qualidade superior 
                para profissionais de diversos segmentos. Comecamos pequenos, mas com grandes ambicoes e 
                um compromisso inabalavel com a excelencia.
              </p>
              <p className="text-gray-600 mb-6">
                Ao longo dos anos, construimos nossa reputacao baseada na confianca, qualidade e no 
                atendimento personalizado. Cada uniforme que produzimos carrega nossa paixao pelo que fazemos 
                e nosso respeito pelos profissionais que os vestem.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">20+</div>
                  <div className="text-gray-600">Anos de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">1000+</div>
                  <div className="text-gray-600">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <Shield className="h-12 w-12 text-amber-700 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Qualidade Garantida</h4>
                <p className="text-sm text-gray-600">Tecidos selecionados e acabamento impecavel</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <Users className="h-12 w-12 text-amber-700 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Atendimento Personalizado</h4>
                <p className="text-sm text-gray-600">Cada cliente e unico e especial para nos</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <Star className="h-12 w-12 text-amber-700 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Tradicao Familiar</h4>
                <p className="text-sm text-gray-600">Valores passados de geracao em geracao</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <Truck className="h-12 w-12 text-amber-700 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Entrega Rapida</h4>
                <p className="text-sm text-gray-600">Prazos que respeitam sua necessidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section id="segmentos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Segmentos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendemos diversos setores com uniformes especializados para cada necessidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(segments).map(([key, segment]) => (
              <Card key={key} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={segment.image} 
                    alt={segment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{segment.title}</CardTitle>
                  <CardDescription>{segment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {segment.products.map((product, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-2">
                        {product}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-amber-700 hover:bg-amber-800"
                  >
                    Solicitar Orcamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personalizacao */}
      <section id="personalizacao" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Opcoes de Personalizacao</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalize seus uniformes com o logo da sua empresa em diferentes posicoes e estilos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-8 mb-4">
                <img 
                  src={calcaLogoVertical} 
                  alt="Calca com logo vertical" 
                  className="w-full h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Logo Vertical</h3>
              <p className="text-gray-600">
                Aplicacao moderna e impactante do logo na lateral da perna, 
                ideal para construcao civil e industrias.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-8 mb-4">
                <img 
                  src={calcaJeansLogo} 
                  alt="Calca jeans com logo no bolso" 
                  className="w-full h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Logo no Bolso</h3>
              <p className="text-gray-600">
                Bordado discreto e elegante no bolso traseiro, 
                perfeito para uniformes corporativos e administrativos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-8 mb-4">
                <img 
                  src={calcaFaixaRefletiva} 
                  alt="Calca com faixa refletiva" 
                  className="w-full h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faixa Refletiva</h3>
              <p className="text-gray-600">
                Faixas de seguranca para alta visibilidade, 
                essenciais para trabalhos noturnos e ambientes de risco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos prontos para atender voce e criar os uniformes perfeitos para sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fale Conosco</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-amber-700 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefone</p>
                    <p className="text-gray-600">(11) 99706-8829</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-amber-700 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <p className="text-gray-600">contato@xuaconfeccoes.com.br</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-amber-700 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Endereco</p>
                    <p className="text-gray-600">Sao Paulo, SP</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  onClick={openWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp - Ana Claudia
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Solicite seu Orcamento</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Descreva suas necessidades de uniformes..."
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logoXua} alt="Xua Confeccoes" className="h-12 w-auto mb-4 filter brightness-0 invert" />
              <p className="text-gray-400">
                Uniformes profissionais de qualidade ha mais de 20 anos.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Segmentos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#construcao" className="hover:text-white">Construcao Civil</a></li>
                <li><a href="#saude" className="hover:text-white">Saude e Hotelaria</a></li>
                <li><a href="#empresas" className="hover:text-white">Empresas e Industrias</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Camisetas e Polos</li>
                <li>Calcas e Macacoes</li>
                <li>Jalecos e Aventais</li>
                <li>Uniformes Sociais</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(11) 99706-8829</li>
                <li>contato@xuaconfeccoes.com.br</li>
                <li>Sao Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Xua Confeccoes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}

export default App;
