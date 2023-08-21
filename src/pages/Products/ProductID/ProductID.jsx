import React from "react";
import { useRoutes, useParams } from "react-router-dom";

const ProductID = () => {
  let { id } = useParams();
  return <div>ProductID {id} </div>;
};

export default ProductID;
