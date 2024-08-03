import { currentProps, dayProps, locationProps } from "@/types/weather";
import { Billboard } from "./billboard";
import { Forecast } from "./forecast";

interface DashboardProps {
  location?: locationProps;
  current?: currentProps;
  forecast?: {
    forecastday: dayProps[];
  };
}

export const Dashboard = ({ location, current, forecast }: DashboardProps) => {
  return (
    <div className="flex h-full w-full flex-col space-y-8 p-6">
      <Billboard location={location} current={current} />
      <Forecast
        data={forecast?.forecastday.filter(
          (item) => item.date !== location?.localtime.split(" ")[0],
        )}
      />
    </div>
  );
};
