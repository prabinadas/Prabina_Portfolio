// 'use client';

// import { useState } from 'react';
// import { contactInfo } from '@/data';
// import {
//   IconUser,
//   IconMail,
//   IconPhone,
//   IconMessage2,
//   IconMessageDots,
//   IconSend2,
//   IconMapPin,
//   IconBrandGithub,
//   IconBrandLinkedin,
//   IconFileCv,
//   IconCircleCheckFilled,
// } from '@tabler/icons-react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//       setIsSubmitted(true);

//       setTimeout(() => {
//         setFormData({
//           name: '',
//           email: '',
//           subject: '',
//           message: '',
//         });
//         setIsSubmitted(false);
//       }, 2000);
//     }, 2000);
//   };

//   const contactCards = [
//     {
//       icon: IconMail,
//       label: 'Email',
//       value: contactInfo.email,
//       href: `mailto:${contactInfo.email}`,
//     },
//     {
//       icon: IconPhone,
//       label: 'Phone',
//       value: '+91 9040567146',
//       href: 'tel:+919040567146',
//     },
//     {
//       icon: IconMapPin,
//       label: 'Location',
//       value: contactInfo.location,
//       href: '#',
//     },
//     {
//       icon: IconBrandGithub,
//       label: 'GitHub',
//       value: '@prabinadas',
//       href: contactInfo.github,
//       target: '_blank',
//     },
//     {
//       icon: IconBrandLinkedin,
//       label: 'LinkedIn',
//       value: '/in/prabinadas',
//       href: contactInfo.linkedin,
//       target: '_blank',
//     },
//     {
//       icon: IconFileCv,
//       label: 'Resume',
//       value: 'Download CV',
//       href: '#',
//     },
//   ];

//   return (
//     <section id="contact" className="relative min-h-screen bg-white px-4 py-20 sm:px-8 md:px-12 lg:px-16">
//       <div className="mx-auto max-w-7xl">
//         <div className="mb-20">
//           <h2 className="reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black">
//             Get in Touch
//           </h2>
//           <p className="reveal delay-1 mt-6 text-base sm:text-lg font-light text-gray-600">
//             Let's build something exceptional together
//           </p>
//         </div>

//         <div className="grid gap-16 lg:grid-cols-2">
//           <div className="space-y-8">
//             <div className="space-y-6">
//               <p className="reveal delay-2 text-base sm:text-lg font-light leading-relaxed text-gray-600">
//                 I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out.
//               </p>

//               <div className="grid gap-4 pt-8 sm:grid-cols-2">
//                 {contactCards.map((card, index) => {
//                   const IconComponent = card.icon;
//                   return (
//                     <a
//                       key={index}
//                       href={card.href}
//                       target={card.target || '_self'}
//                       rel={card.target === '_blank' ? 'noopener noreferrer' : ''}
//                       className="reveal group"
//                       style={{ animationDelay: `${200 + index * 100}ms` }}
//                     >
//                       <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white px-4 py-5 transition-all duration-300 hover:border-black hover:shadow-sm">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 transition-all duration-300 group-hover:bg-black group-hover:text-white">
//                             <IconComponent size={16} />
//                           </div>
//                           <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
//                             {card.label}
//                           </span>
//                         </div>
//                         <p className="text-sm font-light text-gray-900 transition-colors duration-300 group-hover:text-black">
//                           {card.value}
//                         </p>
//                       </div>
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="reveal delay-5 mt-12 flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-4">
//               <IconCircleCheckFilled size={20} className="text-green-500" />
//               <div className="flex-1">
//                 <p className="text-sm font-light text-gray-700">
//                   Available for freelance and full-time opportunities.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="reveal delay-3">
//             <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
//               {isSubmitted && (
//                 <div className="mb-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3">
//                   <IconCircleCheckFilled size={20} className="text-green-600" />
//                   <p className="text-sm font-light text-green-900">
//                     Message sent successfully.
//                   </p>
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-gray-700">
//                     Full Name
//                   </label>
//                   <div className="relative mt-3">
//                     <IconUser
//                       size={16}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                     />
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       autoComplete="name"
//                       aria-label="Full Name"
//                       placeholder="Your name"
//                       className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm font-light text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-black focus:outline-none focus:ring-0"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-gray-700">
//                     Email Address
//                   </label>
//                   <div className="relative mt-3">
//                     <IconMail
//                       size={16}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                     />
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       autoComplete="email"
//                       aria-label="Email Address"
//                       placeholder="your.email@example.com"
//                       className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm font-light text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-black focus:outline-none focus:ring-0"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wide text-gray-700">
//                     Subject
//                   </label>
//                   <div className="relative mt-3">
//                     <IconMessageDots
//                       size={16}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                     />
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       autoComplete="off"
//                       aria-label="Subject"
//                       placeholder="What is this about?"
//                       className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm font-light text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-black focus:outline-none focus:ring-0"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-gray-700">
//                     Message
//                   </label>
//                   <div className="relative mt-3">
//                     <IconMessage2
//                       size={16}
//                       className="absolute left-4 top-4 text-gray-400"
//                     />
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       aria-label="Message"
//                       placeholder="Tell me more about your project..."
//                       rows="5"
//                       className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm font-light text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-black focus:outline-none focus:ring-0"
//                     />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isLoading || isSubmitted}
//                   aria-label="Send message"
//                   className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-black py-3 px-6 font-light text-white transition-all duration-300 hover:bg-gray-900 disabled:opacity-70"
//                 >
//                   <IconSend2 size={16} />
//                   <span className="text-sm">
//                     {isLoading ? 'Sending...' : isSubmitted ? 'Sent' : 'Send Message'}
//                   </span>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState, useEffect, useRef } from 'react';
import { contactInfo } from '@/data';
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMessage2,
  IconMessageDots,
  IconSend2,
  IconMapPin,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconCircleCheckFilled,
  IconX,
  IconAlertCircle,
} from '@tabler/icons-react';

// ─── Modal wrapper so the form can be opened from a "Hire Me" button anywhere ───
// Usage from any component:
//   import { openContactModal } from '@/components/Contact';
//   <button onClick={openContactModal}>Hire Me</button>
let _openModal = null;
export const openContactModal = () => _openModal?.();

// ─── Shared form logic ────────────────────────────────────────────────────────
function ContactForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      onSuccess?.();
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err.message || 'Failed to send. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    'w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm font-light text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-black focus:outline-none focus:ring-0';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
          <IconAlertCircle size={18} className="shrink-0 text-red-500" />
          <p className="text-sm font-light text-red-800">{error}</p>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-gray-700">
          Full Name
        </label>
        <div className="relative mt-3">
          <IconUser size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text" id="name" name="name"
            value={formData.name} onChange={handleChange}
            required autoComplete="name" placeholder="Your name"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-gray-700">
          Email Address
        </label>
        <div className="relative mt-3">
          <IconMail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email" id="email" name="email"
            value={formData.email} onChange={handleChange}
            required autoComplete="email" placeholder="your.email@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wide text-gray-700">
          Subject
        </label>
        <div className="relative mt-3">
          <IconMessageDots size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text" id="subject" name="subject"
            value={formData.subject} onChange={handleChange}
            required autoComplete="off" placeholder="What is this about?"
            className={inputClass}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-gray-700">
          Message
        </label>
        <div className="relative mt-3">
          <IconMessage2 size={16} className="absolute left-4 top-4 text-gray-400" />
          <textarea
            id="message" name="message"
            value={formData.message} onChange={handleChange}
            required placeholder="Tell me more about your project..."
            rows={5}
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        aria-label="Send message"
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-black py-3 px-6 font-light text-white transition-all duration-300 hover:bg-gray-900 disabled:opacity-70"
      >
        <IconSend2 size={16} />
        <span className="text-sm">{isLoading ? 'Sending…' : 'Send Message'}</span>
      </button>
    </form>
  );
}

// ─── Hire Me Modal ────────────────────────────────────────────────────────────
function HireModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const overlayRef = useRef(null);

  // Register the open function so external buttons can trigger it
  useEffect(() => {
    _openModal = () => {
      setIsOpen(true);
      setIsSubmitted(false);
    };
    return () => { _openModal = null; };
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) setIsOpen(false); }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl">
        {/* Modal header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-8 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Hire Me</p>
            <h2 className="mt-0.5 text-lg font-semibold text-black">Let's work together</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition hover:border-black hover:text-black"
            aria-label="Close"
          >
            <IconX size={16} />
          </button>
        </div>

        <div className="px-8 py-6">
          {isSubmitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                <IconCircleCheckFilled size={28} className="text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-black">Message Sent!</h3>
              <p className="mt-2 text-sm font-light text-gray-500">
                Thanks for reaching out. I'll get back to you within 24–48 hours.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-8 rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-light text-black transition hover:border-black"
              >
                Close
              </button>
            </div>
          ) : (
            <ContactForm onSuccess={() => setIsSubmitted(true)} />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Contact Section ─────────────────────────────────────────────────────
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactCards = [
    {
      icon: IconMail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: IconPhone,
      label: 'Phone',
      value: '+91 9040567146',
      href: 'tel:+919040567146',
    },
    {
      icon: IconMapPin,
      label: 'Location',
      value: contactInfo.location,
      href: '#',
    },
    {
      icon: IconBrandGithub,
      label: 'GitHub',
      value: '@prabinadas',
      href: contactInfo.github,
      target: '_blank',
    },
    {
      icon: IconBrandLinkedin,
      label: 'LinkedIn',
      value: '/in/prabinadas',
      href: contactInfo.linkedin,
      target: '_blank',
    },
    {
      icon: IconFileCv,
      label: 'Resume',
      value: 'Download CV',
      href: '#',
    },
  ];

  return (
    <>
      {/* Global modal — rendered once, triggered from anywhere */}
      <HireModal />

      <section id="contact" className="relative min-h-screen bg-white px-4 py-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <h2 className="reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black">
              Get in Touch
            </h2>
            <p className="reveal delay-1 mt-6 text-base sm:text-lg font-light text-gray-600">
              Let's build something exceptional together
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left column */}
            <div className="space-y-8">
              <p className="reveal delay-2 text-base sm:text-lg font-light leading-relaxed text-gray-600">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out.
              </p>

              <div className="grid gap-4 pt-8 sm:grid-cols-2">
                {contactCards.map((card, index) => {
                  const IconComponent = card.icon;
                  return (
                    <a
                      key={index}
                      href={card.href}
                      target={card.target || '_self'}
                      rel={card.target === '_blank' ? 'noopener noreferrer' : ''}
                      className="reveal group"
                      style={{ animationDelay: `${200 + index * 100}ms` }}
                    >
                      <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white px-4 py-5 transition-all duration-300 hover:border-black hover:shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                            <IconComponent size={16} />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                            {card.label}
                          </span>
                        </div>
                        <p className="text-sm font-light text-gray-900 transition-colors duration-300 group-hover:text-black">
                          {card.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="reveal delay-5 mt-12 flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-4">
                <IconCircleCheckFilled size={20} className="text-green-500" />
                <p className="text-sm font-light text-gray-700">
                  Available for freelance and full-time opportunities.
                </p>
              </div>
            </div>

            {/* Right column — inline contact form */}
            <div className="reveal delay-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
                {isSubmitted ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                      <IconCircleCheckFilled size={28} className="text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-black">Message Sent!</h3>
                    <p className="mt-2 text-sm font-light text-gray-500">
                      Thanks for reaching out. I'll reply within 24–48 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-light text-black transition hover:border-black"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <ContactForm onSuccess={() => setIsSubmitted(true)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}