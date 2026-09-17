import React, { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const currentElem = domRef.current;
    if (!currentElem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(currentElem);

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  const getTransformClass = () => {
    if (isVisible) return 'opacity-100 translate-y-0 translate-x-0 scale-100';
    if (direction === 'up') return 'opacity-0 translate-y-8';
    if (direction === 'down') return 'opacity-0 -translate-y-8';
    if (direction === 'left') return 'opacity-0 translate-x-8';
    if (direction === 'right') return 'opacity-0 -translate-x-8';
    return 'opacity-0 scale-95';
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
}
