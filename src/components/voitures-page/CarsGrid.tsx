import type { CarCardData } from "./CarCard";
import { CarCard } from "./CarCard";
import { CarsPagination } from "./CarsPagination";

type CarsGridProps = {
  cars: CarCardData[];
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
};

export function CarsGrid({
  cars,
  currentPage,
  totalPages,
  onChangePage,
}: CarsGridProps) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <CarsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={onChangePage}
      />
    </>
  );
}

