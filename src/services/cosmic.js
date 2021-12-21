const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: 'spin-the-wheel-base',
  read_key: 'njWwRzyNVUDeV17hPIY5QvRZ9pzeM0CrDcra3Jcl67SaoqxhVv'
})

export default {
    getEvents(params) {
        return bucket.getObjects(params)
    }
}