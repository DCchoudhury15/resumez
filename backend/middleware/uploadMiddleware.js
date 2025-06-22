import multer from 'multer'

const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "uploads/")
    },
filename:(req,file, cb)=>{
    cb(null, `${Date.now()}-${file.originalname}`)
},
});

const fileFilter=(req, file, cb)=>{
    const allowedTypes=["image/jpeg",]
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(new Error("only .jpeg, .jpg, .png are allowed formats"), false)
    }
}

const uploads =multer({storage, fileFilter})
export default uploads;