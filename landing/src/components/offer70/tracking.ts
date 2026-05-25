// Re-export from the shared analytics module so both the offer70 pages and
// the AI Revenue Studio pages use one implementation.
export { trackEvent, type OfferEventName } from '@/lib/analytics';
