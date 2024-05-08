import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
    const categories = useCategory();

    return (
        <Layout title={"All Categories - Swift Cart"}>
            <div className="container-fluid vh-100" style={{ marginTop: "100px" }}>
                <div className="row h-100">
                    {categories.map((c) => (
                        <div className="col-md-4 mt-4 mb-3" key={c._id}>
                            <div className="card h-100">
                                <Link
                                    to={`/category/${c.slug}`}
                                    className="btn cat-btn d-flex align-items-center justify-content-center"
                                    style={{ fontSize: "20px", fontWeight: "bold", height: "100%" }}
                                >
                                    {c.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Categories;
