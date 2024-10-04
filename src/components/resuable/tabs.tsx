import { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #e0e0e0;
`;
interface TabStyledItem {
    isActive: boolean;
}
interface TabProps {
    tabs: TabItem[];
}
interface TabItem {
    name: string;
    value: number;
}
const TabItem = styled("div")<TabStyledItem>(({ isActive }) => ({
    padding: "10px 20px",
    cursor: "pointer",
    color: isActive ? "#1e90ff" : "#888888",
    fontWeight: isActive ? "bold" : "normal",
    borderBottom: isActive ? "1px solid #1e90ff" : "none",
    transition: "color 0.3s, border-bottom 0.3s",
}));
const Tabs = ({ tabs }: TabProps) => {
    const [activeTab, setActiveTab] = useState<number>(tabs[0].value);

    return (
        <TabContainer>
            {tabs.map((tab, index) => (
                <TabItem
                    key={index}
                    isActive={activeTab === tab.value}
                    onClick={() => setActiveTab(tab.value)}
                >
                    {tab.name}
                </TabItem>
            ))}
        </TabContainer>
    );
};

export default Tabs;
