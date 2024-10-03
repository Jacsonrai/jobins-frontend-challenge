export const StatusChecker = (status: string) => {
    switch (status) {
        case "pending":
            return "orange";
        case "completed":
            return "green";
        case "cancelled":
            return "red";
        default:
            return "";
    }
};
