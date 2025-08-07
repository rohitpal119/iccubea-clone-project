import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react"; // icon for distance
// import { places } from "./placesData"; // if you're separating data, or keep inline

const PlacesSection = () => {
  const places = [
    {
      name: "Lonavala",
      description:
        "Situated at an altitude of 622 m in the Sahyadri Range, Lonavala is a beautiful hill station in the Pune district of Maharashtra. It is located about 67 km from Pune, and 95 km from Mumbai. Lonavala has several tourist places in the form of caves, lakes, forts and waterfalls. Lohagad Fort, Rajmachi Point, Bhushi Dam, Kune Waterfalls, Karla Caves, Tikona Fort, Visapur Fort, Bedsa Caves and Tung Fort are some of the best places. The twin hill stations of Lonavala and Khandala are the most popular monsoon getaways in India. The best time to visit Lonavala and Khandala is during the monsoon, between July - September when the scenic spots become lush green and the waterfalls are in full flow.",
      distance: "67 Kms",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    },
    {
      name: "Karla Caves",
      description:
        "The Karla Caves, situated near Lonavala, are an impressive complex of ancient Buddhist rock-cut temples. Located 11 km from Lonavala, 59 km from Pune, and 107 km from Mumbai, these caves are a significant historical site protected by the Archaeological Survey of India. They are a popular destination for tourists exploring the Lonavala region and offer insight into India's rich cultural heritage.",
      distance: "59 Kms",
      image:
        "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=400&h=250&fit=crop",
    },
    {
      name: "Lohagad Fort",
      description:
        "Lohagad Fort, located 11 km from Lonavala, 66 km from Pune, and 114 km from Mumbai, is a historic fort nestled in the Sahyadri hills of Maharashtra. At an altitude of 1,050 meters, it offers stunning views and separates the Indrayani and Pawna basins. Renowned as one of the best tourist attractions in Lonavala, Lohagad Fort is also a favoured trekking spot for those exploring the region.",
      distance: "66 Kms",
      image:
        "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
          Places Near Pune
        </h2>

        {/* Cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {places.map((place, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-md transition-shadow flex flex-col h-[500px]"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {place.name}
                </h3>

                {/* Scrollable description */}
                <div className="overflow-y-auto text-sm text-muted-foreground pr-1 mb-4 max-h-[140px]">
                  {place.description}
                </div>

                {/* Distance footer */}
                <div className="mt-auto text-center font-semibold text-sm border-t pt-3">
                  <div className="flex flex-col items-center gap-1 text-primary">
                    <span>Distance from Pune: {place.distance}</span>
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlacesSection;
