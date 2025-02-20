import React from 'react';

const handleSubmit = (e)=>{
    e.preventDefault()
}

const AddTask = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl text-gray-800 font-bold sm:text-3xl ">
            Add Task
          </h2>
        </div>

        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 ">
          <form onSubmit={handleSubmit}>
            <div className='flex items-center gap-2'>
                <div className="mb-4 sm:mb-8">
                <input
                    type="text"
                    id="full-name"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    placeholder="Task Name"
                />
                </div>

                <div className="mb-4 sm:mb-8">

                <input
                    type="email"
                    id="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    placeholder="Task Name"
                />
                </div>
                <div className="mb-4 sm:mb-8">

                <input
                    type="email"
                    id="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    placeholder="Email address"
                />
                </div>

            </div>
                <div>

                <div className="mt-1">
                    <textarea
                    id="comment"
                    rows="3"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    placeholder="Leave your comment here..."
                    ></textarea>
                </div>
                </div>

            <div className="mt-6 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default AddTask;