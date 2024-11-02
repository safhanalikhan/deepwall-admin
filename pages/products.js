import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data);
    });
  }, []);
  return (
    <Layout>
      <Link className="btn-primary " href={'/products/new'}>Add Product</Link>
      <table className="basic border-spacing-2  mt-2">
        <thead>
          <tr>
            <td>Product name</td>
          </tr>
        </thead>
        <tbody  >
          {products.map(product => (
            <tr key={product._id}>
              <td style={{ display: "flex", gap: "5px" }} >
                <div style={{ flex: 1 }}  >{product.title}</div>
                <Link className="btn-default" href={'/products/edit/' + product._id}>
                  <i className="bi bi-pen"></i>
                </Link>
                <Link className="btn-red" href={'/products/delete/' + product._id}>
                  <i className="bi bi-trash"></i>
                </Link>
              </td>
              {/* <td> */}

              {/* </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}