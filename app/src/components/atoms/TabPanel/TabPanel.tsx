import React from "react";

interface Props {
    value: number;
    index: number;
    children: React.ReactNode;
}

const TabPanel: React.FC<Props> = ({
    value,
    index,
    children,
    ...other
}: Props) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
};

export default TabPanel;
