const buyChocolate = () => {
    const chocolate = {
        type: "Milk Chocolate"
    }

    return chocolate;
}

addFlavoring = (obj) => {
    obj.flavor = "Mint";

    return obj;
}

makeBarkMixture = (obj) => {
    obj.flavor === "Mint" ? obj.mixed = true : obj.mixed = false;

    return obj;
}

bakeCandy = (obj) => {
    if (obj.baked === true) {
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    }
}


console.log(bakeCandy(makeBarkMixture(addFlavoring(buyChocolate))));

//Don't log like I did. Set the function's return value each to a variable, then log the final variable.
