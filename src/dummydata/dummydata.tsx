import AuIcon from "../components/icons/AuIcon";
import BrazilIcon from "../components/icons/brazilicon";
import UsaFlagIcon from "../components/icons/usaflagicon";
import type { CountryProgressData, Customer } from "../type/other";
export const customerData: Customer[] = [
    {
        id: "#5089",
        customer: "Joseph Wheeler",
        date: "6 April, 2023",
        total: 2564,
        method: "CC",
        status: "Pending",
    },
    {
        id: "#5090",
        customer: "Jane Doe",
        date: "7 April, 2023",
        total: 1500,
        method: "Cash",
        status: "Cancelled",
    },
    {
        id: "#5091",
        customer: "Jane Doe",
        date: "7 April, 2023",
        total: 1500,
        method: "Cash",
        status: "Completed",
    },
    {
        id: "#5092",
        customer: "Jane Doe",
        date: "7 April, 2023",
        total: 1500,
        method: "Cash",
        status: "Completed",
    },
    {
        id: "#5093",
        customer: "Jane Doe",
        date: "7 April, 2023",
        total: 1500,
        method: "Cash",
        status: "Completed",
    },
    {
        id: "#5094",
        customer: "Jane Doe",
        date: "7 April, 2023",
        total: 1500,
        method: "Cash",
        status: "Completed",
    },
    {
        id: "#5095",
        customer: "Jane Doe",
        date: "7 April, 2023",
        total: 1500,
        method: "Cash",
        status: "Completed",
    },
];

export const countryProgressData: CountryProgressData[] = [
    {
        quantity: "30k",
        country: "United States",
        percent: 25.8,
        icon: UsaFlagIcon,
    },
    {
        quantity: "26k",
        country: "Brazil",
        percent: 16.2,
        icon: BrazilIcon,
    },
    {
        quantity: "17k",
        country: "Australia",
        percent: 11.9,
        icon: AuIcon,
    },
];
