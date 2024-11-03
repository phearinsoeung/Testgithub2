let orderList = [];

function addToOrder(item) {
    orderList.push(item);
    displayOrders();
}

function displayOrders() {
    const orderUl = document.getElementById('orders');
    orderUl.innerHTML = '';

    orderList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        deleteBtn.onclick = function () {
            removeFromOrder(index);
        };

        li.appendChild(deleteBtn);
        orderUl.appendChild(li);
    });
}

function removeFromOrder(index) {
    orderList.splice(index, 1);
    displayOrders();
}

function submitOrder() {
    if (orderList.length === 0) {
        alert('No items in the order.');
        return;
    }

    alert(`Order submitted: ${orderList.join(', ')}`);
    orderList = [];
    displayOrders();
}
