import { useRef, useState } from "react";
import profile from "../data/profileData";
import projects from "../data/projects";
import Arrow from "../components/Arrow";
import AsciiArt from "../sections/AsciiArt";
import LinkIcon from "../components/LinkIcon";
import ProjectView from "../sections/ProjectView";
import Skills from "../sections/Skills";
import "../App.css";

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/portfolio\//, "").replace(/^\//, "")}`;

export default function MonoHome() {
  const [selected, setSelected] = useState(0);
  const projectScroller = useRef(null);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });
  const startProjectDrag = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const element = projectScroller.current;
    if (element) dragState.current = { active: true, startX: event.clientX, scrollLeft: element.scrollLeft, moved: false };
  };
  const moveProjectDrag = (event) => {
    const element = projectScroller.current, drag = dragState.current;
    if (!element || !drag.active) return;
    const distance = event.clientX - drag.startX;
    if (Math.abs(distance) > 4) drag.moved = true;
    if (drag.moved) { event.preventDefault(); element.scrollLeft = drag.scrollLeft - distance; }
  };
  const endProjectDrag = () => { dragState.current.active = false; window.setTimeout(() => { dragState.current.moved = false; }, 120); };
  const selectProject = (index, event) => { if (dragState.current.moved) { event.preventDefault(); dragState.current.moved = false; return; } setSelected(index); };
  const selectAdjacentProject = (direction) => {
    const next = selected + direction;
    if (next < 0 || next >= projects.length) return;
    setSelected(next);
    projectScroller.current?.children[next]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };
  return <main className="mono-page">
    <div className="mono-top">
      <section className="mono-card mono-about" aria-labelledby="about-heading"><AsciiArt /><div className="about-copy"><h1 id="about-heading">{profile.name}<span>.</span></h1><p className="about-role">{profile.role}</p><p className="about-description">{profile.intro}</p><div className="about-links"><a className="resume-link" href={asset(profile.cvHref)} target="_blank" rel="noreferrer"><LinkIcon label="résumé" />View résumé</a>{profile.socials.slice(0, 2).map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer"><LinkIcon label={social.label} />{social.label}</a>)}<a className="email-link" href={`mailto:${profile.email}`}><LinkIcon label="email" />Contact me</a></div></div></section>
      <Skills />
    </div>
    <section className="mono-card mono-work" aria-label="Selected work"><div className="work-heading"><div className="work-tab" role="tablist" aria-label="Main view"><button role="tab" id="projects-tab" aria-selected="true" aria-controls="projects-panel"><span className="project-tab-icon">▦</span> Projects <span className="project-total">{String(projects.length).padStart(2, "0")}</span></button></div></div><div className="projects-panel" role="tabpanel" id="projects-panel" aria-labelledby="projects-tab"><div className="project-selector"><button className="selector-arrow" type="button" aria-label="Previous project" disabled={selected === 0} onClick={() => selectAdjacentProject(-1)}><Arrow direction="left" /></button><div className="project-options" ref={projectScroller} aria-label="Scroll through projects" onPointerDown={startProjectDrag} onPointerMove={moveProjectDrag} onPointerUp={endProjectDrag} onPointerCancel={endProjectDrag} onDragStart={(event) => event.preventDefault()}>{projects.map((project, i) => <button key={project.name} title={`${project.name} · ${project.sub}`} aria-pressed={selected === i} aria-controls="project-detail" onClick={(event) => selectProject(i, event)}><img src={asset(project.icon)} alt="" /><span><strong>{project.name}</strong><small>{project.sub}</small></span><span className="selection-dot" /></button>)}</div><button className="selector-arrow" type="button" aria-label="Next project" disabled={selected === projects.length - 1} onClick={() => selectAdjacentProject(1)}><Arrow direction="right" /></button></div><ProjectView key={projects[selected].name} project={projects[selected]} /></div></section>
    <footer className="mono-footer"><span>© {new Date().getFullYear()} {profile.name}</span></footer>
  </main>;
}
