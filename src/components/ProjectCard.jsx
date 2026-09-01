import React from 'react';
import { projects } from '../data/portfolio';
import { Icon } from './Icon';
import { ProjectPreview } from './ProjectPreview';

export function ProjectCard({ project, onStudy }) {
  return <article className={`project-card accent-${project.accent}`}><a className="project-visual" href={project.live} target="_blank" rel="noreferrer" aria-label={`Abrir projeto ${project.title}`}><ProjectPreview type={project.preview} /><span className="visual-link"><Icon name="external" size={15} /></span></a><div className="project-body"><div className="project-topline"><span>{project.type}</span><span className="project-number">0{projects.indexOf(project) + 1}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><p className="project-outcome"><strong>Resultado:</strong> {project.outcome}</p><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">Abrir projeto <Icon name="external" size={14} /></a><button type="button" onClick={() => onStudy(project)}>Estudo de caso <Icon name="arrow" size={14} /></button></div></div></article>;
}
