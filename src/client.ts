/**
 * @module voltlog-io/client
 *
 * Browser-safe entry point — excludes Node.js-only transports and middleware.
 *
 * Use this import in client-side code (React, Next.js client components, etc.):
 * ```ts
 * import { createLogger, consoleTransport } from 'voltlog-io/client';
 * ```
 *
 * Excluded (Node.js-only):
 * - fileTransport          (node:fs, node:path)
 * - jsonStreamTransport    (NodeJS.WritableStream)
 * - asyncContextMiddleware (node:async_hooks)
 * - correlationIdMiddleware(node:crypto)
 * - redisTransport         (server-only Redis client)
 */

// ─── Level Utilities ─────────────────────────────────────────────
export { resolveLevel, shouldIncludeStack, shouldLog } from "./core/levels.js";
// ─── Core ────────────────────────────────────────────────────────
export { createLogger } from "./core/logger.js";
// ─── Types ───────────────────────────────────────────────────────
export {
  type AlertRule,
  type LogEntry,
  type LogError,
  type Logger,
  type LoggerOptions,
  LogLevel,
  type LogLevelName,
  LogLevelNameMap,
  type LogLevelValue,
  LogLevelValueMap,
  type LogMiddleware,
  type OcppExchangeMeta,
  type TimerResult,
  type Transport,
} from "./core/types.js";
// ─── Middleware (browser-safe) ───────────────────────────────────
export {
  type AiEnrichmentOptions,
  aiEnrichmentMiddleware,
  createOpenAiErrorAnalyzer,
} from "./middleware/ai-enrichment.js";
export { alertMiddleware } from "./middleware/alert.js";
export { createMiddleware } from "./middleware/create-middleware.js";
export {
  type DeduplicationOptions,
  deduplicationMiddleware,
} from "./middleware/deduplication.js";
export { heapUsageMiddleware } from "./middleware/heap-usage.js";
export {
  createHttpLogger,
  type HttpLoggerOptions,
  type HttpRequestMapper,
  type HttpResponseMapper,
  nodeHttpMappers,
} from "./middleware/http.js";
export { ipMiddleware } from "./middleware/ip.js";
export {
  type LevelOverrideOptions,
  levelOverrideMiddleware,
} from "./middleware/level-override.js";
export {
  type OcppMiddlewareOptions,
  ocppMiddleware,
} from "./middleware/ocpp.js";
export {
  type OtelTraceMiddlewareOptions,
  otelTraceMiddleware,
} from "./middleware/otel-trace.js";
export {
  type RedactionOptions,
  redactionMiddleware,
} from "./middleware/redaction.js";
export {
  type SamplingOptions,
  samplingMiddleware,
} from "./middleware/sampling.js";
export {
  type UserAgentOptions,
  userAgentMiddleware,
} from "./middleware/user-agent.js";
// ─── Transports (browser-safe) ──────────────────────────────────
export {
  type BatchTransportOptions,
  batchTransport,
} from "./transports/batch.js";
export {
  type BrowserJsonStreamTransportOptions,
  browserJsonStreamTransport,
} from "./transports/browser-json-stream.js";
export {
  type ConsoleTransportOptions,
  consoleTransport,
} from "./transports/console.js";
export { createTransport } from "./transports/create-transport.js";
export {
  type DatadogTransportOptions,
  datadogTransport,
} from "./transports/datadog.js";
export {
  type DiscordTransportOptions,
  discordTransport,
} from "./transports/discord.js";
export { type LokiTransportOptions, lokiTransport } from "./transports/loki.js";
export { type OtelTransportOptions, otelTransport } from "./transports/otel.js";
export {
  type PrettyTransportOptions,
  prettyTransport,
} from "./transports/pretty.js";
export {
  type RingBufferQueryOptions,
  type RingBufferTransport,
  type RingBufferTransportOptions,
  ringBufferTransport,
} from "./transports/ring-buffer.js";
export {
  type SentryInstance,
  type SentryTransportOptions,
  sentryTransport,
} from "./transports/sentry.js";
export {
  type SlackTransportOptions,
  slackTransport,
} from "./transports/slack.js";
export {
  type WebhookTransportOptions,
  webhookTransport,
} from "./transports/webhook.js";
