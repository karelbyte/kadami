import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC } from "react";
import { IMainDrawer, DrawerLeft, useMainMenu } from "./menu";

const MainDrawer: FC<IMainDrawer> = (props: IMainDrawer) => {
    const { openDrawer, setOpenDrawer, menuItems } = useMainMenu(props)

    return <DrawerLeft
        hidden={!openDrawer}
        onClose={() => setOpenDrawer(false)
        }
    >
        <List>
            {menuItems && menuItems.map((item, index) =>
                <ListItem disablePadding key={index}>
                    <ListItemButton onClick={() => item.fnClick()}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                </ListItem>)}
        </List>
    </DrawerLeft>
}

export default MainDrawer;