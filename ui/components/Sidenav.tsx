import Link from "next/link";

export default function Sidenav() {
    return (
        <div className="sidenav">
            <ul>
                <li><Link href="/">Главная</Link></li>
                <li><Link href="/stations">Станции</Link></li>
            </ul>
        </div>
    )
}