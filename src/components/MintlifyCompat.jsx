import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import 'katex/dist/katex.min.css';
import {InlineMath} from 'react-katex';
import {
  FaArrowRight,
  FaBook,
  FaBookOpen,
  FaCircleCheck,
  FaCircleInfo,
  FaCode,
  FaCopy,
  FaDownload,
  FaFileCode,
  FaFolderOpen,
  FaGear,
  FaImage,
  FaLeaf,
  FaLink,
  FaMap,
  FaNewspaper,
  FaPalette,
  FaPenToSquare,
  FaPlug,
  FaRecycle,
  FaRocket,
  FaStar,
  FaTerminal,
  FaTriangleExclamation,
  FaWandMagicSparkles,
  FaWrench,
} from 'react-icons/fa6';
import {FaGithub} from 'react-icons/fa';

const ICONS = {
  book: FaBook,
  'book-open-cover': FaBookOpen,
  claude: FaCircleInfo,
  code: FaCode,
  comments: FaCircleInfo,
  copy: FaCopy,
  cursor: FaCircleInfo,
  gear: FaGear,
  github: FaGithub,
  image: FaImage,
  leaf: FaLeaf,
  map: FaMap,
  mcp: FaPlug,
  newspaper: FaNewspaper,
  palette: FaPalette,
  perplexity: FaCircleInfo,
  'pen-to-square': FaPenToSquare,
  plug: FaPlug,
  recycle: FaRecycle,
  rocket: FaRocket,
  'rectangle-terminal': FaTerminal,
  'square-code': FaFileCode,
  stars: FaStar,
  terminal: FaTerminal,
  view: FaLink,
  vscode: FaCode,
  'wand-magic-sparkles': FaWandMagicSparkles,
  wrench: FaWrench,
  'folder-open': FaFolderOpen,
};

function isExternalUrl(value) {
  return /^(?:[a-z]+:)?\/\//i.test(value) || value.startsWith('mailto:');
}

function Icon({name, className}) {
  const IconComponent = ICONS[name] || FaLink;
  return <IconComponent className={className} aria-hidden="true" />;
}

function SmartAnchor({href, children, className, ...rest}) {
  const resolvedHref = href && href.startsWith('/') ? useBaseUrl(href) : href;

  if (!href) {
    return <span className={className}>{children}</span>;
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  if (isExternalUrl(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={resolvedHref} className={className} {...rest}>
      {children}
    </Link>
  );
}

function SmartImage({src, alt, ...rest}) {
  const resolvedSrc = src && src.startsWith('/') ? useBaseUrl(src) : src;
  return <img src={resolvedSrc} alt={alt} {...rest} />;
}

function Columns({cols = 2, children}) {
  return (
    <div className="fv-grid" style={{'--fv-grid-columns': cols}}>
      {children}
    </div>
  );
}

function CardGroup({cols = 2, children}) {
  return (
    <div className="fv-grid fv-grid--cards" style={{'--fv-grid-columns': cols}}>
      {children}
    </div>
  );
}

function Card({title, icon, href, horizontal, children}) {
  const content = (
    <>
      <div className="fv-card__icon-wrap">
        {icon ? <Icon name={icon} className="fv-card__icon" /> : null}
      </div>
      <div className="fv-card__body">
        {title ? <div className="fv-card__title">{title}</div> : null}
        <div className="fv-card__content">{children}</div>
      </div>
      {href ? <FaArrowRight className="fv-card__arrow" aria-hidden="true" /> : null}
    </>
  );

  const className = clsx('fv-card', horizontal && 'fv-card--horizontal');

  return href ? (
    <SmartAnchor href={href} className={className}>
      {content}
    </SmartAnchor>
  ) : (
    <div className={className}>{content}</div>
  );
}

function Frame({children}) {
  return <div className="fv-frame">{children}</div>;
}

function Steps({children}) {
  return <div className="fv-steps">{children}</div>;
}

function Step({title, children}) {
  return (
    <section className="fv-step">
      <div className="fv-step__title">{title}</div>
      <div className="fv-step__content">{children}</div>
    </section>
  );
}

function AccordionGroup({children}) {
  return <div className="fv-accordion-group">{children}</div>;
}

function Accordion({title, icon, children}) {
  return (
    <details className="fv-accordion">
      <summary className="fv-accordion__summary">
        <span className="fv-accordion__summary-main">
          {icon ? <Icon name={icon} className="fv-accordion__icon" /> : null}
          <span>{title}</span>
        </span>
      </summary>
      <div className="fv-accordion__content">{children}</div>
    </details>
  );
}

function Expandable({title, children}) {
  return (
    <details className="fv-expandable">
      <summary className="fv-expandable__summary">{title}</summary>
      <div className="fv-expandable__content">{children}</div>
    </details>
  );
}

function Callout({tone, title, children}) {
  const toneIcon = {
    check: FaCircleCheck,
    info: FaCircleInfo,
    note: FaCircleInfo,
    tip: FaCircleCheck,
    warning: FaTriangleExclamation,
  }[tone] || FaCircleInfo;

  const ToneIcon = toneIcon;

  return (
    <aside className={clsx('fv-callout', `fv-callout--${tone}`)}>
      <ToneIcon className="fv-callout__icon" aria-hidden="true" />
      <div className="fv-callout__body">
        {title ? <div className="fv-callout__title">{title}</div> : null}
        <div>{children}</div>
      </div>
    </aside>
  );
}

function Note({children}) {
  return <Callout tone="note" title="说明">{children}</Callout>;
}

function Info({children}) {
  return <Callout tone="info" title="信息">{children}</Callout>;
}

function Tip({children}) {
  return <Callout tone="tip" title="提示">{children}</Callout>;
}

function Warning({children}) {
  return <Callout tone="warning" title="注意">{children}</Callout>;
}

function Check({children}) {
  return <Callout tone="check" title="已完成">{children}</Callout>;
}

function ResponseField({name, type, required, default: defaultValue, children}) {
  return (
    <div className="fv-response-field">
      <div className="fv-response-field__header">
        <code className="fv-response-field__name">{name}</code>
        {type ? <span className="fv-response-field__badge">{type}</span> : null}
        {required ? <span className="fv-response-field__badge fv-response-field__badge--required">required</span> : null}
        {defaultValue ? <span className="fv-response-field__badge">default: {String(defaultValue)}</span> : null}
      </div>
      <div className="fv-response-field__body">{children}</div>
    </div>
  );
}

function CodeGroup({children}) {
  return (
    <div className="fv-code-group">
      {React.Children.map(children, (child, index) => (
        <div className="fv-code-group__item" key={index}>
          {child}
        </div>
      ))}
    </div>
  );
}

function Latex({children}) {
  const value = React.Children.toArray(children).join('').trim();

  try {
    return (
      <span className="fv-latex">
        <InlineMath math={value} />
      </span>
    );
  } catch {
    return <code>{value}</code>;
  }
}

export {
  Accordion,
  AccordionGroup,
  Card,
  CardGroup,
  Check,
  CodeGroup,
  Columns,
  Expandable,
  Frame,
  Info,
  Latex,
  Note,
  ResponseField,
  SmartAnchor,
  SmartImage,
  Step,
  Steps,
  Tip,
  Warning,
};
