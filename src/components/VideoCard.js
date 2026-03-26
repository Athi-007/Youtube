import React from 'react'

const VideoCard = ({ card }) => {
  const { snippet, statistics } = card;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;

  const formatViews = (count) => {
    const num = parseInt(count);
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
    return num.toLocaleString();
  };

  return (
    <div className="group w-64 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
          src={thumbnails.medium.url}
          alt={title}
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-3 flex gap-3">
        <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold uppercase">
          {channelTitle?.[0]}
        </div>

        <div className="flex flex-col gap-0.5 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-500 truncate">{channelTitle}</p>
          <p className="text-xs text-gray-400">{formatViews(viewCount)} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;