import { storageService } from '../async-storage.service'
import { utilService } from '../utilService'

export const emailService = {
    query,
    getById,
    remove,
    save,
    getEmptyEmail

}

const DB_KEY = 'emailDB'

async function query(filterBy = null) {
    let emails = await storageService.query(DB_KEY)
    if (emails && emails.length) return emails
    else {
        emails = _createEmails()
        await storageService.postMany(DB_KEY, (_createEmails()))
    }
    if (filterBy) emails = filterEmails(filterBy, emails)
    console.log(emails);
    return emails
}

function getById(emailId) {
    return storageService.get(DB_KEY, emailId)
}

function remove(emailId) {
    return storageService.remove(DB_KEY, emailId)
}

function save(email) {
    if (email._id) return _update(email)
    else return _add(email)
}

function _add(email) {
    // email.owner = userService.getLoggedInUser()
    return storageService.post(DB_KEY, email)
}

function _update(email) {
    return storageService.put(DB_KEY, email)
}

function filterEmails(){
    console.log('bla');
}

function getEmptyEmail(){
    return{
        id: utilService.makeId(),
        subject: '',
        userName: '',
        body: '',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        to: '',
    }
}

function _createEmails() {
    return [
        {
            _id: utilService.makeId(),
            subject: 'Some guy cut me off in line!!!',
            body: 'to be honest i usually never send emails about bad costumers but this guy was super anoyying and i just had to inform you that\
             even your employs just stood there and did absolutely nothing!!!,\
             this is the last time i wil ever come back to \"Tachoka a place for dirt\", and i will buy my dirt somewhere else!\
             thank you or actually NOT! and goodBYE or actully just f*****g BYE!',
            isRead: false,
            isStarred: true,
            sentAt: Date.now(),
            from: 'karenbigmac822@kmail.com',
            userName: 'Karen',
            labels: ['Critical', 'Work']
        },
        {
            _id: utilService.makeId(),
            subject: 'some women peed on my car in your parking lot!',
            body: 'The other day i was comeing to buy some dirt like i do in ever 3rd subday of the 4th month in every 2 years!\
            gotta keep the dirt fresh, well anyway i was in a rush and i thought the line was open so i just grab my dirt and went to pay\
            but all of the sudden some crazy woman started screaming, later on i saw her PEEINGon the roof of my car!!\
            how did she even got there!!!\
            i ask you to ban here from your store for ever!!',
            isRead: false,
            isStarred: true,
            sentAt: Date.now() - 10000,
            from: 'drdan342@kmail.com',
            userName: 'Dan',
            labels: ['Work', 'Spam']
        },
        {
            _id: utilService.makeId(),
            subject: 'The dirt is smelly',
            body: 'hey there i just bought some dirt fro you guys and i did the thing which i always do with my dirt which i am not going to tell you guys\
            but anyway the dirt have a very bad smell and i can use it anymore\
            i would like you guys to send me a new bag of dirt ASAP as i trully need it now!!!\
            also you can take the old dirt.... but i wouldnt recommend that....',
            isRead: false,
            isStarred: false,
            sentAt: Date.now() - (1000 * 60),
            from: 'aayesaa@kmail.com',
            userName: 'Din',
            labels: ['Family', 'Memories']
        },
        {
            _id: utilService.makeId(),
            subject: 'love it!!!',
            body: 'just got home with the new dirt i just bought at your store!! \"Tachoka a place for dirt\"\
            and first of all the color is amazing!! never have i seen such a beautiful color, secondly my dogs instentlly started playing in it\
            you might see this as a bad thing but for me its great to see my dogs this happy!\
            thank you very much for once again, amazing products and amazing quality!',
            isRead: false,
            isStarred: false,
            sentAt: Date.now() - (1000 * 60 * 6),
            from: 'nirkpolake@kmail.com',
            userName: 'Nir',
            labels: ['Romantic', 'Family']
        },
        {
            _id: utilService.makeId(),
            subject: 'software is not up to date',
            body: 'hey there first of all i tried updated your website but the minute i watched the code\
            i wanted to burn my laptop, WHO THE HELL WROTE THIS CODE!! this is freking garbage!, delete your websits now please and i will build you a new one\
            from scratch this time the right way!',
            isRead: false,
            isStarred: false,
            sentAt: 1245402967853,
            from: 'FSguy@kmail.com',
            userName: 'Aviv',
            labels: ['Work', 'Spam']

        },
        {
            _id: utilService.makeId(),
            subject: 'Some guy cut me off in line!!!',
            body: 'to be honest i usually never send emails about bad costumers but this guy was super anoyying and i just had to inform you that\
             even your employs just stood there and did absolutely nothing!!!,\
             this is the last time i wil ever come back to \"Tachoka a place for dirt\", and i will buy my dirt somewhere else!\
             thank you or actually NOT! and goodBYE or actully just f*****g BYE!',
            isRead: false,
            isStarred: true,
            sentAt: 1656446147853,
            from: 'karenbigmac822@kmail.com',
            userName: 'Karen',
            labels: ['Romantic', 'Family']

        },
        {
            _id: utilService.makeId(),
            subject: 'some women peed on my car in your parking lot!',
            body: 'The other day i was comeing to buy some dirt like i do in ever 3rd subday of the 4th month in every 2 years!\
            gotta keep the dirt fresh, well anyway i was in a rush and i thought the line was open so i just grab my dirt and went to pay\
            but all of the sudden some crazy woman started screaming, later on i saw her PEEINGon the roof of my car!!\
            how did she even got there!!!\
            i ask you to ban here from your store for ever!!',
            isRead: false,
            isStarred: true,
            sentAt: 1656492967853,
            from: 'drdan342@kmail.com',
            userName: 'Dan',
            labels: ['Work', 'Spam']

        },
        {
            _id: utilService.makeId(),
            subject: 'The dirt is smelly',
            body: 'hey there i just bought some dirt fro you guys and i did the thing which i always do with my dirt which i am not going to tell you guys\
            but anyway the dirt have a very bad smell and i can use it anymore\
            i would like you guys to send me a new bag of dirt ASAP as i trully need it now!!!\
            also you can take the old dirt.... but i wouldnt recommend that....',
            isRead: false,
            isStarred: false,
            sentAt: Date.now() - (1000 * 60 * 6 * 20),
            from: 'aayesaa@kmail.com',
            userName: 'Din',
            labels: ['Work', 'Spam']

        },
        {
            _id: utilService.makeId(),
            subject: 'love it!!!',
            body: 'just got home with the new dirt i just bought at your store!! \"Tachoka a place for dirt\"\
            and first of all the color is amazing!! never have i seen such a beautiful color, secondly my dogs instentlly started playing in it\
            you might see this as a bad thing but for me its great to see my dogs this happy!\
            thank you very much for once again, amazing products and amazing quality!',
            isRead: false,
            isStarred: false,
            sentAt: 1245402967853,
            from: 'nirkpolake@kmail.com',
            userName: 'Nir',
            labels: ['Friends', 'Family']

        },
        {
            _id: utilService.makeId(),
            subject: 'software is not up to date',
            body: 'hey there first of all i tried updated your website but the minute i watched the code\
            i wanted to burn my laptop, WHO THE HELL WROTE THIS CODE!! this is freking garbage!, delete your websits now please and i will build you a new one\
            from scratch this time the right way!',
            isRead: false,
            isStarred: false,
            sentAt: 1245402967853,
            from: 'FSguy@kmail.com',
            userName: 'Aviv',
            labels: ['Critical', 'Work']

        },
        {
            _id: utilService.makeId(),
            subject: 'Some guy cut me off in line!!!',
            body: 'to be honest i usually never send emails about bad costumers but this guy was super anoyying and i just had to inform you that\
             even your employs just stood there and did absolutely nothing!!!,\
             this is the last time i wil ever come back to \"Tachoka a place for dirt\", and i will buy my dirt somewhere else!\
             thank you or actually NOT! and goodBYE or actully just f*****g BYE!',
            isRead: false,
            isStarred: true,
            sentAt: 1656446147853,
            from: 'karenbigmac822@kmail.com',
            userName: 'Karen',
            labels: ['Critical', 'Work']

        },
        {
            _id: utilService.makeId(),
            subject: 'some women peed on my car in your parking lot!',
            body: 'The other day i was comeing to buy some dirt like i do in ever 3rd subday of the 4th month in every 2 years!\
            gotta keep the dirt fresh, well anyway i was in a rush and i thought the line was open so i just grab my dirt and went to pay\
            but all of the sudden some crazy woman started screaming, later on i saw her PEEINGon the roof of my car!!\
            how did she even got there!!!\
            i ask you to ban here from your store for ever!!',
            isRead: false,
            isStarred: true,
            sentAt: 1656492967853,
            from: 'drdan342@kmail.com',
            userName: 'Dan',
            labels: ['Romantic', 'Family']

        },
        {
            _id: utilService.makeId(),
            subject: 'The dirt is smelly',
            body: 'hey there i just bought some dirt fro you guys and i did the thing which i always do with my dirt which i am not going to tell you guys\
            but anyway the dirt have a very bad smell and i can use it anymore\
            i would like you guys to send me a new bag of dirt ASAP as i trully need it now!!!\
            also you can take the old dirt.... but i wouldnt recommend that....',
            isRead: false,
            isStarred: false,
            sentAt: 1656304967853,
            from: 'aayesaa@kmail.com',
            userName: 'Din',
            labels: ['Critical', 'Work']

        },
        {
            _id: utilService.makeId(),
            subject: 'love it!!!',
            body: 'just got home with the new dirt i just bought at your store!! \"Tachoka a place for dirt\"\
            and first of all the color is amazing!! never have i seen such a beautiful color, secondly my dogs instentlly started playing in it\
            you might see this as a bad thing but for me its great to see my dogs this happy!\
            thank you very much for once again, amazing products and amazing quality!',
            isRead: false,
            isStarred: false,
            sentAt: 1245402967853,
            from: 'nirkpolake@kmail.com',
            userName: 'Nir',
            labels: ['Critical', 'Work']

        },
        {
            _id: utilService.makeId(),
            subject: 'software is not up to date',
            body: 'hey there first of all i tried updated your website but the minute i watched the code\
            i wanted to burn my laptop, WHO THE HELL WROTE THIS CODE!! this is freking garbage!, delete your websits now please and i will build you a new one\
            from scratch this time the right way!',
            isRead: false,
            isStarred: false,
            sentAt: 1245402967853,
            from: 'FSguy@kmail.com',
            userName: 'Aviv',
            labels: ['Romantic', 'Family']

        },
        {
            _id: utilService.makeId(),
            subject: 'love it!!!',
            body: 'just got home with the new dirt i just bought at your store!! \"Tachoka a place for dirt\"\
            and first of all the color is amazing!! never have i seen such a beautiful color, secondly my dogs instentlly started playing in it\
            you might see this as a bad thing but for me its great to see my dogs this happy!\
            thank you very much for once again, amazing products and amazing quality!',
            isRead: false,
            isStarred: false,
            sentAt: 1245402967853,
            from: 'nirkpolake@kmail.com',
            userName: 'Nir',
            labels: ['Critical', 'Work']

        },
        {
            _id: utilService.makeId(),
            subject: 'software is not up to date',
            body: 'hey there first of all i tried updated your website but the minute i watched the code\
            i wanted to burn my laptop, WHO THE HELL WROTE THIS CODE!! this is freking garbage!, delete your websits now please and i will build you a new one\
            from scratch this time the right way!',
            isRead: false,
            isStarred: false,
            sentAt: 1245402967853,
            from: 'FSguy@kmail.com',
            userName: 'Aviv',
            labels: ['Critical', 'Work']

        },
        {
            _id: utilService.makeId(),
            subject: 'love it!!!',
            body: 'just got home with the new dirt i just bought at your store!! \"Tachoka a place for dirt\"\
            and first of all the color is amazing!! never have i seen such a beautiful color, secondly my dogs instentlly started playing in it\
            you might see this as a bad thing but for me its great to see my dogs this happy!\
            thank you very much for once again, amazing products and amazing quality!',
            isRead: false,
            isStarred: false,
            sentAt: 1245402967853,
            from: 'nirkpolake@kmail.com',
            userName: 'Nir',
            labels: ['Romantic', 'Family']

        },
        {
            _id: utilService.makeId(),
            subject: 'software is not up to date',
            body: 'hey there first of all i tried updated your website but the minute i watched the code\
            i wanted to burn my laptop, WHO THE HELL WROTE THIS CODE!! this is freking garbage!, delete your websits now please and i will build you a new one\
            from scratch this time the right way!',
            isRead: false,
            isStarred: false,
            sentAt: 1245402967853,
            from: 'FSguy@kmail.com',
            userName: 'Aviv',
            labels: ['Work', 'Spam']

        },
    ]
}

