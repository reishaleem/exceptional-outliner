import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import OverlayImage from "./OverlayImage";

import OnePiece from "../../../images/onepieceworld.jpg";

const storyDetails = {
    title: "OverlayImage",
    component: OverlayImage,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof OverlayImage>> = (args) => {
    return <OverlayImage {...args} />;
};

export const NoTextFullPage = Template.bind({});
NoTextFullPage.args = {
    image: OnePiece,
    fullPage: true,
};

export const WithTextFullPage: Story<ComponentProps<typeof OverlayImage>> = (
    args
) => (
    <OverlayImage {...args}>
        <p>Text</p>
    </OverlayImage>
);
WithTextFullPage.args = {
    image: OnePiece,
    fullPage: true,
};
