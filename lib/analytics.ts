export type AnalyticsPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, payload);
  }

  window.dispatchEvent(
    new CustomEvent("elrojo:analytics", {
      detail: { eventName, payload, ts: new Date().toISOString() },
    }),
  );
}
