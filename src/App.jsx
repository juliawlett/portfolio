import React from 'react';
import { useState } from 'react';
import { projects } from './data/portfolio';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { SiteFooter, SiteHeader } from './components/SiteHeader';
import { About, Contact, Experience, OpenSource, Skills } from './components/Sections';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  return <><SiteHeader /><main><Hero /><About /><Skills /><Projects onStudy={setSelectedProject} /><Experience /><OpenSource /><Contact /></main><SiteFooter />{selectedProject && <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</>;
}

function Projects({ onStudy }) {
  return <section className="section projects-section" id="projetos"><div className="container"><div className="section-heading-row projects-heading"><div><p className="eyebrow">03 — projetos selecionados</p><h2>Ideias que ganharam<br /><span>forma e função.</span></h2></div><p>Projetos autorais que exploram diferentes contextos, jornadas e desafios de interface.</p></div><div className="projects-grid">{projects.map(project => <ProjectCard key={project.id} project={project} onStudy={onStudy} />)}</div></div></section>;
}
