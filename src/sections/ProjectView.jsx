import { useMemo, useState } from "react";
import LinkIcon from "../components/LinkIcon";

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/portfolio\//, "").replace(/^\//, "")}`;
const previewPriority = { video: 0, gif: 1, image: 2 };
const typeForPreview = (preview) => preview.type || (/\.mp4(?:$|\?)/i.test(preview.src) ? "video" : /\.gif(?:$|\?)/i.test(preview.src) ? "gif" : "image");

export default function ProjectView({ project }) {
  const previews = useMemo(() => project.previews.map((preview) => ({ ...preview, type: typeForPreview(preview) })).sort((a, b) => previewPriority[a.type] - previewPriority[b.type]), [project.previews]);
  const [selectedPreview, setSelectedPreview] = useState(0);
  const preview = previews[selectedPreview] || { type: "image", src: project.capsule };
  const image = asset(project.capsule);
  const isWebProject = /^web\b/i.test(project.sub), tags = isWebProject ? project.tech : project.tags;
  return <div className="project-detail" id="project-detail" aria-label={`${project.name} details`}><div className="project-gallery"><div className="project-stage">{preview.type === "video" ? <video src={asset(preview.src)} controls muted playsInline preload="metadata" aria-label={`${project.name} video preview`} /> : <img src={asset(preview.src)} alt={`${project.name} project preview`} />}</div><div className="media-strip" aria-label="Project media">{previews.map((item, index) => <button key={item.src} className={selectedPreview === index ? "is-selected" : ""} onClick={() => setSelectedPreview(index)} aria-label={`Show ${project.name} ${item.type} preview ${index + 1}`} aria-pressed={selectedPreview === index}><img src={item.type === "video" ? image : asset(item.src)} alt="" />{item.type === "video" && <span className="play-symbol" aria-hidden="true">▷</span>}</button>)}</div></div><article className="project-info"><div className="capsule"><img src={image} alt={`${project.name} capsule art`} /></div><div className="project-copy"><div className="project-title-row"><h2>{project.name}</h2>{project.time && <span className="project-time">{project.time}</span>}</div><p className="project-description">{project.description}</p><section className="project-metadata" aria-label="Tags"><h3>Tags</h3><div className="metadata-chips">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></section></div><div className="project-links">{project.buttons.map((button) => <a href={button.href} key={button.text} target="_blank" rel="noreferrer"><LinkIcon label={button.text} />{button.text === "Steam" ? "View on Steam" : button.text}</a>)}</div></article></div>;
}
