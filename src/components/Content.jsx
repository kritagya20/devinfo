
import React from 'react';
import Avatar from './Avatar';
import Searchbar from './Searchbar';

const Content = () => {

  return (
    <main className={`flex flex-col items-center justify-center py-10 px-2`}>
      {/* <div className="w-32 h-32 mb-4">
        <Avatar src='https://avatars.githubusercontent.com/u/88777920?v=4' />
      </div> */}
      <div className="w-full max-w-md">
        <Searchbar />
      </div>
      <p className="text-center mt-8">Random text of 3-4 lines.</p>
    </main>
  );
};

export default Content;
