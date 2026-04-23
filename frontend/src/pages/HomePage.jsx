import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TypeIcon } from "lucide-react";

import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import RateLimitedUI from "../components/RateLimitedUI";
import Loading from "../components/Loading";
import api from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimted, setisRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/notes");
        setLoading(false);
        console.log(res.data);
        setNotes(res.data);
      } catch (error) {
        if (error.response?.status === 429) {
          setisRateLimited(true);
        } else {
          toast.error("failed to load data");
          console.log(error);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      {isRateLimted && <RateLimitedUI />}

      <div>
        {loading && <Loading />}
        {notes.length === 0 && !isRateLimted && <NotesNotFound />}
        {notes.length > 0 && !isRateLimted && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
