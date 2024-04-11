import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export default function ProductCreate() {
    const navigate = useNavigate();
    return (
        <>
            <h1 className="text-center">Form create product</h1>
            <Formik initialValues={
                {
                    title: "",
                    price: "",
                    description: ""
                }
            } onSubmit={values => {
                axios.post("http://localhost:3000/products", values).then(res => {
                    navigate("/")
                })
            }
            }>
                <Form>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <Field type="text" className="form-control" name="title" id="title"></Field>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <Field type="text" className="form-control" name="price" id="price"></Field>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <Field type="text" className="form-control" name="description" id="description"></Field>
                            </div>
                            <button className="btn btn-primary">Save</button>
                            <button className="btn btn-primary m-lg-2"><Link style={{color: "white"}} to={"/"}>Come back</Link>
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )

}