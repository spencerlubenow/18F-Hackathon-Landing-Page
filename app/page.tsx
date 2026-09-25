'use client';

import { useState } from 'react';
import content from '../data/content.json';
const SITE_PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD || 'goldenpear';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-gray-50 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Decorative blurred elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-200 to-blue-200 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-slate-200 to-gray-300 rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>

        <div className="w-full max-w-md relative z-10">
          {/* Decorative top line */}
          <div className="mb-12">
            <div className="h-1 w-16 bg-gradient-to-r from-slate-700 to-slate-500 rounded-full mb-8"></div>
            <h1 className="text-5xl font-bold text-gray-900 mb-3">
              {content.auth.loginTitle}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {content.auth.loginSubtitle}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800 mb-3 tracking-wide">
                {content.auth.passwordLabel}
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={content.auth.passwordPlaceholder}
                autoFocus
                className="w-full px-6 py-4 bg-white bg-opacity-90 backdrop-blur-sm border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all shadow-sm hover:shadow-md text-gray-800 placeholder-gray-400"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl transform duration-200"
            >
              {content.auth.submitButton}
            </button>
          </form>

          {/* Decorative footer text */}
          <p className="text-center text-gray-500 text-xs mt-10 tracking-wide">
            Enter your exclusive access code
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">{content.header.title}</h1>
          <p className="text-xl text-gray-600">
            {content.header.description}
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-6xl mx-auto px-4 py-4 flex gap-8 overflow-x-auto">
          {content.navigation.map((item, idx) => (
            <a key={idx} href={item.href} className="text-gray-700 hover:text-slate-900 font-medium whitespace-nowrap transition-colors">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* Format Section */}
        <section id="format" className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">{content.format.title}</h2>
          <p className="text-xl text-gray-600 mb-12">
            {content.format.description}
          </p>
          <div className="space-y-6">
            {content.format.timeline.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-slate-700 text-white font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm font-semibold text-gray-600 mb-1">
                      {item.time}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">{content.education.title}</h2>

          {/* Celonis 101 Subsection */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">{content.education.celonis101.title}</h3>
            <div className="bg-slate-50 rounded-lg p-8 mb-8 border border-slate-200">
              <iframe
                width="100%"
                height="400"
                src={content.education.celonis101.videoUrl}
                allowFullScreen
                className="rounded-lg mb-8"
              />
              <div className="prose prose-sm max-w-none">
                {content.education.celonis101.description.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-4 leading-relaxed whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Process Orchestration & Automation Subsection */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">{content.education.processOrchestration.title}</h3>
            <div className="bg-slate-50 rounded-lg p-8 mb-8 border border-slate-200">
              <div className="prose prose-sm max-w-none mb-8">
                {content.education.processOrchestration.intro.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-4 leading-relaxed whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Action Flows Subsection */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{content.education.processOrchestration.actionFlows.title}</h4>
                <p className="text-gray-700 mb-4 font-medium">{content.education.processOrchestration.actionFlows.intro}</p>
                <ul className="space-y-3 mb-6">
                  {content.education.processOrchestration.actionFlows.questions.map((question, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-indigo-600 font-bold mt-1">•</span>
                      <span className="text-gray-700">{question}</span>
                    </li>
                  ))}
                </ul>
                <div className="prose prose-sm max-w-none mb-6">
                  {content.education.processOrchestration.actionFlows.conclusion.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 mb-4 leading-relaxed whitespace-pre-wrap">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {content.education.processOrchestration.actionFlows.videoUrl && (
  <video
    width="100%"
    height="auto"
    controls
    className="rounded-lg mb-8"
    style={{ maxHeight: '500px' }}
  >
    <source
      src={content.education.processOrchestration.actionFlows.videoUrl}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
)}
              </div>

              {/* Order Management Subsection */}
              <div className="mt-12">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{content.education.processOrchestration.orderManagement.title}</h4>
                <p className="text-gray-700 mb-10 text-lg">{content.education.processOrchestration.orderManagement.intro}</p>
                <div className="grid grid-cols-1 gap-6">
                  {content.education.processOrchestration.orderManagement.useCases.map((useCase, idx) => (
                    <div key={idx} className="bg-white border border-slate-300 rounded-lg p-8 hover:shadow-lg transition-shadow">
                      <div className="flex gap-6 mb-6">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-slate-700 text-white font-bold text-lg shadow-md">
                            {useCase.number}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h5 className="text-xl font-bold text-gray-900">{useCase.title}</h5>
                        </div>
                      </div>
                      <div className="space-y-3 pl-20">
                        {useCase.opportunities.map((opportunity, oppIdx) => (
                          <div key={oppIdx} className="flex gap-3">
                            <span className="text-slate-700 font-bold text-lg mt-0.5 flex-shrink-0">»</span>
                            <span className="text-gray-700 leading-relaxed text-base">{opportunity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Submit Ideas Section */}
        <section id="submit-ideas" className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">{content.submitIdeas.title}</h2>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-12">
            <p className="text-gray-700 mb-8 text-lg">
              {content.submitIdeas.description}
            </p>

            {/* Google Form Embed Info */}
            {content.submitIdeas.googleForm.enabled && (
              <div className="mb-12 bg-white border border-slate-300 rounded-lg p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{content.submitIdeas.googleForm.title}</h3>
                <p className="text-gray-600 mb-4">
                  {content.submitIdeas.googleForm.description}
                </p>
                {content.submitIdeas.googleForm.embedUrl ? (
                  <iframe
                    src={content.submitIdeas.googleForm.embedUrl}
                    width="100%"
                    height="500"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded"
                  >
                    Loading…
                  </iframe>
                ) : (
                  <div className="bg-slate-100 rounded p-12 text-center text-slate-600">
                    [Google Form will appear here once URL is added to content.json]
                  </div>
                )}
              </div>
            )}

          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">{content.faq.title}</h2>
          <div className="space-y-4">

            {content.faq.items.map((item, idx) => (
              <details key={idx} className="bg-white border border-slate-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900">
                  {item.question}
                </summary>
                <p className="text-gray-600 mt-4">
                  {item.answer}
                </p>
              </details>
            ))}

          </div>
        </section>

        {/* Contacts Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">{content.contacts.title}</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-12">
            <p className="text-gray-700 mb-8 text-lg">
              {content.contacts.description}
            </p>
            <div className="space-y-4">
              {content.contacts.items.map((contact, idx) => (
                <div key={idx} className="bg-white border border-slate-300 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.name}</h3>
                  {contact.email && (
                    <a href={`mailto:${contact.email}`} className="text-indigo-600 hover:text-indigo-700 font-medium">
                      {contact.email}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-sm">&copy; {content.footer.copyright}</p>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-sm text-gray-600 hover:text-slate-900 font-medium transition-colors"
            >
              {content.footer.logoutText}
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
