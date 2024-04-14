import Link from "next/link";

export default function CardProjectResumen({ url }) {
    return (
        <Link href={url} className="CardProjectResumen">

            <img />
            <div>
                <h3>Titulo Proyecto</h3>
                <span className="ProjectOwner">Propietario del Proyecto</span>
            </div>

        </Link>

    )
}