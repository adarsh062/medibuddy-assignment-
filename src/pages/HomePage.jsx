import { useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import MedicineCard from "../components/Medicine-card";
import Loading from "../components/Loading";
import ErrorMsg from "../components/ErrorMsg";
import { searchMedicines } from "../services/api";

function HomePage() {
    const [query, setQuery] = useState("");
    const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const controllerRef = useRef(null);

    const handleSearch = async () => {
        if (!query.trim()) return;

        controllerRef.current?.abort();

        const controller = new AbortController();
        controllerRef.current = controller;

        try {
            setLoading(true);
            setError("");

            const data = await searchMedicines(
                query.trim(),
                controller.signal);

                setMedicines(data.results || []);

                if (!data.results?.length) {
                    setError("No results found");
                }
            } catch (err) {
                if (err.name !== "AbortError") {
                    setMedicines([]);
                    setError("Unable to fetch medicines");
                }
            } finally {
                setLoading(false);
            }
        };

        return (
            <div className="home-container">
                <h1>Know your medicine</h1>
                <p className="subtitle">Search medicines by brand name or active ingredient.</p>
                <SearchBar value={query}
                onChange={setQuery}
                onSearch={handleSearch}
                />
                
                {loading && <Loading />}
                
                {error && <ErrorMsg message={error} />}
                
                {!loading && !error && medicines.length > 0 && (
                    <div className="cards-list">
                        {medicines.map((medicine, index) => (
                            <MedicineCard key={index}
                            medicine={medicine}
                            />
                        ))}
                    </div>)}
                </div>);
}

export default HomePage;
