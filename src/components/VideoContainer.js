import React, { useEffect, useState, useRef, useCallback } from 'react';
import YOUTUBE_URL from '../utilities/constant';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef(null);

  const getVideos = useCallback(async (pageToken = null) => {
    if (loading) return;
    setLoading(true);

    const url = pageToken
      ? `${YOUTUBE_URL}&pageToken=${pageToken}`
      : YOUTUBE_URL;

    const response = await fetch(url);
    const json = await response.json();

    setVideos(prev => pageToken ? [...prev, ...json.items] : json.items);
    setNextPageToken(json.nextPageToken || null);
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPageToken && !loading) {
          getVideos(nextPageToken);
        }
      },
      { threshold: 1.0 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [nextPageToken, loading]);

  return (
    <div className='flex flex-wrap gap-6 justify-start'>
      {videos.map((video, i) => (
        <VideoCard key={video.id + i} card={video} />
      ))}

      <div ref={sentinelRef} className="w-full flex justify-center py-6">
        {loading && (
          <div className="w-8 h-8 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin" />
        )}
        {!nextPageToken && !loading && videos.length > 0 && (
          <p className="text-gray-400 text-sm">No more videos</p>
        )}
      </div>
    </div>
  );
};

export default VideoContainer;