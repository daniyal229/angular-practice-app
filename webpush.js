const webpush = require('web-push');

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const vapidKeys = {
    "publicKey": "BM4aYhn57PQNyYjL3tjFPGAiB53n0pqXaMSbpv0O_hoFlO77CspiDCRngNR19tSCASVprpM9u12d5IGFo7JCWBs",
    "privateKey": "2GFbafThFv2Nuyxg7M_VMgzCO13-AQ6gQF3yakUkrUk"
}

webpush.setVapidDetails(
    'mailto:noreply@rasoi.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

devices = db.get("devices").value() || [];
for(device of devices) {
    subscription = device.subscription;
    webpush.sendNotification(subscription, JSON.stringify({
        "notification": {
            "title": "Notification From Rasoi",
            "body": "Hello There !!!",
            "vibrate": [100, 50, 100],
            "data": {
                "dateOfArrival": Date.now(),
                "primaryKey": 1
            },
            "actions": [{
                "action": "explore",
                "title": "Go to the site"
            }]
        }
    }))
}