import { track } from "@vercel/analytics";

export type ContactMethod = "email_link" | "contact_form" | "social" | "cv_download" | "mesolab_link";

export function trackSectionView(section: string) {
  track("section_viewed", { section });
}

// The conversion event: every route a visitor can take to reach out.
export function trackContactIntent(method: ContactMethod, detail?: string) {
  track("contact_intent", detail ? { method, detail } : { method });
}
