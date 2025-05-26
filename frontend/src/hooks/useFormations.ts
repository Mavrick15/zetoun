
import { useState, useEffect } from 'react';
import { API_URL, ENDPOINTS } from '@/config/api.config';

export interface Formation {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  duration: string;
  instructor: string;
  price: string;
  seats: number;
  level: string;
  image?: string;
}

interface PaginationData {
  total: number;
  limit: number;
  offset: number;
  pages: number;
}

interface FormationsResponse {
  formations: Formation[];
  pagination: PaginationData;
}

interface UseFormationsProps {
  limit?: number;
  initialOffset?: number;
  searchTerm?: string;
  levelFilter?: string;
  locationFilter?: string;
}

const useFormations = ({
  limit = 10,
  initialOffset = 0,
  searchTerm = '',
  levelFilter = '',
  locationFilter = '',
}: UseFormationsProps = {}) => {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    limit,
    offset: initialOffset,
    pages: 0,
  });
  
  const fetchFormations = async (offset = initialOffset) => {
    try {
      setLoading(true);
      
      // Build query parameters
      const params = new URLSearchParams();
      params.append('limit', limit.toString());
      params.append('offset', offset.toString());
      
      if (searchTerm) params.append('search', searchTerm);
      if (levelFilter) params.append('level', levelFilter);
      if (locationFilter) params.append('location', locationFilter);
      
      const response = await fetch(`${API_URL}${ENDPOINTS.FORMATIONS}?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch formations');
      }
      
      const data: FormationsResponse = await response.json();
      
      setFormations(data.formations);
      setPagination(data.pagination);
      setError(null);
    } catch (err) {
      console.error('Error fetching formations:', err);
      setError('Une erreur est survenue lors du chargement des formations.');
      setFormations([]);
    } finally {
      setLoading(false);
    }
  };
  
  const goToPage = (page: number) => {
    const newOffset = (page - 1) * pagination.limit;
    fetchFormations(newOffset);
  };
  
  // Initial fetch
  useEffect(() => {
    fetchFormations();
  }, [searchTerm, levelFilter, locationFilter, limit]);
  
  return {
    formations,
    loading,
    error,
    pagination,
    goToPage,
    refetch: fetchFormations,
  };
};

export default useFormations;
