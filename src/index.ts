/**
 * Enum of status codes that gRPC can return
 */
export enum ErrorCodes {
    /**
     * Not an error; returned on success
     */
    OK = 0,
    /**
     * The operation was cancelled (typically by the caller).
     */
    CANCELLED = 1,
    /**
     * Unknown error.  An example of where this error may be returned is
     * if a status value received from another address space belongs to
     * an error-space that is not known in this address space.  Also
     * errors raised by APIs that do not return enough error information
     * may be converted to this error.
     */
    UNKNOWN = 2,
    /**
     * Client specified an invalid argument.  Note that this differs
     * from FAILED_PRECONDITION.  INVALID_ARGUMENT indicates arguments
     * that are problematic regardless of the state of the system
     * (e.g., a malformed file name).
     */
    INVALID_ARGUMENT = 3,
    /**
     * Deadline expired before operation could complete.  For operations
     * that change the state of the system, this error may be returned
     * even if the operation has completed successfully.  For example, a
     * successful response from a server could have been delayed long
     * enough for the deadline to expire.
     */
    DEADLINE_EXCEEDED = 4,
    /**
     * Some requested entity (e.g., file or directory) was not found.
     */
    NOT_FOUND = 5,
    /**
     * Some entity that we attempted to create (e.g., file or directory)
     * already exists.
     */
    ALREADY_EXISTS = 6,
    /**
     * The caller does not have permission to execute the specified
     * operation.  PERMISSION_DENIED must not be used for rejections
     * caused by exhausting some resource (use RESOURCE_EXHAUSTED
     * instead for those errors).  PERMISSION_DENIED must not be
     * used if the caller can not be identified (use UNAUTHENTICATED
     * instead for those errors).
     */
    PERMISSION_DENIED = 7,
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or
     * perhaps the entire file system is out of space.
     */
    RESOURCE_EXHAUSTED = 8,
    /**
     * Operation was rejected because the system is not in a state
     * required for the operation's execution.  For example, directory
     * to be deleted may be non-empty, an rmdir operation is applied to
     * a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *
     *  - Use UNAVAILABLE if the client can retry just the failing call.
     *  - Use ABORTED if the client should retry at a higher-level
     *    (e.g., restarting a read-modify-write sequence).
     *  - Use FAILED_PRECONDITION if the client should not retry until
     *    the system state has been explicitly fixed.  E.g., if an "rmdir"
     *    fails because the directory is non-empty, FAILED_PRECONDITION
     *    should be returned since the client should not retry unless
     *    they have first fixed up the directory by deleting files from it.
     *  - Use FAILED_PRECONDITION if the client performs conditional
     *    REST Get/Update/Delete on a resource and the resource on the
     *    server does not match the condition. E.g., conflicting
     *    read-modify-write on the same resource.
     */
    FAILED_PRECONDITION = 9,
    /**
     * The operation was aborted, typically due to a concurrency issue
     * like sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION,
     * ABORTED, and UNAVAILABLE.
     */
    ABORTED = 10,
    /**
     * Operation was attempted past the valid range.  E.g., seeking or
     * reading past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may
     * be fixed if the system state changes. For example, a 32-bit file
     * system will generate INVALID_ARGUMENT if asked to read at an
     * offset that is not in the range [0,2^32-1], but it will generate
     * OUT_OF_RANGE if asked to read from an offset past the current
     * file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE.  We recommend using OUT_OF_RANGE (the more specific
     * error) when it applies so that callers who are iterating through
     * a space can easily look for an OUT_OF_RANGE error to detect when
     * they are done.
     */
    OUT_OF_RANGE = 11,
    /**
     * Operation is not implemented or not supported/enabled in this service.
     */
    UNIMPLEMENTED = 12,
    /**
     * Internal errors.  Means some invariants expected by underlying
     * system has been broken.  If you see one of these errors,
     * something is very broken.
     */
    INTERNAL = 13,
    /**
     * The service is currently unavailable.  This is a most likely a
     * transient condition and may be corrected by retrying with
     * a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION,
     * ABORTED, and UNAVAILABLE.
     */
    UNAVAILABLE = 14,
    /**
     * Unrecoverable data loss or corruption.
     */
    DATA_LOSS = 15,
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED = 16,
}

/** Raises an UNKNOWN Error */
export class UnknownError extends Error {
    static readonly MESSAGE = 'Unknown error.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || UnknownError.MESSAGE);
        this.code = ErrorCodes.UNKNOWN;
    }
}

/** Raises an INVALID_ARGUMENT Error */
export class InvalidArgumentError extends Error {
    static readonly MESSAGE = 'The client specified an invalid argument.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || InvalidArgumentError.MESSAGE);
        this.code = ErrorCodes.INVALID_ARGUMENT;
    }
}

/** Raises an DEADLINE_EXCEEDED Error */
export class DeadlineExceededError extends Error {
    static readonly MESSAGE = 'The deadline expired before the operation could complete.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || DeadlineExceededError.MESSAGE);
        this.code = ErrorCodes.DEADLINE_EXCEEDED;
    }
}

/** Raises an NOT_FOUND Error */
export class NotFoundError extends Error {
    static readonly MESSAGE = 'The requested item was not found.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || NotFoundError.MESSAGE);
        this.code = ErrorCodes.NOT_FOUND;
    }
}

/** Raises an ALREADY_EXISTS Error */
export class AlreadyExistsError extends Error {
    static readonly MESSAGE = 'The item being created already exists.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || AlreadyExistsError.MESSAGE);
        this.code = ErrorCodes.ALREADY_EXISTS;
    }
}

/** Raises an PERMISSION_DENIED Error */
export class PermissionDeniedError extends Error {
    static readonly MESSAGE = 'Insufficient permissions.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || PermissionDeniedError.MESSAGE);
        this.code = ErrorCodes.PERMISSION_DENIED;
    }
}

/** Raises an UNAUTHENTICATED Error */
export class UnauthenticatedError extends Error {
    static readonly MESSAGE = 'Authentication required.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || UnauthenticatedError.MESSAGE);
        this.code = ErrorCodes.UNAUTHENTICATED;
    }
}

/** Raises an RESOURCE_EXHAUSTED Error */
export class ResourceExhaustedError extends Error {
    static readonly MESSAGE = 'The server resource has been exhausted.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || ResourceExhaustedError.MESSAGE);
        this.code = ErrorCodes.RESOURCE_EXHAUSTED;
    }
}

/** Raises an FAILED_PRECONDITION Error */
export class FailedPreconditionError extends Error {
    static readonly MESSAGE = 'The operation requested was rejected by the server.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || FailedPreconditionError.MESSAGE);
        this.code = ErrorCodes.FAILED_PRECONDITION;
    }
}

/** Raises an ABORTED Error */
export class AbortedError extends Error {
    static readonly MESSAGE = 'The operation was aborted.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || AbortedError.MESSAGE);
        this.code = ErrorCodes.ABORTED;
    }
}

/** Raises an OUT_OF_RANGE Error */
export class OutOfRangeError extends Error {
    static readonly MESSAGE = 'The operation was attempted past the valid range.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || OutOfRangeError.MESSAGE);
        this.code = ErrorCodes.OUT_OF_RANGE;
    }
}

/** Raises an UNIMPLEMENTED Error */
export class UnimplementedError extends Error {
    static readonly MESSAGE = 'The operation is not implemented.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || UnimplementedError.MESSAGE);
        this.code = ErrorCodes.UNIMPLEMENTED;
    }
}

/** Raises an INTERNAL Error */
export class InternalError extends Error {
    static readonly MESSAGE = 'Internal server error.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || InternalError.MESSAGE);
        this.code = ErrorCodes.INTERNAL;
    }
}

/** Raises an UNAVAILABLE Error */
export class UnavailableError extends Error {
    static readonly MESSAGE = 'The service is currently unavailable.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || UnavailableError.MESSAGE);
        this.code = ErrorCodes.UNAVAILABLE;
    }
}

/** Raises an DATA_LOSS Error */
export class DataLossError extends Error {
    static readonly MESSAGE = 'Unrecoverable data loss or corruption.';
    public readonly code: number;

    constructor(message?: string) {
        super(message || DataLossError.MESSAGE);
        this.code = ErrorCodes.DATA_LOSS;
    }
}
