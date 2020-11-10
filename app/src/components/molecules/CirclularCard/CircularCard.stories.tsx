import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import BuildIcon from "@material-ui/icons/Build";

import CircularCard from "./CircularCard";

const storyDetails = {
    title: "Molecules/CircularCard",
    component: CircularCard,
};
export default storyDetails;

const Template: Story<ComponentProps<typeof CircularCard>> = (args) => {
    return <CircularCard {...args} />;
};

export const withTitleAndBody = Template.bind({});
withTitleAndBody.args = {
    title: "Title",
    body: "This is the body",
    size: "200px",
};

export const withIconAndBody = Template.bind({});
withIconAndBody.args = {
    icon: <BuildIcon />,
    body: "This is the body",
    size: "200px",
};

export const withIconAndTitleAndBody = Template.bind({});
withIconAndTitleAndBody.args = {
    icon: <BuildIcon />,
    title: "Title",
    body: "This is the body",
    size: "200px",
};

export const withBody = Template.bind({});
withBody.args = {
    body: "This is the body",
    size: "300px",
};
