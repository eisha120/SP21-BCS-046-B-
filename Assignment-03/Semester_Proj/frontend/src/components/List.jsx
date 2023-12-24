import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const ordersPerPage = 5;
  const lastIndex = currentPage * ordersPerPage;
  const firstIndex = lastIndex - ordersPerPage;

  const records = orders.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(orders.length / ordersPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const getOrders = async () => {
    // API Call
    const response = await fetch(
      "http://localhost:5000/api/orders/fetchallorders",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      }
    );
    const json = await response.json();
    setOrders(json);
    console.log("json: ", json);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/api/orders/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    const newOrders = orders.filter((ord) => {
      return ord._id !== id;
    });
    setOrders(newOrders);
    console.log("json: ", json);
  };

  useEffect(() => {
    getOrders();
  }, []);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="text-dark ">
      <h2 className="d-flex justify-content-center">Listed Orders</h2>
      <div className="container my-5">
        <div className="d-flex justify-content-center" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search by Order Product"
            aria-label="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.currentTarget.value.toLowerCase());
            }}
          />
        </div>
      </div>

      <Link
        to="/order"
        className="btn btn-dark d-flex justify-content-center mx-5 my-3"
      >
        Add New Order
      </Link>

      <table className="table text-light">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Order</th>
            <th>Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {records
            .filter((record) => record.order.toLowerCase().includes(search))
            .map((order) => {
              return (
                <tr>
                  <td>{order.fname}</td>
                  <td>{order.lname}</td>
                  <td>{order.address}</td>
                  <td>{order.city}</td>
                  <td>{order.number}</td>
                  <td>{order.email}</td>
                  <td>{order.order}</td>
                  <td>{order.date}</td>
                  <td>
                    <Link
                      to=""
                      onClick={() => {
                        handleDelete(order._id);
                      }}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div className="container d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <Link
                class="page-link"
                to="/list"
                aria-label="Previous"
                onClick={prePage}
              >
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>

            {numbers.map((num) => {
              return (
                <li class="page-item">
                  <Link
                    class="page-link"
                    to="/list"
                    onClick={() => changeCPage(num)}
                  >
                    {num}
                  </Link>
                </li>
              );
            })}

            <li class="page-item">
              <Link
                class="page-link"
                to="/list"
                aria-label="Next"
                onClick={nextPage}
              >
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default List;
