import { typeList } from "../constants/contacts-constants.js";

const parseBoolean = value => {
    if(typeof value !== "string") return;

    if(!["true", "false"].includes(value)) return;

    return value === "true";
}

const parseContactFitlerParams = ({type, favorite})=> {
    const parsedType = typeList.includes(type) ? type : null;
    const parsedFavorite = parseBoolean(favorite);
    console.log(parsedFavorite)
    return {
        type: parsedType,
        favorite: parsedFavorite,
    }
}

export default parseContactFitlerParams;