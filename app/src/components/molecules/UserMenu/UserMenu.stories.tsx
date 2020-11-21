import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import OnePiece from "../../../images/onepieceworldbright.jpg";

import UserMenu from "./UserMenu";

const storyDetails = {
    title: "Molecules/UserMenu",
    component: UserMenu,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof UserMenu>> = (args) => {
    return <UserMenu {...args} />;
};

export const withAvatarVariant = Template.bind({});
withAvatarVariant.args = {
    items: ["My Account"],
    profilePicture: OnePiece,
    name: "Reis Haleem",
    variant: "avatar",
};

export const withButtonVariant = Template.bind({});
withButtonVariant.args = {
    items: ["My Account"],
    name: "Reis Haleem",
    variant: "button",
};
