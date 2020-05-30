export interface ApiResponse {
    data: any;
    error: Error | null;
    pending: number;
    operations: {
        [index: string]: {
            error: Error | null;
            pending: number;
        };
    } | null;
}
