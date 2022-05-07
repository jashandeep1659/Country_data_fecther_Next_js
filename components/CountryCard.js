import React from "react";
import Link from "next/link";
const CountryCard = ({ item }) => {
    return (
        <div
            className="border rounded px-3 py-3  w-100 h-100 flex-column d-flex justify-content-between shadow"
            id="cccards"
        >
            <Link href={`/detail/${item.name.common}`}>
                <a>
                    <div>
                        <img src={item.flags.png} />
                    </div>
                    <div>
                        <div className="text fw-bolder fs-6 mt-2 mb-1">
                            {item.name.common}
                        </div>
                        <p className="m-0 p-0">
                            <span className="fw-bold">Population:</span>{" "}
                            {item.population}
                        </p>
                        <p className="m-0 p-0">
                            <span className="fw-bold">Area:</span> {item.area}
                        </p>
                        <p className="m-0 p-0">
                            <span className="fw-bold">Region:</span>{" "}
                            {item.region}
                        </p>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default CountryCard;
