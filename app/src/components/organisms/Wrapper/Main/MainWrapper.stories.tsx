import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import MainWrapper from "./MainWrapper";

const storyDetails = {
    title: "Organisms/MainWrapper",
    component: MainWrapper,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof MainWrapper>> = (args) => {
    return <MainWrapper {...args} />;
};

export const withNoChildren = Template.bind({});
withNoChildren.args = {};
