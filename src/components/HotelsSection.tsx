import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const HotelsSection = () => {
  const hotels = [
    {
      name: "Hotel Anvisha Executive",
      address: "Bhilarewadi, Pune, Maharashtra 411046",
      price: "₹ 800",
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
      bookingLink:
        "https://www.booking.com/searchresults.en-gb.html?aid=1288252&label=metagha-link-LUIN-hotel-8179385_dev-desktop_los-1_bw-8_dow-Friday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-21411129971_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20250815_ppt-_lp-2356_r-17238151956360806032&utm_medium=localuniversal&hca=m&no_rooms=1&show_room=817938501_382159413_2_0_0&utm_content=dev-desktop_los-1_bw-8_dow-Friday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-21411129971_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20250815_ppt-&utm_campaign=IN&edgtid=Drc7s8HPRjifoOQWSmc3mQ&utm_term=hotel-8179385&gclid=EAIaIQobChMInJfd9oz4jgMVvalmAh2dUzlgEAoYASABEgLWs_D_BwE&ext_price_total=1456.00&efpc=EwCwChRWsAoT&utm_source=metagha&ts=1754476587&highlighted_hotels=8179385&checkin=2025-08-15&redirected=1&dest_type=hotel&hlrd=with_dates&group_adults=2&dest_id=8179385&source=hotel&group_children=0&checkout=2025-08-16&keep_landing=1&sid=c02eb2f21741e3787b404219d8a9b4c3",
    },
    {
      name: "FabHotel Omkar Pride",
      address:
        "Near Mohan marble back gate kondwa -pisoli road, 48, Pisoli, Pune, Maharashtra 411060",
      price: "₹ 1,456",
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop",
      bookingLink: "https://www.fabhotels.com/hotels-in-pune/katraj/",
    },
    {
      name: "Pratikruti The Lakeview Resort",
      address:
        "S.No-47/2, Ambegaon Khurd, Waghjainagar Ahead of Katraj Aagam Jain Mandir, Pune, Maharashtra 411046",
      price: "₹ 1,456",
      rating: 4.1,
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop",
      bookingLink: "https://pratikrutiresort.co.in/",
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl font-extrabold text-green-900 text-center mb-12">
          Hotels Near KJCOEMR, Pune
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {hotels.map((hotel, index) => (
            <div key={index} className="max-w-md w-full mx-auto">
              <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="h-48 bg-muted overflow-hidden rounded-t-2xl relative group">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-green-900">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-green-700 mb-4 leading-relaxed flex-grow">
                    {hotel.address}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="font-semibold text-green-800">
                        Tentative Price:{" "}
                      </span>
                      <span className="font-bold text-green-900">{hotel.price}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md"
                      style={{ minWidth: "90px", justifyContent: "center" }}
                    >
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">Rating: {hotel.rating}</span>
                    </Badge>
                  </div>

                  <Button
                    className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg py-3 shadow-md transition"
                    asChild
                  >
                    <a
                      href={hotel.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Book ${hotel.name}`}
                    >
                      Booking Link
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition"
            aria-label="Read more hotels"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
