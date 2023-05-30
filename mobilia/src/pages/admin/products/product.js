import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table";
import DeleteComponent from "../../../components/admin/delete/delete";
import FormComponent from "../../../components/admin/addForm/addForm.js";
import EditAdmin from "../../../components/admin/editForm/editAdmin";
function Products() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    axios
      .get(`${process.env.REACT_APP_URL}Products`)
      .then((response) => {
        console.log(response);
        // add an `id` property to each row object
        const data = response.data.message.map((row, index) => ({
          ...row,
          id: index + 1,
        }));
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const columns = [
    { field: "name", headerName: "Name", width: 450 },
    { field: "category", headerName: "Category", width: 300,  valueGetter: (params) => {
      if (params.row.product && params.row.product.Name) {
        return params.row.product.Name;
      }else{
        return "No category yet"
      }
    }
   },

    {
      field: "Action",
      headerName: "Action",
      width: 275,
      renderCell: (params) => {
        return (
          <>
            <DeleteComponent Id={params.row.id} />
            <EditAdmin
              inputFields={[
                { name: "userName", label: "User Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "FirstName", label: "FullName", type: "email" },
              ]}
              title="Products"
            />
          </>
        );
      },
    },
  ];

  return (
    <section>
      <h1>Products </h1>
      <FormComponent
        inputFields={[{ name: "name", label: "Name", type: "text" }]}
        url="Products"
        title="Products"
      />
      <Table columns={columns} rows={Products} />
    </section>
  );
}
export default Products;
