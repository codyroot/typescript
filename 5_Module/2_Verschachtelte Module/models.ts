module video2brain.Models {
    export class Customer {
        firstName = '';
        lastName = '';
        customerId = 0;
    }

    export class Trainer {
        firstName = '';
        lastName = '';
        videos = [];
    }

    export class Video {
        title = '';
        duration = 0;
        trainer = {};
    }
}