import { useDispatch } from "react-redux"; // send button actions to redux store

////// Start (Left side controller)
// Left
export const sButtonLeftAct = (event) => {
    event.stopPropagation();
    console.log(`s-L: Thrust left activated.`);
    // btnState.sLeft = true;
    return true;
}
export const sButtonLeftOff = (event) => {
    event.stopPropagation();
    console.log(`s-L: Thrust left off.`);
    // btnState.sLeft = false;
    return false;
}

// Up
export const sButtonUpAct = (event) => {
    event.stopPropagation();
    console.log(`s-U: Thrust up activated.`);
    // btnState.sUp = true;
    return true;
}
export const sButtonUpOff = (event) => {
    event.stopPropagation();
    console.log(`s-U: Thrust up off.`);
    // btnState.sUp = false;
    return false;
}

////// End (Right side controller)
// Up
export const eButtonUpAct = (event) => {
    event.stopPropagation();
    console.log(`e-U: Thrust up activated.`);
    // btnState.eUp = true;
    return true;
}
export const eButtonUpOff = (event) => {
    event.stopPropagation();
    console.log(`e-U: Thrust up off.`);
    // btnState.eUp = false;
    return false;
}

// Right
export const eButtonRightAct = (event) => {
    event.stopPropagation();
    console.log(`e-R: Thrust right activated.`);
    // btnState.eRight = true;
    return true;
}
export const eButtonRightOff = (event) => {
    event.stopPropagation();
    console.log(`e-R: Thrust right off.`);
    // btnState.eRight = false;
    return false;
}