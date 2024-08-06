import { FaUserAlt } from "react-icons/fa";
import { MdPayments, MdSpaceDashboard, MdAccessTimeFilled, MdAssignment } from "react-icons/md";

const navItems = [
    { href: "/admin/dashboard", icon: MdSpaceDashboard, label: "Dashboard" },
    { href: "/admin/employee", icon: FaUserAlt, label: "Employee" },
    { href: "/admin/attendance", icon: MdAssignment, label: "Attendance" },
    { href: "/admin/payroll", icon: MdPayments, label: "Payroll" },
    { href: "/admin/history", icon: MdAccessTimeFilled, label: "History" },
];

export default navItems;