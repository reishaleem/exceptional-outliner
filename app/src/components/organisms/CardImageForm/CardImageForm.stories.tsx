import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import CardImageForm from "./CardImageForm";

import OnePiece from "../../../images/onepieceworldbright.jpg";

const storyDetails = {
    title: "CardImageForm",
    component: CardImageForm,
    decorators: [
        (getStory: any) => (
            <MemoryRouter>
                <div style={{ height: "100vh" }}>{getStory()}</div>
            </MemoryRouter>
        ),
    ],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof CardImageForm>> = (args) => {
    return <CardImageForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    image: OnePiece,
    height: "75%",
    width: "100%",
    marginLeft: "24px",
    marginRight: "24px",
    formHeader: "Login",
};
