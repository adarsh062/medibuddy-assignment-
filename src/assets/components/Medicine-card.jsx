function MedicineCard({ medicine, onClick }) {
    const openfda = medicine.openfda || {};

    return (
        <div onClick={onClick}>
            <h3>{openfda.brand_name?.[0] || "N/A"}</h3>
            <p>Generic: {openfda.generic_name?.[0] </p>
        </div>
    )
}