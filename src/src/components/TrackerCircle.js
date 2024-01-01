import "../styles/tracker.css";
import { useState } from "react";

export default function TrackerCircle() {
  const [recycled, setRecycled] = useState(0);

  const handleIncrement = () => {
    setRecycled(recycled + 1);
  };

  const handleDecrement = () => {
    if (recycled >= 1) {
      setRecycled(recycled - 1);
    }
  };

  return (
    <div class="track">
      <div>
        <div class="contain">
          <div class="circle">{recycled}</div>
        </div>

        <div class="trackButtons">
          <div class="circle-add-button">
            <p onClick={handleDecrement}>-</p>
          </div>
          <br></br>
          <div class="circle-add-button">
            <p onClick={handleIncrement}>+</p>
          </div>
        </div>

        <div>
          <h1>Recycling Tracking Counter</h1>
          <p>
            Make sure to document your recycling habits and work toward your
            goals!!
          </p>
        </div>
      </div>
    </div>
  );
}
