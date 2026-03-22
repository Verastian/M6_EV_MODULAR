import path from 'path';
import { fileURLToPath } from 'url';
import { FilesUtils } from '../utils/files.util.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PropertyModel {
    constructor() {
        this.dataFile = path.join(__dirname, '../data/properties.json');
    }

    async getAll() {
        const data = await FilesUtils.readFile(this.dataFile);
        return data || [];
    }

    async saveAll(data) {
        await FilesUtils.pathEnsure(this.dataFile);
        return await FilesUtils.writeFile(this.dataFile, data);
    }
}

export default new PropertyModel();
