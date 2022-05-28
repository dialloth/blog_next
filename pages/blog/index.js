import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function index({ posts }) {
  return (
    <div className="container px-4 py-5">
      <h1 className="text-center">Bienvenue sur le Blog</h1>
      <h3 className="text-center"> Voici les articles</h3>
      <div className="row g-3 mt-4">
        {posts.map((article) => (
          <div key={uuidv4()} className="col-12 md-6 col-md-6 col-xl-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title"> {article.title}</h5>
                <p className="card-text">{article.body.slice(0, 40) + '...'}</p>
                <Link href={`/blog/${article.id.toString()}`}>
                  <a className="card-link">Lire cet article</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
