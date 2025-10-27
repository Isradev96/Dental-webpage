import BlogCard from '@/Components/BlogCard'
import { blogSecItems } from '@/data/data'
import React from 'react'

const Blog = () => {
  return (
    <section className="section">
        <div className="container">
          {/* Title */}
          <div>
            <p className="subtitle">Resources</p>
            <h2 className="title">Articles, Tips & Insights on Dental Care</h2>
          </div>

          {/* Wrapper */}
          <div className="grid mt-11 lg:mt-16 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Blog component */}
            {blogSecItems.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default Blog