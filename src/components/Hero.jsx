import React from 'react';
import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';
import { Icon } from './Icon';

const roles = ['Full-Stack Developer', 'Desenvolvedora .NET', 'Criadora de interfaces'];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (typed.length < currentRole.length) setTyped(currentRole.slice(0, typed.length + 1));
      else { setTyped(''); setRoleIndex((roleIndex + 1) % roles.length); }
    }, typed.length < currentRole.length ? 70 : 1800);
    return () => clearTimeout(timer);
  }, [typed, roleIndex]);

  return <section className="hero" id="top"><div className="hero-grid container"><div className="hero-copy"><p className="eyebrow"><span className="status-dot"></span> Disponível para novos desafios</p><h1>Olá, eu sou<br /><span className="hero-name">Júlia Lima</span><span className="hero-caret">_</span></h1><p className="hero-role"><span>{typed}</span><span className="typing-caret">|</span></p><p className="hero-text">Desenvolvedora júnior apaixonada por transformar ideias em aplicações úteis, bonitas e bem estruturadas.</p><div className="hero-actions"><a className="button primary" href="#projetos">Ver projetos <Icon name="arrow" /></a><a className="button text-button" href="#contato">Vamos conversar <Icon name="arrow" /></a><a className="button text-button" href={`mailto:${profile.email}?subject=Solicitação de currículo`}>Solicitar currículo <Icon name="arrow" /></a></div><div className="social-row" aria-label="Redes sociais"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a><a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="X / Twitter">𝕏</a></div></div><Terminal /></div><div className="scroll-cue"><span>01</span><i></i><span>scroll para explorar</span></div></section>;
}

function Terminal() {
  return <div className="hero-terminal" aria-label="Exemplo de código de apresentação"><div className="terminal-window"><div className="terminal-bar"><span></span><span></span><span></span><small>portfolio.config.ts</small></div><div className="terminal-code"><p><i>const</i> developer = {'{'}</p><p className="indent"><em>name:</em> <b>'Júlia Lima'</b>,</p><p className="indent"><em>focus:</em> [</p><p className="indent2"><b>'C#'</b>, <b>'.NET 6'</b>,</p><p className="indent2"><b>'React'</b>, <b>'TypeScript'</b></p><p className="indent">],</p><p className="indent"><em>coffee:</em> <strong>true</strong></p><p>{'}'}</p><p className="terminal-comment">// sempre aprendendo algo novo ✦</p></div><div className="terminal-line"><span>julia@dev:~$</span><b> build a better web_</b></div></div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="hero-sticker"><Icon name="spark" size={17} /><span>código com<br />intenção</span></div></div>;
}
