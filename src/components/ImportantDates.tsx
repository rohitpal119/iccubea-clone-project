import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const ImportantDates = () => {
  const dates = [
    {
      month: "May",
      date: "15",
      year: "2025",
      event: "Full Paper Submission",
      suffix: "th"
    },
    {
      month: "July",
      date: "5",
      year: "2025",
      event: "Notification of Acceptance",
      suffix: "th",
      strikethrough: "25th June 2025"
    },
    {
      month: "July",
      date: "10",
      year: "2025", 
      event: "Camera Ready Paper Submission",
      suffix: "th",
      strikethrough: "30th June 2025"
    }
  ];

  return (
    <div className="w-full lg:w-80">
      <Card className="bg-secondary text-secondary-foreground">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="w-5 h-5" />
            IMPORTANT DATES
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {dates.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="bg-primary text-primary-foreground p-3 rounded text-center min-w-[60px]">
                <div className="text-xs font-medium">{item.month}</div>
                <div className="text-lg font-bold">{item.date}</div>
              </div>
              <div className="flex-1">
                <div className="font-medium">
                  {item.date}<sup>{item.suffix}</sup> {item.month} {item.year}
                </div>
                {item.strikethrough && (
                  <div className="text-sm line-through text-muted-foreground">
                    {item.strikethrough}
                  </div>
                )}
                <div className="text-sm mt-1">{item.event}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ImportantDates;