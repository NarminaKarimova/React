import Car from "./Car";
import "./Main.css";
import cars from "../cars";

// function createCarComp(car, idx) {
//   return (
//     <Car
//       key={idx}
//       id={car.id}
//       model={car.model}
//       img={car.img}
//       price={car.price}
//       details={car.details}
//     />
//   );
// }

function Main() {
    return (
        <div className="car-list">
            {cars.map((car) => (
                <Car
                    id={car.id}
                    model={car.model}
                    img={car.img}
                    price={car.price}
                    details={car.details}
                />
            ))}
        </div>
    );
}

// function createCarCompList(cars) {
//   let carComps = [];
//   for (let car of cars) {
//     carComps.push(createCarComp(car));
//   }
//   return carComps;
// }

// function createCarCompListMaps(cars) {
//   return cars.map(createCarComp);
// }

export default Main;