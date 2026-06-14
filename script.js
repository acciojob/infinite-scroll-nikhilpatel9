const list = document.getElementById("infi-list");

function addItems(count) {
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(listItem);
    }
}

addItems(10);

function handleScroll() {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight - 1) {
        addItems(2);
    }
}

list.addEventListener("scroll", handleScroll);