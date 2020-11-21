import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";

import Footer from "./Footer";

const storyDetails = {
    title: "Organisms/Footer",
    component: Footer,
};
export default storyDetails;

const Template: Story<ComponentProps<typeof Footer>> = (args) => {
    return <Footer {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
