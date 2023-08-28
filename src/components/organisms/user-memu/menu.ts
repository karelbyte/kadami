import { useState } from "react";

interface menuItemI {
  fnClick: Function,
  name: string
}

const logOut = (handleClose: Function) => {
    handleClose()
}


const useMenu = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItes: Array<menuItemI> = [
       {
        fnClick: () => logOut(handleClose),
        name: "Salir.."
       }
    ];

    return {
        anchorEl, 
        handleMenu,
        handleClose,
        menuItes,
    }
}

export {useMenu}