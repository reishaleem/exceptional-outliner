import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import Navbar from "./Navbar";

const storyDetails = {
    title: "Organisms/PublicNavbar",
    component: Navbar,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof Navbar>> = (args) => {
    return <Navbar {...args} />;
};

export const PrimaryNavbar = Template.bind({});
PrimaryNavbar.args = {};

export const withTransparentLoggedIn = Template.bind({});
withTransparentLoggedIn.args = {
    transparent: true,
    userName: "Reis Haleem",
    userLoggedIn: true,
};

export const withTransparentLoggedOut = Template.bind({});
withTransparentLoggedOut.args = {
    transparent: true,
    userName: "Reis Haleem",
    userLoggedIn: false,
};

export const withPrimaryColorLoggedIn = Template.bind({});
withPrimaryColorLoggedIn.args = {
    userName: "Reis Haleem",
    userLoggedIn: true,
};

export const withPrimaryColorLoggedOut = Template.bind({});
withPrimaryColorLoggedOut.args = {
    userName: "Reis Haleem",
    userLoggedIn: false,
};
