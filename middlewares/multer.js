import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+ '-'+file.originalname);
    }
});

//Intialize multer upload
const upload = multer({storage});

export default upload;