/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
    FineTuneableModel,
    FineTuneableModel$inboundSchema,
    FineTuneableModel$outboundSchema,
} from "./finetuneablemodel.js";
import {
    GithubRepositoryOut,
    GithubRepositoryOut$inboundSchema,
    GithubRepositoryOut$Outbound,
    GithubRepositoryOut$outboundSchema,
} from "./githubrepositoryout.js";
import {
    JobMetadataOut,
    JobMetadataOut$inboundSchema,
    JobMetadataOut$Outbound,
    JobMetadataOut$outboundSchema,
} from "./jobmetadataout.js";
import {
    TrainingParameters,
    TrainingParameters$inboundSchema,
    TrainingParameters$Outbound,
    TrainingParameters$outboundSchema,
} from "./trainingparameters.js";
import {
    WandbIntegrationOut,
    WandbIntegrationOut$inboundSchema,
    WandbIntegrationOut$Outbound,
    WandbIntegrationOut$outboundSchema,
} from "./wandbintegrationout.js";
import * as z from "zod";

/**
 * The current status of the fine-tuning job.
 */
export const Status = {
    Queued: "QUEUED",
    Started: "STARTED",
    Validating: "VALIDATING",
    Validated: "VALIDATED",
    Running: "RUNNING",
    FailedValidation: "FAILED_VALIDATION",
    Failed: "FAILED",
    Success: "SUCCESS",
    Cancelled: "CANCELLED",
    CancellationRequested: "CANCELLATION_REQUESTED",
} as const;
/**
 * The current status of the fine-tuning job.
 */
export type Status = ClosedEnum<typeof Status>;

export type JobOut = {
    /**
     * The ID of the job.
     */
    id: string;
    autoStart: boolean;
    hyperparameters: TrainingParameters;
    /**
     * The name of the model to fine-tune.
     */
    model: FineTuneableModel;
    /**
     * The current status of the fine-tuning job.
     */
    status: Status;
    /**
     * The type of job (`FT` for fine-tuning).
     */
    jobType: string;
    /**
     * The UNIX timestamp (in seconds) for when the fine-tuning job was created.
     */
    createdAt: number;
    /**
     * The UNIX timestamp (in seconds) for when the fine-tuning job was last modified.
     */
    modifiedAt: number;
    /**
     * A list containing the IDs of uploaded files that contain training data.
     */
    trainingFiles: Array<string>;
    /**
     * A list containing the IDs of uploaded files that contain validation data.
     */
    validationFiles?: Array<string> | null | undefined;
    /**
     * The object type of the fine-tuning job.
     */
    object?: "job" | undefined;
    /**
     * The name of the fine-tuned model that is being created. The value will be `null` if the fine-tuning job is still running.
     */
    fineTunedModel?: string | null | undefined;
    /**
     * Optional text/code that adds more context for the model. When given a `prompt` and a `suffix` the model will fill what is between them. When `suffix` is not provided, the model will simply execute completion starting with `prompt`.
     */
    suffix?: string | null | undefined;
    /**
     * A list of integrations enabled for your fine-tuning job.
     */
    integrations?: Array<WandbIntegrationOut> | null | undefined;
    /**
     * Total number of tokens trained.
     */
    trainedTokens?: number | null | undefined;
    repositories?: Array<GithubRepositoryOut> | undefined;
    metadata?: JobMetadataOut | null | undefined;
};

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z.nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> = Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
    /** @deprecated use `Status$inboundSchema` instead. */
    export const inboundSchema = Status$inboundSchema;
    /** @deprecated use `Status$outboundSchema` instead. */
    export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const JobOut$inboundSchema: z.ZodType<JobOut, z.ZodTypeDef, unknown> = z
    .object({
        id: z.string(),
        auto_start: z.boolean(),
        hyperparameters: TrainingParameters$inboundSchema,
        model: FineTuneableModel$inboundSchema,
        status: Status$inboundSchema,
        job_type: z.string(),
        created_at: z.number().int(),
        modified_at: z.number().int(),
        training_files: z.array(z.string()),
        validation_files: z.nullable(z.array(z.string())).optional(),
        object: z.literal("job").default("job" as const),
        fine_tuned_model: z.nullable(z.string()).optional(),
        suffix: z.nullable(z.string()).optional(),
        integrations: z.nullable(z.array(WandbIntegrationOut$inboundSchema)).optional(),
        trained_tokens: z.nullable(z.number().int()).optional(),
        repositories: z.array(GithubRepositoryOut$inboundSchema).optional(),
        metadata: z.nullable(JobMetadataOut$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            auto_start: "autoStart",
            job_type: "jobType",
            created_at: "createdAt",
            modified_at: "modifiedAt",
            training_files: "trainingFiles",
            validation_files: "validationFiles",
            fine_tuned_model: "fineTunedModel",
            trained_tokens: "trainedTokens",
        });
    });

/** @internal */
export type JobOut$Outbound = {
    id: string;
    auto_start: boolean;
    hyperparameters: TrainingParameters$Outbound;
    model: string;
    status: string;
    job_type: string;
    created_at: number;
    modified_at: number;
    training_files: Array<string>;
    validation_files?: Array<string> | null | undefined;
    object: "job";
    fine_tuned_model?: string | null | undefined;
    suffix?: string | null | undefined;
    integrations?: Array<WandbIntegrationOut$Outbound> | null | undefined;
    trained_tokens?: number | null | undefined;
    repositories?: Array<GithubRepositoryOut$Outbound> | undefined;
    metadata?: JobMetadataOut$Outbound | null | undefined;
};

/** @internal */
export const JobOut$outboundSchema: z.ZodType<JobOut$Outbound, z.ZodTypeDef, JobOut> = z
    .object({
        id: z.string(),
        autoStart: z.boolean(),
        hyperparameters: TrainingParameters$outboundSchema,
        model: FineTuneableModel$outboundSchema,
        status: Status$outboundSchema,
        jobType: z.string(),
        createdAt: z.number().int(),
        modifiedAt: z.number().int(),
        trainingFiles: z.array(z.string()),
        validationFiles: z.nullable(z.array(z.string())).optional(),
        object: z.literal("job").default("job" as const),
        fineTunedModel: z.nullable(z.string()).optional(),
        suffix: z.nullable(z.string()).optional(),
        integrations: z.nullable(z.array(WandbIntegrationOut$outboundSchema)).optional(),
        trainedTokens: z.nullable(z.number().int()).optional(),
        repositories: z.array(GithubRepositoryOut$outboundSchema).optional(),
        metadata: z.nullable(JobMetadataOut$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            autoStart: "auto_start",
            jobType: "job_type",
            createdAt: "created_at",
            modifiedAt: "modified_at",
            trainingFiles: "training_files",
            validationFiles: "validation_files",
            fineTunedModel: "fine_tuned_model",
            trainedTokens: "trained_tokens",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobOut$ {
    /** @deprecated use `JobOut$inboundSchema` instead. */
    export const inboundSchema = JobOut$inboundSchema;
    /** @deprecated use `JobOut$outboundSchema` instead. */
    export const outboundSchema = JobOut$outboundSchema;
    /** @deprecated use `JobOut$Outbound` instead. */
    export type Outbound = JobOut$Outbound;
}
