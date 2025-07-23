class Users {
    name;
    password;
    email;
    job;
    image;
    comment;
    id;

    constructor(user) {
        this.name = user.name;
        this.password = user.password;
        this.email = user.email;
        this.job = user.job;
        this.image = user.image;
        this.comment = user.comment;
        this.id = user.id;
    };
};

export const usersInfo = [{
    name: 'Sara Labora',
    email: 'saralab@gmail.com',
    password: 's1lb1',
    job: 'Student & CEO',
    image: 'images/sara-personal-image.jpg',
    comment: 'i love this site and enjoy that it`s helpful! i love this site and enjoy that it`s helpful! i love this site and enjoy that it`s helpful!',
    id: '1'
}, {
    name: 'Adam Moradi',
    email: 'adamtrade@gmail.com',
    password: 'a1am1',
    job: 'Trader & Saler',
    image: 'images/adam-personal-image.jpg',
    comment: 'i really love this site it`s help me to solve my problem and i suggest this site to everyone to want love this footbal!!',
    id: '2'
}, {
    name: 'Shahin Azarseresht',
    password: 's1as1',
    email: 'shahin@gmail.com',
    job: 'Koskesh do allam & Bahare Lover!',
    image: 'images/shahin-personal-image.jpg',
    comment: 'so how many kilos are u ? stciker<:pishi:> best world advisor',
    id: '3'
}, {
    name: 'Arian Chenari',
    password: 'a82394',
    email: 'chenariarian2@gmail.com',
    job: 'Friend of koskeshe',
    image: 'images/arian-personal-image.jpg',
    comment: 'i don`t know why shahin is my friend :/ so what you think about him ?! can u shower cold wather?',
    id: '4'
}].map((user) => {
    return new Users(user);
});

