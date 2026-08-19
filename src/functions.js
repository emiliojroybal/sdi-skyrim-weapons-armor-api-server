import fs from 'fs/promises';
import { parse } from 'csv-parse/sync';

export async function parseCSV(csvPath) {
    const data = await fs.readFile(csvPath, 'utf8');
    const records = await parse(data, { columns: true });
    return records;
}