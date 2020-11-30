const mongodbPass = process.env.MONGODB_PASSWORD
const url = `mongodb+srv://mawatech:${mongodbPass}@mycluster.f68qp.mongodb.net/mawatech?retryWrites=true&w=majority`

export {url}
