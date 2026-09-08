export default function ServicesVenn() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      role="img"
      className="w-full max-w-[520px] h-auto"
      style={{ background: 'transparent' }}
      aria-label="Signal House services diagram">

      <style>{`
        .promise {
          font-family: var(--font-fraunces, Georgia, serif);
          font-weight: 600;
          fill: #FBF4E7;
        }
        .h {
          font-family: var(--font-inter, "Helvetica Neue", Arial, sans-serif);
          font-weight: 700;
          fill: #26302A;
          letter-spacing: .1px;
        }
        .ico {
          fill: none;
          stroke: #26302A;
          stroke-width: 2.3;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .ico-accent {
          fill: none;
          stroke: #DA5430;
          stroke-width: 2.3;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      `}</style>

      <rect width="1000" height="1000" fill="transparent"/>

      <circle cx="500" cy="500" r="420" fill="none"
        stroke="#26302A" strokeOpacity="0.14"
        strokeWidth="1.4" strokeDasharray="1.5 9"/>

      <circle cx="500" cy="500" r="186" fill="#DA5430"/>

      <g fill="#EA6A47" fillOpacity="0.16">
        <circle cx="500" cy="230" r="145"/>
        <circle cx="734" cy="365" r="145"/>
        <circle cx="734" cy="635" r="145"/>
        <circle cx="500" cy="770" r="145"/>
        <circle cx="266" cy="635" r="145"/>
        <circle cx="266" cy="365" r="145"/>
      </g>

      <circle cx="500" cy="500" r="171" fill="none"
        stroke="#FBF4E7" strokeOpacity="0.4" strokeWidth="2"/>

      <g fill="none" stroke="#26302A" strokeOpacity="0.5"
        strokeWidth="1.4">
        <circle cx="500" cy="230" r="145"/>
        <circle cx="734" cy="365" r="145"/>
        <circle cx="734" cy="635" r="145"/>
        <circle cx="500" cy="770" r="145"/>
        <circle cx="266" cy="635" r="145"/>
        <circle cx="266" cy="365" r="145"/>
        <circle cx="500" cy="500" r="186"/>
      </g>

      <path d="M483 469 L494 459 L500 465 L515 451"
        fill="none" stroke="#FBF4E7" strokeWidth="3"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M507 451 L515 451 L515 459"
        fill="none" stroke="#FBF4E7" strokeWidth="3"
        strokeLinecap="round" strokeLinejoin="round"/>

      <text textAnchor="middle" className="promise"
        fontSize="30">
        <tspan x="500" y="505">The most credible</tspan>
        <tspan x="500" y="539">voice in your space</tspan>
      </text>

      <g transform="translate(476,131)">
        <circle className="ico" cx="24" cy="16" r="8"/>
        <path className="ico" d="M11 39 C11 29 17 27 24 27 C31 27 37 29 37 39"/>
      </g>
      <g textAnchor="middle" className="h" fontSize="21">
        <text>
          <tspan x="500" y="203">LinkedIn Profile</tspan>
          <tspan x="500" y="229">Optimisation</tspan>
        </text>
      </g>

      <g transform="translate(738,282)">
        <path className="ico" d="M31 11 L37 17 L19 35 L13 29 Z"/>
        <path className="ico-accent" d="M13 29 L10 39 L20 36 Z"/>
        <path className="ico" d="M11 42 L31 42"/>
      </g>
      <g textAnchor="middle" className="h" fontSize="21">
        <text>
          <tspan x="762" y="354">Content, Posting</tspan>
          <tspan x="762" y="380">&amp; Company Pages</tspan>
        </text>
      </g>

      <g transform="translate(738,586)">
        <path className="ico" d="M7 22 L42 9 L29 42 L23 28 Z"/>
        <path className="ico-accent" d="M42 9 L23 28"/>
      </g>
      <g textAnchor="middle" className="h" fontSize="21">
        <text>
          <tspan x="762" y="658">Lead Generation</tspan>
          <tspan x="762" y="684">&amp; Outreach</tspan>
        </text>
      </g>

      <g transform="translate(476,737)">
        <circle className="ico" cx="24" cy="24" r="15"/>
        <path className="ico-accent" fill="#DA5430"
          d="M24 11 L28 24 L20 24 Z"/>
        <path className="ico" fill="#26302A"
          d="M24 37 L28 24 L20 24 Z"/>
        <circle cx="24" cy="24" r="2.4" fill="#26302A"/>
      </g>
      <g textAnchor="middle" className="h" fontSize="21">
        <text>
          <tspan x="500" y="809">Personal Branding</tspan>
          <tspan x="500" y="835">Strategy</tspan>
        </text>
      </g>

      <g transform="translate(214,586)">
        <rect className="ico" x="8" y="11" width="32"
          height="22" rx="6"/>
        <path className="ico" d="M16 32 L14 41 L24 33"/>
        <circle cx="18" cy="22" r="1.8" fill="#26302A"/>
        <circle cx="24" cy="22" r="1.8" fill="#26302A"/>
        <circle cx="30" cy="22" r="1.8" fill="#26302A"/>
      </g>
      <g textAnchor="middle" className="h" fontSize="21">
        <text>
          <tspan x="238" y="658">Coaching</tspan>
          <tspan x="238" y="684">&amp; Workshops</tspan>
        </text>
      </g>

      <g transform="translate(214,282)">
        <circle className="ico" cx="21" cy="21" r="12"/>
        <path className="ico" d="M30 30 L41 41"/>
        <polyline className="ico-accent"
          points="15,25 19,20 23,23 28,15"/>
      </g>
      <g textAnchor="middle" className="h" fontSize="21">
        <text>
          <tspan x="238" y="354">LinkedIn Growth</tspan>
          <tspan x="238" y="380">Audit</tspan>
        </text>
      </g>

    </svg>
  );
}
