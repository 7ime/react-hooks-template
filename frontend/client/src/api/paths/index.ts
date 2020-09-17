import {configuration} from '../config'

const base = (rest: string) => `${configuration.remoteApi}/${rest}`

export default class Paths {
    static People = class {
        static fetchHuman = (id: number) => base(`people/${id}`)
        static fetchPeople = () => base(`posts/`)
    }

    static JsonPlaceholder = class {
        static getPosts = () => base(`posts/`)
        static getPost = (id: number) => base(`posts/${id}`)
        static createPost = () => base(`posts/`)
        static updatePost = (id: number) => base(`posts/${id}`)
        static deletePost = (id: number) => base(`posts/${id}`)
    }
}