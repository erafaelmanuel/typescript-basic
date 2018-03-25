export class Repo {
    name: string
    description: string
    url: string
    size: number
    forkCount: number

    constructor(name: string, description: string, url: string, size: number, forkCount: number) {
        this.name = name
        this.description = description
        this.url = url
        this.size = size
        this.forkCount = forkCount
    }
}