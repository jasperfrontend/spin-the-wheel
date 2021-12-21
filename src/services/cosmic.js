const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: process.env.VUE_APP_SLUG,
  read_key: process.env.VUE_APP_READ_KEY
})

export default {
    getEvents(params) {
        return bucket.getObjects(params)
    }
}