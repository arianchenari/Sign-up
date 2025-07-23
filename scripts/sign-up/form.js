import { newUser, usersInfo } from '../data/users-informations.js';

document.querySelector('.js-btn-submit').addEventListener('click', () => {
    const newUserInfo = {
            name: document.querySelector('.js-input-name').value,
            email: document.querySelector('.js-input-email').value,
            password: document.querySelector('.js-input-password').value,
            job: '',
            image: '',
            comment: '',
            id: ''
        };
    if(validationUserInfo(newUserInfo, usersInfo))
    addNewUser(newUserInfo);
});

function validationUserInfo(newUserInfo, usersInfo) {
    const rePassword = document.querySelector('.js-input-re-password').value;
    if (newUserInfo.password !== rePassword){
        document.querySelector('.js-error-message').innerHTML = 'passwords are not match';
        return false;
    } else if(!newUserInfo.email.includes('@gmail.com')){
        document.querySelector('.js-error-message').innerHTML = 'unvalid email';
        return false;
    }

    let macthingUser = false;
    usersInfo.forEach((user) => {
        if(newUserInfo.email === user.email){
            document.querySelector('.js-error-message').innerHTML = 'already sign up with this email';
            macthingUser = true;
        } else if (newUserInfo.name === user.name){
            document.querySelector('.js-error-message').innerHTML = 'try another username';
            macthingUser = true;
        } 
    });

    return !macthingUser;
}