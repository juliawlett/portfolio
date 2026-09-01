import React from 'react';
import { useState } from 'react';
import { experiences, profile, skillGroups } from '../data/portfolio';
import { Icon } from './Icon';

export function About() {
  return <section className="section about-section" id="sobre"><div className="container about-grid"><div className="section-intro"><p className="eyebrow">01 — sobre mim</p><h2>Construindo com<br /><span>curiosidade.</span></h2></div><div className="about-content"><p className="lead">Sou uma desenvolvedora júnior que gosta de entender o problema por trás da tela e criar soluções que façam sentido para quem vai usar.</p><p>Minha base está no desenvolvimento backend com <strong>C# e .NET 6</strong>, bancos de dados <strong>SQL</strong> e na construção de interfaces com <strong>React e TypeScript</strong>. Nos meus projetos, busco unir lógica, organização e uma boa experiência visual.</p><p>Estou em evolução constante e aberta a colaborar em produtos, sistemas e experiências digitais que tenham impacto real.</p><div className="about-meta"><div><small>BASE</small><b>{profile.location}</b></div><div><small>FOCO ATUAL</small><b>Full-stack & interfaces</b></div></div></div></div></section>;
}

export function Skills() {
  return <section className="section skills-section" id="habilidades"><div className="container"><SectionHeading eyebrow="02 — toolkit" title={<>Ferramentas que<br /><span>me movem.</span></>} text="Uma stack em construção, escolhida para resolver problemas com clareza e consistência." /><div className="skills-grid">{skillGroups.map(group => <article className="skill-group" key={group.label}><div className="skill-heading"><span>{group.icon}</span><h3>{group.label}</h3></div><ul>{group.items.map(item => <li key={item}><i></i>{item}</li>)}</ul></article>)}</div></div></section>;
}

export function Experience() {
  return <section className="section experience-section" id="experiencia"><div className="container experience-grid"><div className="section-intro"><p className="eyebrow">04 — trajetória</p><h2>Em movimento,<br /><span>sempre.</span></h2><p className="section-note">Cada projeto é uma oportunidade de aprender melhor, entregar melhor e colaborar melhor.</p></div><div className="timeline">{experiences.map((item, index) => <article className="timeline-item" key={item.role}><div className="timeline-marker"><span>0{index + 1}</span></div><div className="timeline-content"><p className="timeline-period">{item.period}</p><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.text}</p><div className="tag-list">{item.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>;
}

export function OpenSource() {
  return <section className="opensource-section"><div className="container open-grid"><div><p className="eyebrow">05 — código aberto</p><h2>Aprender também<br />é <span>compartilhar.</span></h2><p>Meus projetos são espaços de prática, experimentação e evolução. O próximo passo é transformar cada aprendizado em contribuição.</p><a className="button outline" href={profile.github} target="_blank" rel="noreferrer">Ver perfil no GitHub <Icon name="github" size={16} /></a></div><div className="contribution-card" aria-label="Visualização ilustrativa de contribuições"><div className="contribution-head"><span>atividade recente</span><b>2026</b></div><div className="contribution-grid">{Array.from({ length: 91 }, (_, index) => <i key={index} className={`level-${(index * 7 + 3) % 5}`}></i>)}</div><div className="contribution-foot"><span>Menos</span><i className="level-0"></i><i className="level-1"></i><i className="level-2"></i><i className="level-3"></i><i className="level-4"></i><span>Mais</span></div></div></div></section>;
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = event => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return <section className="section contact-section" id="contato"><div className="container contact-card"><div className="contact-copy"><p className="eyebrow">06 — contato</p><h2>Tem um desafio?<br /><span>Vamos construir.</span></h2><p>Se você tem uma ideia, uma oportunidade ou só quer trocar uma ideia sobre tecnologia, minha caixa de entrada está aberta.</p><a className="contact-email" href={`mailto:${profile.email}`}><Icon name="mail" size={17} />{profile.email}</a><small>Respondo normalmente em até 2 dias úteis.</small></div><form className="contact-form" onSubmit={handleSubmit}><label htmlFor="name">Seu nome<input id="name" name="name" type="text" placeholder="Como posso te chamar?" required /></label><label htmlFor="email">Seu e-mail<input id="email" name="email" type="email" placeholder="voce@empresa.com" required /></label><label htmlFor="message">Mensagem<textarea id="message" name="message" rows="4" placeholder="Conte um pouco sobre o projeto..." required></textarea></label><button className="button primary" type="submit">{sent ? 'Mensagem preparada ✓' : 'Enviar mensagem'} <Icon name="arrow" /></button>{sent && <p className="form-feedback" role="status">Obrigada! Para concluir, envie a mensagem pelo seu cliente de e-mail.</p>}</form></div></section>;
}

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading-row"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><p>{text}</p></div>;
}
