import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import Navbar from "./Navbar";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const storyDetails = {
    title: "Organisms/AppNavbar",
    component: Navbar,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof Navbar>> = (args) => {
    return (
        <Navbar {...args}>
            <IconButton color="inherit" aria-label="open drawer" edge="start">
                <MenuIcon />
            </IconButton>
        </Navbar>
    );
};

export const PrimaryNavbarWithMenuIcon = Template.bind({});
PrimaryNavbarWithMenuIcon.args = {};
