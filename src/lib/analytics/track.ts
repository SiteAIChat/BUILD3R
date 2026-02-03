export type AnalyticsEvent =
  | "estimator_start"
  | "estimator_complete"
  | "book_call_click"
  | "case_view";

export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  (window as any).dataLayer = (window as any).dataLayer ?? [];
  (window as any).dataLayer.push({ event, ...payload });

  if (import.meta.env.DEV) {
    console.debug(`[track] ${event}`, payload);
  }
}
