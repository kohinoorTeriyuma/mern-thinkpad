import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router";
import api from "../lib/axios";
import { useNavigate } from "react-router";

const NoteDetailPage = () => {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        setLoading(true); // start loading

        const res = await api.get(`notes/${id}`);
        setNote(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // stop loading
      }
    };

    fetchNote();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!note.title && !note.content) {
      toast.error("Atleast one Field Should be Changed ");
      return;
    }

    try {
      await api.put(`/notes/${id}`, {
        title: note.title,
        content: note.content,
      });
      setService(true);
      toast.success("Note Updated Succesfully");
      navigate("/");
    } catch (error) {
      console.log("Error in NoteDetailPage", error);
    } finally {
      setService(false);
    }
  };

  return (
    <div className="">
      <div className=" h-screen w-screen flex items-center justify-center">
        <form onSubmit={handleUpdate}>
          <div className="  w-100">
            <div>
              <label>Title</label>
              <br />
              <input
                type="text"
                placeholder="Update Your title"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
                className=" input rounded-full mt-2 w-94 mb-3"
              />

              <br />

              <label className="mt-4">Content</label>
              <br />

              <textarea
                type="text"
                placeholder="Update your content here"
                onChange={(e) => setNote({ ...note, content: e.target.value })}
                value={note.content}
                className="textarea w-94 h-44 rounded-2xl mt-2"
              />

              <button
                className=" ml-72 mt-4 border px-3 py-2 rounded-xl"
                type="submit"
                disabled={service}>
                {service ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div></div>
    </div>
  );
};

export default NoteDetailPage;
