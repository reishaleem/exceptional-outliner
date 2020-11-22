import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import Home from "./Home";

const storyDetails = {
    title: "Pages/HomePage",
    component: Home,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof Home>> = (args) => {
    return <Home {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
