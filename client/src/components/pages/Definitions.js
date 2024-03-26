import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../modules/Card.js";
import { get } from "../../utilities.js";
import "./Markets.css"

const Markets = (props) => {
  const navigate = useNavigate();
  const [markets, setMarkets] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    category: [],
    condition: [],
    price: [],
  });

  useEffect(() => {
    if (!props.userId) {
      // alert("You have to login first");
      navigate("/");
    }
  }, [props.userId]);

  // When the Markets component mounts
  useEffect(() => {
    document.title = "Market"
    get("/api/markets").then((marketObjs) => {
      let reversedMarketObjs = marketObjs.reverse();
      setMarkets(reversedMarketObjs);
    });
  }, []);

  const handleCheckboxChange = (filterType, value) => {
    if (selectedFilters[filterType].includes(value)) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: prevFilters[filterType].filter((filter) => filter !== value),
      }));
    } else {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: [...prevFilters[filterType], value],
      }));
    }
  };

  const filteredMarkets = markets.filter((_marketObj) => {
    const marketObj = _marketObj.market;
    return (
      (selectedFilters.type.length === 0 || selectedFilters.type.includes(marketObj.type)) &&
      (selectedFilters.category.length === 0 || selectedFilters.category.includes(marketObj.category)) &&
      (selectedFilters.condition.length === 0 || selectedFilters.condition.includes(marketObj.condition)) &&
      (selectedFilters.price.length === 0 || selectedFilters.price.includes(marketObj.price))
    );
  });
  const marketsList = filteredMarkets.length > 0 ? (
    filteredMarkets.map((_marketObj) => {
      const marketObj = _marketObj.market;
      return <Card
      key={marketObj._id}
      _id={marketObj._id}
      creator_name={marketObj.creator_name}
      creator_id={marketObj.creator_id}
      userId={props.userId}
      postDate={marketObj.postDate}
      title={marketObj.title}
      content={marketObj.content}
      type={marketObj.type}
      category={marketObj.category}
      condition={marketObj.condition}
      price={marketObj.price}
      file={_marketObj.file}
    />
    }
    )
  ) : (
    <div className="Markets-nothing">No goods available!</div>
  );

  return (
    <div className="Markets-container">
      <div className="Markets-filters">
        <h2 className="Markets-filtersTitle">Search Filters</h2>
        <div className="Markets-filtersItem">
          <h4>Type</h4>
          <ul>
            <li>
              <input type="checkbox" id="Sales" value="Sales" onChange={() => handleCheckboxChange("type", "Sale")} />
              <label for="Sales" className="Markets-filtersLabel">Sales</label>
            </li>
            <li>
              <input type="checkbox" id="Orders" value="Orders" onChange={() => handleCheckboxChange("type", "Order")} />
              <label for="Orders" className="Markets-filtersLabel">Orders</label>
            </li>
            <li>
              <input type="checkbox" id="Borrow" value="Borrow" onChange={() => handleCheckboxChange("type", "Borrow")} />
              <label for="Borrow" className="Markets-filtersLabel">Borrow</label>
            </li>
            <li>
              <input type="checkbox" id="Shares" value="Shares" onChange={() => handleCheckboxChange("type", "Share")} />
              <label for="Shares" className="Markets-filtersLabel">Shares</label>
            </li>
            <li>
              <input type="checkbox" id="GiveAway" value="Give away" onChange={() => handleCheckboxChange("type", "Give away")} />
              <label for="GiveAway" className="Markets-filtersLabel">Give Away</label>
            </li>
          </ul>
        </div>
        <div className="Markets-filtersItem">
          <h4>Category</h4>
          <ul>
            <li>
              <input type="checkbox" id="Academic" value="Academic" onChange={() => handleCheckboxChange("category", "Academics")} />
              <label for="Academic" className="Markets-filtersLabel">Academic</label>
            </li>
            <li>
              <input type="checkbox" id="Electronics" value="Electronics" onChange={() => handleCheckboxChange("category", "Electronics")} />
              <label for="Electronics" className="Markets-filtersLabel">Electronics</label>
            </li>
            <li>
              <input type="checkbox" id="Furniture" value="Furniture" onChange={() => handleCheckboxChange("category", "Furniture")} />
              <label for="Furniture" className="Markets-filtersLabel">Furniture</label>
            </li>
            <li>
              <input type="checkbox" id="Clothing" value="Clothing" onChange={() => handleCheckboxChange("category", "Clothing")} />
              <label for="Clothing" className="Markets-filtersLabel">Clothing</label>
            </li>
            <li>
              <input type="checkbox" id="Tickets" value="Tickets" onChange={() => handleCheckboxChange("category", "Ticket")} />
              <label for="Tickets" className="Markets-filtersLabel">Tickets</label>
            </li>
            <li>
              <input type="checkbox" id="Art" value="Art" onChange={() => handleCheckboxChange("category", "Art")} />
              <label for="Art" className="Markets-filtersLabel">Art</label>
            </li>
            <li>
              <input type="checkbox" id="Transportation" value="Transportation" onChange={() => handleCheckboxChange("category", "Transportation")} />
              <label for="Transportation" className="Markets-filtersLabel">Transportation</label>
            </li>
          </ul>
        </div>
        <div className="Markets-filtersItem">
          <h4>Condition</h4>
          <ul>
            <li>
              <input type="checkbox" id="Excellent" value="Excellent" onChange={() => handleCheckboxChange("condition", "Excellent")} />
              <label for="Excellent" className="Markets-filtersLabel">Excellent</label>
            </li>
            <li>
              <input type="checkbox" id="Fair" value="Fair" onChange={() => handleCheckboxChange("condition", "Fair")} />
              <label for="Fair" className="Markets-filtersLabel">Fair</label>
            </li>
            <li>
              <input type="checkbox" id="Bad" value="Bad" onChange={() => handleCheckboxChange("condition", "Bad")} />
              <label for="Bad" className="Markets-filtersLabel">Bad</label>
            </li>
          </ul>
        </div>
        <div className="Markets-filtersItem">
          <h4>Price range</h4>
          <ul>
            <li>
              <input type="checkbox" id="<10" value="<10" onChange={() => handleCheckboxChange("price", "< 10")} />
              <label for="<10" className="Markets-filtersLabel">&lt; $10</label>
            </li>
            <li>
              <input type="checkbox" id="10_30" value="10 - 30" onChange={() => handleCheckboxChange("price", "10 - 30")} />
              <label for="10_30" className="Markets-filtersLabel">$10 - 30</label>
            </li>
            <li>
              <input type="checkbox" id="30_60" value="30 - 60" onChange={() => handleCheckboxChange("price", "30 - 60")} />
              <label for="30_60" className="Markets-filtersLabel">$30 - 60</label>
            </li>
            <li>
              <input type="checkbox" id="60_100" value="60 - 100" onChange={() => handleCheckboxChange("price", "60 - 100")} />
              <label for="60_100" className="Markets-filtersLabel">$60 - 100</label>
            </li>
            <li>
              <input type="checkbox" id="100_500" value="100 - 500" onChange={() => handleCheckboxChange("price", "100 - 500")} />
              <label for="100_500" className="Markets-filtersLabel">$100 - 500</label>
            </li>
            <li>
              <input type="checkbox" id="500_1000" value="500 - 1000" onChange={() => handleCheckboxChange("price", "500 - 1000")} />
              <label for="500_1000" className="Markets-filtersLabel">$500 - 1000</label>
            </li>
            <li>
              <input type="checkbox" id=">1000" value=">1000" onChange={() => handleCheckboxChange("price", "> 1000")} />
              <label for=">1000" className="Markets-filtersLabel">&gt; $1000</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="Markets-list">
        {marketsList}
      </div>
    </div>
  );
};
export default Markets;
