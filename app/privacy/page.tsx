import { ShieldCheck, Mail, Globe, Eye, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 space-y-8 mt-15">
      <div className="flex items-center gap-3">
        <ShieldCheck className="text-indigo-600 w-7 h-7" />
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
      </div>
      <p className="text-gray-600 text-lg">
        This Privacy Policy explains how we collect, use, and protect your
        personal information when you interact with this website.
      </p>

      {/* Section: Info Collection */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <UserCheck className="text-indigo-500" />
          <h2>Information We Collect</h2>
        </div>
        <p className="text-gray-700">
          We may collect basic personal details like your name and email via
          contact forms. We also gather anonymous data (e.g., pages visited)
          using simple analytics tools.
        </p>
      </div>

      {/* Section: Use of Info */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Mail className="text-indigo-500" />
          <h2>How We Use Your Information</h2>
        </div>
        <p className="text-gray-700">
          We use your data to respond to messages, improve the site, or share
          updates. We do not sell or share your data for advertising.
        </p>
      </div>

      {/* Section: Cookies */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Globe className="text-indigo-500" />
          <h2>Cookies</h2>
        </div>
        <p className="text-gray-700">
          Cookies help us provide a smoother experience and collect
          non-personal stats. You can turn them off in your browser settings.
        </p>
      </div>

      {/* Section: User Rights */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Eye className="text-indigo-500" />
          <h2>Your Rights</h2>
        </div>
        <p className="text-gray-700">
          You can request to view, correct, or delete your data by reaching out
          via the contact form.
        </p>
      </div>

      {/* Section: Contact */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Mail className="text-indigo-500" />
          <h2>Contact</h2>
        </div>
        <p className="text-gray-700">
          Questions about this policy? Please{" "}
          <a
            href="/contact"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            contact me
          </a>
          .
        </p>
      </div>

      <p className="text-sm text-gray-500 pt-6 border-t">
        Last updated: May 1, 2025
      </p>
    </div>
  );
}
