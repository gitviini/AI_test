import { cache } from "react";

export default class cacheHandler{
    constructor(options){
        this.options = options
    }

    async get(key){
        return cache.get(key)
    }

    async set(key, data, ctx){
        cache.set(key, {
            value:data,
            
        })
    }
}