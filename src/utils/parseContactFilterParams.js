import { typeList } from "../constants/contacts-constants.js";

const parseBoolean = value => {
    if(typeof value !== "string") return;

    if(!["true", "false"].includes(value)) return;

    return value === "true";
}

const parseContactFitlerParams = ({contactType, isFavourite})=> {
    const parsedType = typeList.includes(contactType) ? type : null;
    const parsedFavorite = parseBoolean(isFavourite);
    return {
        contactType: parsedType,
        isFavourite: parsedFavorite,
    }
}

export default parseContactFitlerParams;