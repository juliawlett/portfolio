import React from 'react';
import { useEffect } from 'react';
import { Icon } from './Icon';

export function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const closeOnEscape = event => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', closeOnEscape);
    document.body.classList.add('modal-open');
    return () => { document.removeEventListener('keydown', closeOnEscape); document.body.classList.remove('modal-open'); };
  }, [onClose]);

  return <div className="modal-backdrop" role="presentation" onMouseDown={event => event.target === event.currentTarget && onClose()}><section className="case-study" role="dialog" aria-modal="true" aria-labelledby="case-title"><button className="modal-close" type="button" onClick={onClose} aria-label="Fechar estudo de caso"><Icon name="close" /></button><div className="case-hero"><p className="eyebrow">Estudo de caso · {project.type}</p><h2 id="case-title">{project.title}</h2><p>{project.description}</p><a className="button primary" href={project.live} target="_blank" rel="noreferrer">Abrir projeto <Icon name="external" size={15} /></a></div><div className="case-content"><CaseBlock number="01" title="Problema e contexto"><p>{project.study.problem}</p><p>{project.study.context}</p></CaseBlock><CaseBlock number="02" title="Decisões de produto"><ul>{project.study.decisions.map(decision => <li key={decision}>{decision}</li>)}</ul></CaseBlock><div className="case-diagram"><div className="diagram-node">Usuário</div><i>→</i><div className="diagram-node accent">Interface</div><i>→</i><div className="diagram-node">Ação</div><small>fluxo principal da experiência</small></div><CaseBlock number="03" title="Resultado e aprendizado"><p><strong>Resultado:</strong> {project.study.result}</p><p><strong>Aprendizado:</strong> {project.study.lesson}</p></CaseBlock></div></section></div>;
}

function CaseBlock({ number, title, children }) {
  return <div className="case-block"><span>{number}</span><div><h3>{title}</h3>{children}</div></div>;
}
