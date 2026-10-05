import React from 'react';
import { Link } from 'react-router-dom';

function MedicineCard({ medicine }) {
  const brandName = medicine.openfda?.brand_name?.[0] || 'Unknown Brand';
  const genericName = medicine.openfda?.generic_name?.[0] || 'N/A';
  const manufacturer = medicine.openfda?.manufacturer_name?.[0] || 'Manufacturer unknown';
  const purpose = medicine.purpose?.[0] || medicine.indications_and_usage?.[0] || 'No description available';
  const medicineId = medicine.id || medicine.set_id;

  return (
    <div className="medicine-card">
      <div className="medicine-header">
        <h3 className="medicine-title">{brandName}</h3>
        <span className="medicine-generic">{genericName}</span>
      </div>
      <p className="medicine-manufacturer">🏢 {manufacturer}</p>
      <p className="medicine-purpose">
        {purpose.length > 120 ? `${purpose.substring(0, 120)}...` : purpose}
      </p>
      {medicineId && (
        <Link to={`/medicine/${medicineId}`} className="details-btn">
          View Details →
        </Link>
      )}
    </div>
  );
}

export default MedicineCard;
