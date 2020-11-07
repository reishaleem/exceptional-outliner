import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import Footer from "./Footer";

const storyDetails = {
    title: "Footer",
    component: Footer,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof Footer>> = (args) => {
    return <Footer {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
