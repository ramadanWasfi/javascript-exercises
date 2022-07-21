const removeFromArray = function(...args) {
    items = args[0];
    for(j = 1; j < args.length; j++) {
        items = removeSingleItemFromArray(items,args[j]);
    }
    return items;
};

const removeSingleItemFromArray = function(items, toBeRemovedItem) {
    newItems = [];

    for(let i = 0; i < items.length; i++) {
        if(items[i] === toBeRemovedItem)
            continue;
        newItems.push(items[i]);
    }
    return newItems;
};

// Do not edit below this line
module.exports = removeFromArray;
