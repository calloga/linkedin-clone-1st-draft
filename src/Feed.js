import Post from "./Post";
import "./Feed.css";

import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import { CalendarViewDay, EventNote, Subscriptions } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { Avatar } from "@mui/material";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const q = query(postCollectionRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return unsub;
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    if (!input || !input.trim()) return;
    await addDoc(postCollectionRef, {
      name: "Calloga",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <span>
          <Avatar />
          <div className="feed__input">
            <form method="post" onSubmit={sendPost}>
              <input
                placeholder="Start a post"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </span>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(
        ({ id, data: { name, description, message, photoUrl, timestamp } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl=""
            timestamp={timestamp}
          />
        )
      )}
    </div>
  );
}

export default Feed;
