export interface Journey {
    next(): void;
    previous(): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    isFinished(): boolean;
    isStart(): boolean;
}
