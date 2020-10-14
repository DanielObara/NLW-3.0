import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
	directory: uploadFolder,

	storage: multer.diskStorage({
		destination: uploadFolder,
		filename: (request, file, callback) => {
			const filaHash = crypto.randomBytes(10).toString('hex');
			const fileName = `${filaHash}-${file.originalname}`;

			return callback(null, fileName);
		}
	}),
};
