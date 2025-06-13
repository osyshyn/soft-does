import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { withAdminAuth } from "@shared/utils/withAdminAuth";
import s from "../create/create.module.scss";

export default function EditPost() {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [authorPosition, setAuthorPosition] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [sections, setSections] = useState([{ heading: "", content: "" }]);
  const [comments, setComments] = useState([{ author: "", date: "", text: "" }]);
  const [imagePreviewFile, setPreviewFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!id) return;
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setAuthor(data.author);
        setAuthorPosition(data.authorPosition);
        setIntroduction(data.introduction);
        setSections(data.sections || []);
        setComments((data.comments || []).map((c: { author: string; date: string; text: string }) => ({ ...c, date: toInputDateFormat(c.date) })));
        setImageUrl(data.imageUrl || "");
      });
  }, [id]);

  const handleImageUpload = async () => {
    if (!imagePreviewFile) return imageUrl;

    const formData = new FormData();
    formData.append("image", imagePreviewFile);

    const res = await fetch("/api/posts/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      console.error("Upload failed");
      return imageUrl;
    }

    const data = await res.json();
    return data.imageUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedImageUrl = await handleImageUpload();

    const res = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        author,
        authorPosition,
        introduction,
        sections,
        comments: comments.map((comment) => ({ ...comment, date: formatDate(comment.date) })),
        imageUrl: updatedImageUrl,
      }),
    });

    if (res.ok) router.push("/insights");
    else alert("Error updating post");
  };

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <Link href="/admin/posts">Back to posts</Link>

      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
        <input value={authorPosition} onChange={(e) => setAuthorPosition(e.target.value)} placeholder="Position" required />
        <textarea value={introduction} onChange={(e) => setIntroduction(e.target.value)} placeholder="Introduction" required />
      </div>

      <div>
        <h2>Sections</h2>
        {sections.map((section, index) => (
          <div key={index}>
            <input
              value={section.heading}
              onChange={(e) => {
                const updated = [...sections];
                updated[index].heading = e.target.value;
                setSections(updated);
              }}
              placeholder="Section heading"
              required
            />
            <textarea
              value={section.content}
              onChange={(e) => {
                const updated = [...sections];
                updated[index].content = e.target.value;
                setSections(updated);
              }}
              placeholder="Section content"
              required
            />
            <button
              type="button"
              className={s.remove}
              onClick={() => {
                const updated = [...sections];
                updated.splice(index, 1);
                setSections(updated);
              }}
            >
              🗑️ Remove Section
            </button>
          </div>
        ))}
        <button className={s.add} type="button" onClick={() => setSections([...sections, { heading: "", content: "" }])}>
          ➕ Add Section
        </button>
      </div>

      <div>
        <h2>Comments</h2>
        {comments.map((comment, index) => (
          <div key={index}>
            <input
              value={comment.author}
              onChange={(e) => {
                const updated = [...comments];
                updated[index].author = e.target.value;
                setComments(updated);
              }}
              placeholder="Comment author"
            />
            <input
              type="date"
              value={comment.date}
              onChange={(e) => {
                const updated = [...comments];
                updated[index].date = e.target.value;
                setComments(updated);
              }}
              required
            />
            <textarea
              value={comment.text}
              onChange={(e) => {
                const updated = [...comments];
                updated[index].text = e.target.value;
                setComments(updated);
              }}
              placeholder="Comment text"
            />
            <button
              type="button"
              className={s.remove}
              onClick={() => {
                const updated = [...comments];
                updated.splice(index, 1);
                setComments(updated);
              }}
            >
              🗑️ Remove Comment
            </button>
          </div>
        ))}
        <button className={s.add} type="button" onClick={() => setComments([...comments, { author: "", date: "", text: "" }])}>
          ➕ Add Comment
        </button>
      </div>

      <div className={s.upload}>
        <div
          className={s.dropzone}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.[0]) setPreviewFile(e.dataTransfer.files[0]);
          }}
          onClick={() => document.getElementById("imageInput")?.click()}
        >
          <p>{imagePreviewFile ? imagePreviewFile.name : imageUrl || "Preview image"}</p>
          <input id="imageInput" type="file" accept="image/*" onChange={(e) => setPreviewFile(e.target.files?.[0] || null)} className={s.hiddenInput} />
        </div>
      </div>

      <button type="submit">Update Post</button>
    </form>
  );
}

export const getServerSideProps = withAdminAuth(async () => {
  return { props: {} };
});

const formatDate = (isoDate: string) => {
  const [yyyy, mm, dd] = isoDate.split("-");
  return `${mm}.${dd}.${yyyy}`;
};

const toInputDateFormat = (dateStr: string) => {
  const [mm, dd, yyyy] = dateStr.split(".");
  return `${yyyy}-${mm}-${dd}`;
};
