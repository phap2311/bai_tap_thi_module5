import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Product() {
    const [list, setList] = useState([]);
    let loadList = () => {
        axios.get("http://localhost:3000/products").then(res => {
            setList(res.data);
        })
    }
    useEffect(() => {
        loadList();
    }, [])
    return (
        <>
            <button className="btn btn-primary mt-3"><Link style={{color: "white"}} to={"/create-product"}>Create new
                product</Link></button>
            <h1 className="text-center">List product</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Delete</td>
                    <td>Edit</td>
                </tr>
                </thead>
                <tbody>
                {
                    list.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td><Link to={"/detail-product/"+item.id}>{item.title}</Link></td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td onClick={() => {
                                axios.delete("http://localhost:3000/products/" + item.id).then(res => {
                                    alert("Delete success");
                                    loadList();
                                })
                            }}>Delete
                            </td>
                            <td><Link to={"/edit-product/" + item.id}>Edit</Link></td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}