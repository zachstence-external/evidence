export function initDB(): Promise<void>;
export function query(query: string): Promise<import('apache-arrow').Table | null>;
export function setParquetURL(url: string): Promise<void>;
export function arrowTableToJSON(table: import('apache-arrow').Table): any[];
