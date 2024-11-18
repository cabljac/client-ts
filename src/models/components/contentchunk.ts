/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ImageURLChunk,
  ImageURLChunk$inboundSchema,
  ImageURLChunk$Outbound,
  ImageURLChunk$outboundSchema,
} from "./imageurlchunk.js";
import {
  ReferenceChunk,
  ReferenceChunk$inboundSchema,
  ReferenceChunk$Outbound,
  ReferenceChunk$outboundSchema,
} from "./referencechunk.js";
import {
  TextChunk,
  TextChunk$inboundSchema,
  TextChunk$Outbound,
  TextChunk$outboundSchema,
} from "./textchunk.js";

export type ContentChunk =
  | (ImageURLChunk & { type: "image_url" })
  | (TextChunk & { type: "text" })
  | (ReferenceChunk & { type: "reference" });

/** @internal */
export const ContentChunk$inboundSchema: z.ZodType<
  ContentChunk,
  z.ZodTypeDef,
  unknown
> = z.union([
  ImageURLChunk$inboundSchema.and(
    z.object({ type: z.literal("image_url") }).transform((v) => ({
      type: v.type,
    })),
  ),
  TextChunk$inboundSchema.and(
    z.object({ type: z.literal("text") }).transform((v) => ({ type: v.type })),
  ),
  ReferenceChunk$inboundSchema.and(
    z.object({ type: z.literal("reference") }).transform((v) => ({
      type: v.type,
    })),
  ),
]);

/** @internal */
export type ContentChunk$Outbound =
  | (ImageURLChunk$Outbound & { type: "image_url" })
  | (TextChunk$Outbound & { type: "text" })
  | (ReferenceChunk$Outbound & { type: "reference" });

/** @internal */
export const ContentChunk$outboundSchema: z.ZodType<
  ContentChunk$Outbound,
  z.ZodTypeDef,
  ContentChunk
> = z.union([
  ImageURLChunk$outboundSchema.and(
    z.object({ type: z.literal("image_url") }).transform((v) => ({
      type: v.type,
    })),
  ),
  TextChunk$outboundSchema.and(
    z.object({ type: z.literal("text") }).transform((v) => ({ type: v.type })),
  ),
  ReferenceChunk$outboundSchema.and(
    z.object({ type: z.literal("reference") }).transform((v) => ({
      type: v.type,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContentChunk$ {
  /** @deprecated use `ContentChunk$inboundSchema` instead. */
  export const inboundSchema = ContentChunk$inboundSchema;
  /** @deprecated use `ContentChunk$outboundSchema` instead. */
  export const outboundSchema = ContentChunk$outboundSchema;
  /** @deprecated use `ContentChunk$Outbound` instead. */
  export type Outbound = ContentChunk$Outbound;
}
