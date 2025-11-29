import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  Users,
  Target,
  Calendar,
  TrendingUp,
  Award,
  MapPin,
  Heart,
  CheckCircle2,
  ChevronRight,
  Clock,
  Zap,
  Shield,
  Crown,
  ArrowRight,
  Menu,
  X,
  Megaphone,
  Wrench,
  Code,
  Wallet,
  AlertTriangle,
  ShieldCheck
} from 'lucide-react'

// Hub Lendário Icon (8-shape symbol)
const HubIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 194 192" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M167.724 35.0064L156.634 23.8944C156.175 23.4336 155.384 23.76 155.384 24.4128V167.587C155.384 168.24 156.175 168.566 156.634 168.106L167.724 156.994C169.099 155.616 169.869 153.754 169.869 151.805V40.1904C169.869 38.2464 169.099 36.3792 167.724 35.0016V35.0064Z" fill="currentColor"/>
    <path d="M77.6311 99.6336C77.8275 99.6336 78.0095 99.5568 78.1484 99.4176L81.0418 96.5184C81.3292 96.2304 81.3292 95.7696 81.0418 95.4816L78.1532 92.5872C78.0143 92.448 77.8275 92.3712 77.6359 92.3712H38.566V24.4128C38.566 23.76 37.7756 23.4336 37.3157 23.8944L26.2262 35.0064C24.8514 36.384 24.0801 38.2464 24.0801 40.1952V151.814C24.0801 153.758 24.8514 155.626 26.2262 157.003L37.3157 168.115C37.7756 168.576 38.566 168.25 38.566 167.597V99.6384H77.6311V99.6336Z" fill="currentColor"/>
    <path d="M115.801 92.5862L112.912 95.4806C112.626 95.7686 112.626 96.2294 112.912 96.5174L115.806 99.4166C115.945 99.5558 116.132 99.6326 116.324 99.6326H155.384V92.375H116.319C116.123 92.375 115.94 92.4518 115.801 92.591V92.5862Z" fill="currentColor"/>
    <path d="M128.036 116.861L110.839 99.6295L107.213 95.9959L110.834 92.3671L128.036 75.1303C132.228 70.9303 135.476 66.0295 137.689 60.5671C139.82 55.2919 140.908 49.7191 140.908 44.0071C140.908 38.2951 139.825 32.7223 137.689 27.4471C135.48 21.9799 132.228 17.0839 128.036 12.8791C123.845 8.68393 118.954 5.42953 113.502 3.21193C108.237 1.07113 102.677 -0.0136719 96.9759 -0.0136719C91.2754 -0.0136719 85.7139 1.06633 80.4493 3.21193C74.998 5.42473 70.107 8.68393 65.9155 12.8839C61.724 17.0839 58.4762 21.9799 56.263 27.4471C54.1313 32.7223 53.0439 38.2951 53.0439 44.0071C53.0439 49.7191 54.1265 55.2919 56.263 60.5671C58.4714 66.0295 61.724 70.9303 65.9155 75.1303L83.1175 92.3671L86.7391 95.9959L65.9203 116.856C61.7287 121.056 58.481 125.957 56.2678 131.419C54.1361 136.695 53.0487 142.267 53.0487 147.979C53.0487 153.691 54.1313 159.264 56.2678 164.539C58.4762 170.007 61.7287 174.903 65.9203 179.107C70.1118 183.303 75.0028 186.557 80.4541 188.775C85.7187 190.915 91.2802 192 96.9807 192C102.681 192 108.242 190.92 113.507 188.775C118.959 186.562 123.85 183.303 128.041 179.103C132.233 174.903 135.48 170.007 137.694 164.539C139.825 159.264 140.913 153.691 140.913 147.979C140.913 142.267 139.83 136.695 137.694 131.419C135.485 125.957 132.233 121.056 128.041 116.856L128.036 116.861ZM76.1524 64.8775C73.3741 62.0935 71.2231 58.8535 69.7717 55.3207C68.3107 51.7879 67.549 47.9623 67.549 44.0167C67.549 36.1207 70.6052 28.7095 76.1572 23.1463C81.714 17.5831 89.1054 14.5159 96.9807 14.5159C104.856 14.5159 112.248 17.5831 117.804 23.1463C123.356 28.7143 126.412 36.1207 126.412 44.0119C126.412 51.9031 123.356 59.3143 117.804 64.8727L97.0239 85.6951L96.9759 85.7383L76.1572 64.8775H76.1524ZM126.407 147.984C126.407 155.875 123.351 163.287 117.799 168.85C112.243 174.413 104.851 177.48 96.9759 177.48C89.1006 177.48 81.7044 174.413 76.1524 168.85C70.6005 163.283 67.5442 155.875 67.5442 147.984C67.5442 140.093 70.6005 132.682 76.1524 127.123L96.9328 106.301L96.9807 106.258L117.799 127.119C120.578 129.903 122.729 133.143 124.18 136.675C125.641 140.208 126.403 144.034 126.403 147.979L126.407 147.984Z" fill="currentColor"/>
    <path d="M8.52376 86.8279L0.451907 94.916C-0.146728 95.5159 -0.14673 96.4884 0.451906 97.0883L8.52376 105.176C9.1224 105.776 10.093 105.776 10.6916 105.176L18.7635 97.0883C19.3621 96.4884 19.3621 95.5159 18.7635 94.916L10.6916 86.8279C10.093 86.228 9.1224 86.228 8.52376 86.8279Z" fill="currentColor"/>
    <path d="M183.265 86.692L175.194 94.7802C174.595 95.38 174.595 96.3526 175.194 96.9524L183.265 105.041C183.864 105.641 184.835 105.641 185.434 105.041L193.505 96.9524C194.104 96.3526 194.104 95.38 193.505 94.7802L185.434 86.692C184.835 86.0922 183.864 86.0922 183.265 86.692Z" fill="currentColor"/>
  </svg>
)

// Navigation sections
const sections = [
  { id: 'prologo', label: 'A Oportunidade' },
  { id: 'filosofia', label: 'Filosofia' },
  { id: 'maquina', label: 'A Máquina' },
  { id: 'evolucao', label: 'Evolução' },
  { id: 'governanca', label: 'Governança' },
  { id: 'conexao', label: 'Conexão' },
  { id: 'metricas', label: 'Métricas' },
  { id: 'roadmap', label: 'Roadmap' },
]

// Tier data
const tiers = [
  {
    name: 'Padawan',
    icon: Shield,
    badge: '🥉',
    period: '0-6 meses',
    members: '15+',
    nps: '≥7',
    events: '1/trimestre',
    newMembers: '1-3/mês',
    support: [
      'Kit onboarding (camisetas, material)',
      'Template de eventos e materiais',
      'Mentoria mensal com gestor'
    ],
    obligations: [
      '1 evento presencial/trimestre',
      '1 encontro online/mês',
      'Acolhimento de novos membros',
      'NPS eventos ≥ 7.0'
    ]
  },
  {
    name: 'Guardião',
    icon: Zap,
    badge: '🥈',
    period: '6-18 meses',
    members: '30+',
    nps: '≥8',
    events: '1/mês',
    newMembers: '5/mês',
    revenue: 'R$ 5k/trim',
    support: [
      'Extensão gratuita Comunidade (1 pessoa)',
      'Suporte financeiro R$ 2k/trimestre',
      'Banner e materiais promocionais',
      'Acesso a palestrantes internos'
    ],
    obligations: [
      '1 evento presencial/mês',
      'Grupo WhatsApp >70% engajamento',
      'R$ 5k em afiliações/trimestre',
      'NPS eventos ≥ 8.0'
    ]
  },
  {
    name: 'Lendário',
    icon: Crown,
    badge: '🥇',
    period: '18+ meses',
    members: '50+',
    nps: '≥9',
    events: '2/mês',
    newMembers: '8+/mês',
    revenue: 'R$ 15k/trim',
    support: [
      'Extensão Formação Lendária (1 pessoa/ano)',
      'Orçamento marketing R$ 5k/trimestre',
      'Aluguel espaço até R$ 3k/mês',
      'Participação eventos nacionais'
    ],
    obligations: [
      '2 eventos presenciais/mês',
      '1 evento showcase/trimestre',
      'Mentoria para novos hubs',
      'NPS eventos ≥ 9.0'
    ]
  }
]

// Regional supervisors
const supervisors = [
  { region: 'Norte/Nordeste', name: 'Daniel Carneiro', city: 'Fortaleza' },
  { region: 'Sudeste', name: 'Matheus Chaves', city: 'São Paulo' },
  { region: 'Sudeste', name: 'Guilherme Vieira', city: 'Rio de Janeiro' },
  { region: 'Sudeste', name: 'Renata Benetti', city: 'Campinas' },
  { region: 'Sul', name: 'Débora Azevedo', city: 'Florianópolis' },
  { region: 'Centro-Oeste', name: 'Felipe Zanoni', city: 'Goiânia' },
]

// Strategic hubs
const strategicHubs = [
  'São Paulo', 'Florianópolis', 'Rio de Janeiro', 'Campinas',
  'Vitória', 'Sorocaba', 'Fortaleza', 'Belo Horizonte'
]

// Processes
const processes = [
  {
    title: 'Onboarding de Membros',
    icon: Users,
    steps: [
      'Boas-vindas no grupo + formulário rápido (perfil/objetivos)',
      'Pareamento com padrinho (até 48h)',
      'Trilha 30-60-90 dias',
      'Check NPS inicial (D+15)'
    ]
  },
  {
    title: 'Apadrinhamento',
    icon: Heart,
    steps: [
      '1 toque/semana por 4 semanas',
      '2 encontros/mês (grupal/1-1)',
      'Entrega de 1 microcase em 90 dias'
    ]
  },
  {
    title: 'Eventos',
    icon: Calendar,
    steps: [
      'Pauta padrão definida',
      'Host definido e lista de presença',
      'NPS ao final',
      'Follow-up com CTA claro'
    ]
  },
  {
    title: 'Parcerias e Afiliados',
    icon: TrendingUp,
    steps: [
      'Mapear 3 parceiros/trimestre',
      'Formalizar contrapartidas',
      'Usar link de afiliado do hub',
      'Registrar resultados'
    ]
  }
]

// Roadmap phases
const roadmapPhases = [
  {
    phase: 1,
    title: 'Consolidação',
    period: '0-60 dias',
    deliverables: [
      '8 hubs estratégicos com boards ativos',
      'Padrinhos 100%',
      'Gargalos tech críticos resolvidos',
      'Manual do Embaixador v1.0',
      'Hub SP como MVP'
    ]
  },
  {
    phase: 2,
    title: 'Estruturação',
    period: '60-120 dias',
    deliverables: [
      'Governança distribuída funcionando',
      'Dashboard operacional',
      'Sistema de reconhecimento ativo',
      'Parcerias validadas',
      '2 hubs com ROI positivo'
    ]
  },
  {
    phase: 3,
    title: 'Expansão Controlada',
    period: '120-180 dias',
    deliverables: [
      '+5-7 hubs Tier 3',
      'Promoção 2-3 hubs Tier 2→1',
      'Documentação completa',
      '15 hubs ativos no total'
    ]
  }
]

// Accordion component
const Accordion = ({ title, children, icon: Icon }: { title: string; children: React.ReactNode; icon: React.ComponentType<{ className?: string }> }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white-soft hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-black-pure" />
          <span className="font-semibold text-black-deep">{title}</span>
        </div>
        <ChevronRight className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 bg-white">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Quote component
const Quote = ({ text, author, role }: { text: string; author: string; role?: string }) => (
  <div className="bg-white-soft border-l-4 border-black-pure p-6 md:p-8">
    <p className="font-serif text-xl md:text-2xl text-black-pure italic leading-relaxed">
      "{text}"
    </p>
    <div className="mt-4 flex items-center gap-2">
      <span className="font-semibold text-black-deep">{author}</span>
      {role && <span className="text-gray-500">— {role}</span>}
    </div>
  </div>
)

// Section wrapper
const Section = ({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`min-h-screen py-16 md:py-24 ${className}`}>
    <div className="max-w-5xl mx-auto px-6">
      {children}
    </div>
  </section>
)

// Tier Card
const TierCard = ({ tier, index }: { tier: typeof tiers[0]; index: number }) => {
  const [showDetails, setShowDetails] = useState(false)
  const Icon = tier.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden"
    >
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{tier.badge}</span>
            <div>
              <h3 className="text-xl font-bold text-black-pure">{tier.name}</h3>
              <p className="text-sm text-gray-500">{tier.period}</p>
            </div>
          </div>
          <Icon className="w-8 h-8 text-black-pure" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white-soft p-3 rounded">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Membros</p>
            <p className="text-lg font-bold text-black-deep">{tier.members}</p>
          </div>
          <div className="bg-white-soft p-3 rounded">
            <p className="text-xs text-gray-500 uppercase tracking-wide">NPS</p>
            <p className="text-lg font-bold text-black-deep">{tier.nps}</p>
          </div>
          <div className="bg-white-soft p-3 rounded">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Eventos</p>
            <p className="text-lg font-bold text-black-deep">{tier.events}</p>
          </div>
          <div className="bg-white-soft p-3 rounded">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Novos</p>
            <p className="text-lg font-bold text-black-deep">{tier.newMembers}</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full px-6 py-3 flex items-center justify-between text-sm font-medium hover:bg-white-soft transition-colors"
      >
        <span>{showDetails ? 'Ocultar detalhes' : 'Ver detalhes'}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 space-y-6 border-t border-gray-100">
              <div>
                <h4 className="font-semibold text-black-deep mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Obrigações
                </h4>
                <ul className="space-y-2">
                  {tier.obligations.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-black-pure mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black-deep mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4" /> Benefícios
                </h4>
                <ul className="space-y-2">
                  {tier.support.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-black-pure mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Navigation
const Navigation = ({ activeSection }: { activeSection: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#prologo" className="flex items-center gap-3">
            <HubIcon className="w-8 h-8 text-black-pure" />
            <span className="font-semibold text-black-deep hidden sm:block">Hubs Lendários 4.0</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-3 py-2 text-sm rounded transition-colors ${
                  activeSection === section.id
                    ? 'bg-black-pure'
                    : 'hover:bg-white-soft'
                }`}
                style={{
                  color: activeSection === section.id ? '#FFFFFF' : '#242424'
                }}
              >
                {section.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 text-sm rounded ${
                      activeSection === section.id
                        ? 'bg-black-pure'
                        : 'hover:bg-white-soft'
                    }`}
                    style={{
                      color: activeSection === section.id ? '#FFFFFF' : '#242424'
                    }}
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

// Progress bar
const ProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 bg-gray-100 z-40"
    >
      <motion.div
        className="h-full bg-black-pure"
        style={{ width }}
      />
    </motion.div>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('prologo')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="bg-white">
      <Navigation activeSection={activeSection} />
      <ProgressBar />

      {/* PRÓLOGO */}
      <Section id="prologo" className="pt-32 flex items-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <HubIcon className="w-24 h-24 mx-auto mb-8 text-black-pure" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-widest text-gray-500 mb-4"
          >
            Blueprint Estratégico v4.0
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-black-pure mb-6 tracking-tight"
          >
            Hubs Lendários
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Uma Oportunidade Única na Comunidade Brasileira
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white-soft border border-gray-200 rounded-lg p-6 md:p-8 max-w-2xl mx-auto text-left"
          >
            <h2 className="font-semibold text-black-deep mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" /> TL;DR
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Consolidar de <strong>54 para 15-20 hubs estratégicos</strong>, operando como embaixadas de comunidade.
              Modelo híbrido: pertencimento e desenvolvimento primeiro; monetização como consequência.
              ROI projetado em <strong>12-18 meses</strong> via retenção, indicações e eventos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <a href="#filosofia" className="inline-flex items-center gap-2 text-gray-500 hover:text-black-pure transition-colors">
              <span className="text-sm">Começar a jornada</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* ATO 1 - FILOSOFIA */}
      <Section id="filosofia" className="bg-white-soft">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Ato 1</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-6">
            Pessoas Vêm Pela IA.<br />
            Ficam Por Se Identificarem Como Lendárias.
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            A filosofia híbrida que transforma hubs em embaixadas
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Quote
              text="O propósito primário dos Hubs é estratégico, como centros de comunidade e pertencimento, alinhados à nossa visão de fortalecer a chama lendária. Eles precisam ser lugares onde os alunos se conectam, trocam experiências e sentem orgulho de fazer parte."
              author="Lucas Rover"
              role="COO"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-lg p-6 md:p-8"
          >
            <h3 className="font-semibold text-black-deep mb-6">Hierarquia de Prioridades</h3>
            <div className="space-y-4">
              {[
                { num: '1º', title: 'Estratégico/Filosófico', desc: '"Embaixada da comunidade"' },
                { num: '2º', title: 'Comercial', desc: 'Mecanismos de monetização como consequência' },
                { num: '3º', title: 'Resultado', desc: 'Comunidade primeiro, receita como resultado' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-black-pure rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ color: '#FFFFFF' }}>
                    {item.num}
                  </span>
                  <div>
                    <p className="font-semibold text-black-deep">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-lg p-6 md:p-8"
          >
            <h3 className="font-semibold text-black-deep mb-4">Inspirações Históricas</h3>
            <p className="text-gray-600 mb-4">
              Referências de movimentos que construíram comunidades duradouras:
            </p>
            <div className="flex flex-wrap gap-3">
              {['Igreja Universal', 'Maçonaria', 'AA', 'Nova Acrópole'].map((ref) => (
                <span key={ref} className="px-4 py-2 bg-white-soft border border-gray-200 rounded-full text-sm">
                  {ref}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              "IA como 'desculpa' para conectar pessoas inteligentes. Hub como 'maçonaria' de lendários locais."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Quote
              text="Qualidade > Quantidade. Prefiro 3 hubs muito bem feitos do que 1000 mal feitos."
              author="Alan Nicolas"
              role="Fundador"
            />
          </motion.div>
        </div>
      </Section>

      {/* ATO 2 - A MÁQUINA */}
      <Section id="maquina">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Ato 2</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-6">
            O Blueprint da Excelência Operacional
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Papéis claros. Rituais definidos. Processos replicáveis.
          </p>
        </motion.div>

        {/* Távola Redonda */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white-soft border border-gray-200 rounded-lg p-6 md:p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-black-deep mb-6 flex items-center gap-2">
            <Users className="w-6 h-6" /> Estrutura "Távola Redonda"
          </h3>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-1 bg-black-pure p-4 rounded-lg text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <Crown className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </div>
              <p className="font-semibold" style={{ color: '#FFFFFF' }}>Embaixador</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>Porta-voz + Curadoria</p>
            </div>

            {[
              { title: 'Marketing', subtitle: 'Comunicação', icon: Megaphone },
              { title: 'Eventos', subtitle: 'Logística', icon: Wrench },
              { title: 'Projetos', subtitle: 'Desenvolvimento', icon: Code },
              { title: 'Tesouraria', subtitle: 'Parcerias', icon: Wallet },
            ].map((role) => {
              const Icon = role.icon
              return (
                <div key={role.title} className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 bg-white-soft">
                    <Icon className="w-6 h-6 text-black-pure" />
                  </div>
                  <p className="font-semibold text-black-deep">{role.title}</p>
                  <p className="text-xs text-gray-500">{role.subtitle}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Rituais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-black-deep mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6" /> Rituais e Cadência
          </h3>

          <div className="space-y-4">
            {[
              { freq: 'Semanal', icon: Clock, desc: 'Check-in de métricas (evento, NPS, apadrinhamento, growth)' },
              { freq: 'Quinzenal', icon: Users, desc: 'Reunião Supervisores + Gestor de Movimento' },
              { freq: 'Mensal', icon: Calendar, desc: 'Reunião board local + 1 evento presencial + 1 online' },
              { freq: 'Trimestral', icon: Award, desc: 'Showcase do hub + revisão de metas e parcerias' },
            ].map((ritual) => (
              <div key={ritual.freq} className="flex items-start gap-4 p-4 bg-white-soft rounded-lg">
                <div className="w-10 h-10 bg-black-pure rounded-lg flex items-center justify-center flex-shrink-0">
                  <ritual.icon className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <p className="font-semibold text-black-deep">{ritual.freq}</p>
                  <p className="text-sm text-gray-600">{ritual.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Processos Core */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-black-deep mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6" /> Processos Core
          </h3>

          <div className="space-y-4">
            {processes.map((process) => (
              <Accordion key={process.title} title={process.title} icon={process.icon}>
                <ol className="space-y-3">
                  {process.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-black-pure rounded-full flex items-center justify-center text-xs flex-shrink-0" style={{ color: '#FFFFFF' }}>
                        {i + 1}
                      </span>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </Accordion>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ATO 3 - EVOLUÇÃO */}
      <Section id="evolucao" className="bg-white-soft">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Ato 3</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-6">
            A Jornada do Padawan ao Lendário
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Três tiers de maturidade com critérios claros de evolução
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <TierCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>
      </Section>

      {/* ATO 4 - GOVERNANÇA */}
      <Section id="governanca">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Ato 4</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-6">
            Governança Distribuída
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            5 regiões, 8 hubs estratégicos, liderança local
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Supervisores */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <h3 className="font-bold text-black-deep mb-6">Supervisores Regionais</h3>
            <div className="space-y-4">
              {supervisors.map((sup) => (
                <div key={sup.name} className="flex items-center gap-4 p-3 bg-white-soft rounded-lg">
                  <MapPin className="w-5 h-5 text-black-pure" />
                  <div>
                    <p className="font-semibold text-black-deep">{sup.name}</p>
                    <p className="text-sm text-gray-500">{sup.region} • {sup.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hubs Estratégicos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black-pure rounded-lg p-6"
          >
            <h3 className="font-bold mb-6" style={{ color: '#FFFFFF' }}>8 Hubs Estratégicos</h3>
            <div className="grid grid-cols-2 gap-3">
              {strategicHubs.map((hub) => (
                <div key={hub} className="flex items-center gap-2 px-3 py-2 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                  <MapPin className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                  <span className="text-sm" style={{ color: '#FFFFFF' }}>{hub}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.25)' }}>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Gestor de Movimento: <strong style={{ color: '#FFFFFF' }}>Rodrigo Feldman</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ATO 5 - CONEXÃO */}
      <Section id="conexao" className="bg-white-soft">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Ato 5</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-6">
            Cada Lendário Merece um Padrinho
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            O sistema que reduz fricção e aumenta engajamento nos primeiros 90 dias
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Conceito */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-black-pure flex-shrink-0" />
              <div>
                <h3 className="font-bold text-black-deep mb-2">Conceito Central</h3>
                <p className="text-gray-600">
                  Cada novo membro que entra no hub é "adotado" por um lendário experiente local,
                  reduzindo fricção inicial e aumentando probabilidade de engajamento duradouro.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Protocolo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg p-6 md:p-8"
          >
            <h3 className="font-bold text-black-deep mb-6">Protocolo em 5 Passos</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                'Mensagem padrão de boas-vindas no grupo',
                'Mensagem privada personalizada',
                'Acompanhamento estruturado 90 dias',
                'Framework padronizado pela Academia',
                'Relatório mensal de apadrinhados'
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 bg-black-pure rounded-full flex items-center justify-center mx-auto mb-3 font-bold" style={{ color: '#FFFFFF' }}>
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Case */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black-pure rounded-lg p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#FFFFFF' }}>Case Validador • Hub Sorocaba</span>
            </div>
            <blockquote className="font-serif text-xl md:text-2xl italic mb-6" style={{ color: '#FFFFFF' }}>
              "E queria agradecer muito ao padrinho @Alejandro que me deu suporte para essa venda!"
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold" style={{ color: '#FFFFFF' }}>Raphael Lisanti</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>15 dias de comunidade • Primeiro cliente fechado</p>
              </div>
              <div className="text-right">
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Padrinho</p>
                <p className="font-semibold" style={{ color: '#FFFFFF' }}>Alejandro Pano</p>
              </div>
            </div>
          </motion.div>

          {/* Perfil do Padrinho */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <h3 className="font-bold text-black-deep mb-4">Perfil do Padrinho Ideal</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Membro ativo há 6+ meses',
                'Participação >75% em eventos',
                'Cases documentados de IA aplicada',
                'Disponibilidade para mentoria mensal'
              ].map((req) => (
                <div key={req} className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-black-pure" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ATO 6 - MÉTRICAS */}
      <Section id="metricas">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Ato 6</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-6">
            Medir Para Crescer. Reconhecer Para Reter.
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            KPIs estratégicos e sistema de bonificações transparente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* KPIs Primários */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black-pure rounded-lg p-6"
          >
            <h3 className="font-bold mb-6 flex items-center gap-2" style={{ color: '#FFFFFF' }}>
              <Target className="w-5 h-5" style={{ color: '#FFFFFF' }} /> KPIs Primários (Estratégicos)
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Engajamento', value: '>60%', desc: 'participação eventos' },
                { label: 'Retenção', value: '<15%', desc: 'churn rate (hubs ativos)' },
                { label: 'Pertencimento', value: '≥8.0', desc: 'NPS médio eventos' },
                { label: 'Transformação', value: '2+', desc: 'cases documentados/trimestre' },
              ].map((kpi) => (
                <div key={kpi.label} className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                  <div>
                    <p className="font-semibold" style={{ color: '#FFFFFF' }}>{kpi.label}</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>{kpi.desc}</p>
                  </div>
                  <span className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>{kpi.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* KPIs Secundários */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <h3 className="font-bold text-black-deep mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> KPIs Secundários (Comerciais)
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Indicações', value: '1-3', desc: 'leads qualificados/mês/hub' },
                { label: 'Afiliações', value: 'R$ 500-5k', desc: 'por mês conforme tier' },
                { label: 'Eventos', value: 'Sustentável', desc: 'financeiramente local' },
                { label: 'Parcerias', value: '1+', desc: 'parceria estratégica/hub/ano' },
              ].map((kpi) => (
                <div key={kpi.label} className="flex items-center justify-between p-3 bg-white-soft rounded">
                  <div>
                    <p className="font-semibold text-black-deep">{kpi.label}</p>
                    <p className="text-xs text-gray-500">{kpi.desc}</p>
                  </div>
                  <span className="text-lg font-bold text-black-pure">{kpi.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sistema de Reconhecimento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-black-deep mb-6 flex items-center gap-2">
            <Award className="w-6 h-6" /> Sistema de Reconhecimento
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Para Embaixadores',
                subtitle: 'Após 3 meses',
                items: [
                  'Kit Exclusivo (camiseta, jaqueta, pin)',
                  'Ingressos gratuitos eventos Academia',
                  'Descontos exclusivos produtos',
                  'Acesso aos bastidores'
                ]
              },
              {
                title: 'Para Hubs',
                subtitle: 'Coletivo',
                items: [
                  'Kit volumétrico (banner, camisetas)',
                  'Descontos para membros',
                  'Link afiliado com comissão',
                  'Suporte financeiro por tier'
                ]
              },
              {
                title: 'Para Membros',
                subtitle: 'Assinatura R$ 88/mês',
                items: [
                  'Descontos em produtos/eventos',
                  'Acesso clube de parceiros',
                  'Networking exclusivo',
                  'Conteúdos premium'
                ]
              }
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white-soft border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-black-deep mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-500 mb-4">{benefit.subtitle}</p>
                <ul className="space-y-2">
                  {benefit.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-black-pure flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* EPÍLOGO - ROADMAP */}
      <Section id="roadmap" className="bg-white-soft">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Epílogo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-6">
            O Roadmap: 180 Dias Para Transformação
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Três fases de consolidação, estruturação e expansão controlada
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 mb-16">
          {roadmapPhases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-black-pure rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>{phase.phase}</span>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-black-deep">{phase.title}</h3>
                    <span className="px-3 py-1 bg-white-soft rounded-full text-sm text-gray-600">
                      {phase.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {phase.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600">
                        <ArrowRight className="w-4 h-4 text-black-pure flex-shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Riscos e Mitigações */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-black-deep mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" /> Riscos e Mitigações
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Red Flags */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-black-deep mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-gray-600" /> Red Flags Identificados
              </h4>
              <div className="space-y-3">
                {[
                  { risk: 'Promessas não cumpridas', solution: 'Comunicação transparente de expectativas' },
                  { risk: 'Mudanças abruptas', solution: 'Implementação gradual com consulta' },
                  { risk: 'Projetos órfãos', solution: 'Estrutura de boards para continuidade' },
                  { risk: 'Foco só ferramentas', solution: 'Priorizar gestão pessoas > tecnologia' },
                ].map((item) => (
                  <div key={item.risk} className="p-3 bg-white-soft rounded">
                    <p className="font-medium text-black-deep text-sm">{item.risk}</p>
                    <p className="text-xs text-gray-500 mt-1">→ {item.solution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Estratégias */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-black-deep mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-black-pure" /> Estratégias de Mitigação
              </h4>
              <div className="space-y-3">
                {[
                  { title: 'Co-criação', desc: 'Embaixadores participam de todas decisões estruturais' },
                  { title: 'Transparência', desc: 'ROI e métricas públicas entre hubs' },
                  { title: 'Suporte intensivo', desc: 'Acompanhamento semanal primeiros 90 dias' },
                  { title: 'Backup systems', desc: 'Processos funcionam mesmo sem Academia' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black-pure flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-black-deep text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Declaração Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Quote
            text="Os Hubs Lendários não são centros de vendas disfarçados. São embaixadas da comunidade lendária que fortalecem pertencimento, geram indicações orgânicas e posicionam a Academia como referência regional em IA."
            author="Proposta de Valor Consolidada"
          />
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-600 mb-8">
            A janela de oportunidade está aberta.<br />
            Os embaixadores estão alinhados. A estrutura está definida.
          </p>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-black-pure rounded-lg">
            <span className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>A Janela de Oportunidade É Agora</span>
            <ArrowRight className="w-5 h-5" style={{ color: '#FFFFFF' }} />
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <HubIcon className="w-8 h-8 text-black-pure" />
              <div>
                <p className="font-semibold text-black-deep">Academia Lendár[IA]</p>
                <p className="text-sm text-gray-500">Hubs Lendários Blueprint v4.0</p>
              </div>
            </div>
            <div className="text-sm text-gray-500 text-center md:text-right">
              <p>Gestor de Movimento: Rodrigo Feldman</p>
              <p>Aprovado pelo COO Lucas Rover • Nov 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
