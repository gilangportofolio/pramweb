'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  category: 'spreadsheet' | 'database' | 'documentation' | 'other';
}

interface DataEntryGalleryProps {
  projects: ProjectData[];
  currentPage: number;
  projectsPerPage: number;
}

const ProjectCard = ({ project }: { project: ProjectData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-3">
          {isExpanded ? project.description : `${project.description.slice(0, 100)}...`}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 text-sm hover:text-blue-700"
        >
          {isExpanded ? 'Lihat lebih sedikit' : 'Lihat selengkapnya'}
        </button>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function DataEntryGallery({ projects, currentPage, projectsPerPage }: DataEntryGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'spreadsheet', label: 'Spreadsheet' },
    { id: 'database', label: 'Database' },
    { id: 'documentation', label: 'Dokumentasi' },
    { id: 'other', label: 'Lainnya' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {displayedProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">Tidak ada proyek yang ditemukan dalam kategori ini.</p>
        </div>
      )}
    </div>
  );
} 