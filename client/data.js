function getID(id) {
    const items = [
        { id: 1, title: "Luffy", text: "King of Pirates", image: "https://i.pinimg.com/originals/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" },
        { id: 2, title: "Zoro", text: "First Mate", image: "https://us-tuna-sounds-images.voicemod.net/63b88f94-323d-4b6f-bc89-5d3eb259c25f-1659734293094.jpg" },
        { id: 3, title: "Sanji", text: "Crew Cook", image: "https://i.pinimg.com/originals/75/13/bc/7513bc09a23d5a787eb18d93cf308294.jpg" },
        { id: 4, title: "Chopper", text: "Crew Doctor", image: "https://pbs.twimg.com/media/Ej00TH2WoAAIy37.jpg" },
        { id: 5, title: "Robin", text: "Crew Historian", image: "https://i.ytimg.com/vi/AvHURUhjq6s/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgUShhMA8=&rs=AOn4CLAWerfhCn2hMOFLmOfe2-0NllIyBg" }
    ];

    const selectedItem = items.find(item => item.id === parseInt(id));

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

function getAll() {
    const allItems = [
        { id: 1, title: "Luffy", text: "King of Pirates", page: "/character/1", image: "https://i.pinimg.com/originals/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg" },
        { id: 2, title: "Zoro", text: "", page: "/character/2", image: "https://us-tuna-sounds-images.voicemod.net/63b88f94-323d-4b6f-bc89-5d3eb259c25f-1659734293094.jpg" },
        { id: 3, title: "Sanji", text: "", page: "/character/3", image: "https://i.pinimg.com/originals/75/13/bc/7513bc09a23d5a787eb18d93cf308294.jpg" },
        { id: 4, title: "Chopper", text: "", page: "/character/4", image: "https://pbs.twimg.com/media/Ej00TH2WoAAIy37.jpg" },
        { id: 5, title: "Robin", text: "", page: "/character/5", image: "https://i.ytimg.com/vi/AvHURUhjq6s/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgUShhMA8=&rs=AOn4CLAWerfhCn2hMOFLmOfe2-0NllIyBg" }
    ];

    const Items = document.getElementById('Items');

    allItems.forEach(item => {
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