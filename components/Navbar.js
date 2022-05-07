import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
const Navbar = () => {
    const [query, setquery] = useState("");
    return (
        <nav className="navbar navbar-light bg-light shadow fixed-top">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">Countries data</a>
                </Link>
                <form
                    className="d-flex"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        Router.push(`/detail/${query}`);
                    }}
                >
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={query}
                        onChange={(e) => setquery(e.target.value)}
                    />
                    <button className="btn btn-outline-success">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
