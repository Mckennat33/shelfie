const inventory = [
  { id: 1, name: "Apple", quantity: 3 },
  { id: 2, name: "Banana", quantity: 1 },
]

function updateInventory(inventory, item) {
    const exists = inventory.find(invItem => invItem.id === item.id) 
    if (exists) {
        inventory.map(invItem => {
            invItem.id === item.id ? 
            {...invItem, quantity: invItem.quantity + 1}
            : invItem
        })
    }
    return [...inventory, {...item, quantity: 1}]
}