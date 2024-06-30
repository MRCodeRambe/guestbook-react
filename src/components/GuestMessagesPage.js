// GuestMessagesPage.js
import React, { useEffect, useState } from "react";
import { List } from "antd";
import "./GuestMessagesPage.css";

const GuestMessagesPage = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    let storedGuests = JSON.parse(localStorage.getItem("guests"));
    if (!storedGuests) {
      // Jika tidak ada data di local storage, ambil dari data.json
      const dataJson = require("./data.json");
      storedGuests = dataJson;
      localStorage.setItem("guests", JSON.stringify(dataJson));
    }
    setGuests(storedGuests);
  }, [guests]);

  return (
    <div className="messages-container">
      <div className="scrolling-text">
        <List
          dataSource={guests}
          renderItem={(item) => (
            <div className="message-item">
              <List.Item>
                <List.Item.Meta
                  title={<span className="message">"{item.message}"</span>}
                  description={
                    <span className="name">
                      ~ {item.name}, {item.asal} ~{" "}
                    </span>
                  }
                />
              </List.Item>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default GuestMessagesPage;
