import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";
import PublicIcon from "@material-ui/icons/Public";
import ExploreIcon from "@material-ui/icons/Explore";

import SidebarButtonList from "./SidebarButtonList";

const storyDetails = {
    title: "Molecules/SidebarButtonList",
    component: SidebarButtonList,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof SidebarButtonList>> = (args) => {
    return <SidebarButtonList {...args} />;
};

export const withMainDashboardLinks = Template.bind({});
withMainDashboardLinks.args = {
    buttonNames: ["Worlds", "Explore"],
    icons: [<PublicIcon />, <ExploreIcon />],
    destinations: ["/worlds", "/explore"],
};
