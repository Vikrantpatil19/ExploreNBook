import React from 'react';

export default function AdvertiseVdo() {
  return (
    <div className='my-5 mb-1'>
      <section >
        <div className="" style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
          <video className="" autoPlay muted loop playsInline src="https://webredox.net/demo/wp/travol/video/travel-video.mp4#t=10" style={{ width: '100%', minHeight: '100%', objectFit: 'cover' }} />
        </div>
        
      </section>
    </div>
  );
}