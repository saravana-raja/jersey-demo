import { FaWhatsapp } from "react-icons/fa";

const jerseys = [
    { team: "Mumbai Indians", image: "https://playr.in/cdn/shop/files/MI-1.png?v=1710396494&width=1800" },
    { team: "Chennai Super Kings", image: "https://www.chennaisuperkings.com/shop/_next/image?url=https%3A%2F%2Fstore.chennaisuperkings.com%2F%2Fmedia%2Fcatalog%2Fproduct%2F%2F1%2F_%2F1_12_8.jpg&w=1920&q=75" },
    { team: "Royal Challengers Bangalore", image: "https://m.media-amazon.com/images/I/51GmHwXKpUL.jpg" },
    { team: "Kolkata Knight Riders", image: "https://images.fancode.com/media/catalog/product/k/o/kolkata_knight_riders_men_kkr_lookalike_2024_fan_jersey_customised(1).jpg?hash=eyJrZXkiOiJtZWRpYS9jYXRhbG9nL3Byb2R1Y3Qvay9vL2tvbGthdGFfa25pZ2h0X3JpZGVyc19tZW5fa2tyX2xvb2thbGlrZV8yMDI0X2Zhbl9qZXJzZXlfY3VzdG9taXNlZCgxKS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6MTI3MiwiaGVpZ2h0IjoxNjk2fSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==" },
    { team: "Delhi Capitals", image: "https://ik.imagekit.io/wds/image/cache/catalog/aaa/ipl/delhi-capitals-new-ipl-replica-jersey-2024-dc-2024-with-name-personalization-1-1600x1600.webp" },
    { team: "Sunrisers Hyderabad", image: "https://images.fancode.com/media/catalog/product/s/u/sunrisers_hyderabad_mens_red_and_black_printed_half_sleeves_polo_neck_official_ipl2024_replica_jersey_customised_with_your_name_by_fancode(2).png?hash=eyJrZXkiOiJtZWRpYS9jYXRhbG9nL3Byb2R1Y3Qvcy91L3N1bnJpc2Vyc19oeWRlcmFiYWRfbWVuc19yZWRfYW5kX2JsYWNrX3ByaW50ZWRfaGFsZl9zbGVldmVzX3BvbG9fbmVja19vZmZpY2lhbF9pcGwyMDI0X3JlcGxpY2FfamVyc2V5X2N1c3RvbWlzZWRfd2l0aF95b3VyX25hbWVfYnlfZmFuY29kZSgyKS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6MTI3MiwiaGVpZ2h0IjoxNjk2fSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==" },
    { team: "Rajasthan Royals", image: "https://images.fancode.com/media/catalog/product/r/a/rajasthan_royals_official_match_replica_jersey_2025_with_jacquard_fabric_1.jpg?hash=eyJrZXkiOiJtZWRpYS9jYXRhbG9nL3Byb2R1Y3Qvci9hL3JhamFzdGhhbl9yb3lhbHNfb2ZmaWNpYWxfbWF0Y2hfcmVwbGljYV9qZXJzZXlfMjAyNV93aXRoX2phY3F1YXJkX2ZhYnJpY18xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjoxMjcyLCJoZWlnaHQiOjE2OTZ9LCJ3ZWJwIjp7InF1YWxpdHkiOjYwLCJsb3NzbGVzcyI6ZmFsc2V9fSwib3V0cHV0Rm9ybWF0Ijoid2VicCJ9" },
    { team: "Punjab Kings", image: "https://images.fancode.com/media/catalog/product/p/u/punjab_kings_men_official_ipl2024_match_jersey(8).jpg?hash=eyJrZXkiOiJtZWRpYS9jYXRhbG9nL3Byb2R1Y3QvcC91L3B1bmphYl9raW5nc19tZW5fb2ZmaWNpYWxfaXBsMjAyNF9tYXRjaF9qZXJzZXkoOCkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjEyNzIsImhlaWdodCI6MTY5Nn0sIndlYnAiOnsicXVhbGl0eSI6NjAsImxvc3NsZXNzIjpmYWxzZX19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0=" },
    { team: "Manchester United", image: "https://mufc-live.cdn.scayle.cloud/images/032465a23bed509d050589e6439809a2.jpg?brightness=1&width=1536&height=2048&quality=75&bg=ffffff" },
    { team: "Real Madrid", image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/70428a5aedbf4e9f8f8b9396e8aac157_9366/Real_Madrid_24-25_Home_Mini_Kit_Kids_White_IT5175_03_laydown.jpg" },
    { team: "Barcelona", image: "https://store.fcbarcelona.com/cdn/shop/files/imagen_3.jpg?v=1730388363&width=823" },
    { team: "Argentina National Football Team", image: "https://store.fifa.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FMESSI%2520ARG%2520front.png%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201GPYEXET5B7Y61HW8TB4R0YWE%2522%2C%2522tenantId%2522%3A%2522FIFA%2522%257D&w=3840&q=85" },
];

export default function Catalog() {
    return (
        <div className="relative">
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold text-center mb-6 text-[#150091]">Jersey Catalog</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {jerseys.map((jersey, index) => (
                        <div key={index} className="border rounded-lg shadow-md p-4 text-center bg-white">
                            <div className="w-full h-40 flex justify-center items-center">
                                <img
                                    src={jersey.image}
                                    alt={`${jersey.team} Jersey`}
                                    className="h-full object-contain rounded-lg"
                                />
                            </div>
                            <p className="mt-2 font-semibold text-[#150091]">{jersey.team}</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}
