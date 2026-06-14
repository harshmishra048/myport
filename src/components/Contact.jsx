import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { profile } from '../data/portfolio.js';

const contactCards = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}`, icon: Phone },
  { label: 'LinkedIn', value: 'linkedin.com/in/mishraharsh4353', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'github.com/harshmishra048', href: profile.github, icon: Github },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formData.get('subject') || 'Portfolio inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
    setSent(true);
  };

  return (
    <section id="contact" className="site-section contact-section">
      <div className="section-container">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something impactful together."
          description="Reach out for internships, freelance projects, product builds, AI ideas, or design-led engineering collaborations."
        />

        <div className="contact-grid">
          <Reveal className="contact-panel">
            <h3>Start a conversation</h3>
            <p>
              Send a quick brief and Harsh can follow up with the right questions, direction, and next steps for the work.
            </p>
            <div className="contact-cards">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <a key={card.label} href={card.href} target={card.label === 'Email' || card.label === 'Phone' ? undefined : '_blank'} rel="noreferrer">
                    <Icon size={18} />
                    <span>
                      <strong>{card.label}</strong>
                      {card.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="contact-form-shell" delay={0.1}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>
              <label>
                <span>Subject</span>
                <input name="subject" type="text" placeholder="Project, internship, or collaboration" required />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Tell me what you want to build..." required />
              </label>
              <button type="submit">
                Send Message
                <Send size={18} />
              </button>
              {sent ? <p className="form-note">Your email client is opening with the message prepared.</p> : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
