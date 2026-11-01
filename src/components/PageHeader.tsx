import React from 'react';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

/** Compact banner at the top of each inner page, with a breadcrumb back to Home. */
export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white">
    <div aria-hidden="true" className="hero-glow w-[28rem] h-[28rem] -top-48 -right-24 bg-amber-500/20" />
    <div aria-hidden="true" className="hero-glow w-[22rem] h-[22rem] -bottom-40 -left-20 bg-red-600/20" style={{ animationDelay: '-8s' }} />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <nav aria-label="Breadcrumb" className="hero-rise flex items-center gap-1 text-xs text-purple-300 mb-3">
        <Link to="/" className="hover:text-amber-300 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-amber-300 font-semibold">{title}</span>
      </nav>
      <h1 className="hero-rise text-3xl sm:text-5xl font-black tracking-tight" style={{ animationDelay: '0.1s' }}>
        {title}
      </h1>
      {subtitle && (
        <p className="hero-rise mt-3 max-w-2xl text-sm sm:text-base text-purple-200" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
      )}
    </div>
  </div>
);
