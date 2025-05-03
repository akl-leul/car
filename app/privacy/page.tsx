'use client';

import { ShieldCheck, Mail, Cookie, Scale, UserCheck, BadgeInfo } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-10 mt-12 mb-10 shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-3">
        <ShieldCheck className="text-indigo-600 w-8 h-8" />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
      </div>
      <p className="text-gray-600 text-lg">
        This Privacy Policy explains how we collect, use, and protect your personal information when you interact with this website.
      </p>

      {/* Info Collection */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <UserCheck className="text-indigo-500 w-6 h-6" />
          <h2>Information We Collect</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 ml-2">
          <li>Personal details like your name and email (via contact forms).</li>
          <li>Anonymous analytics data (pages visited, device type, etc.).</li>
        </ul>
      </section>

      {/* Use of Info */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <BadgeInfo className="text-indigo-500 w-6 h-6" />
          <h2>How We Use Your Information</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 ml-2">
          <li>To respond to your messages and inquiries.</li>
          <li>To improve the website and user experience.</li>
          <li>To send updates if you have opted in.</li>
          <li>We do <span className="font-semibold text-indigo-600">not</span> sell or share your data for advertising.</li>
        </ul>
      </section>

      {/* Cookies */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Cookie className="text-indigo-500 w-6 h-6" />
          <h2>Cookies</h2>
        </div>
        <p className="text-gray-700">
          Cookies help us provide a smoother experience and collect non-personal stats. You can disable cookies in your browser settings at any time.
        </p>
      </section>

      {/* User Rights */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Scale className="text-indigo-500 w-6 h-6" />
          <h2>Your Rights</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 ml-2">
          <li>Request to view, correct, or delete your data at any time.</li>
          <li>Contact us for any privacy-related questions or requests.</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Mail className="text-indigo-500 w-6 h-6" />
          <h2>Contact</h2>
        </div>
        <p className="text-gray-700">
          Questions about this policy? Please{" "}
          <a
            href="/contact"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            contact us
          </a>
          .
        </p>
      </section>

      <p className="text-sm text-gray-500 pt-8 border-t">
        Last updated: May 2, 2025
      </p>
    </div>
  );
}
