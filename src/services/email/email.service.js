import { storageService } from '../async-storage.service'
import { utilService } from '../utilService'

export const emailService = {
    query,
    getById,
    remove,
    save,
    getEmptyEmail,
    formattedTime

}

const loggedInUser = {
    email: 'tachoka@services.com',
    fullName: 'Izuku Midoriya'
}

const DB_KEY = 'emailDB'

async function query(criteria) {
    let emails = await storageService.query(DB_KEY)
    if (emails && emails.length) emails = emails
    else {
        emails = _createEmails()
        await storageService.postMany(DB_KEY, (_createEmails()))
    }
    emails = setEmailsByCriteria(emails, criteria) // setting emails to be displayed
    emails = emails.sort((m1, m2) => m2.sentAt - m1.sentAt) //sorting by time sent
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

function setEmailsByCriteria(emails, criteria) {
    let emailsToDisplay = []
    const { status, txt, isRead, isStared, labels } = criteria
    if (status === 'inbox') emailsToDisplay = emails.filter(m => m.to === loggedInUser.email)
    if (status === 'sent') emailsToDisplay = emails.filter(m => m.to !== loggedInUser.email)

    if(txt) emailsToDisplay.filter(m=> m.userName.includes(txt))
    return emailsToDisplay

}

function getEmptyEmail() {
    return {
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

function formattedTime(timeStamp) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let now = Date.now()
    let diff = now - timeStamp
    let day = 1000 * 60 * 60 * 24
    let clock = new Date(timeStamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    let date = `${new Date(timeStamp).getDate()} ${monthNames[new Date(timeStamp).getMonth()]}`
    let year = new Date(timeStamp).getFullYear().toString().slice(-2)
    if (diff < day) return clock
    else if (diff < day * 365) return date
    else if (diff > day * 365) return `${date},${year}`
}
// karenbigmac822@kmail.com Karen
// drdan342@kmail.com Dan
// aayesaa@kmail.com Din
// nirkpolake@kmail.com Nir
// FSguy@kmail.com Aviv
function _createEmails() {
    return [
        {
            id: utilService.makeId(),
            subject: 'Hey keren!',
            body: 'hey keren thank you for your honest review here at tachokka we try to help every single costumer as much as we can\
            but we do get here and there some people who fell un supported so if you do fell like this \
            i can offer you a copun for our store with 99.8% discount for the latest dirt we just brought\
            if you are intrested let me know please and i wil send it to you right away.\
            and lat thing please, dont pee on peoples cars in our parking lot or you will be BANNED for life!',
            isRead: false,
            isStarred: false,
            sentAt: 1656443145853,
            from: 'tachoka@services.com',
            userName: 'Tachoka'
        },
        {
            id: utilService.makeId(),
            subject: 'Hey there Dan',
            body: 'thank you for reaching out to us and letting us know about the situation we 100% understand you and want to help you as much as we can\
            so pleae let us know how we can do that\
            for now there is a free dirt bag waiting for you in the local store + a gift card for car wash named \"Dani Danchu Detailing\"\
            he is very good trust me!\
            have a great day!',
            isRead: false,
            isStarred: true,
            sentAt: 1656443137853,
            from: 'tachoka@services.com',
            userName: 'Tachoka'
        },
        {
            id: utilService.makeId(),
            subject: 'Hi Din..',
            body: 'We are not quite sure what you do with your dirt and we cant refund you or replace any kind of dirt with out\
            checking the old dirt before, also when you say that we wont like to take the old dirt we think its better for you to have it for now\
            and come to the store for further discussions....\
            i must repeat DO NOT BRING THE OLD DIRT WITH YOU!',
            isRead: false,
            isStarred: false,
            sentAt: 1656442147853,
            from: 'tachoka@services.com',
            userName: 'Tachoka'
        },
        {
            id: utilService.makeId(),
            subject: 'Nir!! our favorite customer',
            body: 'once again we are very happy to her your dirt stories!!\
            it makes everyone here so happy, and you are very welcomed here when ever you want\
            in the name of all our employees we have a spacial surprise for you in the local store so make sure to \
            come pick it up ASAP also you might want to bring your dogs with you ;)',
            isRead: false,
            isStarred: true,
            sentAt: 1656443077853,
            from: 'tachoka@services.com',
            userName: 'Tachoka'
        },
        {
            id: utilService.makeId(),
            subject: 'Hey guy the fullstack developer',
            body: 'thank you for your review about our website Guy we really like what you want to do with our website\
            but you prices are a bit too high for as right now is there any chance to talk about it?\
            we can also pay with dirt if you want, our dirt is the best dirt you can find out there and that is a 100% guarantee\
            please update us on how to move forward',
            isRead: false,
            isStarred: true,
            sentAt: 1656443057853,
            from: 'tachoka@services.com',
            userName: 'Tachoka'
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
            sentAt: Date.now(),
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
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
            to: 'tachoka@services.com',
            userName: 'Aviv',
            labels: ['Work', 'Spam']

        },
    ]
}

