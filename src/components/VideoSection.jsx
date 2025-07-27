import { useState, useEffect } from 'react';
import videoBgImage from '../assets/video-bg.jpg'; // Make sure to add your background image here

// A simple Play icon SVG
const PlayIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
);

// A simple Close icon SVG
const CloseIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// The main Video Section component
const VideoSection = () => {
    // State to control the modal's visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // YouTube Video ID - Replace 'LXb3EKWsInQ' with your video's ID
    const YOUTUBE_VIDEO_ID = 'LXb3EKWsInQ';

    // Open the modal
    const openModal = () => setIsModalOpen(true);

    // Close the modal
    const closeModal = () => setIsModalOpen(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup function
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);


    return (
        <>
            {/* Section with Background Image and Play Button */}
            <section className="relative flex items-center justify-center h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] w-full bg-black mt-12 sm:mt-16 lg:mt-20">
                {/* Background Image */}
                <img
                    src={videoBgImage}
                    alt="Promotional video background"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />

                {/* Play Button with pulsing animation */}
                <div className="relative z-10">
                    <button onClick={openModal} className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" aria-label="Play video">
                        {/* Pulsing ring for animation */}
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full border-2 border-white/50"></span>
                        {/* Static outer ring */}
                        <span className="absolute inline-flex rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 border-2 border-white/80"></span>
                        {/* Play Icon */}
                        <PlayIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                    </button>
                </div>
            </section>

            {/* Video Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-2 sm:p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-black w-full max-w-sm sm:max-w-2xl lg:max-w-4xl aspect-video relative"
                        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking on the video
                    >
                        <button
                            onClick={closeModal}
                            className="absolute -top-8 sm:-top-10 right-0 text-white hover:text-gray-300 p-2"
                            aria-label="Close video player"
                        >
                            <CloseIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                        </button>
                        <iframe
                            className="w-full h-full"
                            // The key is to add `?autoplay=1` to the URL
                            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoSection;