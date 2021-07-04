import * as React from 'react';

function Wood(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="wood"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      {...props}
    >
      <defs>
        <style>
          {
            '.cls-3,.cls-4{fill:none;stroke:#2d5d44;stroke-linecap:round;stroke-miterlimit:10}.cls-3{stroke-width:15.95px}.cls-4{stroke-width:11.96px}.prefix__cls-5{fill:#31a67f}'
          }
        </style>
      </defs>
      <title>{'main_wood'}</title>
      <path
        className="woodback"
        d="M500 394.52a248.6 248.6 0 01-19.95 98H19.95a248.59 248.59 0 01-19.95-98c0-138.09 111.91-250 250-250s250 111.91 250 250z"
        fill="#ffc709"
        opacity={0.3}
      />
      <path
        d="M368.39 243.49c0-66-53.49-236-119.46-236s-119.46 170-119.46 236a119.46 119.46 0 10238.93 0z"
        fill="#0e8d45"
      />
      <path
        className="cls-3"
        d="M250 183.15v288.5M179.75 205.25L250 269.78M301.9 173.41L250 243.92"
      />
      <path className="cls-4" d="M76.88 387.21v58.4" />
      <path
        className="prefix__cls-5"
        d="M134.05 341.36s-24.63-4-43.15 12.68a51.13 51.13 0 00-14 21.8 51.12 51.12 0 00-14-21.8c-18.52-16.7-43.15-12.68-43.15-12.68s-1.48 24.91 17 41.62c14.46 13 32.77 13.6 40.12 13.22 7.35.38 25.66-.18 40.12-13.22 18.54-16.71 17.06-41.62 17.06-41.62z"
      />
      <path className="cls-4" d="M423.13 387.21v58.4" />
      <path
        className="prefix__cls-5"
        d="M366 341.36s24.63-4 43.15 12.68a51.13 51.13 0 0114 21.8 51.13 51.13 0 0114-21.8c18.52-16.7 43.15-12.68 43.15-12.68s1.48 24.91-17 41.62c-14.46 13-32.77 13.6-40.12 13.22-7.35.38-25.66-.18-40.12-13.22-18.58-16.71-17.06-41.62-17.06-41.62z"
      />
    </svg>
  );
}

export default Wood;
