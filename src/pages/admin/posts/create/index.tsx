import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { withAdminAuth } from "@shared/utils/withAdminAuth";

import s from "./create.module.scss";

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [authorPosition, setAuthorPosition] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [sections, setSections] = useState([{ heading: "", content: "" }]);
  const [comments, setComments] = useState([{ author: "", date: "", text: "" }]);
  const [imagePreviewFile, setPreviewFile] = useState<File | null>(null);
  const [imageAuthorFile, setAuthorFile] = useState<File | null>(null);

  const uploadItems = [
    { get: imagePreviewFile, set: setPreviewFile, label: "Preview image" },
    { get: imageAuthorFile, set: setAuthorFile, label: "Author image" },
  ];

  const handleImageUpload = async () => {
    if (!imagePreviewFile) return null;

    const formData = new FormData();
    formData.append("image", imagePreviewFile);

    const res = await fetch("/api/posts/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      console.error("Upload failed");
      return null;
    }

    const data = await res.json();
    return data.imageUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imageUrl = "";

    if (imagePreviewFile) {
      const uploadedUrl = await handleImageUpload();
      if (!uploadedUrl) {
        alert("Image upload failed.");
        return;
      }
      imageUrl = uploadedUrl;
    }

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        author,
        authorPosition,
        introduction,
        sections,
        comments: comments.map((comment) => ({ ...comment, date: formatDate(comment.date) })),
        imageUrl,
      }),
    });

    if (res.ok) router.push("/insights");
    else alert("Error creating post");
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
        <div>
          {sections.map((section, index) => (
            <div key={index}>
              <input
                value={section.heading}
                onChange={(e) => {
                  const newSections = [...sections];
                  newSections[index].heading = e.target.value;
                  setSections(newSections);
                }}
                placeholder="Section heading"
                required
              />
              <textarea
                value={section.content}
                onChange={(e) => {
                  const newSections = [...sections];
                  newSections[index].content = e.target.value;
                  setSections(newSections);
                }}
                placeholder="Section content"
                required
              />
              <button
                className={s.remove}
                type="button"
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
        </div>

        <button className={s.add} type="button" onClick={() => setSections([...sections, { heading: "", content: "" }])}>
          ➕ Add Section
        </button>
      </div>

      <div>
        <h2>Comments</h2>
        <div>
          {comments.map((comment, index) => (
            <div key={index}>
              <input
                value={comment.author}
                onChange={(e) => {
                  const newComments = [...comments];
                  newComments[index].author = e.target.value;
                  setComments(newComments);
                }}
                placeholder="Comment author"
              />
              <input
                type="date"
                value={comment.date}
                onChange={(e) => {
                  const newComments = [...comments];
                  newComments[index].date = e.target.value;
                  setComments(newComments);
                }}
                required
              />
              <textarea
                value={comment.text}
                onChange={(e) => {
                  const newComments = [...comments];
                  newComments[index].text = e.target.value;
                  setComments(newComments);
                }}
                placeholder="Comment text"
              />
              <button
                className={s.remove}
                type="button"
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
        </div>

        <button className={s.add} type="button" onClick={() => setComments([...comments, { author: "", date: "", text: "" }])}>
          ➕ Add Comment
        </button>
      </div>

      <div className={s.upload}>
        {uploadItems.map((item, index) => (
          <div
            key={index}
            className={s.dropzone}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                item.set(e.dataTransfer.files[0]);
              }
            }}
            onClick={() => document.getElementById(`imageInput${index}`)?.click()}
          >
            <p>{item.get ? item.get.name : item.label}</p>
            <input id={`imageInput${index}`} type="file" accept="image/*" onChange={(e) => item.set(e.target.files?.[0] || null)} className={s.hiddenInput} />
          </div>
        ))}
      </div>

      <button type="submit">Create Post</button>
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
