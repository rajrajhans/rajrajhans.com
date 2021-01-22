import React from "react";
import InternalLinkDown from "./internalLinkUp";
import Img from "gatsby-image";
import CalendarIcon from "../../static/calendarIcon";
import TagIcon from "../../static/tagIcon";

const BlogPostBox = ({ blog, id }) => {
  return (
    <div className="homeBlogBox" key={id}>
      <InternalLinkDown link={blog.fields.slug} title={blog.frontmatter.title}>
        <div className="homeBlogImage">
          <Img fixed={blog.frontmatter.featuredImage.childImageSharp.fixed} />
        </div>

        <div className="homeBlogTitle">
          <h2>{blog.frontmatter.title}</h2>
        </div>

        <div className="homeBlogDateTag">
          <span className={"homeBlogDate"}>
            <CalendarIcon />
            <span> {blog.frontmatter.date}</span>
          </span>

          <span className={"homeBlogTag"}>
            <TagIcon />
            <span> {blog.frontmatter.mainTag}</span>
          </span>
        </div>

        <div className="homeBlogExcerpt">{blog.frontmatter.description}</div>
      </InternalLinkDown>
    </div>
  );
};

export default BlogPostBox;
