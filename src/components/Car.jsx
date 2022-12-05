import "./Car.css";

function Car(props) {
    return (
        <div className="car-info">
            <img src={props.img} alt="porche_img" />
            <h4 className="car-info--price">{props.price}</h4>
            <p className="car-info--model">{props.model}</p>
            <p className="car-info--details">{props.details}</p>
        </div>
    );
}

export default Car;
