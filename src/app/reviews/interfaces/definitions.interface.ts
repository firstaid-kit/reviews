export interface DefinitionResult {
    data?: {
        add_review_definition: ReviewDefinition[]
    };
    errors?: any;
}

export interface ReviewDefinition {
    data: {
        inputs: Input[];
        id: number;
        name: string;
    }
}

export interface Input {
    key: string;
    type: string;
    label: string;
    options?: { key: string, value: string }[]
    order: number;
    value?: string;
}
