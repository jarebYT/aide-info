import { useState } from 'react';
import { Monitor, Smartphone, HardDrive, Mail, Phone, MapPin, Wrench, Wifi, Laptop, Star, CheckCircle } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Envoi des données à Formspree
    const response = await fetch("https://formspree.io/f/mjgknjag", { // REMPLACE TON_ID_ICI
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } else {
      alert("Erreur lors de l'envoi. Veuillez m'appeler directement !");
    }
  };

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Dépannage Ordinateur",
      description: "Votre PC ralentit, a un virus ou ne démarre plus ? Je viens à domicile et vous le remet en état."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Assistance Mobile",
      description: "Téléphone qui bugge, corrompu, ou vous ne comprenez pas comment ça marche ? Je vous aide."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Installation Réseau",
      description: "WiFi qui coupe, internet lent ? Je configure tout et vous explique comment ça fonctionne."
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Récupération de Données",
      description: "Vos photos et documents importants ont été corrompus ? Je les récupère pour vous."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance",
      description: "Entretien régulier pour éviter que vos appareils ne lâchent. Prévention mieux que guérison."
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Formation",
      description: "Pas confiant avec la technologie ? Je vous montre les bases, tranquillement, sans prise de tête."
    }
  ];

  const testimonials = [
    {
      name: "Mme Dubois",
      text: "Alexandre est vraiment sympa et patient. Il m'a expliqué ce qu'il faisait sans utiliser de mots compliqués. Très rapide et efficace !",
      role: "Retraitée"
    },
    {
      name: "M. Frin",
      text: "Ma clé USB était corrompue, je pensais perdre mes 5 ans de cours. Alexandre a tout récupéré. Un vrai sauveur !",
      role: "Enseignant"
    },
    {
      name: "Mme Sauvage",
      text: "Bloquée avec l'installation de Windows 11 sur un vieil ordinateur, Alexandre a su m'aider rapidement et me débloquer la situation !",
      role: "Proche"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-slate-900">Alexandre</h1>
              <p className="text-xs sm:text-sm text-blue-600 font-medium">Dépannage informatique à domicile</p>
            </div>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-lg hover:shadow-lg transition-all text-sm sm:text-base font-medium"
            >
              Appel / Message
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Vos problèmes informatiques,
                <span className="text-blue-600"> mes solutions</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Vous galèrez avec votre PC qui ralentit, votre téléphone qui bugge ou votre WiFi qui coupe ? Je viens chez vous, je règle le problème et je vous explique comment ça marche.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Déplacement chez vous ou contrôle à distance</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Explications claires, sans jargon technique</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">Tarifs justes et transparents</p>
                </div>
              </div>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="tel:+33123456789"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  M'appeler
                </a>
                <a
                  href="#contact"
                  className="bg-slate-200 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-300 transition-colors font-medium"
                >
                  Message
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="./hero.jpeg"
                alt="Assistance informatique"
                className="rounded-2xl shadow-2xl w-full object-cover h-96"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold text-slate-900">Disponible 7j/7</p>
                <p className="text-xs text-slate-600">(oui, même le Dimanche !)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4 sm:mb-6">
              Mes services
            </h3>
            <p className="text-center text-slate-600 mb-10 sm:mb-14 text-lg max-w-2xl mx-auto">
              Un grand champ de possibilités. Voici ce que je fais au quotidien :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300"
                >
                  <div className="text-blue-600 mb-4 bg-white w-fit p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                ))}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ce qu'en pensent mes clients
              </h3>
              <p className="text-blue-100 text-lg">Voilà pourquoi ils m'appellent plutôt que d'appeler quelqu'un d'autre</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-95 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <img
                  src="./hero.jpeg"
                  alt="Alexandre au travail"
                  className="rounded-2xl shadow-2xl w-full object-cover h-96"
                />
              </div>
              <div className="text-white">
                <h3 className="text-3xl sm:text-4xl font-bold mb-6">Qui je suis</h3>
                <p className="text-lg text-slate-200 mb-4 leading-relaxed">
                  Je m'appelle <span className="font-semibold">Alexandre Vanneuville</span>, j'ai 19 ans et je suis passionné par l'informatique. Depuis le collège, j'aide mes amis et mes proches quand ils ont des problèmes en informatique.
                </p>
                <p className="text-lg text-slate-200 mb-6 leading-relaxed">
                  J'ai décidé de transformer cette passion en service pour vous aider au quotidien. Que ce soit pour dépanner votre ordinateur, configurer votre réseau ou vous former aux bases de la technologie, je suis là pour vous simplifier la vie.
                </p>
                <div className="bg-blue-600 bg-opacity-30 border border-blue-400 rounded-lg p-4">
                  <p className="text-blue-100 text-sm italic">
                    "La technologie, ça devrait être accessible à tout le monde. Pas juste aux geeks qui comprennent tout."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-3 sm:mb-4">
              Contactez-moi
            </h3>
            <p className="text-center text-slate-600 mb-8 sm:mb-10 text-base sm:text-lg">
              Une question ? Un problème ? N'hésitez pas à me contacter
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
              <a
                href="mailto:alexandre.vnvl@gmail.com"
                className="flex items-center justify-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
              >
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 text-sm sm:text-base">Email</span>
              </a>
              <a
                href="tel:+33652810776"
                className="flex items-center justify-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 text-sm sm:text-base">Téléphone</span>
              </a>
              <div className="flex items-center justify-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 text-sm sm:text-base">Région Lilloise</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Votre email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  placeholder="jean.dupont@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Votre téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base resize-none"
                  placeholder="Décrivez votre problème ou votre besoin..."
                />
              </div>

              {formSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
                  Merci ! Je vous recontacte très bientôt.
                </div>
              )}

              <button
                type="submit"
                disabled={formSubmitted}
                className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-base sm:text-lg shadow-lg hover:shadow-xl"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-white py-8 sm:py-10 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="font-semibold text-white mb-2">En urgence ?</p>
              <p className="text-slate-300 text-sm">Appelez-moi directement, je réponds vite</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Horaires</p>
              <p className="text-slate-300 text-sm">Lun-Dim : 00h-00h</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Zone</p>
              <p className="text-slate-300 text-sm">Région Lilloise - Localisé à Bauvin</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center">
            <p className="text-slate-400 text-sm">
              © 2026 Alexandre Vanneuville - Dépannage Informatique à Domicile
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
