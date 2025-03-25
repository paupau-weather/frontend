import Link from "next/link";
import SidenavUser from "./SidenavUser";

export default function Sidenav() {

    return (
        <div className="sidenav">
            <ul>
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/stations">Станции</Link></li>
            </ul>
            <SidenavUser />
        </div>
    )
}