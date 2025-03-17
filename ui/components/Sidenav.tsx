import Link from "next/link";

export default function Sidenav() {
    return (
        <div className="sidenav">
            <Link href="/">Главная</Link>
            <Link href="/stations">Станции</Link>
        </div>
    )
}