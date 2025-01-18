import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "Farcaster Frames V2 Demo";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-gradient-to-b from-purple-900 to-indigo-900">
        {/* Main Content */}
        <div tw="flex flex-col items-center text-center">
          {/* Project Name */}
          <h1 tw="text-6xl font-bold text-white mb-4">{PROJECT_TITLE}</h1>
          
          {/* Description */}
          <h3 tw="text-2xl text-purple-200 max-w-[80%] mb-8">
            {PROJECT_DESCRIPTION}
          </h3>
          
          {/* Farcaster Frame Badge */}
          <div tw="flex items-center bg-purple-800/50 px-6 py-3 rounded-full">
            <span tw="text-purple-300 text-lg mr-2">Powered by</span>
            <span tw="text-white font-bold text-xl">Farcaster Frames</span>
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div tw="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      </div>
    ),
    {
      ...size,
    }
  );
}
