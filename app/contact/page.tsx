import { ShieldCheck, Mail, Globe, Eye, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-8 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <ShieldCheck className="mx-auto text-indigo-600 w-12 h-12 mb-4" />
        <h1 className="text-4xl font-semibold text-gray-900">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mt-2">
          Your privacy is important to us. This Privacy Policy outlines how we
          collect, use, and protect your personal data.
        </p>
      </div>

      {/* Section: Information Collection */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <UserCheck className="text-indigo-600 w-8 h-8" />
          <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
        </div>
        <p className="text-gray-700">
          We collect personal information you provide to us, such as your name,
          email address, and any other information you submit through contact forms
          or inquiries. We also collect usage data, such as your IP address, browser
          type, and pages visited for analytical purposes.
        </p>
      </section>

      {/* Section: How We Use Your Information */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Mail className="text-indigo-600 w-8 h-8" />
          <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
        </div>
        <p className="text-gray-700">
          We use your data to respond to inquiries, provide customer support, and
          improve our services. Additionally, your information may be used for
          internal purposes, including analytics and marketing communications. We
          do not share or sell your data to third parties.
        </p>
      </section>

      {/* Section: Cookies */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Globe className="text-indigo-600 w-8 h-8" />
          <h2 className="text-2xl font-semibold text-gray-900">Cookies</h2>
        </div>
        <p className="text-gray-700">
          Our website uses cookies to enhance user experience, track visitors' interactions,
          and improve the quality of our services. You have the option to disable cookies
          through your browser settings, though this may affect your experience on the site.
        </p>
      </section>

      {/* Section: Your Rights */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Eye className="text-indigo-600 w-8 h-8" />
          <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
        </div>
        <p className="text-gray-700">
          You have the right to access, update, or request the deletion of your personal
          information. To exercise these rights, please contact us through the provided
          contact channels.
        </p>
      </section>

      {/* Section: Contact */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Mail className="text-indigo-600 w-8 h-8" />
          <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
        </div>
        <p className="text-gray-700">
          If you have any questions regarding our Privacy Policy or wish to exercise
          your rights, please{" "}
          <a
            href="/contact"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            contact us
          </a>
          .
        </p>
      </section>

      <footer className="pt-6 text-center">
        <p className="text-sm text-gray-500">
          Last updated: May 1, 2025
        </p>
      </footer>
    </div>
  );
}
