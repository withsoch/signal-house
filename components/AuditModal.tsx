"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuditModal } from "@/context/AuditModalContext";

type FormData = {
  firstName: string;
  linkedInUrl: string;
  email: string;
  roleCompany: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormData, string>>;

export function AuditModal() {
  const { isOpen, closeModal } = useAuditModal();
  const router = useRouter();
  const backdropRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    linkedInUrl: "",
    email: "",
    roleCompany: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setForm({ firstName: "", linkedInUrl: "", email: "", roleCompany: "", consent: false });
      setErrors({});
      setSubmitting(false);
      setSubmitError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  function validate(): Errors {
    const e: Errors = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.linkedInUrl.trim()) e.linkedInUrl = "LinkedIn profile URL is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("https://sochconsulting.app.n8n.cloud/webhook/sochcatalystlinkedinaudit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          email: form.email,
          linkedInProfileURL: form.linkedInUrl,
          roleInBusiness: form.roleCompany,
          timestamp: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        closeModal();
        router.push("/confirmation");
      } else {
        setSubmitError("Something went wrong. Please email us at umair@withsignalhouse.com");
      }
    } catch {
      setSubmitError("Something went wrong. Please email us at umair@withsignalhouse.com");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onMouseDown={(e) => { if (e.target === backdropRef.current) closeModal(); }}
    >
      <div
        className="relative w-full max-w-[520px] max-h-[90vh] overflow-y-auto rounded-xl bg-white"
        style={{ boxShadow: "0 24px 64px -12px rgba(20,30,25,0.35)" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-modal-title"
      >
        {/* Close */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/8 text-ink transition-colors hover:bg-black/15"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 2l10 10M12 2L2 12" />
          </svg>
        </button>

        <div className="px-6 pb-8 pt-10 sm:px-8">
          <>
            <h2 id="audit-modal-title" className="font-display text-[1.55rem] font-semibold leading-snug text-ink">
              Get Your{" "}
              <span className="text-brand">Free LinkedIn Audit</span>{" "}
              Within 24 hours!
            </h2>
            <p className="mt-3 text-sm italic leading-relaxed text-slate">
              Drop your profile link below. I will review it personally and send you the full breakdown within 24 hours.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                {/* First Name */}
                <div>
                  <label htmlFor="audit-first-name" className="block text-sm font-semibold text-ink">
                    First Name <span aria-hidden="true" className="text-brand">*</span>
                  </label>
                  <input
                    id="audit-first-name"
                    type="text"
                    placeholder="First Name"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, firstName: e.target.value }));
                      if (errors.firstName) setErrors((er) => ({ ...er, firstName: undefined }));
                    }}
                    className={`mt-1.5 w-full rounded-lg border px-4 py-3 text-sm text-ink placeholder:text-muted outline-none transition-colors focus:border-brand/60 focus:ring-2 focus:ring-brand/15 ${errors.firstName ? "border-red-400 bg-red-50/40" : "border-line bg-white"}`}
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                </div>

                {/* LinkedIn URL */}
                <div>
                  <label htmlFor="audit-linkedin-url" className="block text-sm font-semibold text-ink">
                    LinkedIn Profile URL <span aria-hidden="true" className="text-brand">*</span>
                  </label>
                  <input
                    id="audit-linkedin-url"
                    type="url"
                    placeholder="Web URL goes here"
                    value={form.linkedInUrl}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, linkedInUrl: e.target.value }));
                      if (errors.linkedInUrl) setErrors((er) => ({ ...er, linkedInUrl: undefined }));
                    }}
                    className={`mt-1.5 w-full rounded-lg border px-4 py-3 text-sm text-ink placeholder:text-muted outline-none transition-colors focus:border-brand/60 focus:ring-2 focus:ring-brand/15 ${errors.linkedInUrl ? "border-red-400 bg-red-50/40" : "border-line bg-white"}`}
                  />
                  {errors.linkedInUrl && <p className="mt-1 text-xs text-red-500">{errors.linkedInUrl}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="audit-email" className="block text-sm font-semibold text-ink">
                    Email <span aria-hidden="true" className="text-brand">*</span>
                  </label>
                  <div className="relative mt-1.5">
                    <svg
                      className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 7 10-7" />
                    </svg>
                    <input
                      id="audit-email"
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, email: e.target.value }));
                        if (errors.email) setErrors((er) => ({ ...er, email: undefined }));
                      }}
                      className={`w-full rounded-lg border py-3 pl-10 pr-4 text-sm text-ink placeholder:text-muted outline-none transition-colors focus:border-brand/60 focus:ring-2 focus:ring-brand/15 ${errors.email ? "border-red-400 bg-red-50/40" : "border-line bg-white"}`}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Role & Company */}
                <div>
                  <label htmlFor="audit-role" className="block text-sm font-semibold text-ink">
                    Your Role &amp; Company
                  </label>
                  <input
                    id="audit-role"
                    type="text"
                    placeholder="Your Role & Company"
                    value={form.roleCompany}
                    onChange={(e) => setForm((f) => ({ ...f, roleCompany: e.target.value }))}
                    className="mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted outline-none transition-colors focus:border-brand/60 focus:ring-2 focus:ring-brand/15"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3 rounded-lg border border-line bg-cream p-3.5">
                  <input
                    id="audit-consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-line accent-brand"
                  />
                  <label htmlFor="audit-consent" className="cursor-pointer text-xs leading-relaxed text-slate">
                    By checking this box, I consent to receive communications from{" "}
                    <span className="font-semibold text-ink">Signal House</span> about LinkedIn Audit,
                    Strategy Call booking and other relevant updates.
                  </label>
                </div>

                {/* Submit */}
                {submitError && (
                  <p className="text-xs text-red-500">{submitError}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-1 w-full rounded-lg bg-brand py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark active:bg-brand-deep disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send My Profile →"}
                </button>
            </form>
          </>
        </div>
      </div>
    </div>
  );
}
