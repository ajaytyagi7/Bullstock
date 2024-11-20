import React, { useState } from 'react';
import UploadBlog from './UploadBlog'; 
import ManageBlog from './ManageBlog';
import ManageContact from './ManageContact';
import ManageuserData from './ManageuserData';
import CommunityPost from './CommunityPost';
import ManageCommunity from './ManageCommunity';



const Cms = () => {
  const [selectedComponent, setSelectedComponent] = useState('UploadBlog');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'UploadBlog':
        return <UploadBlog />;
      case 'ManageBlog':
        return <ManageBlog />;
      case 'ManageContact':
        return <ManageContact />;
      case 'ManageUserData':
        return <ManageuserData />;
        case 'CommunityPost':
        return <CommunityPost />;
        case 'ManageCommunity':
          return <ManageCommunity />;
      default:
        return <UploadBlog />;
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4 bg-violet-800 ">
          <h1 className='text-center text-2xl font-semibold text-white mb-3 mt-4 underline py-3 cursor-pointer' onClick={() => setSelectedComponent('UploadBlog')}>Upload Blog</h1>
          <h1 className='text-center text-2xl font-semibold text-white mb-3 underline py-3 cursor-pointer' onClick={() => setSelectedComponent('ManageBlog')}>Manage Blog</h1>
          <h1 className='text-center text-2xl font-semibold text-white mb-3 underline py-3 cursor-pointer' onClick={() => setSelectedComponent('ManageContact')}>Manage Contact</h1>
          <h1 className='text-center text-2xl font-semibold text-white mb-3 underline py-3 cursor-pointer' onClick={() => setSelectedComponent('ManageUserData')}>Manage User Data</h1>
          <h1 className='text-center text-2xl font-semibold text-white mb-3 underline py-3 cursor-pointer' onClick={() => setSelectedComponent('ManageCommunity')}>Manage Community</h1>

          <h1 className='text-center text-2xl font-semibold text-white mb-3 underline py-3 cursor-pointer' onClick={() => setSelectedComponent('CommunityPost')}> Community Post</h1>

        </div>
        <div className="col-md-8">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Cms;