import { Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ACTIVE_CHAIN } from "../util/constant";



export default function ListingCard({ listing }) {
    const router = useRouter()
    return <Card
        className="listing-card"
        onClick={() => {
            router.push(`/listing/${listing.id}`)
        }}
        hoverable
        style={{ width: 360, margin: 5, display: 'inline-block' }}
        actions={[
            <div key="purchases">Purchases: {listing.purchases}</div>,
            <div key="last sale">List Price: {listing.price} {ACTIVE_CHAIN.symbol}</div>,
        ]}
        cover={<Image alt={listing.name} width={240} height={240} src={listing.image} />}>
        <Card.Meta title={listing.name} description={listing.description} />
    </Card>

}