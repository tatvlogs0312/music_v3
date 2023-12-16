import React, { useEffect, useState } from "react";
import "./HistoryPage.css";
import Warnning from "../../components/warnning/Warnning";
import { Link } from "react-router-dom";
import PlayList from "../../components/playlist/PlayList";
import axios from "axios";

const baseURL = "http://localhost:8080";

function HistoryPage() {
  const [page, setPage] = useState(0);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/user/history-list?page=${page}&size=5`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const list = res.data;
        if (list.length > 0) {
          // Fix: Check the length of the list
          list.forEach((element) => {
            setSongs((prevSongs) => [...prevSongs, element]);
          });
        }
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div className="history-page">
      {localStorage.getItem("me") === null ? (
        <Warnning />
      ) : (
        <div>
          <div>
            <div className="search-song">
              <div
                style={{
                  fontSize: "20px",
                  color: "#3eb2fd",
                }}
              >
                Lịch sử
              </div>
              <div className="row">
                {songs.length > 0 &&
                  songs.map((x) => (
                    <div className="col-md-12" key={x.id}>
                      <Link to={`/song/${x.id}`}>
                        <PlayList song={x}></PlayList>
                      </Link>
                    </div>
                  ))}
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setPage(page + 1)}
              >
                Xem Thêm
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HistoryPage;
