import { faker } from '@faker-js/faker'
import { Thread, User } from '../types'


export function createFollower(): User {
    
    return {
        id: faker.string.uuid(),
        name: faker.person.firstName() + " " + faker.person.lastName(),
        photo: faker.image.avatar(),
        verified: Math.random() >= 0.5,
        bio: faker.person.bio(),
        username: faker.internet.userName(),
        link: faker.internet.url(),
    }
}



export function createUser(): User {

    return {
        id: faker.string.uuid(),
        name: faker.person.firstName() + " " + faker.person.lastName(),
        photo: faker.image.avatar(),
        verified: Math.random() >= 0.5,
        bio: faker.person.bio(),
        username: faker.internet.userName(),
        link: faker.internet.url(),
        followers: new Array(Math.floor(Math.random() * 10 )).fill(null).map((_) => createFollower())
    }

}

export function createThread(): Thread {

    return {
        id: faker.string.uuid(),
        author: createUser(),
        content: faker.lorem.paragraph(),
        img: Math.random() >= 0.5 ? faker.image.url() : undefined,
        replies: new Array(Math.floor(Math.random() * 10)).fill(null).map(()=> ({
            id: faker.string.uuid(),
            author: createUser(),
            content: faker.lorem.sentence(),
            likes: Math.floor(Math.random() * 1000),
            createdAt: faker.date.recent().toString()
        })),
        repliesCount: Math.floor(Math.random() * 500),
        likesCount: Math.floor(Math.random() * 1000),
        mention: Math.random() >= 0.5 ,
        mentionUser: createUser(),
        createdAt: faker.date.recent().toString()
        
    }
}


export function generateThreads():Thread[] {
    return new Array(50).fill(null).map((_)=> createThread())
}
