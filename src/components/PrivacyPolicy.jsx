import React from 'react'
import { ArrowLeft } from 'lucide-react'

const PrivacyPolicy = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-accent-900 to-primary-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        {/* Privacy Policy Content */}
        <div className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Kellon Privacy Policy
          </h1>
          <p className="text-gray-400 mb-12">Last updated: 3/10/2025</p>

          <div className="prose prose-invert max-w-none">
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
              <div className="text-gray-300 space-y-4">
                <p>Welcome to Kellon ("we," "our," "us").</p>
                <p>
                  Kellon is a cross-border payment and digital asset platform designed to help users send, receive, and swap crypto, access fiat payouts, and purchase tokenized assets globally — while maintaining full ownership of their private keys.
                </p>
                <p>
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website, mobile app, and related services (collectively, the "Services").
                </p>
                <p className="font-medium text-primary-300">
                  By using Kellon, you agree to this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">2. Information We Collect</h2>
              <div className="text-gray-300 space-y-4">
                <p>We collect limited data to deliver and improve our services. Depending on how you use Kellon, we may collect:</p>
                
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-3">a. Information You Provide</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Contact details (e.g., name, email, phone number) when you sign up or contact support.</li>
                    <li>KYC information (if required by fiat on/off-ramp partners for compliance).</li>
                    <li>Transaction details (amount, time, blockchain addresses) related to your use of Kellon.</li>
                  </ul>
                </div>

                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-3">b. Automatically Collected Information</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Device and usage data, such as IP address, browser type, OS, and interaction logs for analytics and security.</li>
                    <li>Cookies and similar technologies to improve performance and user experience on our website.</li>
                  </ul>
                </div>

                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-3">c. Third-Party Information</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>When using integrated services (e.g., Ramp, Transak, MoonPay), those providers may share verification or transaction status with us as needed for functionality and compliance.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">3. Non-Custodial Wallet and User Control</h2>
              <div className="text-gray-300 space-y-4">
                <p className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                  <strong className="text-primary-300">Kellon is a non-custodial wallet</strong> — meaning you, and only you, control your private keys and assets.
                </p>
                <p>We never store or access your private keys, seed phrases, or wallet balances. All transactions occur directly on-chain.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">4. How We Use Your Information</h2>
              <div className="text-gray-300 space-y-4">
                <p>We use the limited data we collect to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Operate and improve Kellon's services and user experience</li>
                  <li>Facilitate crypto-to-fiat and fiat-to-crypto transactions</li>
                  <li>Verify identity (via third-party KYC providers when required)</li>
                  <li>Detect and prevent fraud, abuse, or unauthorized activity</li>
                  <li>Comply with legal obligations (AML, CFT, data protection)</li>
                  <li>Provide customer support and respond to inquiries</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">5. Sharing of Information</h2>
              <div className="text-gray-300 space-y-4">
                <p className="font-medium text-accent-300">We do not sell or rent your personal data.</p>
                <p>We may share limited information with:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Regulated financial partners (e.g., on/off-ramp providers) for transaction processing</li>
                  <li>Compliance providers for KYC/AML verification</li>
                  <li>Analytics and infrastructure providers (e.g., hosting, security, error tracking) under strict confidentiality</li>
                  <li>Regulators or law enforcement when legally required</li>
                </ul>
                <p className="text-sm text-gray-400">All third parties are bound by confidentiality and data protection obligations.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">6. Data Security</h2>
              <div className="text-gray-300 space-y-4">
                <p>We employ industry-standard security measures, including encryption, secure servers, and limited data access.</p>
                <p>However, since blockchain transactions are public, information tied to your wallet address may be visible on-chain.</p>
                <p className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-300">
                  <strong>Important:</strong> Kellon will never ask for your private keys or recovery phrase. Protect them securely at all times.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">7. Data Retention</h2>
              <div className="text-gray-300 space-y-4">
                <p>We retain personal data only as long as necessary to fulfill the purposes stated in this Policy or as required by law.</p>
                <p>Blockchain transaction data is immutable and permanently stored on the blockchain.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">8. Your Rights</h2>
              <div className="text-gray-300 space-y-4">
                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Access, correct, or delete your personal information</li>
                  <li>Withdraw consent where applicable</li>
                  <li>Request data portability</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
                <p>You can contact us to exercise these rights at <a href="mailto:contact@kellon.xyz" className="text-primary-400 hover:text-primary-300">contact@kellon.xyz</a>.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">9. International Transfers</h2>
              <div className="text-gray-300 space-y-4">
                <p>As a global platform, your data may be processed in multiple jurisdictions.</p>
                <p>We ensure all transfers comply with applicable data protection laws and use appropriate safeguards.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">10. Third-Party Links</h2>
              <div className="text-gray-300 space-y-4">
                <p>Our website and app may link to external services (e.g., payment partners, exchanges).</p>
                <p>We are not responsible for their privacy practices. Review their policies before sharing personal data.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">11. Updates to This Policy</h2>
              <div className="text-gray-300 space-y-4">
                <p>We may update this Privacy Policy periodically to reflect legal, technical, or business changes.</p>
                <p>Updates will be posted here with a revised "Last updated" date.</p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">12. Contact Us</h2>
              <div className="text-gray-300 space-y-4">
                <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                <div className="bg-white/5 rounded-lg p-4 space-y-2">
                  <p>📧 <a href="mailto:contact@kellon.xyz" className="text-primary-400 hover:text-primary-300">contact@kellon.xyz</a></p>
                  <p>🌐 <a href="https://kellon.xyz" className="text-primary-400 hover:text-primary-300">https://kellon.xyz</a></p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy