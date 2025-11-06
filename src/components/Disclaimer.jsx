import React from 'react'
import { ArrowLeft } from 'lucide-react'

const Disclaimer = ({ onBack }) => {
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

        {/* Disclaimer Content */}
        <div className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Kellon Disclaimer
          </h1>
          <p className="text-gray-400 mb-12">Last updated: 03/10/2025</p>

          <div className="prose prose-invert max-w-none">
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">1. General Information</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Kellon is a non-custodial, blockchain-based payment and digital asset platform developed by Kellon Digital Asset Management Limited. Our app enables users to send, receive, and swap cryptocurrencies, convert between crypto and fiat using regulated partners, and trade tokenized assets across supported markets.
                </p>
                <div className="bg-accent-500/10 border border-accent-500/20 rounded-lg p-4">
                  <p className="font-medium text-accent-300">
                    Kellon is not a bank, exchange, or financial institution. We do not hold user funds, custody assets, or provide financial advice of any kind.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">2. No Financial or Investment Advice</h2>
              <div className="text-gray-300 space-y-4">
                <p>All content on the Kellon website, app, and communications is for informational purposes only.</p>
                <p>Nothing provided by Kellon should be interpreted as:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Financial or investment advice</li>
                  <li>Legal or tax guidance</li>
                  <li>A guarantee of returns or asset stability</li>
                </ul>
                <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                  <p className="font-medium text-primary-300">
                    You are solely responsible for evaluating and managing the risks associated with your use of cryptocurrencies and digital assets.
                  </p>
                </div>
                <p className="text-sm text-gray-400">
                  If you require financial advice, please consult a licensed professional.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">3. Non-Custodial Responsibility</h2>
              <div className="text-gray-300 space-y-4">
                <p className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                  <strong className="text-primary-300">Kellon is non-custodial</strong> — meaning you fully control your wallet, private keys, and recovery phrases.
                </p>
                <p>We never store, access, or recover your keys or funds.</p>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-300 font-medium">
                    If you lose your private key or seed phrase, we cannot help you recover access to your wallet or assets.
                  </p>
                </div>
                <p className="font-medium text-accent-300">
                  You are responsible for keeping your credentials secure and backing up your recovery phrase safely.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">4. Market and Transaction Risks</h2>
              <div className="text-gray-300 space-y-4">
                <p>Cryptocurrency and tokenized assets involve high volatility and potential loss of value.</p>
                <p>Transactions on blockchain networks are irreversible and may be affected by:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Network congestion or errors</li>
                  <li>Smart contract vulnerabilities</li>
                  <li>Third-party service downtime</li>
                  <li>Exchange rate fluctuations</li>
                  <li>Regulatory or compliance actions</li>
                </ul>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-300 font-medium">
                    By using Kellon, you accept full responsibility for any risk or loss resulting from blockchain or market activity.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">5. Third-Party Services</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Kellon integrates third-party providers (such as Ramp, Transak, or MoonPay) to enable fiat transactions. These services operate under their own terms, licenses, and compliance frameworks.
                </p>
                <p>We do not control or guarantee:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>The availability, pricing, or performance of third-party APIs</li>
                  <li>KYC or identity verification outcomes</li>
                  <li>Local fiat payout timing or limits</li>
                </ul>
                <p className="text-sm text-gray-400">
                  Users are encouraged to review each provider's Privacy Policy and Terms of Service before use.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">6. Regulatory Compliance</h2>
              <div className="text-gray-300 space-y-4">
                <p>Kellon operates globally but is not available in all jurisdictions.</p>
                <p>
                  Users are responsible for ensuring their activities comply with local laws and regulations, including tax reporting and cross-border transfer restrictions.
                </p>
                <p className="font-medium text-accent-300">
                  We may restrict access to certain regions where crypto transactions or fiat conversions are prohibited or limited by law.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">7. Limitation of Liability</h2>
              <div className="text-gray-300 space-y-4">
                <p>Kellon, its founders, employees, and affiliates shall not be held liable for:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Any direct or indirect loss of funds</li>
                  <li>Errors, delays, or network failures</li>
                  <li>Third-party service issues or system downtime</li>
                  <li>Misuse or mismanagement of private keys</li>
                </ul>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-300 font-bold text-lg">
                    Use of the Kellon platform is entirely at your own risk.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">8. Contact</h2>
              <div className="text-gray-300 space-y-4">
                <p>If you have questions about this Disclaimer or our policies, please contact us at:</p>
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

export default Disclaimer