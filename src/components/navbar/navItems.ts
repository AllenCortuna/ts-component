import { FaUserAlt } from "react-icons/fa";
import { MdPayments, MdSpaceDashboard, MdAccessTimeFilled, MdAssignment } from "react-icons/md";

const navItems = [
    { href: "/dashboard", icon: MdSpaceDashboard, label: "Dashboard" },
    { href: "/employee", icon: FaUserAlt, label: "Employee" },
    { href: "/attendance", icon: MdAssignment, label: "Attendance" },
    { href: "/payroll", icon: MdPayments, label: "Payroll" },
    { href: "/history", icon: MdAccessTimeFilled, label: "History" },
];

export default navItems;