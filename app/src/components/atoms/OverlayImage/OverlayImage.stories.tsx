import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";

import OnePiece from "../../../images/onepieceworld.jpg";

import OverlayImage from "./OverlayImage";

const storyDetails = {
    title: "Atoms/OverlayImage",
    component: OverlayImage,
};
export default storyDetails;

const Template: Story<ComponentProps<typeof OverlayImage>> = (args) => {
    return <OverlayImage {...args} />;
};

export const withoutTextFullPage = Template.bind({});
withoutTextFullPage.args = {
    image: OnePiece,
    fullPage: true,
};

export const withoutTextNotFullPage = Template.bind({});
withoutTextNotFullPage.args = {
    image: OnePiece,
};

export const withTextFullPage: Story<ComponentProps<typeof OverlayImage>> = (
    args
) => (
    <OverlayImage {...args}>
        <p>Text</p>
    </OverlayImage>
);
withTextFullPage.args = {
    image: OnePiece,
    fullPage: true,
};

export const withTextNotFullPage: Story<ComponentProps<typeof OverlayImage>> = (
    args
) => (
    <OverlayImage {...args}>
        <p>Text</p>
    </OverlayImage>
);
withTextNotFullPage.args = {
    image: OnePiece,
};
