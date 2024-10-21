import { useState, useEffect } from 'react';
import { fetchActorDetails } from '../services/actorService';
import { ActorDetail } from '../types/types';

export const useActorDetails = (actorId: number) => {
  const [actor, setActor] = useState<ActorDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchActorDetails(actorId);
        setActor(data);
      } catch (error) {
        console.error('Error fetching actor details:', error);
        setError('Failed to fetch actor details');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [actorId]);

  return { actor, loading, error };
};
