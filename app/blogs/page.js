import React from 'react'

const blogs = [
    {
        id: 1,
        title: "1st blog title",
        description: "Blog description ......"
    },
    {
        id: 2,
        title: "2nd blog title",
        description: "Secend blog description......."
    }
]

function Page() {
  return (
    <div>
      <h2>Blogs</h2>
      <div>
        <ul className="mt-3">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </li>
          ))}
        </ul>
              <div>
                  <ul className='mt-7'>
                      {
                          blogs.map((blog) => (
                              <li key={blog.id}>
                                  <h3>{blog.title}</h3>
                                  <h3>{ blog.description}</h3>
                              </li>
                          ))
                      }
                  </ul>
              </div>
      </div>
    </div>
  )
}

export default Page
