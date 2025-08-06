import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const HotelsSection = () => {
  const hotels = [
    {
      name: "Courtyard by Marriott Pune Hinjewadi",
      address: "S. No 19 & 20, P4, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
      price: "₹ 10,700",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
      bookingLink: "#"
    },
    {
      name: "Hyatt Place Pune Hinjawadi",
      address: "Hinjewadi Phase 1 Rd, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
      price: "₹ 10,000",
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop",
      bookingLink: "#"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">Hotels near PCCOE, Pune</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8 items-stretch">
          {hotels.map((hotel, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-secondary">{hotel.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {hotel.address}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-bold text-primary">Tentative Price: </span>
                    <span className="font-bold text-lg">{hotel.price}</span>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">Rating: {hotel.rating}</span>
                  </Badge>
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark"
                  asChild
                >
                  <a href={hotel.bookingLink} target="_blank" rel="noopener noreferrer">
                    Booking Link
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;