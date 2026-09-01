import React from 'react';
import { useState } from 'react';
import { profile } from '../data/portfolio';
import { Icon } from './Icon';

function Brand() {
  return <a className="brand" href="#top" aria-label="Voltar ao início"><span className="brand-mark">JL</span><span>julia<span className="brand-accent">.dev</span></span></a>;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [['Sobre', '#sobre'], ['Habilidades', '#habilidades'], ['Projetos', '#projetos'], ['Experiência', '#experiencia']];

  return <header className="site-header"><div className="container header-inner"><Brand /><nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Navegação principal">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contato" onClick={() => setMenuOpen(false)}>Vamos conversar <Icon name="arrow" size={15} /></a></nav><button className="menu-button" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner"><Brand /><p>Feito com React, curiosidade e um pouco de café.</p><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><small>© 2026 Júlia Lima</small></div></div></footer>;
}
