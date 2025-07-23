import { usersInfo } from "../data/users-informations.js";

renderCarts();

function renderCarts() {
    let cartsHTML = '';
    let buttonsHTML = '';
    let lengthOfButtons = 0;

    usersInfo.forEach((user, index) => {
        cartsHTML +=`
            <div class="CTA-cart js-CTA-cart-${user.id}">
                <div class="user-information">
                    <img src="${user.image}" class="person-image">
                    <div class="username-job">
                        <h2>${user.name}</h2>
                        <span>${user.job}</span>
                    </div>
                </div>
                <p>${user.comment}</p>
            </div>
        `;
        if(index <= 3){
            buttonsHTML +=`
            <button class="selection js-selection js-selection-${user.id}" data-user-id="${user.id}"></button>
            `;
            lengthOfButtons++;
        };
    });

    document.querySelector('.js-cart-list')
      .innerHTML = cartsHTML;

    document.querySelector('.js-selectors-container')
      .innerHTML = buttonsHTML;

    showCart(usersInfo[0].id);

    let index = 1;
    let setIntervalId;
    autoShowCarts();
    function autoShowCarts(){
        setIntervalId = setInterval(() => {
            clearInterval(setIntervalId);
            showCart(usersInfo[index].id);
            index++;
            autoShowCarts();
        }, 4000);
        if(index >= lengthOfButtons)
        index = 0;
    }

    function showCart(userId) {
        removesShowCarts();
        document.querySelector(`.js-selection-${userId}`).classList.add('checked');
        document.querySelector(`.js-CTA-cart-${userId}`).classList.add('js-display-cart');
    };

    function removesShowCarts() {
        document.querySelectorAll('.js-selection').forEach((button) => {
            const userId = button.dataset.userId;
            usersInfo.forEach((user) => {
                if(user.id === userId){
                document.querySelector(`.js-selection-${userId}`).classList.remove('checked');
                document.querySelector(`.js-CTA-cart-${userId}`).classList.remove('js-display-cart');
                };
            })
        });
    };

    document.querySelectorAll('.js-selection').forEach((button) => {
        button.addEventListener('click', () => {
            const userId = button.dataset.userId;
            clearInterval(setIntervalId);
            autoShowCarts();
            showCart(userId);
        });
    });
}

