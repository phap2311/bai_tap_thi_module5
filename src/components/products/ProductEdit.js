import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function ProductEdit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({})
    useEffect(() => {
            axios.get("http://localhost:3000/products/" + id).then(res => {
                setData(res.data)
            })
        }, []
    )
    return (
        <>
            <h1 className="text-center">Form edit product</h1>
            <Formik initialValues={data} onSubmit={values => {
                axios.put("http://localhost:3000/products/" + id, values).then(res => {
                    navigate("/")
                })
            }
            } enableReinitialize={true}>
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
                            <button className="btn btn-primary m-lg-2"><Link style={{color:"white"}} to={"/"}>Come back</Link></button>

                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}