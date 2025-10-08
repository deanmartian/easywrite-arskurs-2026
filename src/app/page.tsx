"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for scroll animations
  const heroRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe sections
    if (heroRef.current) observer.observe(heroRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    // Also observe individual cards
    const cards = document.querySelectorAll('.scroll-animate');
    cards.forEach((card, index) => {
      // Add staggered delay
      (card as HTMLElement).style.setProperty('--animation-delay', `${index * 0.1}s`);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData for Formspree
      const formspreeData = new FormData();
      formspreeData.append('name', formData.name);
      formspreeData.append('email', formData.email);
      formspreeData.append('phone', formData.phone);
      formspreeData.append('message', formData.message);
      formspreeData.append('_subject', 'Ny anmälan till Årskurs 2026');
      formspreeData.append('_replyto', formData.email);

      // Using Formspree for form handling
      const response = await fetch('https://formspree.io/f/myzndddj', {
        method: 'POST',
        body: formspreeData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setIsFormOpen(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        }, 3000);
      } else {
        throw new Error('Formuläret kunde inte skickas');
      }

    } catch (error) {
      alert('Något gick fel vid skickandet. Försök igen eller kontakta oss direkt på post@easywrite.se');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card scroll-animate opacity-0 translate-y-4 transition-all duration-700 ease-out">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <a
              href="https://easywrite.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors duration-200"
            >
              <span className="text-3xl">✍️</span> Easywrite
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-20 px-4 text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground leading-tight">
            Anmäl ditt intresse för{" "}
            <span className="text-primary">Årskurs 2026</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Årskurs 2026 är ett årsprogram för blivande författare som vill utveckla sin skrivkonst.
            Programmet kombinerar individuell handledning, inspirerande skrivuppgifter och en stark
            gemenskap med andra deltagare som delar din passion för skrivande.
          </p>

          <Button
            onClick={() => setIsFormOpen(true)}
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Anmäl intresse
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className="py-20 px-4 bg-secondary/50 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Vad du får under året
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 scroll-animate opacity-0 translate-y-4">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-6">👥</div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Personlig redaktör och individuell feedback
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Få personlig vägledning från erfarna redaktörer som hjälper dig
                  utveckla din unika röst och förbättra dina texter.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 scroll-animate opacity-0 translate-y-4">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-6">📚</div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Skrivuppgifter och kursmoduler online
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strukturerade skrivuppgifter och kursmoduler som utmanar och
                  inspirerar dig att utveckla olika genrer och tekniker.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 scroll-animate opacity-0 translate-y-4">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-6">✨</div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Inspirationsföreläsningar och skrivgemenskap
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Delta i inspirerande föreläsningar och bygg relationer med
                  andra författare i en stöttande och kreativ miljö.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-20 px-4 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Vad tidigare deltagare säger
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 scroll-animate opacity-0 translate-y-4">
              <CardContent className="p-8">
                <div className="text-4xl mb-6 text-center">💭</div>
                <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                  "I över trettio år har jag pratat om att skriva men inte åstadkommit något.
                  Nu har jag kommit en bra bit in i min roman. Och den kommer skrivas färdigt!"
                </blockquote>
                <div className="text-right">
                  <cite className="font-semibold text-primary not-italic">– Lotta</cite>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 scroll-animate opacity-0 translate-y-4">
              <CardContent className="p-8">
                <div className="text-4xl mb-6 text-center">⭐</div>
                <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                  "Årskursen har varit otroligt givande. Att få en egen redaktör som följer hela året
                  är en fantastisk möjlighet – professionell, lyhörd och personlig feedback som har
                  vässat mitt manus och stärkt min självkänsla som skribent."
                </blockquote>
                <div className="text-right">
                  <cite className="font-semibold text-primary not-italic">– Kristina</cite>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 scroll-animate opacity-0 translate-y-4">
              <CardContent className="p-8">
                <div className="text-4xl mb-6 text-center">✨</div>
                <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                  "Mitt skrivarhantverk har blivit mycket vassare. Cecilie har en skarp blick
                  för brister och ger goda förslag."
                </blockquote>
                <div className="text-right">
                  <cite className="font-semibold text-primary not-italic">– Sten</cite>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <Card className="w-full max-w-md bg-card shadow-2xl animate-in zoom-in-95 duration-200">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">Anmäl intresse</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsFormOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                  disabled={isSubmitting}
                >
                  ✕
                </Button>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8 animate-in zoom-in-95 duration-300">
                  <div className="text-4xl mb-4">✅</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Tack för ditt intresse!</h4>
                  <p className="text-muted-foreground">Vi återkommer till dig inom kort.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Namn *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="mt-2"
                      placeholder="Ditt för- och efternamn"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">E-post *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="mt-2"
                      placeholder="din@email.se"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="mt-2"
                      placeholder="070-123 45 67"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Meddelande</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent disabled:opacity-50"
                      rows={4}
                      placeholder="Berätta lite om dig själv och dina skrivambitioner..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                  >
                    {isSubmitting ? "Skickar..." : "Skicka anmälan"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-12 px-4 scroll-animate opacity-0 translate-y-4 transition-all duration-700 ease-out">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <a
              href="https://easywrite.se"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-2xl font-bold text-primary mb-4 hover:text-primary/90 transition-colors duration-200"
            >
              <span className="text-3xl">✍️</span> Easywrite
            </a>
            <p className="text-muted-foreground">
              Din partner för skrivutveckling och författarskap
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">
              Kontakta oss på{" "}
              <a
                href="mailto:post@easywrite.se"
                className="text-primary hover:underline font-medium transition-colors duration-200"
              >
                post@easywrite.se
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Easywrite. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
