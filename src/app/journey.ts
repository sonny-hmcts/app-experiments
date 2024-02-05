import { input } from "@angular/core";

export interface Journey {
    next(): void;
    previous(): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    isFinished(): boolean;
    isStart(): boolean;
    id: string;
    page: number;
    start: number;
    end: number;
}
