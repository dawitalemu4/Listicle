const API_URL = 'https://listicle.onrender.com';

async function getID(id) {
    const response = await fetch(new URL(`/character/${id}`, API_URL).toString())
    const data = await response.json()

    const selectedItem = data.find(item => item.id === parseInt(id));

    if (selectedItem) {
        const ItemContainer = document.getElementById('ItemContainer');
        const ItemTitle = document.getElementById('ItemTitle');
        ItemTitle.textContent = selectedItem.title;
        const ItemDesc = document.getElementById('ItemDesc');
        ItemDesc.textContent = selectedItem.text;
        const ItemImg = document.getElementById('ItemImg');
        ItemImg.src = selectedItem.image;
        
        ItemContainer.appendChild(ItemTitle);
        ItemContainer.appendChild(ItemDesc);
        ItemContainer.appendChild(ItemImg);
    } else {
        console.error('Item not found');
    }
}

async function getAll() {
    const response = await fetch(new URL('/characters', API_URL).toString())
    const data = await response.json()

    const Items = document.getElementById('Items');

    data.forEach(item => {
        const Item = document.createElement('article');
        const ItemTitle = document.createElement('header');
        ItemTitle.textContent = item.title;
        const ItemImg = document.createElement('img');
        ItemImg.src = item.image;
        const ItemFooter = document.createElement('footer');
        const ItemLink = document.createElement('a');
        ItemLink.href = item.page
        ItemLink.textContent = "More on " + item.title
        
        Item.appendChild(ItemTitle);
        Item.appendChild(ItemImg);
        ItemFooter.appendChild(ItemLink);
        Item.appendChild(ItemFooter);
        Items.appendChild(Item);
    });
}