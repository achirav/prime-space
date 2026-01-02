import React from "react";
import { Info } from "lucide-react";
import "./DemoWarning.css";

const DemoWarning = ({ onClose }) => {
  return (
    <div className="demo-overlay" role="dialog" aria-modal="true">
      <div className="demo-card">
        <div className="demo-icon">
          <Info size={22} />
        </div>

        <h3 className="demo-title"> Note</h3>

        <p className="demo-text">
          This website is created for demonstration and academic purposes.
          All properties, prices, and images shown are fictional and do not
          represent real listings.
        </p>

        {/*Button*/}
        <button
          className="demo-btn"
          onClick={onClose}
          aria-label="Dismiss demo notice"
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default DemoWarning;
